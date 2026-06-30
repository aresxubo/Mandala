# 修法观想曼茶罗网页

这是一个纯前端的三十七堆曼茶罗观想播放页面，入口文件在 `web/mandala/index.html`。

## 目录结构

- `web/mandala/index.html`：页面入口。
- `web/mandala/styles.css`：视觉样式与动画。
- `web/mandala/script.js`：播放、键盘、触控、矢量定位逻辑。
- `web/mandala/index.html` 内的 `mandala-backdrop`：页面底盘矢量背景。
- `web/mandala/assets/layout/`：临时保留的原位图参考层，用于和矢量背景叠放校对。
- `web/mandala/assets/details/`：当前播放使用的 14-37 高清插图。
- `web/mandala/assets/source-grids/`：用于重新切割细节图的 16 宫格源图。
- `web/mandala/assets/qa/`：当前保留的裁剪检查图。
- `web/mandala/prompts/`：AI 绘图提示词记录。
- `output/mandala/`：保留的总观想图输出。

## 本地打开

桌面端可以直接打开：

```text
web/mandala/index.html
```

移动端建议在同一局域网内临时启动静态服务：

```bash
cd web/mandala
python3 -m http.server 8123
```

然后用手机访问：

```text
http://<Mac 局域网 IP>:8123/index.html
```
