<template>
  <wxc-tab-bar
    :tab-titles="tabIconFontTitles"
    :tab-styles="tabIconFontStyles"
    title-type="iconFont"
    @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
    <!-- 第一个页面内容-->
    <Read class="nav-page"/>
    <!-- 第二个页面内容-->
    <div class="nav-page" :style="contentStyle"><text>发现</text></div>
    <!-- 第三个页面内容-->
    <div class="nav-page" :style="contentStyle"><text>讲堂</text></div>
    <!-- 第四个页面内容-->
    <div class="nav-page" :style="contentStyle"><text>消息</text></div>
  </wxc-tab-bar>
</template>

<script>
import { WxcTabBar, Utils } from 'weex-ui'
import Read from './Read.vue'
let config = {
  tabIconFontTitles: [
    {
      title: '阅读',
      codePoint: '\ue609'
    },
    {
      title: '发现',
      codePoint: '\ue746'
    },
    {
      title: '讲堂',
      codePoint: '\ue604'
    },
    {
      title: '消息',
      codePoint: '\ue743'
    },
    {
      title: '更多',
      codePoint: '\ue627'
    }
  ],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#333',
    activeTitleColor: '#009a61',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    width: 160,
    height: 120,
    fontSize: 24,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 50,
    iconFontMarginBottom: 8,
    iconFontColor: '#333333',
    activeIconFontColor: '#009a61',
    iconFontUrl: '//at.alicdn.com/t/font_629519_h7e5wwf1wbb21emi.ttf'
  }
}

export default {
  components: { WxcTabBar, Read },
  data: () => ({
    tabIconFontTitles: config.tabIconFontTitles,
    tabIconFontStyles: config.tabIconFontStyles
  }),
  methods: {
    wxcTabBarCurrentTabSelected (e) {
      const index = e.page
      console.log(index)
    }
  },
  created () {
    const tabPageHeight = Utils.env.getPageHeight()
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750
    const { tabIconFontStyles } = this
    this.contentStyle = { height: (tabPageHeight - tabIconFontStyles.height) + 'px' }
  }
}
</script>

<style src="../assets/css/common.css"></style>
