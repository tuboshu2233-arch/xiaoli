# 轮播图片补全 — 2026-11-13

图片轮播的六个案例均使用本地照片。DepthCarousel 保留已有五张图片；ScrollStack 从文字示例改为五张图片卡片；主次层级、按钮轮播、图片叠加和移动 Banner 均由渐变占位替换为五张图片。各案例共用 depth-carousel/images 下的缓存照片，来源见该目录的 image-sources.json。

构建检查：React Bits 上游 JSX/CSS 源码保持一致；只调整案例包装与素材配置。浏览器检查六个案例当前渲染的全部 img 均已成功加载；主次层级圆点、按钮下一张、叠加轮播下一张及 Banner 湖光山色选择正确。Banner 原脚本引用旧 DOM 的问题已修复。
