# Gallery Heading · Matte Rise

分类：网站交互 → 首页。独立页面 `index.html` 可由现有 4317 静态服务器直接打开。

## 来源与完整性

完整注册包：https://threeui.com/source-code/gallery-heading.json

原始响应保留为 `source-bundle.json`；以下文件保存在 `vendor/` 下，内容未修改，每次构建会检查 SHA-256：

- `src/shaders/neuform-isolated/NeuformIsolatedEffects.tsx`：`fe9856234253bc3c1a13b3afb84f3d84644dfa6d578e7203bb3e1dd5eced1b75`
- `src/shaders/neuform-isolated/sources/gallery-heading.html`：`8e42d2d5b4971bfc4d3c485112c3c51909e20a61b8842bc0dcd8db3ffe2d253a`
- `src/shaders/threeui.css`：`efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf`

采用用户配置的 `rising-diagonal`、dark、sans、400、headlineSize 1.15、hue 0、saturation 1、brightness 1。运行时为原版 Canvas 2D；没有从截图或预览重新绘制实现。

组件原版以 `srcDoc` iframe 隔离其 Canvas 场景，本案例沿用该结构。所有场景代码来自本地注册源码，不嵌入 ThreeUI 文档页面。

## 接入层

`src/main.tsx` 保留指定的组件调用。主标题在接入层将所选 variant 的两行文案改为 Website / Home Style。替换后的目标宽度按新旧文案的实际字形宽度比例计算，保留原字号、字重、字间距与横向比例，不把短文案撑满旧文案的宽度。

透明可聚焦输入层把鼠标位置、进入 / 离开和拖动事件传入场景。`src/motion-extension.mjs` 在构建内存中扩展原版时钟，不改写已核验的 vendor 文件。悬停命中按每张卡片的透视、4:3 裁剪和圆角轮廓计算，目标速度为 0.24 倍；拖动直接改变轨道相位，鼠标上下和反向移动都实时对应，期间暂停自动推进。释放后沿最近拖动方向平滑衔接原弹簧运动。空格 / Enter 切换，Esc、失焦或取消拖动可停止。原始弹簧参数、几何与噪声绘制保留。

## 依赖与构建

在此目录运行：

```
npm ci
npm run build
```

依赖及版本由 package-lock.json 固定。包名导入通过构建别名指向已核验的注册 TSX / CSS。该 TSX 是包含其他 ThreeUI 效果的共享模块：未随注册包提供的兄弟 HTML import 从官方 npm 发行包 `@designcodeio/threeui@1.2.0` 补齐；其中该发行包未包含的两个兄弟源文档从官方站点发布的模块解析取得，来源与哈希记录于 `support-sources.json`。这些兄弟效果没有在本案例中渲染。

共享 CSS 引用的 Fragment Mono 字体来自官方 GitHub 仓库 `src/shaders/fonts/fragment-mono.woff2`，路径保留并在构建时复制到 fonts/；当前 Gallery Heading 使用系统 sans 字体，不需字体网络请求。

许可证与发行包的第三方声明一并保留。验证证据见 `VERIFICATION.md`。
