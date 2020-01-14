<template>
  <div class="navbar">
    <!-- <div class="navbar__icon"></div> -->
    <router-link to="/" tag="div" class="navbar__icon">
      <img src="@/assets/brand-icon.svg">
    </router-link>
    <h1 class="navbar__title">{{page_name}}</h1>
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
  &__icon{
    width:60px;
    height:60px;
    background-color: $primary;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 70%;
    }
  }
  &__title{
    // font-size: $text_l;
    // font-weight: 700;
    margin: 0;
    margin-left: 18px;
  }
}


</style>