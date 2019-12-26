<template>
  <div id="app">
    <Navbar/>
    <div id="main" class="container">
      <router-view/>
    </div>
    <Bottombar/>
  </div>
</template>

<script>
import Navbar from '@/layout/components/Navbar.vue'
import Bottombar from '@/layout/components/Bottombar.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Bottombar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: '微軟正黑體', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary;
}

#main {
  margin-top: 84px;
  margin-bottom: 48px;
  min-height: calc(100vh - 132px);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
