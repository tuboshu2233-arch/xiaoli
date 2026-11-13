# 述职首页独立提取：验证记录

final result: blocked

## 范围与证据

- 原站：https://report.xiaoli233.top/?v=20261027-chevron#projects；参考捕获时已回到首页顶部。
- Source visual truth：/tmp/report-source-hero.png。
- 移动端参考：/tmp/report-source-mobile-screen.png；iPhone 16 模拟器，393 × 852 CSS px。
- Implementation screenshot：/tmp/report-local-desktop.png。
- 实现：http://127.0.0.1:4317/assets/cases/report-home-gallery/index.html。
- 状态：标题入场结束后的首页，画廊处于自动循环的不同位置。
- 截图含原生浏览器界面，来源和实现窗口尺寸不同；未将其作为同尺寸像素对照。归一化比较与局部比较尚未完成。

## 已验证

- 原站与独立首页均已在浏览器实际打开，标题、副标题、六张图片与汇报人可见。
- 六张本地图片与原项目 public 资源 SHA-256 一致；动画库来自项目已有 GSAP 依赖。
- 独立页面无章节导航、展开述职入口、正文、项目详情页及跳转链接。
- 页面脚本与案例库脚本通过 node --check。

## 五项视觉检查

- 字体与排版：复用 Arial、PingFang SC、Microsoft YaHei 序列、标题字重、字号和断行；补回原站继承的 line-height: 1.5。同尺寸对照待完成。
- 间距与布局：复用原首屏 CSS、弧形遮罩与响应式规则；规范化全屏和局部对照待完成。
- 色彩：复用原站 paper、ink、muted 变量。
- 图片：复制原始六张图片，无替换、压缩与外链。
- 文案：保留首页标题、副标题与汇报人，按要求移除其他内容及入口。

## 对比历史与阻塞

1. 捕获原站桌面和移动端参考，打开独立实现。
2. 修正提取时遗漏的基础行高，本地资源与语法校验通过。
3. 原站同尺寸视口、DOM 与截图请求反复超时，未取得可直接比较的匹配尺寸截图。

尚未完成同尺寸全屏/局部比较、实现端移动视口核对、拖动与方向键的浏览器复验。因此不宣称完整视觉验收通过；此阻塞不影响已确认正常播放的监管驾驶舱 MP4 案例。
