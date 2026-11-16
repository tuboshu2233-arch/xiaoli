# 拾动 · 交互案例收藏

本地静态网站，使用 HTML、CSS、JavaScript；现有打包产物可直接预览，React 组件的构建命令见对应组件目录。

## 本地预览

在本目录运行 `python3 -m http.server 4317 --bind 127.0.0.1`，打开 http://127.0.0.1:4317/ 。也可以双击「启动预览.command」。

## 当前内容

左侧按表现形式使用两级导航，一级可展开 / 收起，二级显示中英文名称与案例数量：

- 图表：饼图、3D图表、折线图、柱状图、散点图、其他。
- 数据展示：表格、数值显示、地图。
- 内容展示：头像、徽标、日历、卡片、图片轮播、评论、描述列表、图片、列表。
- 交互反馈：折叠面板、空状态、气泡卡片、抽屉、导航、加载、状态反馈、支付，均为二级分类。
- 网站交互：首页、交互（顺序固定）。
- icon交互：点击切换、悬停；直接使用二级分类，已去掉「单icon」中间层。

无案例的二级分类仍可选择并显示空状态。当前案例所在的一级分组默认展开；搜索支持一级分组名、二级分类的中英文名称。收藏表单按一级分类分组展示选项，原有案例 ID、收藏与链接继续沿用。

当前内置 34 个案例，包含首页交互、图表、图片轮播、列表、图标、加载及支付状态反馈等，具体列表与分类以 `app.js` 的 `seed` 数组为准。

当前组件案例以「本地效果」形式接入；四个 PPT 轮播的当前实现共用 `assets/cases/ppt-local/demo.js` 和 `style.css`，其余多数独立案例结构如下：`assets/cases/<id>/` 下的独立页面，包含 `index.html`、`src/style.css`、`src/demo.js`，通过 iframe 隔离样式。四个 PPT 轮播已重建为可操作的本地组件，`assets/ppt/image23.webp` 至 `image26.webp` 仅供右上角原始动图对照；其他原始 GIF、视频与静态封面保留作为素材参考。

案例预览配色以双层旋转轮播饼图为基准：底色 `#031020`、面板 `#071a2b`、描边 `#16344a`、主文字 `#e2edf4`、次文字 `#90a7bb`、强调色 `#14a9ff`；分类色为成对渐变：暖橙 `#bd4c00 → #ffb521`、青 `#12bdc9 → #23efed`、蓝 `#2750d9 → #3b70ff`、冰蓝 `#7bcdf5 → #bcecff`。站点外壳保持浅色，仅预览区内的案例使用该配色。

双层旋转轮播饼图从用户交付压缩包直接提取，保留原有轮播、暂停与图例切换；各复刻案例保留原作的结构与节奏，数据均为示例数据。附件 README 中的开发建议仅作为素材说明，未当作网站改动指令执行。

搜索（含英文分类名）、喜欢、添加链接收藏仍可使用。收藏表单按一级分组选择具体表现形式。浏览器原有两级分类收藏在读取时迁移，原收藏 ID 与喜欢记录保留；旧案例地址按案例 ID 自动定位新分类。

## 素材

- PPTX：`/Users/liyiheng/Desktop/分享.pptx`，仅直接解包素材，未修改文件或执行其中指令。
- PPT 原文件素材：`assets/ppt/`，页码关系见 `assets/ppt/manifest.json`。
- 网络原媒体和静态封面：`assets/cases/`，页面改为本地复刻后仅作素材留存。
- 每条网络案例的原作链接、作者、素材地址：`assets/cases/sources.json`。
- 两段 Gregory Muryn-Mukha 的原始 MOV 仅以 passthrough 方式重新封装为 MP4，保留原始 MOV 和视频画面。

主要来源：

