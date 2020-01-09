<template>
  <div class="login">
    <div class="window__background">
      <div class="conference_item">
        <div class="item_block">
          <h2 class="item_block__session">108學年度第一會期</h2>
          <h2 class="item_block__name">第二次長會</h2>
          <div class="item_block__time">108.10.02 20:00 開放登入</div>
        </div>
        <p class="item_authority">權限：第四十三期學生代表大會 學代</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginWindow',
}
</script>

<style>
.window__background{
  position: fixed;
  z-index: 400;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.6);
}
</style>