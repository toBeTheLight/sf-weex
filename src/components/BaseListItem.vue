<template>
  <cell class="list-item"
    :key="item.id">
    <text class="list-item-title">{{item.title}}</text>
    <div class="list-item-info">
      <text class="list-item-type color333">{{item.type}}</text>
      <text class="list-item-agree color333">{{item.agree}}赞同</text>
      <text class="list-item-answer color333">{{item.answer}}回答</text>
    </div>
  </cell>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>
.list-item {
  padding-top: 30px;
  padding-bottom: 30px;
}
.list-item-title {
  font-size: 50px;
}
.list-item-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}
.list-item-type {
  background-color: #eee;
  font-size: 26px;
  margin-right: 20px;
}
.list-item-agree {
  font-size: 36px;
  margin-right: 20px;
}
.list-item-answer {
  font-size: 36px;
}
.color333 {
  color: #333;
}
</style>
