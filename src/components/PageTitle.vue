<template>
  <div class="page-title-wrapper">
      <text class="page-title">{{title}}</text>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>
.page-title-wrapper {
  padding-left: 40px;
  padding-right: 40px;
  width: 750px;
  flex-shrink: 0;
}
.page-title {
  color: black;
  font-size: 70px;
  margin-right: 30px;
}
</style>