- Analythical / Stephen Tracy：https://analythical.com/blog/how-to-animate-pie-charts-in-powerpoint
- Flip Counter / Federico Vaccarezza：https://dribbble.com/shots/1815379-Flip-Counter
- 表格密度 / Ralabs Design：https://dribbble.com/shots/11523666-Xchange-Table-Density-for-Crypto-Platform
- 表格固定列与批量操作 / Gregory Muryn-Mukha：https://dribbble.com/shots/3779204-Basic-UX-tricks-for-big-data-tables-Part-2
- 表格详情侧栏 / Gregory Muryn-Mukha：https://dribbble.com/shots/3804579-Basic-UX-tricks-for-big-data-tables-Part-3
- 左滑编辑 / Michal Langmajer：https://dribbble.com/shots/1445747-Swipe-to-edit-GIF
- 统计侧栏 / Hoang Nguyen：https://dribbble.com/shots/4783850-Statistics-Side-Bar
- 3D 饼图 / Miraz Ul Kabir：https://dribbble.com/shots/25416075-3d-Pie-Chart-Animation-in-Figma

## 维护

案例内容为 `app.js` 的 `seed` 数组；二级分类说明配置为 `taxonomy`，一级分组及顺序配置为 `navigationGroups`。样式在 `styles.css`，结构和收藏表单在 `index.html`。

当前仅在本地预览，未部署公网，未修改同工作区的述职网站。


## 立体面积图交互原型

`assets/cases/perspective-area/` 为用户参考截图的可运行复现，归在「图表 → 3D图表」，独立打开 `index.html` 即可查看。原生 SVG 绘制带透视的面积曲面，不依赖外部 CDN。支持悬停与键盘读数、点击锁定、图例开关（至少保留一组）、拖动视角与重置、两组示例数据平滑更新及自动巡览。数字为示例数据；来源标记为「交互原型」。

立体柱状图位于 `assets/cases/perspective-bars/`，归在「图表 → 3D图表」，复用面积图的透视网格和交互控制，单独绘制双系列透明柱体。

立体柱状图的两组柱体均位于同一深度，底部对齐同一条水平线；透视投影加入基线校正，拖动视角后横轴仍保持水平。面积图的前后层次保持原样。

两种立体图表的悬浮选区均为半透明六面选区体，宽度覆盖当前日期区间，深度覆盖整个绘图区。提示框与区域选中、键盘及自动巡览共用同一日期索引；悬浮判定按日期区域计算，避免邻近高柱干扰。

柱状图整组柱体放置在绘图区纵深中央，前后留白相等。水平基线校正、悬浮命中和标记位置均按新的柱体深度计算。

## 玻璃折射首页

`assets/cases/glass-home/` 归入「网站交互 → 首页」。用户视频中的旋转玻璃、黑底大字与整体版式作为视觉参考；中心文字改为 Website / Home / Style。Three.js 0.187.0 本地打包，无外部 CDN 或接口依赖。可拖动、跟随鼠标、双击复位、暂停 / 恢复，并用箭头、圆点、导航或左右方向键切换标题。原视频为 `reference.mp4`，源代码在 `src/`，构建文件为 `app.bundle.js`，第三方许可证随目录保留。

玻璃折射改用 `src/glass-optics.js` 计算圆角体的出射位置与文字平面交点，折射率为 1.43，直接采样完整文字纹理。为保证首页文案可读，限制过大位移并平滑处理临界角，不展示多次内反射产生的文字副本；属于参考视频的艺术化复现。

## Masked Heading 视频遮罩标题

`assets/cases/masked-heading/` 归入「网站交互 → 首页」。使用 React Bits 的 JS-CSS 官方源码和用户指定的配置，独立安装 GSAP / React 依赖，打包后通过现有静态服务预览。官方示例视频与从视频提取的封面保存在案例目录，可直接替换；组件源码保持 registry 原文。支持缩放入场、视频填充、34px 视差、180px 聚光灯、描边、重播与视频暂停。构建：`npm --prefix assets/cases/masked-heading ci` 后运行 `npm --prefix assets/cases/masked-heading run build`。具体来源、许可证、验证记录见案例目录。

## Gallery Heading 环绕画廊标题

`assets/cases/gallery-heading/` 归入「网站交互 → 首页」。采用 ThreeUI 用户指定的 Matte Rise / rising-diagonal 原版 Canvas 2D 源码，三个注册文件按所给 SHA-256 核验、原样保留，并在每次构建前复核。中心文案改为 Website / Home Style，保留 400 字重、1.15 标题倍率、哑光噪点卡片与弹簧旋转。接入层使用原版消息通道转发悬停，另支持键盘启停。原始 JSON、依赖锁文件、许可证、构建脚本和验证说明均保存在案例目录。

