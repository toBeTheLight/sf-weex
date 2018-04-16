<template>
  <scroller class="nav-page find">
    <FunctionHeader />
    <PageTitle title="发现"/>
    <slider class="find-slider" interval="3000" auto-play="true">
      <div class="find-slider-frame" v-for="(img, index) in imageList" :key="index">
        <image class="find-slider-image" resize="cover" :src="img.src"/>
      </div>
    </slider>
    <div class="find-types">
      <text class="find-types-item" v-for="(item, index) in findTypes" :key="index">{{item}}</text>
    </div>
    <div class="find-topics">
      <text class="find-title">专题推荐</text>
      <div class="find-topics-list">
        <div class="find-topic" v-for="(item, index) in findTopics" :key="index">
          <image class="find-topic-img" :src="item.src" />
          <text class="find-topic-text">
            {{item.text}}
          </text>
        </div>
      </div>
    </div>
    <div class="find-activity">
      <text class="find-title">社区活动</text>
      <slider class="find-slider" interval="3000" auto-play="true">
        <div class="find-slider-frame" v-for="(img, index) in imageList" :key="index">
          <image class="find-slider-image" resize="cover" :src="img.src"/>
        </div>
      </slider>
    </div>
  </scroller>
</template>

<script>
import FunctionHeader from '../components/FunctionHeader.vue'
import PageTitle from '../components/PageTitle.vue'
export default {
  data () {
    return {
      imageList: [
        {
          src: 'https://afp.alicdn.com/afp-creative/creative/u124884735/28efb727b25f52aed5bcb79219e395cf.jpg'
        },
        {
          src: 'https://afp.alicdn.com/afp-creative/creative/u124884735/d42067bc87c18544be044130227b2cb9.png'
        }
      ],
      findTypes: ['动态', '问答', '文章', '频道', '排行榜'],
      findTopics: [
        {
          src: 'https://afp.alicdn.com/afp-creative/creative/u124884735/28efb727b25f52aed5bcb79219e395cf.jpg',
          text: '机器学习'
        },
        {
          src: 'https://afp.alicdn.com/afp-creative/creative/u124884735/d42067bc87c18544be044130227b2cb9.png',
          text: '大型网站技术架构'
        }
      ]
    }
  },
  components: {
    FunctionHeader,
    PageTitle
  }
}
</script>

<style scoped>
.find {
  align-items: flex-start;
}
.find-slider {
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 750px;
  height: 440px;
}
.find-slider-image {
  width: 670px;
  height: 440px;
  border-radius: 10px;
}
.find-slider-frame {
  width: 670px;
  height: 440px;
  position: relative;
}
.find-types {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 750px;
  margin-bottom: 80px;
  padding-left: 40px;
  padding-right: 40px;
}
.find-types-item {
  font-size: 40px;
}
.find-title {
  font-size: 40px;
  margin-bottom: 30px;
}
.find-topics {
  width: 750px;
  padding-left: 40px;
  padding-right: 40px;
}
.find-topics-list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.find-topic {
  width: 320px;
}
.find-topic-img {
  border-radius: 5px;
  width: 320px;
  height: 200px;
}
.find-topic-text {
  font-size: 36px;
}
</style>
