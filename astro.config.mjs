import { defineConfig } from 'astro/config'

// 站点域名。上线前请在 src/config/site.js 中把 DOMAIN 改成真实域名，
// 并同步更新此处的 site（canonical 依赖它）与 public/sitemap.xml / public/robots.txt。
const SITE = 'https://example.com'

export default defineConfig({
  site: SITE,
  // 纯静态输出，构建产物可直接扔到任意静态托管 / CDN
  output: 'static',
  build: {
    // 目录式输出：/about -> /about/index.html，利于静态托管
    format: 'directory',
    assets: 'assets',
    inlineStylesheets: 'auto'
  }
})
