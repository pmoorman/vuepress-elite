module.exports = {
  title: 'Elite',
  description: 'A course on startup growth',
  markdown: {
    // Remove the permalinks next to each header
    anchor: { permalink: false }
  },


  // Insert stuff in global <head>. More info: https://github.com/vuejs/vuepress/blob/master/docs/config/README.md
  head: [
    ['meta', { name: 'robots', content: 'noindex' }],

    ['script', { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js' }]
   // ['script', { type: 'text/javascript', src: '/drip_pro.js' }],
   // ['script', { type: 'text/javascript', src: '/drip_pro_tools.js' }]
  ],


  // Configuration for the (default) theme
  themeConfig: {
    nav: [
      { text: 'Intro', link: '/' },
      { text: 'Course', link: '/lesson1' },
      { text: 'Get Support', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: 'Module 1',
        collapsable: true,
        children: [
          '/lesson1',
          '/lesson2'
        ]
      },
      {
        title: 'Module 2',
        collapsable: true,
        children: [
          '/lesson3',
          '/lesson1'
        ]
      },
      {
        title: 'Module 3',
        collapsable: true,
        children: [
          '/lesson2',
          '/lesson3'
        ]
      },
    ]
  }
}
