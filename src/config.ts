import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

// 网站整体配置
export const siteConfig: SiteConfig = {
  title: 'Blog', // 网站标题
  subtitle: 'yangzhe', // 网站副标题
  lang: 'zh_CN', // 网站语言，可选值：'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 250, // 默认主题颜色的色相，范围从 0 到 360。示例：红色: 0, 青色: 250, 粉色: 345
    fixed: true, // 是否隐藏主题颜色选择器（true: 隐藏, false: 显示）
  },
  banner: {
    enable: true, // 是否启用横幅（true: 启用, false: 禁用）
    src: 'assets/images/demo-banner.png', // 横幅图片路径，基于 /src 目录，若以 '/' 开头则基于 /public 目录
    position: 'center', // 图片位置，相当于 object-position，支持 'top', 'center', 'bottom'，默认 'center'
    credit: {
      enable: false, // 是否显示横幅图片的来源信息
      text: '', // 图片来源文字描述
      url: '', // 图片来源链接地址（可选）
    }
  },
  toc: {
    enable: true, // 是否显示文章目录（true: 显示, false: 隐藏）
    depth: 3, // 目录显示的标题深度，范围 1-3
  },
  favicon: [
    // 自定义网站图标（favicon）。留空则使用默认图标
    // {
    //   src: '/favicon/icon.png', // 图标路径，基于 /public 目录
    //   theme: 'light', // 图标对应的主题（可选: 'light' 或 'dark'）
    //   sizes: '32x32', // 图标尺寸（可选）
    // }
  ]
}

// 导航栏配置
export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home, // 内置首页链接
    LinkPreset.Archive, // 内置归档链接
    LinkPreset.About, // 内置关于页面链接
    {
      name: 'GitHub', // 链接名称
      url: 'https://github.com/yangzhe0', // 链接地址，内部链接不包含基础路径（自动添加）
      external: true, // 是否为外部链接（true: 外部链接并在新标签页打开）
    },
  ],
}

// 个人资料配置
export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-avatar.png', // 头像路径，基于 /src 目录，若以 '/' 开头则基于 /public 目录
  name: 'Jones Ray', // 个人名称
  bio: '站在巨人的肩膀上总会看的更远', // 个人简介
  links: [
    {
      name: 'BiliBili', // 链接名称
      icon: 'fa6-brands:bilibili', // 图标代码，参见 https://icones.js.org/
      url: 'https://space.bilibili.com/290208229', // 链接地址
    },
    {
      name: 'Weibo',
      icon: 'fa6-brands:weibo',
      url: 'https://www.weibo.com/7527059128',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/yangzhe0',
    },
  ],
}

// 版权配置
export const licenseConfig: LicenseConfig = {
  enable: false, // 是否启用版权信息
  name: 'CC BY-NC-SA 4.0', // 版权协议名称
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/', // 版权协议链接
}