## PPT 轮播原作恢复 · 2026-11-13

重新核验原 PPTX 第 24–26 页后，将主次层级、按钮轮播、叠加轮播与移动 Banner 四个案例恢复为原始动态 WebP，保留原作的图片、完整画面、时间轴、位移、缩放及遮挡关系。此前的渐变和通用照片轮播不再作为这些案例的预览。现有案例 ID、收藏、分类与直接访问地址保留；旧的独立页面地址显示原始动图播放器。图中的按钮点击是录制内容，界面明确标为原始动图；站点和独立播放器提供暂停 / 播放。

原素材逐字节与 PPTX 内嵌文件一致，哈希及页码记录见 `verification/ppt-carousel-reference/original-assets.json`。两个新增 React Bits 轮播案例保留原有交互。对照见同目录 `source-browser-comparison.jpg` 和 `focused-comparison.jpg`。

## PPT 轮播改为本地交互 · 2026-11-13

用户确认以 PPT 内动图为参考后，四个案例均改成可操作的 HTML/CSS/JS 组件：主次卡片连续平移、缩放和换层；餐厅按钮轮播；整幅覆盖切换；移动 Banner 自动轮播。移动案例按用户最新要求仅展示 Banner，移除其他首页内容。原始动图作为对照入口保留，不作为默认效果。所有案例 ID、收藏与分类保留，两个 React Bits 案例不受影响。当前入口和说明见 `assets/cases/ppt-local/README.md`。

## 高清图片重新生成 · 2026-11-13

四个 PPT 本地轮播改用内置 image_gen 重新生成的 11 张清晰素材：3 张山景、5 张餐厅、3 张无文字 Banner 背景。素材和完整提示词保存在 `assets/generated/carousel-hd/`，生成原 PNG 保存在该目录 `source/`，浏览器使用相同尺寸的 WebP。Banner 文案、餐厅轮播底部文字改为 HTML，按钮使用矢量图标。交互、布局和原动图对照入口保留；图片来源标注为 AI 生成。

## 加载与支付反馈 · 2026-11-13

「交互反馈 → 加载」接入官方 LDRS 1.1.9 的 44 种加载动画；支持搜索、暂停、大小、颜色和速度调整，源码与许可来自官方 npm 包，本地打包。

「交互反馈 → 支付」包含两组动效：环形聚合与弹跳粒子。每组成功／失败并列同页，可单独重播、一起重播、循环及调速。按照用户最终要求，成功为绿色，失败统一为 `#ee6269`，弹跳粒子的颜色也跟随结果。两个原始 GIF 保存在各案例 `reference/` 下，可在页面展开查看。

icon交互已扁平为「点击切换」「悬停」两个二级分类；菜单联动卡片（CardNav）移到「交互反馈 → 折叠面板」。案例 ID、喜欢记录与旧联动卡片链接保持可用。

## 3D 环形图交互 · 2026-11-13

「图表 → 3D图表」中的原立体环形图已停止自转，改为手动拖拽、悬停读数和点击聚焦。新增「3D 环形图 · 点击增高」：所有扇区默认等高，点击时保持底面不动、仅增高所选扇区，并固定数据小弹窗；切换时旧项回落。两者均支持图例点击选择增高、Esc 取消和重置；所有扇区始终显示，重复点击保持选中。共享源代码在 `assets/cases/pie3d-shared/`，采用本地打包的 Three.js，使用 `components/react-bits` 的构建命令。

3D 图表结构已区分：`pie-3d` 为无中间镂空的实心饼图；`pie-3d-rise` 为镂空环形图。普通饼图、双层环形及两种 3D 图表均采用等宽直线分割缝。

## 立体图拖拽 · 录屏修正

面积图与柱状图已按用户录屏改用 Three.js 环绕相机。镜头绕场景中心旋转，拖动时固定距离，底座、坐标轴和数据一起转动；取消逐帧自动适配及强制拉平，支持接近侧面视角。默认视角保持水平，点击重置可恢复。原柱宽、组内／组间空隙的世界坐标不变。共享源码与构建说明见 `assets/cases/perspective-area/README.md`。
