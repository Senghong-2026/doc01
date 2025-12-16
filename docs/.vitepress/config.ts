import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Docs',
  description: 'VitePress documentation',


  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/intro' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guideline',
          items: [
            { text: 'Introduction', link: '/guide/intro' },
            { text: 'Setting', link: '/guide/setting' },
            {
              text: "New Setting",
                items: [
                  { text: 'Index', link: "/guide/setting/index"},
                  { text: 'Setting 2', link: "/guide/setting/index2"}
                ]
            }
          ]
        }
      ],
    },
  }
})
