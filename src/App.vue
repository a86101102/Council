<template>
  <div id="app">
    <!-- <LoginWindow/> -->
    <Navbar :page_name="page"/>
    <div id="main" class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/layout/components/Navbar.vue'
import Footer from '@/layout/components/Footer.vue'
// import LoginWindow from '@/layout/components/LoginWindow.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    Navbar,
    Footer,
    // LoginWindow,
  },
  computed: mapState([
    'page'
  ]),
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

.container{
  width: 100%; 
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>
