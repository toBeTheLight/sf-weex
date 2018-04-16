<template>
  <scroller class="nav-page read">
    <FunctionHeader />
    <div class="read-header">
      <div class="read-types">
        <text class="read-type"
          v-for="(item, index) in readTypeList"
          :key="index"
          @click="changeType(index)"
          :class="[activeTypeIndex === index ? 'read-type_active': '']"
        >{{item}}</text>
      </div>
      <input class="read-query"
        type="text" placeholder="告诉我你想搜索的内容"
        :autofocus="false"
        value=""
        @change="onchange"
        @input="oninput"/>
      <div class="read-sorts">
        <text class="read-sort"
          v-for="(item, index) in readSortList"
          :key="index"
          @click="changeSort(index)"
          :class="[activeSort === index ? 'read-sort_actived' : '']"
        >{{item}}</text>
      </div>
    </div>
    <list class="read-list">
      <!-- 刷新还没改 -->
      <refresh class="refresh"
        @refresh="onrefresh"
        :display="refreshing ? 'show' : 'hide'">
        <text class="indicator-text">刷新</text>
        <loading-indicator class="indicator"></loading-indicator>
      </refresh>
      <BaseListItem class="read-item"
        :key="item.id"
        v-for="item in readList"
        :item="item"/>
    </list>
  </scroller>
</template>

<script>
import FunctionHeader from '../components/FunctionHeader.vue'
import BaseListItem from '../components/BaseListItem.vue'
export default {
  data () {
    return {
      readTypeList: ['推荐', '焦点', '最新'],
      readSortList: ['精选', '最新'],
      readList: [
        {
          id: 1,
          title: '如何定位图片中人物位置',
          type: '问答',
          agree: 3,
          answer: 3
        },
        {
          id: 2,
          title: '如何定位图片中人物位置',
          type: '问答',
          agree: 3,
          answer: 3
        },
        {
          id: 3,
          title: '用了 wxParse 的插件，小程序怎么循环列表呢？',
          type: '问答',
          agree: 3,
          answer: 3
        },
        {
          id: 4,
          title: '用了 wxParse 的插件，小程序怎么循环列表呢？',
          type: '问答',
          agree: 3,
          answer: 3
        },
        {
          id: 5,
          title: '如何定位图片中人物位置',
          type: '问答',
          agree: 3,
          answer: 3
        },
        {
          id: 6,
          title: '如何定位图片中人物位置',
          type: '问答',
          agree: 3,
          answer: 3
        }
      ],
      activeTypeIndex: 0,
      activeSort: 0,
      refreshing: false
    }
  },
  methods: {
    changeType (i) {
      if (this.activeTypeIndex === i) {
        return
      }
      this.activeTypeIndex = i
    },
    changeSort (i) {
      if (this.activeSort === i) {
        return
      }
      this.activeSort = i
    },
    onrefresh () {
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
      }, 2000)
    }
  },
  components: {
    FunctionHeader,
    BaseListItem
  }
}
</script>

<style scoped>
.read {
  align-items: flex-start;
}
.read-header {
  padding-left: 40px;
  padding-right: 40px;
  width: 750px;
  flex-shrink: 0;
}
.read-types {
  flex-direction: row;
}
.read-type {
  color: #757575;
  font-size: 70px;
  margin-right: 30px;
}
.read-type_active {
  color: black;
  font-weight: 600;
}
.read-query {
  height: 110px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #eee;
}
.read-sorts {
  flex-direction: row;
}
.read-sort {
  margin-right: 20px;
  font-size: 40px;
  padding-bottom: 20px;
  color: #757575;
}
.read-sort_actived {
  color: black;
  border-bottom-color: black;
  border-bottom-width: 3px;
  border-bottom-style: solid;
}
.read-list {
  padding-left: 40px;
  padding-right: 40px;
  height: 1000px;
  width: 750px;
}
</style>
