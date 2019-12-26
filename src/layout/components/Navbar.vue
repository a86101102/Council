<template>
  <div class="navbar">
    <div class="navbar__icon"></div>
    <h1 class="navbar__title">{{page_name}}</h1>
    <!-- <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/conference_choose">Conference</router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props:{
    page_name:{
      default:"成大學代會",
    },
  }
}
</script>

<style scoped lang="scss">
.navbar{
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: $secondary;
  padding: 12px;
  display: flex;
  align-items: center;
  .navbar__icon{
    width:60px;
    height:60px;
    background-color: $primary;
    border-radius: 10px;
  }
  h1.navbar__title{
    font-size: $text_l;
    font-weight: 700;
    margin: 0;
    margin-left: 18px;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


</style>