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
      { text: 'Get Support', link: '/support' },
    ],
    sidebar: [
      {
        title: 'Module 1: Traction System',
        collapsable: true,
        children: [
          '/lesson11',
          '/lesson12',
          '/lesson13',
          '/lesson14',
          '/lesson15',
          '/lesson16',
          '/lesson17',
          '/case11',
          '/case12',
          '/materials1'
        ]
      },
      {
        title: 'Module 2: Copywriting',
        collapsable: true,
        children: [
          '/lesson21',
          '/lesson22',
          '/lesson23',
          '/lesson24',
          '/lesson25',
          '/lesson26',
          '/lesson27',
          '/case21',
          '/case22',
          '/materials2'
        ]
      },
      {
        title: 'Module 3: Risk Roadmaps',
        collapsable: true,
        children: [
          '/lesson31',
          '/lesson32',
          '/lesson33',
          '/lesson34',
          '/lesson35',
          '/lesson36',
          '/lesson37',
          '/lesson38',
          '/lesson39',
          '/case31',
          '/case32',
          '/materials3'
        ]
      },
      {
        title: 'Module 4: Facebook Ads Engine',
        collapsable: true,
        children: [
          '/lesson41',
          '/lesson42',
          '/lesson43',
          '/lesson44',
          '/lesson45',
          '/lesson46',
          '/lesson47',
          '/materials4'
        ]
      },
      {
        title: 'Module 5: Lead Gen Engine',
        collapsable: true,
        children: [
          '/lesson51',
          '/lesson52',
          '/lesson53',
          '/lesson54',
          '/lesson55',
          '/lesson56',
          '/lesson57',
          '/case51',
          '/case52',
          '/case53',
          '/materials5'
        ]
      },
      {
        title: 'Module 6: Sales Funnels',
        collapsable: true,
        children: [
          '/lesson61',
          '/lesson62',
          '/lesson63',
          '/lesson64',
          '/lesson65',
          '/lesson66',
          '/lesson67',
          '/lesson68',
          '/case61',
          '/case62',
          '/materials6'
        ]
      },
      {
        title: 'BONUS module: Consulting',
        collapsable: true,
        children: [
          '/consulting1',
          '/consulting2',
          '/consulting3',
          '/consulting4',
          '/consulting5',
          '/consulting6',
          '/consulting7',
          '/consulting8'
        ]
      },
    ]
  }
}
