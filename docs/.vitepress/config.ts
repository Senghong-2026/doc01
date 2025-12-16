import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tutorial',
  description: 'Programming Tutorials',
  base: '/doc01/',

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'HTML', link: '/guide/html/' },
          { text: 'JavaScript', link: '/guide/javascript/' }
        ],
        sidebar: {
          '/guide/html/': [
            {
              text: 'HTML Tutorial',
              items: [
                { text: 'Introduction', link: '/guide/html/' },
                {
                  text: 'Beginner',
                  collapsed: false,
                  items: [
                    { text: 'Basics', link: '/guide/html/01-basics' },
                    { text: 'Text & Typography', link: '/guide/html/02-text' },
                    { text: 'Links & Images', link: '/guide/html/03-links-images' }
                  ]
                },
                {
                  text: 'Intermediate',
                  collapsed: false,
                  items: [
                    { text: 'Lists & Tables', link: '/guide/html/04-lists-tables' },
                    { text: 'Forms', link: '/guide/html/05-forms' },
                    { text: 'Semantic HTML', link: '/guide/html/06-semantic' }
                  ]
                },
                {
                  text: 'Advanced',
                  collapsed: false,
                  items: [
                    { text: 'Media', link: '/guide/html/07-media' },
                    { text: 'Advanced Features', link: '/guide/html/08-advanced' }
                  ]
                }
              ]
            }
          ],
          '/guide/javascript/': [
            {
              text: 'JavaScript Tutorial',
              items: [
                { text: 'Introduction', link: '/guide/javascript/' },
                {
                  text: 'Beginner',
                  collapsed: false,
                  items: [
                    { text: 'Basics', link: '/guide/javascript/01-basics' },
                    { text: 'Control Flow', link: '/guide/javascript/02-control-flow' },
                    { text: 'Functions', link: '/guide/javascript/03-functions' }
                  ]
                },
                {
                  text: 'Intermediate',
                  collapsed: false,
                  items: [
                    { text: 'Arrays', link: '/guide/javascript/04-arrays' },
                    { text: 'Objects', link: '/guide/javascript/05-objects' },
                    { text: 'DOM Manipulation', link: '/guide/javascript/06-dom' }
                  ]
                },
                {
                  text: 'Advanced',
                  collapsed: false,
                  items: [
                    { text: 'Async Programming', link: '/guide/javascript/07-async' },
                    { text: 'ES6+ Features', link: '/guide/javascript/08-es6' },
                    { text: 'OOP', link: '/guide/javascript/09-oop' },
                    { text: 'Advanced Patterns', link: '/guide/javascript/10-advanced' }
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    // km: {
    //   label: 'ខ្មែរ',
    //   lang: 'km',
    //   title: 'មេរៀន',
    //   description: 'មេរៀនសរសេរកម្មវិធី',
    //   themeConfig: {
    //     nav: [
    //       { text: 'ទំព័រដើម', link: '/km/' },
    //       { text: 'HTML', link: '/km/guide/html/' },
    //       { text: 'JavaScript', link: '/km/guide/javascript/' }
    //     ],
    //     sidebar: {
    //       '/km/guide/html/': [
    //         {
    //           text: 'មេរៀន HTML',
    //           items: [
    //             { text: 'ការណែនាំ', link: '/km/guide/html/' },
    //             {
    //               text: 'កម្រិតដំបូង',
    //               collapsed: false,
    //               items: [
    //                 { text: 'មូលដ្ឋាន', link: '/km/guide/html/01-basics' },
    //                 { text: 'អត្ថបទ និងពុម្ពអក្សរ', link: '/km/guide/html/02-text' },
    //                 { text: 'តំណភ្ជាប់ និងរូបភាព', link: '/km/guide/html/03-links-images' }
    //               ]
    //             },
    //             {
    //               text: 'កម្រិតមធ្យម',
    //               collapsed: false,
    //               items: [
    //                 { text: 'បញ្ជី និងតារាង', link: '/km/guide/html/04-lists-tables' },
    //                 { text: 'ទម្រង់បែបបទ', link: '/km/guide/html/05-forms' },
    //                 { text: 'Semantic HTML', link: '/km/guide/html/06-semantic' }
    //               ]
    //             },
    //             {
    //               text: 'កម្រិតខ្ពស់',
    //               collapsed: false,
    //               items: [
    //                 { text: 'មេឌៀ', link: '/km/guide/html/07-media' },
    //                 { text: 'មុខងារកម្រិតខ្ពស់', link: '/km/guide/html/08-advanced' }
    //               ]
    //             }
    //           ]
    //         }
    //       ],
    //       '/km/guide/javascript/': [
    //         {
    //           text: 'មេរៀន JavaScript',
    //           items: [
    //             { text: 'ការណែនាំ', link: '/km/guide/javascript/' },
    //             {
    //               text: 'កម្រិតដំបូង',
    //               collapsed: false,
    //               items: [
    //                 { text: 'មូលដ្ឋាន', link: '/km/guide/javascript/01-basics' },
    //                 { text: 'លំហូរគ្រប់គ្រង', link: '/km/guide/javascript/02-control-flow' },
    //                 { text: 'អនុគមន៍', link: '/km/guide/javascript/03-functions' }
    //               ]
    //             },
    //             {
    //               text: 'កម្រិតមធ្យម',
    //               collapsed: false,
    //               items: [
    //                 { text: 'អារេ', link: '/km/guide/javascript/04-arrays' },
    //                 { text: 'វត្ថុ', link: '/km/guide/javascript/05-objects' },
    //                 { text: 'ការគ្រប់គ្រង DOM', link: '/km/guide/javascript/06-dom' }
    //               ]
    //             },
    //             {
    //               text: 'កម្រិតខ្ពស់',
    //               collapsed: false,
    //               items: [
    //                 { text: 'កម្មវិធី Async', link: '/km/guide/javascript/07-async' },
    //                 { text: 'មុខងារ ES6+', link: '/km/guide/javascript/08-es6' },
    //                 { text: 'OOP', link: '/km/guide/javascript/09-oop' },
    //                 { text: 'គំរូកម្រិតខ្ពស់', link: '/km/guide/javascript/10-advanced' }
    //               ]
    //             }
    //           ]
    //         }
    //       ]
    //     },
    //     outlineTitle: 'នៅលើទំព័រនេះ',
    //     docFooter: {
    //       prev: 'ទំព័រមុន',
    //       next: 'ទំព័របន្ទាប់'
    //     }
    //   }
    // }
  }
})
