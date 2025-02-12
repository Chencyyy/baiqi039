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
          { text: '柏&柘if线',
            collapsed: true,
            items: [
              { text: '1', link: '/original/bo&tuo_if/main#1' },
              { text: '2', link: '/original/bo&tuo_if/main#2' },
              { text: '3', link: '/original/bo&tuo_if/main#3' },
              { text: '4', link: '/original/bo&tuo_if/main#4' },
              { text: '5', link: '/original/bo&tuo_if/main#5' },
              { text: '6', link: '/original/bo&tuo_if/main#6' },
              { text: '7', link: '/original/bo&tuo_if/main#7' },
              { text: '8', link: '/original/bo&tuo_if/main#8 - be线-分支I' },
              { text: '9 - be线-分支I-构思', link: '/original/bo&tuo_if/main#9' },
              { text: '10 - be线-分支II', link: '/original/bo&tuo_if/main#10' },
              { text: '11 - be线-分支II-构思', link: '/original/bo&tuo_if/main#11' },
              { text: '12 - 番外I（未完成）', link: '/original/bo&tuo_if/main#12' },
            ]
          },
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
                  { text: '总结', link: '/fanfiction/jujutsu/7year/main#0' },
                  { text: '1', link: '/fanfiction/jujutsu/7year/main#1' },
                  { text: '2', link: '/fanfiction/jujutsu/7year/main#2' },
                  { text: '3', link: '/fanfiction/jujutsu/7year/main#3' },
                  { text: '4 🎂', link: '/fanfiction/jujutsu/7year/main#4' },
                  { text: '5', link: '/fanfiction/jujutsu/7year/main#5' },
                  { text: '6', link: '/fanfiction/jujutsu/7year/main#6' },
                  { text: '7', link: '/fanfiction/jujutsu/7year/main#7' },
                  { text: '8', link: '/fanfiction/jujutsu/7year/main#8' },
                  { text: '9', link: '/fanfiction/jujutsu/7year/main#9' },
                  { text: '10 - 番外 - 如果手机碎了', link: '/fanfiction/jujutsu/7year/main#10' },
                  { text: '11', link: '/fanfiction/jujutsu/7year/main#11' },
                  { text: '12', link: '/fanfiction/jujutsu/7year/main#12' },
                  { text: '13', link: '/fanfiction/jujutsu/7year/main#13' },
                  { text: '14', link: '/fanfiction/jujutsu/7year/main#14' },
                  { text: '15', link: '/fanfiction/jujutsu/7year/main#15' },
                  { text: '16', link: '/fanfiction/jujutsu/7year/main#16' },
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
