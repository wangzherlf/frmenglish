export default {
  pages: [
    'pages/index/index',
    'pages/find/index',
    'pages/my/index'
  ],
  tabBar: {
    selectedColor: '#FF6677',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'assets/home.png',
        selectedIconPath: 'assets/home_on.png',
        text: '首页'
      },
      {
        pagePath: 'pages/find/index',
        iconPath: 'assets/find.png',
        selectedIconPath: 'assets/find_on.png',
        text: '发现'
      },
      {
        pagePath: 'pages/my/index',
        iconPath: 'assets/my.png',
        selectedIconPath: 'assets/my_on.png',
        text: '我的'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
