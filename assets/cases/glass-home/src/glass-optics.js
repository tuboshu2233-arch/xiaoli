export const glassShape={size:2.65,radius:0.28,segments:8};

// Trace through the actual glass volume, then intersect the title plane.
// Sampling the projected exit surface repeats the wrong title row on each face.
export const glassOpticsGLSL=/* glsl */`
uniform float transmission;
uniform float thickness;
uniform float attenuationDistance;
uniform vec3 attenuationColor;
uniform mat4 modelMatrix;
uniform mat4 projectionMatrix;
varying vec3 vWorldPosition;
uniform mat4 glassWorldMatrix;
uniform mat4 glassInverseMatrix;
uniform sampler2D glassTitleTexture;
uniform vec2 glassTitleSize;
uniform vec2 glassViewport;
uniform float glassTitleZ;
uniform float glassHalfSize;
uniform float glassCornerRadius;

float glassDistance(vec3 p){
  vec3 q=abs(p)-vec3(glassHalfSize-glassCornerRadius);
  return length(max(q,0.0))+min(max(q.x,max(q.y,q.z)),0.0)-glassCornerRadius;
}
vec3 glassExitNormal(vec3 p){
  return normalize(sign(p)*max(abs(p)-vec3(glassHalfSize-glassCornerRadius),vec3(0.00001)));
}
float glassExitDistance(vec3 p,vec3 ray){
  vec3 safeRay=mix(vec3(0.00001),ray,step(vec3(0.00001),abs(ray)));
  vec3 farFace=(sign(safeRay)*glassHalfSize-p)/safeRay;
  float high=max(0.0,min(farFace.x,min(farFace.y,farFace.z)));
  float low=0.0;
  for(int stepIndex=0;stepIndex<10;stepIndex++){
    float middle=(low+high)*0.5;
    if(glassDistance(p+ray*middle)>0.0)high=middle;else low=middle;
  }
  return (low+high)*0.5;
}
// A small optical blur is applied only to transmission, leaving outside type sharp.
vec3 sampleSoftTitle(vec2 uv,vec2 radius){
  vec3 result=texture2D(glassTitleTexture,uv).rgb*0.25;
  result+=(texture2D(glassTitleTexture,uv+vec2(radius.x,0.0)).rgb
    +texture2D(glassTitleTexture,uv-vec2(radius.x,0.0)).rgb
    +texture2D(glassTitleTexture,uv+vec2(0.0,radius.y)).rgb
    +texture2D(glassTitleTexture,uv-vec2(0.0,radius.y)).rgb)*0.125;
  result+=(texture2D(glassTitleTexture,uv+radius).rgb
    +texture2D(glassTitleTexture,uv-radius).rgb
    +texture2D(glassTitleTexture,uv+vec2(radius.x,-radius.y)).rgb
    +texture2D(glassTitleTexture,uv+vec2(-radius.x,radius.y)).rgb)*0.0625;
  return result;
}
vec3 sampleGlassTitle(vec3 worldPoint,vec3 worldNormal,vec3 toCamera,float indexOfRefraction,float spectralOffset){
  vec3 insideRay=refract(-toCamera,worldNormal,1.0/indexOfRefraction);
  vec3 localRay=normalize((glassInverseMatrix*vec4(insideRay,0.0)).xyz);
  vec3 localPoint=(glassInverseMatrix*vec4(worldPoint,1.0)).xyz+localRay*0.002;
  float opticalDepth=glassExitDistance(localPoint,localRay);
  localPoint+=localRay*opticalDepth;
  vec3 outward=glassExitNormal(localPoint);
  vec3 exitRefracted=refract(localRay,-outward,indexOfRefraction);
  vec3 incident=-toCamera;
  vec3 incidentLocal=normalize((glassInverseMatrix*vec4(incident,0.0)).xyz);
  float exitCosine=dot(localRay,outward);
  float critical=1.0-indexOfRefraction*indexOfRefraction*(1.0-exitCosine*exitCosine);
  // A graphic homepage keeps one transmitted title, rather than displaying
  // multiple internal reflection images as a physically solid prism would.
  vec3 outgoing=normalize(mix(incidentLocal,exitRefracted,smoothstep(0.0,0.18,critical)));
  vec3 unbentHit=worldPoint+incident*((glassTitleZ-worldPoint.z)/incident.z);
  vec2 baseUV=unbentHit.xy/glassTitleSize+0.5;
  vec3 exitWorld=(glassWorldMatrix*vec4(localPoint,1.0)).xyz;
  vec3 exitRay=normalize((glassWorldMatrix*vec4(outgoing,0.0)).xyz);
  float rayZ=min(exitRay.z,-0.04);
  float distanceToTitle=(glassTitleZ-exitWorld.z)/rayZ;
  vec2 titleUV=(exitWorld.xy+exitRay.xy*distanceToTitle)/glassTitleSize+0.5;
  vec2 displacement=titleUV-baseUV;
  float rim=1.0-abs(dot(worldNormal,toCamera));
  vec3 localNormal=normalize((glassInverseMatrix*vec4(worldNormal,0.0)).xyz);
  float bevel=smoothstep(0.025,0.29,1.0-max(abs(localNormal.x),max(abs(localNormal.y),abs(localNormal.z))));
  vec2 limit=mix(vec2(0.058,0.022),vec2(0.095,0.04),max(bevel,rim*0.4));
  titleUV=baseUV+displacement/(1.0+abs(displacement)/limit);
  titleUV+=spectralOffset*vec2(0.30,0.055)*(0.6+rim*rim);
  if(any(lessThan(titleUV,vec2(0.0)))||any(greaterThan(titleUV,vec2(1.0))))return vec3(0.0);
  float depth=clamp(opticalDepth/3.0,0.0,1.0);
  float blurPixels=1.15+depth*0.8+rim*1.1+bevel*0.65;
  vec2 blurRadius=vec2(blurPixels*(1.0+rim*0.45),blurPixels)/glassViewport;
  return sampleSoftTitle(titleUV,blurRadius);
}
vec4 getIBLVolumeRefraction(const in vec3 n,const in vec3 v,const in float roughness,const in vec3 diffuseColor,
  const in vec3 specularColor,const in float specularF90,const in vec3 position,const in mat4 modelMatrix,
  const in mat4 viewMatrix,const in mat4 projMatrix,const in float dispersion,const in float ior,const in float thickness,
  const in vec3 attenuationColor,const in float attenuationDistance){
  float spread=(ior-1.0)*0.025*dispersion;
  vec3 indices=vec3(ior-spread*0.75,ior-spread*0.55,ior+spread);
  vec3 transmitted=vec3(
    sampleGlassTitle(position,n,v,indices.r,indices.r-ior).r,
    sampleGlassTitle(position,n,v,indices.g,indices.g-ior).g,
    sampleGlassTitle(position,n,v,indices.b,indices.b-ior).b
  );
  vec3 fresnel=EnvironmentBRDF(n,v,specularColor,specularF90,roughness);
  return vec4((1.0-fresnel)*transmitted*diffuseColor,1.0);
}
`;
