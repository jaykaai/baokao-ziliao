<div align="center">

# 报考材料夹 · 官网

**京考报名照片处理与材料 PDF 打包工具 —— 微信小程序「报考材料夹」的官方站点**

[![Deploy](https://github.com/jaykaai/baokao-ziliao/actions/workflows/deploy.yml/badge.svg)](https://github.com/jaykaai/baokao-ziliao/actions/workflows/deploy.yml)
[![Astro](https://img.shields.io/badge/Astro-4.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-222222?logo=githubpages&logoColor=white)](https://www.jiyou.site)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

[在线访问](https://www.jiyou.site) · [功能说明](#功能特性) · [快速开始](#快速开始) · [部署](#部署) · [隐私说明](#隐私与合规)

</div>

---

## 这是什么

报考系统对报名材料的要求非常具体：证件照必须是二寸（34×45mm）、JPG、体积 **35–100KB**、像素宽 >400 高 >600、背景不能有装饰；多份材料还要合成**单个不超过 3M 的 PDF**。用电脑处理要装 PS，用在线工具又要担心身份证照片被上传。

**报考材料夹**是一款微信小程序，把这两件事在手机上一次做完：**照片全程在本地处理，不上传服务器**。

本仓库是该小程序的**内容与工具官网**，提供规格查询、材料清单、驳回自查等工具页，并承担搜索流量到小程序的转化。

<table>
  <tr>
    <td align="center" width="200">
      <img src="./public/qrcode.jpg" alt="报考材料夹 小程序码" width="150" />
      <br />
      <sub><b>微信扫码直接使用</b></sub>
    </td>
    <td>
      <b>微信小程序：报考材料夹</b>
      <br /><br />
      ✅ 证件照裁剪 / 压缩 / 换底色<br />
      ✅ 多张材料照片合成单个 PDF<br />
      ✅ 官方规格在线换算与校验<br />
      ✅ 分身份材料清单，可勾选核对<br />
      ✅ 照片本地处理，不上传服务器
    </td>
  </tr>
</table>

---

## 功能特性

### 小程序侧

| 功能 | 说明 |
| --- | --- |
| **证件照裁剪** | 一键裁成二寸 34×45mm，自动识别人脸位置与比例 |
| **照片压缩** | 智能压缩到 35–100KB 区间，同时保证像素不低于官方下限 |
| **更换底色** | 白底 / 蓝底 / 红底一键替换，纯色背景无装饰 |
| **材料打包 PDF** | 多张材料照片合成单个 PDF，自动控制在 3M 以内 |
| **边缘识别矫正** | 自动识别纸张边缘、矫正拍摄透视歪斜 |
| **灵活拼页** | 支持 1 / 2 / 4 格拼页，顺序可长按拖动调整 |

### 本站（Web）

| 页面 | 路径 | 内容 |
| --- | --- | --- |
| 首页 | `/` | 功能介绍、规格速览、扫码入口 |
| 证件照规格详解 | `/jingkao-idphoto-spec` | 完整官方要求 + 毫米/像素换算计算器 |
| 照片压缩方法 | `/compress-photo` | 手机上把照片压到 100KB 以内的 4 种办法 |
| 材料照片转 PDF | `/photos-to-pdf` | 多张材料合成单个 ≤3M PDF 的做法 |
| 报名材料清单 | `/material-checklist` | 应届 / 社会人员 / 留学回国 / 京外生源分类清单 |
| 驳回自查表 | `/reject-checklist` | 5 类高频驳回原因，附检查与补救方法 |
| 关于 / 隐私 | `/about` `/privacy` | 项目说明与隐私政策 |

---

## 技术栈

- **[Astro 4](https://astro.build)** —— 内容型站点优先，默认零 JS 输出
- **纯静态输出**（`output: 'static'`）—— 构建产物可直接托管到任意静态服务器 / CDN
- **原生 CSS**，无 UI 框架依赖，首屏无阻塞
- **结构化数据**：`SoftwareApplication` / `FAQPage` / `HowTo` JSON-LD
- **GitHub Actions + GitHub Pages** —— push 即部署

---

## 快速开始

### 环境要求

- Node.js `>= 18.17.1`（推荐 20 LTS）
- npm `>= 9`

### 本地开发

```bash
# 1. 克隆仓库
git clone https://github.com/jaykaai/baokao-ziliao.git
cd baokao-ziliao

# 2. 安装依赖
npm install

# 3. 启动开发服务器（默认 http://localhost:4321）
npm run dev
```

### 可用命令

| 命令 | 说明 |
| --- | --- |
| `npm run dev` | 启动本地开发服务器，修改热更新 |
| `npm run build` | 构建静态产物到 `dist/` |
| `npm run preview` | 本地预览构建产物 |
| `npm run astro` | 调用 Astro CLI（如 `astro check`） |

---

## 项目结构

```
.
├── public/                    # 静态资源，原样复制到产物根目录
│   ├── CNAME                  # 自定义域名
│   ├── qrcode.jpg             # 小程序码（400×400，Web 用）
│   ├── qrcode-print.jpg       # 小程序码原图（印刷物料用）
│   ├── og-image.png           # OG 分享图 1200×630
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── config/site.js         # ★ 全站配置：品牌、域名、备案号、官方规格
│   ├── layouts/
│   │   └── BaseLayout.astro   # 页头 / 页脚 / SEO / 结构化数据
│   ├── components/
│   │   ├── SpecCalculator.astro      # 毫米 ↔ 像素换算计算器
│   │   ├── MaterialChecklist.astro   # 材料清单勾选组件
│   │   ├── FaqSection.astro          # FAQ 区块
│   │   ├── FaqJsonLd.astro           # FAQPage 结构化数据
│   │   └── HowToJsonLd.astro         # HowTo 结构化数据
│   ├── pages/                 # 文件路由，一个 .astro 对应一个页面
│   ├── styles/
│   └── env.d.ts
├── .github/workflows/deploy.yml   # 自动部署工作流
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 配置

> **全站品牌、域名、备案号、官方规格集中在一个文件：`src/config/site.js`。**
> 页面内禁止硬编码这些信息，改品牌名或换域名只改这一处即可。

需要修改的字段（上线前必填）：

| 字段 | 说明 | 状态 |
| --- | --- | --- |
| `BRAND` | 品牌名 / 小程序名 | ✅ 已配置 |
| `DOMAIN` | 上线域名（需与 `astro.config.mjs` 的 `site` 同步） | ✅ 已配置 |
| `ICP` | ICP 备案号（页脚展示） | ⏳ 待填写 |
| `CONTACT_EMAIL` | 联系邮箱（`/about` 页使用） | ⏳ 待填写 |
| `QRCODE_PATH` | 小程序码路径 | ✅ 已配置 |
| `ID_PHOTO_SPEC` | 证件照官方规格 | ✅ 已配置（请核对最新公告） |
| `YEAR` / `OFFICIAL_NAME` | 年度与官方公告名称 | ✅ 已配置 |

修改域名时需要同步更新三处：`src/config/site.js` 的 `DOMAIN`、`astro.config.mjs` 的 `site`、`public/CNAME`。

---

## 部署

本项目已配置 **push 即部署**，无需手动操作：

```bash
npm run build      # 本地先验证构建
git add -A
git commit -m "your message"
git push origin main
```

`.github/workflows/deploy.yml` 会在 push 到 `main` 时自动触发：

```
push → actions/checkout → withastro/action 构建 → actions/deploy-pages 发布 → 线上生效
```

> 首次使用需在仓库 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**。
> 自定义域名在 `public/CNAME` 中配置，每次部署会自动写入。

---

## SEO

站点面向以下搜索场景建设内容（均为内容页，不做关键词堆砌或隐藏文字）：

- 京考报名照片要求 / 二寸照片尺寸 / 34×45mm 像素换算
- 报名照片太大传不上去 / 照片怎么压缩到 100KB
- 多张材料照片合成 PDF / PDF 怎么控制在 3M 以内
- 公务员报名材料清单 / 报名材料被驳回怎么办

每个内容页均输出 `title` / `description` / `canonical`，并附带对应的结构化数据（FAQPage / HowTo），`robots.txt` 与 `sitemap.xml` 位于 `public/`。

---

## 隐私与合规

- **照片处理全程在手机本地完成，不上传服务器。** 小程序不收集、不存储用户证件照与材料照片。
- 本站为**第三方工具**，与公务员主管部门无任何隶属或授权关系。
- 所有材料要求以官方报考指南的最新公告为准，本站内容仅供参照。
- 详见 [隐私政策](https://www.jiyou.site/privacy)。

---

## 路线图

- [x] 证件照裁剪 / 压缩 / 换底色
- [x] 多张材料照片 → 单个 PDF（自动控 3M）
- [x] 分身份材料清单与驳回自查
- [x] 官网静态化 + 自动部署
- [ ] 支持更多省市的报名规格配置
- [ ] 证件照合规性自动预检（尺寸 / 体积 / 背景）
- [ ] PDF 体积预算的可视化调节

---

## 参与贡献

欢迎提交 Issue 与 Pull Request：

1. Fork 本仓库
2. 创建分支：`git checkout -b feat/your-feature`
3. 提交改动：`git commit -m "feat: 描述你的改动"`
4. 推送分支：`git push origin feat/your-feature`
5. 发起 Pull Request

提交前请确保 `npm run build` 通过。发现规格信息有误（与官方公告不一致）请务必提 Issue，准确性对本项目的价值最高。

---

## 开源许可

本项目基于 [MIT License](./LICENSE) 开源。

---

<div align="center">

**微信搜索小程序「报考材料夹」，或扫描上方小程序码即可使用。**

[在线访问](https://www.jiyou.site) · [提交 Issue](https://github.com/jaykaai/baokao-ziliao/issues)

<sub>本站为第三方工具，材料要求请以官方报考指南为准。</sub>

</div>
