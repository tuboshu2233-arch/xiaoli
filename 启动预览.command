#!/bin/zsh
cd -- "${0:A:h}" || exit 1
print '拾动 · 本地预览：http://127.0.0.1:4317/'
print '保持此窗口打开；按 Control+C 停止。'
python3 -m http.server 4317 --bind 127.0.0.1
