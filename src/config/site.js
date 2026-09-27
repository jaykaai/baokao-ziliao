/**
 * src/config/site.js
 * ------------------------------------------------------------
 * 全站品牌与上线配置集中于此。页面中禁止硬编码品牌名、域名、备案号等，
 * 一律从这里取。改名（如「报考材料夹」→「证件照材料夹」）只需改 BRAND。
 *
 * 占位符说明：值为 null / '' 的项表示「待项目负责人提供」，上线前必须替换。
 */

export const BRAND = '报考材料夹'

// 小程序名称（与 BRAND 一致；若小程序审核改名，这里同步改）
export const MINI_PROGRAM_NAME = BRAND

// 上线域名（canonical / OG / sitemap 都依赖它）
// 注意：astro.config.mjs 里的 site 字段也要同步改成同一个值
export const DOMAIN = 'https://example.com'

// ICP 备案号（备案完成后填入；上线前页脚必须有）
export const ICP = ''

// 联系邮箱（/about 页使用）
export const CONTACT_EMAIL = ''

// 小程序码图片路径（MP 后台生成「无限码」，路径 /pages/index/index，建议 400px）
// 放在 public/qrcode.png，上线前替换为正式码（不要用开发工具临时码）
export const QRCODE_PATH = '/qrcode.png'

// OG 分享图路径（建议 1200×630）
export const OG_IMAGE = '/og-image.png'

// 小程序页面路径（生成无限码时用）
export const MINI_PROGRAM_PATH = '/pages/index/index'

// 年份表述：当前按 2026 年度写；若实际是 2027 年度请改这里
export const YEAR = '2026'

// 官方公告名称（用于免责声明与引用标注）
export const OFFICIAL_NAME = '北京市 2026 年度考试录用公务员报考指南'

// 官方报名系统入口（参考链接，非本站功能）
export const OFFICIAL_URL = 'https://www.bjrbj.gov.cn/'

// 页脚免责声明文案
export const DISCLAIMER =
  '本站为第三方工具，与公务员主管部门无任何隶属或授权关系。材料要求以报考指南的官方公告为准。'

/**
 * 证件照官方要求（取自小程序 config.js 的 idPhoto 配置，
 * 上线前请再核对一次官方最新公告）
 */
export const ID_PHOTO_SPEC = {
  sizeMm: { w: 34, h: 45 }, // 二寸 34×45mm
  format: 'JPG',
  minKB: 35,
  maxKB: 100,
  targetKB: 70, // 建议输出控制在 70KB 左右留安全余量
  minPxW: 400, // 宽 > 400
  minPxH: 600, // 高 > 600
  outPxW: 480, // 本工具推荐输出
  outPxH: 635
}

/** PDF 限制 */
export const PDF_LIMIT_MB = 3

/** 打包价格 */
export const PACK_PRICE = '4.99 元'

/** 四个身份材料模板（与小程序 utils/templates.js 完全一致） */
export const MATERIAL_TEMPLATES = [
  {
    key: 'graduate',
    name: '应届毕业生',
    desc: '学生证 + 就业推荐表',
    items: ['身份证正面', '身份证反面', '学生证', '毕业生就业推荐表', '学历学位证书', '报名登记表']
  },
  {
    key: 'social',
    name: '社会人员',
    desc: '户口本 + 社保 + 合同',
    items: [
      '身份证正面',
      '身份证反面',
      '户口本首页',
      '户口本本人页',
      '社保缴费证明',
      '劳动合同',
      '学历学位证书'
    ]
  },
  {
    key: 'overseas',
    name: '留学回国',
    desc: '学历认证 + 出入境记录',
    items: [
      '身份证正面',
      '身份证反面',
      '教育部学历认证',
      '出入境记录',
      '国外学历学位证书',
      '户口本本人页'
    ]
  },
  {
    key: 'outside',
    name: '京外生源',
    desc: '另需校级荣誉证书',
    items: ['身份证正面', '身份证反面', '学生证', '毕业生就业推荐表', '校级荣誉证书', '在校成绩单']
  }
]

/** 高频驳回原因（与小程序 config.js 的 rejectReasons 一致） */
export const REJECT_REASONS = [
  {
    reason: '证件照背景有装饰或非纯色',
    check: '把照片放大看四个角，是否有头发丝、衣物、背景杂物或渐变色。',
    fix: '在小程序里选择「白底」或「蓝底」一键替换纯色背景。'
  },
  {
    reason: '材料照片模糊，关键信息（身份证号、公章、签字）无法辨认',
    check: '放大到 100% 查看身份证号、公章、签字是否清晰可读。',
    fix: '重拍时拿稳手机、光线充足、对焦在文字上；不要拍屏幕或复印件。'
  },
  {
    reason: '材料顺序与官方清单不一致',
    check: '对照官方报考指南的材料清单，核对 PDF 内页顺序。',
    fix: '在小程序打包页长按拖动调整顺序，与官方清单保持一致。'
  },
  {
    reason: '缺少盖章页 / 签字页',
    check: '检查需要盖章或签字的页面是否都拍进去了（如就业推荐表学校意见页）。',
    fix: '补拍缺失的盖章/签字页，重新打包。'
  },
  {
    reason: '单个 PDF 超过 3M',
    check: '导出后查看文件大小是否超过 3MB。',
    fix: '在打包页逐张调低画质，或减少不必要的页面，本工具会自动控制在 3M 以内。'
  }
]
