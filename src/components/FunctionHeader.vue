<template>
  <div class="page-header">
    <text class="page-new">-</text>
    <text class="page-new">+</text>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.page-header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 750px;
  padding-right: 40px;
  padding-top: 40px;
  flex-shrink: 0;
}
.page-new {
  font-size: 60px;
  color: #009A61;
}
</style>
