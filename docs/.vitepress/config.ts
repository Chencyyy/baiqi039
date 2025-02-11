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
      text: '最后编辑',
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
      { text: '原创',
        items: [
          { text: '柏&柘if线', link: '/original/bo&tuo_if/main'},
        ]
      },
      { text: '同人',
        items: [
          { text: '原神',
            items: [
              { text: '狐狸道士', link: '/fanfiction/genshin/fox/main'},
            ]
          },
          { text: '咒术回战',
            items: [
              { text: '与你七年后的相遇', link: '/fanfiction/jujutsu/7year/main'},
            ]
          },
          //{ text: '文豪野犬',
          //  items: [    
          //  ]
          //},
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
      { text: '原创',
        collapsed: true,
        items: [
          { text: '柏&柘if线(章节以后再搞)', link: '/original/bo&tuo_if/main'},
        ]
      },
      { text: '同人',
        collapsed: true,
        items: [
          { text: '原神',
            items: [
              { text: '狐狸道士', link: '/fanfiction/genshin/fox/main'},
            ]
          },
          { text: '咒术回战',
            items: [
              { text: '与你七年后的相遇',
                collapsed: true,
                items: [
                  { text: '总结', link: '/main#0' },
                  { text: '1', link: '/main#1' },
                  { text: '2', link: '/main#2' },
                  { text: '3', link: '/main#3' },
                  { text: '4 🎂', link: '/main#4' },
                  { text: '5', link: '/main#5' },
                  { text: '6', link: '/main#6' },
                  { text: '7', link: '/main#7' },
                  { text: '8', link: '/main#8' },
                  { text: '9', link: '/main#9' },
                  { text: '10 - 番外 - 如果手机碎了', link: '/main#10' },
                  { text: '11', link: '/main#11' },
                  { text: '12', link: '/main#12' },
                  { text: '13', link: '/main#13' },
                ]
              },
            ]
          },
          //{ text: '文豪野犬',
          //  items: [   
          //  ]
          //},
        ]
      },
    ],
  },
});
