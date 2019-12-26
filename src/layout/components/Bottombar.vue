<template>
  <div class="bottombar">
    <p>國立成功大學學生代表大會議事系統</p>
  </div>
</template>

<script>
export default {
  name: 'Bottombar',
}
</script>

<style scoped lang="scss">
.bottombar{
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  background-color: $secondary;
}
</style>