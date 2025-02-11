import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  base: '/baiqi039/',
  title: 'Baiqi039',
  description: '',
  
  themeConfig: {

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',

    nav: [
      { text: '设定',
        items: [
          { text: '脑洞', link: '/setting/brainstorm'},
          { text: '人物', link: '/setting/character'},
          { text: 'oc&世界观背景', link: '/setting/background'},
        ]
      },
    ],

    sidebar: [
      { text: '设定',
        collapsed: true,
        items: [
          { text: '脑洞', link: '/setting/brainstorm'},
          { text: '人物', link: '/setting/character'},
          { text: 'oc&世界观背景', link: '/setting/background'},
        ]
      },
    ],
  },
});
