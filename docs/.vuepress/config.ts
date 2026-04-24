/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from 'path';
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types';
import dayjs from 'dayjs';
import baiduCode from './config/baiduCode';
import htmlModules from './config/htmlModules';

const DOMAIN_NAME = 'xugaoyi.com';
const WEB_SITE = `https://${DOMAIN_NAME}`;

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Evan',
      description:
        '专注全栈技术与运维实践，覆盖前端、后端、数据库、K8s、DevOps、网络安全、系统监控、云原生、跨境电商、投资分析的一站式技术博客。,',
    },
  },

  // 主题配置
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },

      // 1. 开发体系
      {
        text: '开发',
        link: '/dev/',
        items: [
          {
            text: '前端开发',
            items: [
              { text: 'HTML/CSS', link: '/notes/html-css/' },
              { text: 'Webpack/Vite', link: '/notes/build-tools/' },
              { text: '测试框架', link: '/notes/testing-frameworks/' },
            ],
          },
          {
            text: '后端开发',
            items: [
              { text: 'Python', link: '/notes/python/' },
              { text: 'Shell', link: '/notes/shell/' },
              { text: 'GoLang', link: '/notes/GoLang/' },
              { text: 'Rust', link: '/notes/Rust/' },
            ],
          },
          {
            text: '移动开发',
            items: [
              { text: 'Swift (iOS)', link: '/notes/swift/' },
              { text: 'Kotlin (Android)', link: '/notes/kotlin/' },
            ],
          },
          {
            text: '数据库',
            items: [
              { text: 'MySQL', link: '/notes/mysql/' },
              { text: 'PostgreSQL', link: '/notes/postgresql/' },
              { text: 'MongoDB', link: '/notes/mongodb/' },
              { text: 'Redis', link: '/notes/redis/' },
            ],
          },
          {
            text: '开发工具',
            items: [
              { text: 'vscode', link: '/notes/vscode/' },
              { text: 'uv', link: '/notes/uv/' },
              { text: 'VIM', link: '/notes/vim/' },
              { text: 'nvm', link: '/notes/nvm/' },
              { text: 'fish', link: '/notes/fish/' },
            ],
          },
        ],
      },

      // 2. 运维体系
      {
        text: '运维',
        link: '/ops/',
        items: [
          {
            text: '虚拟化技术',
            items: [
              { text: 'KVM/QEMU', link: '/notes/kvm-qemu/' },
              { text: 'Proxmox VE', link: '/notes/pve/' },
              { text: 'oVirt', link: '/notes/ovirt/' },
              { text: 'Hyper-V', link: '/notes/hyper-v/' },
            ],
          },
          {
            text: '容器化',
            items: [
              { text: 'Docker', link: '/notes/docker/' },
              { text: 'Kubernetes', link: '/notes/kubernetes/' },
              { text: 'KVM', link: '/notes/KVM/' },
              { text: '服务网格', link: '/notes/service-mesh/' },
              { text: '容器安全', link: '/notes/container-security/' },
            ],
          },
          {
            text: 'DevOps',
            items: [
              { text: 'CI/CD', link: '/notes/cicd-pipeline/' },
              { text: 'Git', link: '/notes/git/' },
              { text: '自动化部署', link: '/notes/automation-deployment/' },
              { text: '企业实践', link: '/notes/devops-enterprise/' },
            ],
          },
          {
            text: '系统安全',
            items: [
              { text: '漏洞管理', link: '/notes/vulnerability-management/' },
              { text: '入侵检测', link: '/notes/ids-ips/' },
              { text: '加密技术', link: '/notes/encryption/' },
            ],
          },
        ],
      },

      // 3. 网络体系
      {
        text: '网络',
        link: '/network/',
        items: [
          {
            text: '网络协议',
            items: [
              { text: 'TCP/IP', link: '/notes/tcpip-basics/' },
              { text: 'HTTP/HTTPS', link: '/notes/http-protocol/' },
              { text: 'BGP协议', link: '/notes/bgp-protocol/' },
            ],
          },
          {
            text: '网络设备',
            items: [
              { text: '华为交换机', link: '/notes/huawei-switches/' },
              { text: '华为路由器', link: '/notes/huawei-routers/' },
              { text: '华为防火墙', link: '/notes/huawei-firewalls/' },
              { text: '思科IOS', link: '/notes/cisco-ios/' },
              { text: '思科ASA', link: '/notes/cisco-asa/' },
            ],
          },
          {
            text: '网络服务',
            items: [
              { text: 'Nginx', link: '/notes/nginx/' },
              { text: 'CDN/负载均衡', link: '/notes/cdn-load-balancing/' },
              { text: 'Samba', link: '/notes/samba/' },
            ],
          },
          {
            text: '网络安全',
            items: [
              { text: 'WireGuard', link: '/notes/wireguard/' },
              { text: '防火墙策略', link: '/notes/firewall-config/' },
              { text: '网络隔离', link: '/notes/network-segmentation/' },
            ],
          },
        ],
      },

      // 4. 数据体系
      {
        text: '数据',
        link: '/data/',
        items: [
          {
            text: '数据工程',
            items: [
              { text: 'Kafka', link: '/notes/kafka/' },
              { text: 'Flume', link: '/notes/flume/' },
            ],
          },
          {
            text: '数据分析',
            items: [
              { text: 'ELK Stack', link: '/notes/elk/' },
              { text: 'Spark', link: '/notes/spark/' },
            ],
          },
          {
            text: '数据可视化',
            items: [
              { text: 'Grafana', link: '/notes/grafana/' },
              { text: 'Tableau', link: '/notes/tableau/' },
            ],
          },
        ],
      },

      // 5. 安全体系
      {
        text: '安全',
        link: '/security/',
        items: [
          {
            text: '应用安全',
            items: [
              { text: 'OWASP Top 10', link: '/notes/owasp/' },
              { text: '代码审计', link: '/notes/code-audit/' },
            ],
          },
          {
            text: '云安全',
            items: [
              { text: 'CSPM', link: '/notes/csmp/' },
              { text: '云原生安全', link: '/notes/cloud-native-security/' },
            ],
          },
          {
            text: '终端安全',
            items: [
              { text: 'EDR解决方案', link: '/notes/edr/' },
              { text: '主机加固', link: '/notes/host-hardening/' },
            ],
          },
        ],
      },

      // 6. 系统与监控【已新增：Pop!_OS24.04 / Debian13 / Ubuntu24.04】
      {
        text: '系统',
        link: '/system/',
        items: [
          {
            text: '操作系统',
            items: [
              {
                text: 'Linux 系统',
                items: [
                  { text: 'Pop!_OS 24.04', link: '/notes/pop-os-2404/' },
                  { text: 'Debian 13', link: '/notes/debian13/' },
                  { text: 'Ubuntu 24.04', link: '/notes/ubuntu2404/' },
                ],
              },
              { text: 'Windows', link: '/notes/windows/' },
              { text: 'Firewall', link: '/notes/firewall/' },
              { text: 'mount', link: '/notes/mount/' },
            ],
          },
          {
            text: '系统监控',
            items: [
              { text: 'Prometheus', link: '/notes/prometheus/' },
              { text: 'Zabbix', link: '/notes/zabbix/' },
            ],
          },
          {
            text: '性能优化',
            items: [
              { text: 'Shell脚本', link: '/notes/shell-script/' },
              { text: '系统调优', link: '/notes/system-performance/' },
            ],
          },
        ],
      },

      // 7. 技术栈
      {
        text: '技术栈',
        link: '/tech-stack/',
        items: [
          {
            text: '编程语言',
            items: [
              { text: 'JavaScript全栈', link: '/notes/js-ecosystem/' },
              { text: 'Python工程化', link: '/notes/python-engineering/' },
              { text: 'Go云原生', link: '/notes/go-cloudnative/' },
            ],
          },
          {
            text: '架构模式',
            items: [
              { text: '事件驱动架构', link: '/notes/event-driven/' },
              { text: 'Serverless架构', link: '/notes/serverless/' },
            ],
          },
        ],
      },

      // 8. 扩展领域
      {
        text: '跨境电商',
        link: '/ecommerce/',
        items: [
          { text: '抖音', link: '/notes/douyin/' },
          { text: '视频号', link: '/notes/shipinhao/' },
          { text: '淘宝', link: '/notes/taobao/' },
          { text: '小红书', link: '/notes/xiaohongshu/' },
          { text: '支付系统', link: '/notes/payment-system/' },
          { text: '物流系统', link: '/notes/logistics-supply-chain/' },
        ],
      },
      {
        text: '投资',
        link: '/investment/',
        items: [
          { text: '股票分析', link: '/notes/stock/' },
          { text: '基金定投', link: '/notes/fund/' },
          { text: '算法交易', link: '/notes/quantitative-trading/' },
          { text: '风险管理', link: '/notes/risk-management/' },
        ],
      },

      // 9. 索引与关于
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
      { text: '关于', link: '/about/' },
    ],

    sidebarDepth: 2,
    logo: '/img/logo.png',
    repo: 'mtl-123/vuepress-theme-vdoing',
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑',

    sidebar: 'structuring',

    author: {
      name: 'MeiChen',
      link: 'https://github.com/mtl-123',
    },

    blogger: {
      avatar: 'https://www.mms591.com/www.mms591.com-photo/2013051721/1-13051H11938.jpg',
      name: 'MeiChen',
      slogan: '运维界的小学生',
    },

    social: {
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:894072666@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/mtl-123',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=755597173',
        },
      ],
    },

    footer: {
      createYear: 2019,
      copyrightInfo:
        'MeiChen | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a> | <a href="http://beian.miit.gov.cn/" target="_blank">桂ICP备2024034950号</a> | <img src="/img/beian.png" style="width: 15px; margin-bottom: -3px;" /> <a href="https://beian.mps.gov.cn/#/query/webSearch?code=45142202000030" rel="noreferrer" target="_blank">桂公网安备45142202000030</a>',
    },

    extendFrontmatter: {
      author: {
        name: 'MeiChen',
        link: 'https://github.com/mtl-123',
      },
    },

    htmlModules,
  },

  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          '专注全栈技术与运维实践，覆盖前端、后端、数据库、K8s、DevOps、网络安全、系统监控、云原生、跨境电商、投资分析的一站式技术博客。',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }],
  ],

  plugins: <UserPlugins>[
    [
      'sitemap',
      {
        hostname: WEB_SITE,
      },
    ],

    'vuepress-plugin-baidu-autopush',

    [
      'vuepress-plugin-baidu-tongji',
      {
        hm: baiduCode,
      },
    ],

    [
      'thirdparty-search',
      {
        thirdparty: [
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=',
          },
          {
            title: '在Runoob中搜索',
            frontUrl: 'https://www.runoob.com/?s=',
          },
          {
            title: '在Vue API中搜索',
            frontUrl: 'https://cn.vuejs.org/v2/api/#',
          },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          },
          {
            title: '通过百度搜索本站的',
            frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
          },
        ],
      },
    ],

    [
      'one-click-copy',
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],

    [
      'demo-block',
      {
        settings: {
          jsfiddle: false,
          codepen: true,
          horizontal: false,
        },
      },
    ],

    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],

    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk',
        options: {
          clientID: 'a6e1355287947096b88b',
          clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
          repo: 'blog-gitalk-comment',
          owner: 'xugaoyi',
          admin: ['xugaoyi'],
          pagerDirection: 'last',
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>',
          title: '「评论」<%- frontmatter.title %>',
          labels: ['Gitalk', 'Comment'],
          body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
        },
      },
    ],

    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss');
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'],
  },

  extraWatchFiles: ['.vuepress/config.ts', '.vuepress/config/htmlModules.ts'],
});
