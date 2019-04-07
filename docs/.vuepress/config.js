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
    ['script', { type: 'text/javascript', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' }]
  ],


  // Configuration for the (default) theme
  themeConfig: {
    nav: [
      { text: 'Course', link: '/' },
      { text: 'Get Support', link: '/support' },
    ],
    sidebar: [
      {
        title: 'Module 1: Growth Strategy',
        collapsable: true,
        children: [
          '/lesson11',
          '/lesson12',
          '/lesson13',
          '/lesson14',
          '/lesson15',
          '/lesson16',
          '/case11',
          '/case12',
          '/materials1'
        ]
      },
      {
        title: 'Module 2: Sales Funnels',
        collapsable: true,
        children: [
          '/lesson20',
          '/lesson21',
          '/lesson22',
          '/lesson23',
          '/lesson24',
          '/lesson25',
          '/lesson26',
          '/case61',
          '/case62',
          '/materials2'
        ]
      },
      {
        title: 'Module 3: Growth Engines',
        collapsable: true,
        children: [
          '/lesson30',
          '/lesson31',
          '/lesson32',
          '/lesson33',
          '/lesson34',
          '/lesson35',
          '/lesson36',
          '/lesson37',
          '/case51',
          '/case52',
          '/case53',
          '/materials3'
        ]
      },
      {
        title: 'Module 4: Copy & conversions',
        collapsable: true,
        children: [
          '/lesson40',
          '/lesson41',
          '/lesson42',
          '/lesson43',
          '/lesson44',
          '/case21',
          '/case22',
          '/materials4'
        ]
      },
      {
        title: 'Module 5: Retention',
        collapsable: true,
        children: [
          '/lesson50',
          '/lesson51',
          '/lesson52',
          '/lesson53',
          '/lesson54',
          '/lesson55',
          '/lesson56',
          '/materials5'
        ]
      },
      {
        title: 'Module 6: Advanced Strategies',
        collapsable: true,
        children: [
          '/lesson60',
          '/lesson61',
          '/lesson62',
          '/lesson63',
          '/lesson64',
          '/lesson65',
          '/lesson66',
          '/lesson67',
          '/lesson68',
          '/case31',
          '/case32',
          '/materials6'
        ]
      },
      //{
        //title: 'BONUS module: Consulting',
        //collapsable: true,
        //children: [
        //  '/consulting1',
        //  '/consulting2',
        //  '/consulting3',
        //  '/consulting4',
        //  '/consulting5',
        //  '/consulting6',
        //  '/consulting7',
        //  '/consulting8'
        //]
      //},
    ]
  }
}
