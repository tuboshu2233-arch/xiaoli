const icons={grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',monitor:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>',phone:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2"/>',panels:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M9 8v13"/>',external:'<path d="M14 3h7v7m0-7L10 14M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"/>','arrow-up-right':'<path d="M6 18 18 6M6 6h12v12"/>',search:'<circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/>',plus:'<path d="M12 5v14M5 12h14"/>',list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',play:'<path d="m8 5 11 7-11 7V5Z"/>',pause:'<path d="M8 5v14M16 5v14"/>',left:'<path d="m15 5-7 7 7 7"/>',right:'<path d="m9 5 7 7-7 7"/>',refresh:'<path d="M20 7v5h-5M4 17v-5h5M6 6a8 8 0 0 1 13 3M5 15a8 8 0 0 0 13 3"/>',lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 1 1 8 0v4"/>',menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',check:'<path d="m5 12 4 4L19 6"/>',folder:'<path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>'};
function icon(name){return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||icons.grid}</svg>`;}
function hydrateIcons(root=document){root.querySelectorAll('[data-icon]').forEach(el=>el.innerHTML=icon(el.dataset.icon));}
const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
function escapeHTML(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function readStore(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function saveStore(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true}catch{toast('浏览器存储空间不足，暂时无法保存');return false}}
const taxonomy={
  "头像": {
    "english": "Avatar",
    "description": "头像展示、头像组及状态变化。"
  },
  "徽标": {
    "english": "Badge",
    "description": "消息计数、状态标记与提醒动效。"
  },
  "日历": {
    "english": "Calendar",
    "description": "日期切换、日程展示与日历动效。"
  },
  "卡片": {
    "english": "Card",
    "description": "卡片的展开、层叠与状态切换。"
  },
  "图片轮播": {
    "english": "Carousel",
    "description": "图片轮播、层叠卡片与 Banner 切换。"
  },
  "折叠面板": {
    "english": "Collapse",
    "description": "内容面板的展开与收起。"
  },
  "评论": {
    "english": "Comment",
    "description": "评论内容、回复与反馈展示。"
  },
  "描述列表": {
    "english": "Descriptions",
    "description": "字段与详情信息的组合展示。"
  },
  "空状态": {
    "english": "Empty",
    "description": "无内容、无结果与占位反馈。"
  },
  "图片": {
    "english": "Image",
    "description": "图片展示、缩放与查看动效。"
  },
  "列表": {
    "english": "List",
    "description": "列表滑动、编辑与内容切换。"
  },
  "气泡卡片": {
    "english": "Popover",
    "description": "轻量浮层与就近信息提示。"
  },
  "数值显示": {
    "english": "Statistic",
    "description": "数字翻牌、指标更新与数值变化。"
  },
  "饼图": {
    "english": "Pie Chart",
    "description": "饼图、环形图与双层圆环的动态展示。"
  },
  "表格": {
    "english": "Table",
    "description": "表格滚动、固定列与数据阅读。"
  },
  "地图": {
    "english": "Map",
    "description": "地理分布、地图流光与空间场景。"
  },
  "抽屉": {
    "english": "Drawer",
    "description": "保留页面上下文，在侧边查看详情。"
  },
  "导航": {
    "english": "Navigation",
    "description": "标签与侧栏的展开、切换。"
  },
  "状态反馈": {
    "english": "Status",
    "description": "操作结果、过程与状态变化的反馈展示。"
  },
  "折线图": {
    "english": "Line Chart",
    "description": "数据趋势与折线图动效。"
  },
  "3D图表": {
    "english": "3D Chart",
    "description": "立体饼图、柱体与空间感图表的动态展示。"
  }
};
Object.assign(taxonomy,{
  '加载':{english:'Loading',description:'旋转、弹跳、波形与粒子的加载等待动画。'},
  '支付':{english:'Payment',description:'支付成功与支付失败的成对结果反馈动效。'},
  '点击切换':{english:'Click Toggle',description:'点击切换两种状态的动态图标，来自 UseAnimations 的原始资源。'},
  '悬停':{english:'Hover',description:'鼠标悬停播放、移开反向恢复的动态图标。'},
  '首页':{english:'Home',description:'网站首页的首屏构图、视觉动效与开场体验。'},
  '交互':{english:'Interaction',description:'网站中的鼠标反馈、转场与操作交互。'},
  '柱状图':{english:'Bar Chart',description:'柱形、条形与堆叠图的数据展示动效。'},
  '散点图':{english:'Scatter Plot',description:'散点分布、气泡与点位变化的动态展示。'},
  '其他':{english:'Other Charts',description:'雷达图、仪表盘、桑基图等其他图表形式。'},
  '后台':{english:'Admin',description:'后台管理系统的页面流程与操作交互案例。'},
  '可视化':{english:'Visualization',description:'数据可视化的展示与交互案例。'}
});
const navigationGroups=[
  {name:'网站交互',children:['首页','交互']},
  {name:'图表',children:['饼图','3D图表','折线图','柱状图','散点图','其他']},
  {name:'数据展示',children:['表格','数值显示','地图']},
  {name:'内容展示',children:['头像','徽标','日历','卡片','图片轮播','评论','描述列表','图片','列表']},
  {name:'交互反馈',children:['折叠面板','空状态','气泡卡片','抽屉','导航','加载','状态反馈','支付']},
  {name:'icon交互',children:['点击切换','悬停']},
  {name:'交互案例',children:['后台','可视化']}
];
const navigationSubgroups={};
function groupLeaves(group){return group.children.flatMap(category=>navigationSubgroups[category]||[category]);}
function categoryParent(category){return Object.keys(navigationSubgroups).find(name=>navigationSubgroups[name].includes(category))||'';}
function categoryGroup(category){return navigationGroups.find(group=>groupLeaves(group).includes(category))?.name||'';}
const seed=[
  {
    "id": "loading-ldrs",
    "title": "加载动画合集 · LDRS",
    "category": "加载",
    "kind": "embed",
    "asset": "assets/cases/loading-ldrs/index.html?v=2",
    "url": "assets/cases/loading-ldrs/index.html?v=2",
    "previewLayout": "icons",
    "animated": true,
    "source": "UI Ball · Griffin Johnston",
    "collectionType": "组件案例",
    "caption": "44 种官方加载动画 · 搜索 / 调色 / 大小 / 速度",
    "note": "使用 UI Ball 官方 LDRS 1.1.9 的 44 种原始 Web Components，代码本地打包，不依赖外部 CDN。支持中英文搜索、颜色、大小、速度调整和暂停／继续；尊重系统减少动态效果偏好。",
    "provenance": "https://uiball.com/ldrs/",
    "verifiedOn": "2026-11-13"
  },
  {
    "id": "payment-orbit",
    "title": "环形聚合 · 支付结果",
    "category": "支付",
    "kind": "embed",
    "asset": "assets/cases/payment-orbit/index.html?v=2",
    "url": "assets/cases/payment-orbit/index.html?v=2",
    "previewLayout": "component",
    "animated": true,
    "source": "用户提供的花瓣参考动图",
    "collectionType": "参考动效复现",
    "caption": "成功 / 失败并列 · 圆环聚合 · 重播与循环",
    "note": "参考花瓣页面对应的本地 GIF，还原圆弧闭合、环形收拢为实心圆与结果描边的阶段；成功为绿色勾号，失败为红色叉号。两种结果并列在同一页，可单独重播、一起重播、循环与调速；使用本地矢量图形。",
    "provenance": "https://huaban.com/pins/5594860161",
    "verifiedOn": "2026-11-13"
  },
  {
    "id": "payment-pop",
    "title": "弹跳粒子 · 支付结果",
    "category": "支付",
    "kind": "embed",
    "asset": "assets/cases/payment-pop/index.html?v=2",
    "url": "assets/cases/payment-pop/index.html?v=2",
    "previewLayout": "component",
    "animated": true,
    "source": "用户附件 · payment.gif",
    "collectionType": "参考动效复现",
    "caption": "绿色成功 / 红色失败 · 放大回弹与粒子散射",
    "note": "参考用户附件 payment.gif 的放大回弹、圆点收拢和粒子散射节奏，成功为绿色勾号，失败为红色叉号；失败颜色与环形聚合一致，粒子颜色同步对应结果。两种结果放在同一页，支持单独／一起重播、循环和调速；原始参考保存在本地。",
    "provenance": "/Users/liyiheng/Downloads/payment.gif",
    "verifiedOn": "2026-11-13"
  },
  {
    "id": "depth-carousel",
    "title": "纵深轮播 · Depth Carousel",
    "category": "图片轮播",
    "kind": "embed",
    "asset": "assets/cases/depth-carousel/index.html?v=4",
    "url": "assets/cases/depth-carousel/index.html?v=4",
    "previewLayout": "component",
    "animated": true,
    "source": "React Bits",
    "collectionType": "组件案例",
    "caption": "拖动 / 滚轮 / 方向键 · 自动轮播",
    "note": "React Bits 官方 JS-CSS 组件，按指定纵深、间距、倾斜与模糊参数接入；悬停或聚焦时暂停自动轮播。",
    "provenance": "https://reactbits.dev/components/depth-carousel",
    "verifiedOn": "2026-11-13"
  },
  {
    "id": "animated-list",
    "title": "弹性列表 · Animated List",
    "category": "列表",
    "kind": "embed",
    "asset": "assets/cases/animated-list/index.html?v=1",
    "url": "assets/cases/animated-list/index.html?v=1",
    "previewLayout": "component",
    "animated": true,
    "source": "React Bits",
    "collectionType": "组件案例",
    "caption": "Pop 入场 · 深色主题 · 点击与键盘选择",
    "note": "使用官方原始组件与指定的四条数据。支持条目选择、方向键导航和重播入场。",
    "provenance": "https://reactbits.dev/components/animated-list",
    "verifiedOn": "2026-11-13"
  },
  {
    "id": "scroll-stack",
    "title": "滚动堆叠 · Scroll Stack",
    "category": "图片轮播",
    "kind": "embed",
    "asset": "assets/cases/scroll-stack/index.html?v=4",
    "url": "assets/cases/scroll-stack/index.html?v=4",
    "previewLayout": "stack",
    "animated": true,
    "source": "React Bits",
    "collectionType": "组件案例",
    "caption": "滚动推进 · 卡片缩放与堆叠",
    "note": "600px 高度容器展示 5 张本地示例照片，向下滚动查看图片缩放、粘性堆叠与遮挡。保留 React Bits 原始组件源码。",
    "provenance": "https://reactbits.dev/components/scroll-stack",
    "verifiedOn": "2026-11-13"
  },
  {
    "id": "card-nav",
    "title": "菜单联动卡片 · Card Nav",
    "category": "折叠面板",
    "kind": "embed",
    "asset": "assets/cases/card-nav/index.html?v=1",
    "url": "assets/cases/card-nav/index.html?v=1",
    "previewLayout": "component",
    "animated": true,
    "source": "React Bits",
    "collectionType": "组件案例",
    "caption": "点击展开 · Rise 卡片入场",
    "note": "使用官方 JS-CSS 原始组件。菜单图标与三组导航卡片联动；本地示例点击链接显示目标，方便预览。",
    "provenance": "https://reactbits.dev/components/card-nav",
    "verifiedOn": "2026-11-13"
  },
  {
    "id": "icon-click-toggle",
    "title": "点击切换图标 · 37 个",
    "category": "点击切换",
    "kind": "embed",
    "asset": "assets/cases/icon-click-toggle/index.html?v=1",
    "url": "assets/cases/icon-click-toggle/index.html?v=1",
    "previewLayout": "icons",
    "animated": true,
    "source": "UseAnimations",
    "collectionType": "组件案例",
    "caption": "原始动态图标 · 点击切换 / 再点恢复",
    "note": "完整收录指定页面的 37 个点击切换图标，原始 Lottie 资源保存在本地。支持中文与英文搜索、键盘切换及全部重置。",
    "provenance": "https://useanimations.com/zh/interactions/click-toggle",
    "verifiedOn": "2026-11-13"
  },
  {
    "id": "icon-hover",
    "title": "悬停图标 · 21 个",
    "category": "悬停",
    "kind": "embed",
    "asset": "assets/cases/icon-hover/index.html?v=1",
    "url": "assets/cases/icon-hover/index.html?v=1",
    "previewLayout": "icons",
    "animated": true,
    "source": "UseAnimations",
    "collectionType": "组件案例",
    "caption": "原始动态图标 · 悬停播放 / 移开反向恢复",
    "note": "完整收录指定页面的 21 个悬停图标，使用原始 Lottie 资源及正反向播放。支持搜索、键盘聚焦和手机点击。",
    "provenance": "https://useanimations.com/zh/interactions/hover",
    "verifiedOn": "2026-11-13"
  },
  {
    "id": "gallery-heading",
    "title": "环绕画廊标题 · Gallery Heading",
    "category": "首页",
    "kind": "embed",
    "asset": "assets/cases/gallery-heading/index.html?v=4",
    "url": "assets/cases/gallery-heading/index.html?v=4",
    "previewLayout": "website",
    "animated": true,
    "source": "ThreeUI · Matte Rise",
    "collectionType": "组件案例",
    "caption": "悬停卡片减速 · 拖动跟随鼠标双向旋转",
    "note": "基于已核验的 ThreeUI Matte Rise 注册源码，保留哑光噪点卡片、透视环绕与 Website Home Style 标题。悬停在实际卡片轮廓内时平滑降至约四分之一速度；拖动期间由鼠标在轨道上的位置直接控制旋转，支持向上、向下与反向拖动，自动转动不会抢占手势。松手后平滑衔接，空格切换预览，Esc 停止。原始注册文件仍保持哈希一致，新增交互通过独立构建扩展实现。",
    "provenance": "https://threeui.com/source-code/gallery-heading.json",
    "sourceRevision": "8e42d2d5b4971bfc4d3c485112c3c51909e20a61b8842bc0dcd8db3ffe2d253a",
    "verifiedOn": "2026-11-13"
  },
  {
    "id": "masked-heading",
    "title": "视频遮罩标题 · Masked Heading",
    "category": "首页",
    "kind": "embed",
    "asset": "assets/cases/masked-heading/index.html?v=2",
    "url": "assets/cases/masked-heading/index.html?v=2",
    "previewLayout": "website",
    "animated": true,
    "source": "React Bits · David Haz",
    "collectionType": "组件案例",
    "caption": "视频填充文字 · 聚光灯 · 鼠标视差 · 缩放入场",
    "note": "使用 React Bits 官方 MaskedHeading 的 JS-CSS 原始组件，主标题统一为 Website Home Style，其余按指定配置接入。视频填充文字、34px 鼠标视差、180px 聚光灯、描边与进入视口时的缩放入场；支持重播入场和视频暂停。视频采用官方示例素材，封面由视频提取，均保存在本地。",
    "provenance": "https://reactbits.dev/text-animations/masked-heading",
    "verifiedOn": "2026-11-12"
  },
  {
    "id": "report-home-gallery",
    "title": "述职首页 · 无缝循环画廊",
    "category": "首页",
    "kind": "embed",
    "asset": "assets/cases/report-home-gallery/index.html?v=3",
    "url": "assets/cases/report-home-gallery/index.html?v=3",
    "previewLayout": "report-home",
    "animated": true,
    "source": "用户提供网站",
    "collectionType": "首页动效",
    "caption": "标题入场 · 无缝循环 · 拖动与方向键浏览",
    "note": "从述职网站提取的独立首页效果，主标题统一为 Website Home Style，保留原有标题入场、弧形遮罩画廊、自动无缝循环、鼠标与触摸拖动、方向键浏览。仅包含首页，已去除章节导航、展开述职入口、正文与项目详情页；图片与动画资源均保存在本地。",
    "provenance": "https://report.xiaoli233.top/?v=20261027-chevron#projects",
    "verifiedOn": "2026-11-12"
  },
  {
    "id": "regulatory-dashboard",
    "title": "监管驾驶舱 · 交互动效",
    "category": "后台",
    "kind": "video",
    "asset": "assets/cases/regulatory-dashboard/interaction.mp4",
    "poster": "assets/cases/regulatory-dashboard/poster.png",
    "animated": true,
    "source": "用户提供 MP4",
    "collectionType": "交互案例",
    "caption": "监管驾驶舱交互动效 · 原始视频",
    "note": "用户提供的监管驾驶舱交互动效视频，保留原始 MP4 文件。支持播放、暂停、循环播放与全屏查看。",
    "provenance": "监管驾驶舱-交互动效.mp4",
    "verifiedOn": "2026-11-12"
  },
  {
    "id": "pinghu-map",
    "title": "平湖市 · 街镇分区图",
    "category": "地图",
    "kind": "embed",
    "asset": "assets/cases/pinghu-map/index.html",
    "url": "assets/cases/pinghu-map/index.html",
    "allowDownloads": true,
    "allowSameOrigin": true,
    "source": "用户提供本地页面",
    "collectionType": "交互案例",
    "caption": "平湖市八街镇交互地图 · 不含乍浦镇",
    "note": "基于 GeoJSON 边界的平湖市八街镇分区图，已剔除乍浦镇。支持悬停高亮、点击街镇查看详情与定位、地图缩放、图层及透明度设置，并可导出 PNG、SVG 与 GeoJSON。默认显示 OpenStreetMap 在线道路底图，可通过图层设置切换为纯色分区。",
    "provenance": "http://127.0.0.1:8765/",
    "verifiedOn": "2026-11-12"
  },
  {
    "id": "chengtou-finance",
    "title": "城投业财融合一体化数据驾驶舱",
    "category": "可视化",
    "kind": "embed",
    "asset": "assets/cases/chengtou-finance/index.html",
    "url": "assets/cases/chengtou-finance/index.html",
    "previewLayout": "dashboard",
    "source": "用户提供 HTML",
    "collectionType": "交互案例",
    "caption": "独立驾驶舱 · 可打开完整效果",
    "note": "从用户提供的 HTML 中提取的独立数据驾驶舱，保留驾驶舱图表、筛选与详情交互，已移除后台管理页面和后台切换入口。",
    "provenance": "城投业财融合管理平台.html",
    "verifiedOn": "2026-11-12"
  },
  {
    "id": "glass-home",
    "title": "玻璃折射 · 网站首页",
    "category": "首页",
    "kind": "embed",
    "asset": "assets/cases/glass-home/index.html",
    "url": "assets/cases/glass-home/index.html",
    "animated": true,
    "previewLayout": "website",
    "source": "用户视频参考",
    "collectionType": "交互原型",
    "caption": "根据提供视频实现的玻璃折射首页 · 拖动旋转 / 切换标题",
    "note": "参考 Design World 视频中的黑底大字与旋转玻璃体，主标题改为 Website / Home / Style。玻璃会折射后方文字并产生分光，支持鼠标跟随、拖动旋转、双击复位、暂停运动和标题切换。原视频保留作对照，本案例为本地复现。",
    "referenceAsset": "assets/cases/glass-home/reference.mp4",
    "verifiedOn": "2026-11-12"
  },
  {
    "id": "double-ring-carousel",
    "title": "双层旋转轮播饼图",
    "category": "饼图",
    "kind": "embed",
    "asset": "assets/cases/double-ring-carousel/index.html?v=2",
    "url": "assets/cases/double-ring-carousel/index.html?v=2",
    "animated": true,
    "source": "用户提供",
    "collectionType": "开发交付效果",
    "note": "双层圆环同步旋转，依次将当前分类转到顶部，中心名称、人数与占比同步更新。每 2.5 秒自动轮播，可暂停、点击图例切换。基于交付包效果，分割缝调整为内外等宽的直线，画面中的数据为示例数据。",
    "provenance": "双层旋转轮播饼图-开发交付.zip",
    "verifiedOn": "2026-11-10"
  },
  {
    "id": "ppt-cover",
    "title": "图片轮播 · 主次层级",
    "category": "图片轮播",
    "interaction": "轮播切换",
    "data": "图片 / 卡片",
    "kind": "embed",
    "source": "PPT 动效参考 · AI 生成图片",
    "slide": 25,
    "note": "参考 PPT 的卡片位移、缩放与换层动作，使用重新生成的高清山景图；支持点击侧图、滑动及左右方向键，可开启自动播放。 原始 PPT 动图保留在右上角，供比较运动方式。",
    "asset": "assets/cases/ppt-cover/index.html?v=7",
    "animated": true,
    "collectionType": "PPTX 动效复现",
    "provenance": "用户提供的分享.pptx，第 25 页原始动态",
    "poster": "assets/posters/image25.png",
    "url": "assets/cases/ppt-cover/index.html?v=7",
    "caption": "点击两侧图片切换 · 支持滑动与左右方向键",
    "previewLayout": "component",
    "sourceRevision": "00063cccb5b82b35a3f66dfcb9470a8b7035b58c18c013a959420f926f1bd28b",
    "verifiedOn": "2026-11-13",
    "imageSource": "Built-in image_gen · 2026-11-13",
    "generatedAssets": "assets/generated/carousel-hd/generation-prompts.json"
  },
  {
    "id": "ppt-table",
    "title": "榜单列表 · 表格滚动",
    "category": "表格",
    "interaction": "滚动展示",
    "data": "表格 / 列表",
    "kind": "embed",
    "source": "分享.pptx",
    "slide": 21,
    "note": "按原图还原的本地复刻：表头固定，榜单每 1.8 秒向上滚动一行并循环，悬停暂停，点击行可高亮查看。",
    "asset": "assets/cases/ppt-table/index.html",
    "animated": true,
    "collectionType": "PPTX 收藏",
    "provenance": "用户提供的分享.pptx，第 21 页原始动态"
  },
  {
    "id": "ppt-carousel",
    "title": "按钮轮播 · 场景切换",
    "category": "图片轮播",
    "interaction": "轮播切换",
    "data": "图片 / 卡片",
    "kind": "embed",
    "source": "PPT 动效参考 · AI 生成图片",
    "slide": 24,
    "note": "参考 PPT 的左右按钮轮播动作，使用重新生成的高清餐厅图；按钮及“左右切换选择”使用清晰的网页控件与文字，支持按钮、滑动和方向键。 原始 PPT 动图保留在右上角，供比较运动方式。",
    "asset": "assets/cases/ppt-carousel/index.html?v=7",
    "animated": true,
    "collectionType": "PPTX 动效复现",
    "provenance": "用户提供的分享.pptx，第 24 页原始动态",
    "poster": "assets/posters/image24.png",
    "url": "assets/cases/ppt-carousel/index.html?v=7",
    "caption": "点击左右按钮切换 · 支持滑动与方向键",
    "previewLayout": "component",
    "sourceRevision": "30bfaa3a1f27d7e105aa93745e3c2b1ff881dbc1bc1a16e284fc284bc54a3ae1",
    "verifiedOn": "2026-11-13",
    "imageSource": "Built-in image_gen · 2026-11-13",
    "generatedAssets": "assets/generated/carousel-hd/generation-prompts.json"
  },
  {
    "id": "ppt-overlap",
    "title": "叠加轮播 · 覆盖切换",
    "category": "图片轮播",
    "interaction": "轮播切换",
    "data": "图片 / 卡片",
    "kind": "embed",
    "source": "PPT 动效参考 · AI 生成图片",
    "slide": 26,
    "note": "下一张从左侧进入并覆盖完整画面，上一张反向覆盖；使用重新生成的高清山景及餐厅图，支持自动播放、箭头、圆点、滑动和方向键。 原始 PPT 动图保留在右上角，供比较运动方式。",
    "asset": "assets/cases/ppt-overlap/index.html?v=7",
    "animated": true,
    "collectionType": "PPTX 动效复现",
    "provenance": "用户提供的分享.pptx，第 26 页原始动态",
    "poster": "assets/posters/image26.png",
    "url": "assets/cases/ppt-overlap/index.html?v=7",
    "caption": "下一张从左侧覆盖 · 可点击箭头、圆点或滑动",
    "previewLayout": "component",
    "sourceRevision": "17821a7a89bf4e47ea56b45ebf4c3c46597bea95d0ee6de5c27f895c727057e4",
    "verifiedOn": "2026-11-13",
    "imageSource": "Built-in image_gen · 2026-11-13",
    "generatedAssets": "assets/generated/carousel-hd/generation-prompts.json"
  },
  {
    "id": "ppt-mobile",
    "title": "移动 Banner · 自动轮播",
    "category": "图片轮播",
    "interaction": "轮播切换",
    "data": "图片 / 卡片",
    "kind": "embed",
    "source": "PPT 动效参考 · AI 生成图片",
    "slide": 24,
    "note": "仅展示 Banner，使用三张重新生成的高清背景及清晰的网页文字。支持自动轮播、悬停暂停、圆点、箭头、滑动和方向键，首尾连续循环。 原始 PPT 动图保留在右上角，供比较运动方式。",
    "asset": "assets/cases/ppt-mobile/index.html?v=7",
    "animated": true,
    "collectionType": "PPTX 动效复现",
    "provenance": "用户提供的分享.pptx，第 24 页原始动态",
    "poster": "assets/posters/image23.png",
    "url": "assets/cases/ppt-mobile/index.html?v=7",
    "caption": "仅保留 Banner · 悬停暂停 · 支持滑动与方向键",
    "previewLayout": "banner",
    "sourceRevision": "c7014a673dd75574598475ec22acfe6c7268f4e6e922076ce7b69b60dab40f31",
    "verifiedOn": "2026-11-13",
    "imageSource": "Built-in image_gen · 2026-11-13",
    "generatedAssets": "assets/generated/carousel-hd/generation-prompts.json"
  },
  {
    "id": "pie-sequence",
    "title": "饼图 · 分段入场",
    "category": "饼图",
    "kind": "embed",
    "asset": "assets/cases/pie-sequence/index.html?v=2",
    "animated": true,
    "author": "Stephen Tracy",
    "source": "Analythical",
    "url": "https://analythical.com/blog/how-to-animate-pie-charts-in-powerpoint",
    "note": "按原作教程节奏复刻：扇区依次入场，占比标签随后出现，可点击「重播」再看一次。",
    "collectionType": "教程案例"
  },
  {
    "id": "pie-focus",
    "title": "环形图 · 扇区聚焦",
    "category": "饼图",
    "kind": "embed",
    "asset": "assets/cases/pie-focus/index.html?v=3",
    "animated": true,
    "author": "Stephen Tracy",
    "source": "Analythical",
    "url": "https://analythical.com/blog/how-to-animate-pie-charts-in-powerpoint",
    "note": "环形结构，圆环中心展示当前高亮区域的名称与占比。当前扇区加深并向外轻移，其余部分弱化；数据随自动轮换、点击或键盘选择同步更新。保留内外等宽直线分隔，悬停或键盘聚焦时暂停轮换。",
    "collectionType": "教程案例"
  },
  {
    "id": "pie-3d",
    "title": "3D 饼图 · 点击增高",
    "category": "3D图表",
    "kind": "embed",
    "asset": "assets/cases/pie-3d/index.html?v=18",
    "previewLayout": "component",
    "animated": true,
    "source": "用户录屏 / RichCharts 交互参考",
    "url": "assets/cases/pie-3d/index.html?v=18",
    "caption": "自动轮播增高 · 手动拖拽 · 数据弹窗",
    "note": "每 2.5 秒自动切换所选扇区，依次增高并展示数据，支持暂停／继续；悬停和拖拽时暂缓轮播，手动选择后重新计时。图表视角不自动旋转，拖拽松手后保持当前视角。悬停可预览数据，点击扇区增高聚焦并固定数据弹窗；点击其他扇区切换，按 Esc 或关闭弹窗取消。图例点击同样选择增高，重复点击保持选中；支持重置图表。采用实心饼图结构，中间无镂空，分割缝为等宽直线。材质参考立体面积图：亮色顶沿、均匀半透明侧壁、清晰底面与底部轮廓，画布保持不透明；使用本地三维几何体与示例数据。",
    "collectionType": "交互原型"
  },
  {
    "id": "pie-3d-rise",
    "title": "3D 环形图 · 点击增高",
    "category": "3D图表",
    "kind": "embed",
    "asset": "assets/cases/pie-3d-rise/index.html?v=16",
    "url": "assets/cases/pie-3d-rise/index.html?v=16",
    "previewLayout": "component",
    "animated": true,
    "source": "用户录屏 / RichCharts 环形图参考",
    "caption": "自动轮播增高 · 镂空中心数据 · 文字始终正对屏幕",
    "note": "参考用户提供的环形图录屏。默认所有扇区等高；每 2.5 秒自动轮播增高并展示数据，支持暂停／继续，悬停和拖拽时暂缓轮播。点击所选扇区会从同一底面增高，在中间镂空处仅展示区域和营收，占比保留在图例中，文字始终平面正对屏幕，轮播和手动选择均不弹出数据浮窗；切换扇区时上一项回落，重复点击保持选中，按 Esc 或重置图表恢复等高。支持悬停预览、手动拖拽视角、图例点击增高、重置；所有扇区始终显示。采用亮色顶沿、均匀半透明侧壁和清晰底面，深色底显示内外壁的透叠层次，画布保持不透明。高度仅表示选择状态，数据为示例数据。",
    "collectionType": "交互原型"
  },
  {
    "id": "numbers",
    "title": "Flip Counter · 数字翻牌",
    "category": "数值显示",
    "kind": "embed",
    "asset": "assets/cases/numbers/index.html",
    "animated": true,
    "author": "Federico Vaccarezza",
    "source": "Dribbble",
    "url": "https://dribbble.com/shots/1815379-Flip-Counter",
    "note": "按原作翻牌质感做的本地复刻：拖动右侧滑块，三位数字以翻牌方式逐位切换，保留分模线与点阵底纹。",
    "collectionType": "作者作品"
  },
  {
    "id": "density",
    "title": "Xchange · 表格密度",
    "category": "表格",
    "kind": "embed",
    "asset": "assets/cases/density/index.html",
    "animated": true,
    "author": "Markiyan Vaskiv / Ralabs Design",
    "source": "Dribbble",
    "url": "https://dribbble.com/shots/11523666-Xchange-Table-Density-for-Crypto-Platform",
    "note": "按原作还原的本地复刻：右上三个图标切换表格密度，行高平滑过渡，搜索可即时筛选币种。",
    "collectionType": "设计概念"
  },
  {
    "id": "table-frozen",
    "title": "数据表格 · 固定列与批量操作",
    "category": "表格",
    "kind": "embed",
    "asset": "assets/cases/table-frozen/index.html",
    "animated": true,
    "author": "Gregory Muryn-Mukha",
    "source": "Dribbble",
    "url": "https://dribbble.com/shots/3779204-Basic-UX-tricks-for-big-data-tables-Part-2",
    "note": "按原作还原的本地复刻：横向滚动时状态与应用两列固定，勾选行后出现批量启用、暂停、删除，表头可排序，列可管理。",
    "collectionType": "作者作品"
  },
  {
    "id": "quickview",
    "title": "数据表格 · 侧栏快速查看",
    "category": "抽屉",
    "kind": "embed",
    "asset": "assets/cases/quickview/index.html",
    "animated": true,
    "author": "Gregory Muryn-Mukha",
    "source": "Dribbble",
    "url": "https://dribbble.com/shots/3804579-Basic-UX-tricks-for-big-data-tables-Part-3",
    "note": "按原作还原的本地复刻：点击表格行，右侧滑出详情面板，表格背景弱化；Esc 或点击遮罩关闭。",
    "collectionType": "作者作品"
  },
  {
    "id": "swipe",
    "title": "Swipe to edit · 左滑编辑",
    "category": "列表",
    "kind": "embed",
    "asset": "assets/cases/swipe/index.html",
    "animated": true,
    "author": "Michal Langmajer",
    "source": "Dribbble",
    "url": "https://dribbble.com/shots/1445747-Swipe-to-edit-GIF",
    "note": "按原作还原的本地复刻：拖动列表项左滑露出编辑与删除，一次只展开一项，删除后收起并提示。",
    "collectionType": "作者作品"
  },
  {
    "id": "statistics-sidebar",
    "title": "Statistics Side Bar · 侧栏切换",
    "category": "列表",
    "kind": "embed",
    "asset": "assets/cases/statistics-sidebar/index.html",
    "animated": true,
    "author": "Hoang Nguyen",
    "source": "Dribbble",
    "url": "https://dribbble.com/shots/4783850-Statistics-Side-Bar",
    "note": "按原作还原的本地复刻：深色统计面板内切换全部／近 7 天／近 30 天，周活跃柱与效率环形图同步更新。",
    "collectionType": "作者作品"
  },
  {
    "id": "perspective-area",
    "title": "立体面积图 · 双系列趋势",
    "category": "3D图表",
    "kind": "embed",
    "asset": "assets/cases/perspective-area/index.html?v=4",
    "url": "assets/cases/perspective-area/index.html?v=4",
    "animated": true,
    "source": "用户参考截图",
    "collectionType": "交互原型",
    "caption": "根据参考图实现的可交互原型 · 示例数据",
    "note": "参考截图实现蓝绿双系列立体面积图：半透明曲面、厚度、透视网格和悬停读数。可点击锁定日期、点击图例开关系列、拖动调整视角、更新示例数据及自动巡览，也支持左右方向键查看数据。面积图与柱状图共用环绕相机，绕图表中心旋转，镜头距离固定，拖动时不自动缩放或拉平，支持接近侧面的视角。当前展示为本地交互原型，尚未接入业务数据。",
    "verifiedOn": "2026-11-12"
  },
  {
    "id": "perspective-bars",
    "title": "立体柱状图 · 双系列对比",
    "category": "3D图表",
    "kind": "embed",
    "asset": "assets/cases/perspective-bars/index.html?v=5",
    "url": "assets/cases/perspective-bars/index.html?v=5",
    "animated": true,
    "source": "用户参考截图",
    "collectionType": "交互原型",
    "caption": "根据参考图实现的可交互原型 · 示例数据",
    "note": "蓝绿双系列立体柱状图，柱宽增加约 19%，同日期柱间空隙与不同日期组间空隙保持不变；两组柱子位于同一深度，底部对齐同一条水平基线；默认视角基线水平，拖动时底座、坐标轴和柱体整体绕中心旋转；与面积图共用环绕相机，镜头距离固定，不自动缩放或强制拉平，支持接近侧面的视角。保留半透明柱体、明亮顶面、悬停读数、点击锁定、图例开关和数据更新。当前使用示例数据。",
    "verifiedOn": "2026-11-12"
  }
];
function inferCategory(item){
  if(item.category==='联动卡片')return '折叠面板';
  if(taxonomy[item.category])return item.category;
  const aliases={'轮播图':'图片轮播','数据翻页':'数值显示','滑动菜单':'列表','联动卡片':'折叠面板'};
  const legacy=aliases[item.subcategory]||item.subcategory;
  if(taxonomy[legacy])return legacy;
  if(item.demo==='numbers')return '数值显示';
  if(item.demo==='density'||item.data==='表格 / 列表')return '表格';
  if(item.data==='地图 / 空间')return '地图';
  if(item.interaction==='轮播切换')return '图片轮播';
  if(item.demo==='chart'||item.data==='图表 / 指标')return '折线图';
  if(item.demo==='quickview'||item.interaction==='展开收起')return '抽屉';
  if(['tabs','sidebar'].includes(item.demo)||item.interaction==='导航切换')return '导航';
  return item.category==='移动端'?'列表':item.category==='可视化大屏'?'饼图':'卡片';
}
const storedCustom=readStore('motion-custom',[]);
const custom=(Array.isArray(storedCustom)?storedCustom:[]).filter(x=>x&&typeof x.id==='string'&&/^https?:\/\//i.test(x.url||'')).map(x=>{const {subcategory,...record}=x;return {...record,category:inferCategory(x),kind:'link'}});
const items=[...seed,...custom];
const storedFavorites=readStore('motion-favorites',[]);
let favorites=new Set((Array.isArray(storedFavorites)?storedFavorites:[]).filter(id=>items.some(x=>x.id===id)));
let activeDetail=null;
function readRoute(){
  const params=new URLSearchParams(location.hash.slice(1));
  const itemId=params.get('example')||'';
  const item=items.find(entry=>entry.id===itemId);
  if(item)return {category:item.category,itemId:item.id};
  const category=params.get('category')==='联动卡片'?'折叠面板':params.get('category');
  if(taxonomy[category])return {category,itemId:''};
  if(params.get('type'))return {category:inferCategory({category,subcategory:params.get('type')}),itemId:''};
  return {category:'饼图',itemId:'double-ring-carousel'};
}
const state={...readRoute(),search:'',favoritesOnly:false,playing:!matchMedia('(prefers-reduced-motion: reduce)').matches};
const expandedGroups=new Set([categoryGroup(state.category)]);
const expandedSubgroups=new Set([categoryParent(state.category)]);
function matchesScope(item){const query=state.search.trim().toLowerCase();return (!state.favoritesOnly||favorites.has(item.id))&&(!query||[item.title,item.category,categoryGroup(item.category),categoryParent(item.category),taxonomy[item.category]?.english,item.source,item.note].join(' ').toLowerCase().includes(query));}
function renderNavigation(scoped){
  const filtering=state.search.trim()||state.favoritesOnly;
  const categoryButton=category=>{
    const amount=scoped.filter(item=>item.category===category).length;
    if(filtering&&!amount)return '';
    const active=category===state.category;
    return `<button class="category-link ${active?'active':''}" data-category="${category}" ${active?'aria-current="page"':''}><span>${category} <span class="category-english">${taxonomy[category].english}</span></span><small>${amount}</small></button>`;
  };
  $('#category-tree').innerHTML=navigationGroups.map(group=>{
    const count=scoped.filter(item=>groupLeaves(group).includes(item.category)).length;
    if(filtering&&!count)return '';
    const children=group.children.map(category=>{
      if(!navigationSubgroups[category])return categoryButton(category);
      const leaves=navigationSubgroups[category],amount=scoped.filter(item=>leaves.includes(item.category)).length;
      if(filtering&&!amount)return '';
      return `<details class="nav-subgroup" data-subgroup="${category}" ${filtering||expandedSubgroups.has(category)?'open':''}><summary>${icon('right')}<span>${category}</span><small>${amount}</small></summary><div class="nav-grandchildren">${leaves.map(categoryButton).join('')}</div></details>`;
    }).join('');
    return `<details class="nav-group" data-group="${group.name}" ${filtering||expandedGroups.has(group.name)?'open':''}><summary>${icon('right')}<span>${group.name}</span><small>${count}</small></summary><div class="nav-children">${children||'<p class="nav-empty">暂无二级分类</p>'}</div></details>`;
  }).join('')||'<p class="nav-empty">暂无匹配分类</p>';
  $$('.nav-group').forEach(group=>group.addEventListener('toggle',()=>{if(group.open)expandedGroups.add(group.dataset.group);else expandedGroups.delete(group.dataset.group)}));
  $$('.nav-subgroup').forEach(group=>group.addEventListener('toggle',()=>{if(group.open)expandedSubgroups.add(group.dataset.subgroup);else expandedSubgroups.delete(group.dataset.subgroup)}));
  $('#collection-count').textContent=`${items.length} 个案例`;
  $('#favorites-only').setAttribute('aria-pressed',state.favoritesOnly);
}
function render(){
  const scoped=items.filter(matchesScope);
  let variants=scoped.filter(item=>item.category===state.category);
  if(!variants.length&&scoped.length&&(state.search.trim()||state.favoritesOnly)){const first=scoped[0];state.category=first.category;state.itemId=first.id;variants=scoped.filter(item=>item.category===state.category);}
  const current=variants.find(item=>item.id===state.itemId)||variants[0];
  state.itemId=current?.id||'';activeDetail=current||null;
  expandedGroups.add(categoryGroup(state.category));
  expandedSubgroups.add(categoryParent(state.category));
  renderNavigation(scoped);
  const config=taxonomy[state.category];
  $('#breadcrumb-title').textContent=[categoryGroup(state.category),categoryParent(state.category)].filter(Boolean).join(' / ');
  $('#page-title').innerHTML=`${escapeHTML(state.category)} <span class="title-english">${config.english}</span>`;
  $('#page-description').textContent=config.description;
  $('#example-count').textContent=`${variants.length} 个案例`;
  $('#example-tabs').innerHTML=variants.map(item=>`<button class="example-tab ${current?.id===item.id?'active':''}" data-example="${escapeHTML(item.id)}" aria-pressed="${current?.id===item.id}">${escapeHTML(item.title)}</button>`).join('');
  $('#example-section').hidden=!current;$('#empty-state').hidden=!!current;$('#detail-content').hidden=!current;
  const filtering=state.search.trim()||state.favoritesOnly;
  $('#empty-state h2').textContent=filtering?'没有匹配的案例':`还没有${state.category}案例`;
  $('#empty-state p').textContent=filtering?'试试其他关键词，或查看全部收藏。':'可以通过「添加收藏」保存这一类的参考链接。';
  $('#empty-reset').textContent=filtering?'清除筛选':'查看饼图案例';
  if(current)renderPreview(current);else $('#detail-content').innerHTML='';
  const params=new URLSearchParams({category:state.category});
  if(current)params.set('example',state.itemId);
  history.replaceState(null,'','#'+params.toString());
}
function previewMarkup(item){
  if(item.kind==='embed')return `<iframe class="case-embed" src="${escapeHTML(item.asset)}" title="${escapeHTML(item.title)}效果预览" sandbox="allow-scripts${item.allowDownloads?' allow-downloads':''}${item.allowSameOrigin?' allow-same-origin':''}" loading="eager"></iframe>`;
  if(item.kind==='video')return `<video class="case-media" src="${escapeHTML(item.asset)}" ${item.poster?`poster="${escapeHTML(item.poster)}"`:''} controls loop muted playsinline ${state.playing?'autoplay':''} preload="metadata" aria-label="${escapeHTML(item.title)}原作品视频"></video>`;
  if(item.asset){const source=item.animated&&!state.playing?item.poster:item.asset;return `<img class="case-media ${item.portrait?'portrait':''}" src="${escapeHTML(source||item.asset)}" ${item.animated?`data-motion="${escapeHTML(item.asset)}" data-poster="${escapeHTML(item.poster)}"`:''} alt="${escapeHTML(item.title)}${item.animated?'原始动图':'原作静态封面'}">`;}
  return `<div class="source-bookmark"><span>来源链接</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(new URL(item.url).hostname)}</p><a class="secondary-button" href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">查看原始案例 ${icon('external')}</a></div>`;
}
function renderPreview(item){
  const format=item.kind==='embed'?'本地效果':item.kind==='video'?'原作品视频':item.kind==='image'?'静态封面':item.kind==='media'?(item.asset.endsWith('.gif')?'原始 GIF':'动态 WebP'):'来源链接';
  const author=item.author?` · ${escapeHTML(item.author)}`:'';
  const caption=item.caption||(item.kind==='embed'?'本地可交互复刻 · 示例数据':item.kind==='image'?'静态封面，完整动效请查看原始作品。':item.kind==='video'?'原作者作品视频':item.kind==='media'?item.source==='分享.pptx'?'PPTX 中的原始动图':'原作者公开的动图素材':'已收藏的案例来源链接');
  $('#detail-content').innerHTML=`<section class="preview-section" aria-label="${escapeHTML(item.title)}"><div class="preview-toolbar"><div><strong>案例预览</strong><span class="format-label">${format}</span></div><div class="preview-actions"><button class="text-button" id="autoplay" aria-pressed="${state.playing}" ${!item.animated||item.kind==='embed'?'hidden':''}>${icon(state.playing?'pause':'play')}${state.playing?'暂停':'播放'}</button><button class="text-button ${favorites.has(item.id)?'saved':''}" id="detail-favorite" aria-pressed="${favorites.has(item.id)}">${icon('heart')}${favorites.has(item.id)?'已喜欢':'喜欢'}</button></div></div><div class="preview-frame"><div class="detail-stage ${item.kind==='embed'?'embedded-stage':''} ${item.previewLayout==='website'?'website-stage':''} ${item.previewLayout==='dashboard'?'dashboard-stage':''} ${item.previewLayout==='report-home'?'report-home-stage':''} ${['component','stack','icons','original','original-portrait','banner'].includes(item.previewLayout)?item.previewLayout+'-stage':''}" id="detail-stage">${previewMarkup(item)}</div><div class="case-caption"><span>${caption}</span>${item.url?`<a href="${escapeHTML(item.url)}" target="_blank" rel="noopener noreferrer">${String(item.url).startsWith('assets/')?'打开完整效果':'查看原始作品'} ${icon('external')}</a>`:''}</div></div></section><section class="notes"><h2>案例说明</h2><p>${escapeHTML(item.note||'已保存的实际案例链接。')}</p><div class="source-row"><span>来源：${escapeHTML(item.source)}${item.slide?` · 第 ${item.slide} 页`:''}${author}</span><span class="case-type">${escapeHTML(item.collectionType||'链接收藏')}</span></div></section>`;
  $('#detail-favorite').onclick=()=>toggleFavorite(item.id);
  $('#autoplay').onclick=()=>{state.playing=!state.playing;updatePlaying($('#detail-stage'),state.playing);syncPlaybackButton()};
  const video=$('#detail-stage video');
  if(video){video.addEventListener('play',()=>{state.playing=true;syncPlaybackButton()});video.addEventListener('pause',()=>{state.playing=false;syncPlaybackButton()});}
}
function updatePlaying(root,playing){root.querySelectorAll('[data-motion]').forEach(image=>image.src=playing?image.dataset.motion:image.dataset.poster);const video=root.querySelector('video');if(video){if(playing)video.play().catch(()=>{state.playing=false;syncPlaybackButton()});else video.pause();}}
function syncPlaybackButton(){const button=$('#autoplay');if(!button)return;button.setAttribute('aria-pressed',state.playing);button.innerHTML=icon(state.playing?'pause':'play')+(state.playing?'暂停':'播放');}
function toggleFavorite(id){const next=new Set(favorites);if(next.has(id))next.delete(id);else next.add(id);if(!saveStore('motion-favorites',[...next]))return;favorites=next;if(state.favoritesOnly){render();return;}const button=$('#detail-favorite');button.classList.toggle('saved',favorites.has(id));button.setAttribute('aria-pressed',favorites.has(id));button.innerHTML=icon('heart')+(favorites.has(id)?'已喜欢':'喜欢');}
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('#toast').classList.remove('show'),2200);}
function renderCategoryOptions(){$('#add-category').innerHTML=navigationGroups.map(group=>`<optgroup label="${group.name}">${groupLeaves(group).map(name=>`<option value="${name}">${categoryParent(name)?categoryParent(name)+' / ':''}${name} ${taxonomy[name].english}</option>`).join('')}</optgroup>`).join('');}
$('#category-tree').addEventListener('click',event=>{const target=event.target.closest('[data-category]');if(!target)return;state.category=target.dataset.category;state.itemId='';render();$('#sidebar').classList.remove('show');$('#mobile-menu').setAttribute('aria-expanded','false');});
$('#example-tabs').addEventListener('click',event=>{const target=event.target.closest('[data-example]');if(target){state.itemId=target.dataset.example;render()}});
$('#search').addEventListener('input',event=>{state.search=event.target.value;render()});
$('#favorites-only').onclick=()=>{state.favoritesOnly=!state.favoritesOnly;render()};
$('#empty-reset').onclick=()=>{const filtering=state.search.trim()||state.favoritesOnly;state.search='';state.favoritesOnly=false;$('#search').value='';if(!filtering){state.category='饼图';state.itemId='double-ring-carousel';}render()};
$('#mobile-menu').onclick=()=>{const open=$('#sidebar').classList.toggle('show');$('#mobile-menu').setAttribute('aria-expanded',open)};
$('#add-open').onclick=()=>{$('#add-category').value=state.category;$('#add-dialog').showModal()};
$('#add-close').onclick=$('#add-cancel').onclick=()=>$('#add-dialog').close();
$('#add-dialog').addEventListener('click',event=>{if(event.target!==event.currentTarget)return;const rect=event.currentTarget.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)event.currentTarget.close()});
$('#add-form').onsubmit=event=>{event.preventDefault();const form=new FormData(event.target);let url;try{url=new URL(form.get('url'));if(!['https:','http:'].includes(url.protocol))throw new Error()}catch{toast('请输入有效的 http 或 https 链接');return;}const title=String(form.get('title')).trim();const category=form.get('category');if(!title||!taxonomy[category])return;const record={id:'saved-'+Date.now(),title,url:url.href,category,interaction:'案例收藏',data:category,note:String(form.get('note')),kind:'link',source:'我的收藏',createdAt:new Date().toISOString()};if(!saveStore('motion-custom',[...custom,record]))return;custom.push(record);items.push(record);Object.assign(state,{category,itemId:record.id,search:'',favoritesOnly:false});$('#search').value='';$('#add-dialog').close();event.target.reset();render();toast('已添加收藏');};
window.addEventListener('hashchange',()=>{Object.assign(state,readRoute(),{search:'',favoritesOnly:false});$('#search').value='';render()});
document.addEventListener('keydown',event=>{const editing=['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName);if(event.key==='/'&&!editing&&!$('#add-dialog').open){event.preventDefault();$('#search').focus()}if(event.key==='Escape'){$('#sidebar').classList.remove('show');$('#mobile-menu').setAttribute('aria-expanded','false')}});
hydrateIcons();renderCategoryOptions();render();
