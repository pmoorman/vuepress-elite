module.exports = {
  title: 'Elite',
  description: 'A course on startup growth',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Pieter', link: '/module1' },
      { text: 'Visit Google', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: 'Module 1',
        collapsable: true,
        children: [
          '/module1',
          '/module2'
        ]
      },
      {
        title: 'Module 2',
        collapsable: true,
        children: [
          '/module3',
          '/module1'
        ]
      },
      {
        title: 'Module 3',
        collapsable: true,
        children: [
          '/module2',
          '/module3'
        ]
      },
    ]
  }
}
