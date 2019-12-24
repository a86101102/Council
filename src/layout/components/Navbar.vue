<template>
  <div class="navbar">
    <div class="navbar__icon"></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped lang="scss">
.navbar{
  // height: 64px;
  background-color: #f2f2f2;
  padding: 12px;
  display: flex;
  align-items: center;
  &__icon{
    width:60px;
    height:60px;
    background-color: #3b3838;
    border-radius: 10px;
  }
}


</style>