# Masked Heading · JS-CSS

归类：网站交互 → 首页。与其他案例一样，通过独立 iframe 在收藏页展示。

组件与 CSS 原样取自用户指定的 registry JSON：
https://reactbits.dev/r/MaskedHeading-JS-CSS.json

文档：https://reactbits.dev/text-animations/masked-heading

`src/MaskedHeading.jsx` 与 `src/MaskedHeading.css` 保持 registry 原文；依赖为 GSAP ^3.13.0。此目录安装独立的 React / React DOM 与 GSAP，具体版本由 package-lock.json 固定。页面不依赖外部 CDN。

运行 `npm ci && npm run build` 可重建 app.bundle.js / app.bundle.css。现有静态服务可直接预览 index.html，不需要另起开发服务器。

配置位于 src/main.jsx，保留指定的 text、mediaType、fillScale=1.3、parallax=34、reveal=scale、trigger=view、spotlight、spotlightRadius=180、outline。原请求中的 /reel.mp4 与 /reel-poster.jpg 是示例路径，实际使用同目录 ./reel.mp4、./reel-poster.jpg，避免影响站点根目录。替换这两个文件即可换成自己的视频。

视频来源（React Bits 官方演示使用的素材）：
https://reactbits.dev/assets/video/masked-heading.mp4
封面由同一视频 0.2 秒帧提取。

React Bits 许可保留于 REACT-BITS-LICENSE.md；组件仅作为此网站的效果案例使用。
