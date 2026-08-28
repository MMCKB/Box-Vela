# Box Vela

> 运行在 Xiaomi Vela OS 上的独立工具箱快应用。

![Build Status](https://github.com/MMCKB/Box-Vela/actions/workflows/build.yml/badge.svg)
[![GitHub Release](https://img.shields.io/github/v/release/MMCKB/Box-Vela)](https://github.com/MMCKB/Box-Vela/releases)
[![License](https://img.shields.io/github/license/MMCKB/Box-Vela)](LICENSE)

## 📖 功能

- **天气** — 多城市天气查询（和风天气 API，需自行配置密钥），包含逐时/逐日预报、空气质量、日出日落、生活指数
- **计算器** — 基础四则运算 + 单位换算（长度/重量/速度/面积/温度）
- **2048** — 经典 2048 小游戏，支持撤销与最高分记录
- **AI 助手** — 自定义 OpenAI 兼容接口的聊天助手，支持多 Provider/多模型配置
- **待办** — 待办事项管理，按今天/即将到来分组，支持日期时间提醒
- **倒数日** — 纪念日/倒计时管理，支持指定日期与前后天数两种模式
- **便签** — 密码保护的私密便签（AES 加密存储），支持多便签编辑

键盘输入由 [Vela_input_method](https://github.com/MMCKB/Vela_input_method) 提供，支持拼音九键/全键、中英文切换。

## 📥 安装

对于普通用户，只需从 [Releases](https://github.com/MMCKB/Box-Vela/releases) 下载 RPK 文件（`box-vela-RedmiWatch5_6-*.rpk`），然后安装到设备上即可。

- 包名：`com.mmckb.boxvela`
- 已适配设备：Redmi Watch 5/6（方屏 432）

## 🛠️ 开发环境搭建

克隆此仓库，然后在 `Aiot IDE` 中打开它。

本项目使用 yarn 作为包管理器：

```bash
# 安装 yarn（debian 系 linux）
sudo apt install yarn
# 安装 yarn（windows）
winget install Yarn.Yarn
# 在项目目录下执行以安装项目依赖
yarn

# 本地构建
VARIANT_DESIGN_WIDTH=432 node scripts/build-rpk.js
```

然后像普通快应用一样进行开发即可。

开发文档可参考小米的[官方文档](https://iot.mi.com/vela/quickapp)。

## 📄 许可证

本项目基于 [GPL-3.0](LICENSE) 许可证开源。
