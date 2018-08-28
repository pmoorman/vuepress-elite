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
  ],


  // Configuration for the (default) theme
  themeConfig: {
    nav: [
      { text: 'Course', link: '/' },
      { text: 'Treasure Vault', link: '/lesson1' },
      { text: 'Get Support', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: 'Module 1: Traction System',
        collapsable: true,
        children: [
          '/lesson1',
          '/lesson2'
        ]
      },
      {
        title: 'Module 2: Copywriting',
        collapsable: true,
        children: [
          '/lesson3',
          '/lesson1'
        ]
      },
      {
        title: 'Module 3: Risk Roadmaps',
        collapsable: true,
        children: [
          '/lesson2',
          '/lesson3'
        ]
      },
    ]
  }
}
