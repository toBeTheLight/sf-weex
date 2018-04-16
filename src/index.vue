<template>
  <div class="wrapper">
    <NavFooter/>
  </div>
</template>

<script>
import NavFooter from '@/views/NavFooter.vue'
export default {
  name: 'App',
  components: {
    NavFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 424px;
    height: 200px;
  }
  .greeting {
    text-align: center;
    margin-top: 70px;
    font-size: 50px;
    color: #41B883;
  }
  .message {
    margin: 30px;
    font-size: 32px;
    color: #727272;
  }
</style>
