# 🔧 Environment Highlighter Chrome Extension

A lightweight Chrome extension that visually distinguishes between environments (Development, Staging, Production) when using [revplan.ideasrms.com](https://revplan.ideasrms.com).

---

## 🚀 Features

- 🔴 **Production** → Soft red background + blinking tab title
- 🟡 **Staging** → Soft yellow background
- 🟢 **Development** → Soft green background
- Automatically detects the environment based on hostname
- Works even after page redirects or delayed loads

---

## 🖥 Supported Hostnames

| Hostname                     | Environment | Color     |
| ---------------------------- | ----------- | --------- |
| `revplan.ideasrms.com`       | Production  | `#ffcccc` |
| `revplan.stage.ideasrms.com` | Staging     | `#fff4cc` |
| `revplan.dev.ideasrms.com`   | Development | `#d5f5e3` |

---

## 📦 How to Install Locally

1. Clone or download [this](https://github.com/yugalteotia/Env-highlighter-extension.git) repository.
2. Open Google Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (top-right corner)
4. Click **Load unpacked**
5. Select the root folder of this repository

That's it! The extension will now run on all supported environments.

---

## 📄 Customization

Want to support additional hostnames, change colors, or adjust banner styles?

Edit the `env-highlighter.js` file inside the extension folder:

```js
if (hostname === "your.custom.host.com") {
  bgColor = "#yourColor";
  label = "YOUR ENV";
  shouldBlink = true;
}
```
