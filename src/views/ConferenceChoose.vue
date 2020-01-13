<template>
  <div class="conference_choose">
    <!-- <LoginWindow/> -->
    <p>請 選 擇 會 議</p>
    <div class="conference_list">
      <div class="conference_item">
        <div class="item_block">
          <h3 class="item_block__session">108學年度第一會期</h3>
          <h2 class="item_block__name">第一次財委會</h2>
          <div class="item_block__time">108.09.23 19:00 開放登入</div>
        </div>
        <p class="item_authority">權限：第四十三期學生代表大會 財委</p>
      </div>
      <div class="conference_item">
        <div class="item_block">
          <h3 class="item_block__session">108學年度第一會期</h3>
          <h2 class="item_block__name">第二次常會</h2>
          <div class="item_block__time">108.10.02 20:00 開放登入</div>
        </div>
        <p class="item_authority">權限：第四十三期學生代表大會 學代</p>
      </div>
    </div>
  </div>
</template>

<script>
// import LoginWindow from '@/components/LoginWindow.vue'

export default {
  name: 'ConferenceChoose',
  components: {
    // LoginWindow,
  }
}
</script>

<style lang="scss">
.conference_choose{
  width: 100%;
  // flex-grow: 1;
  &>p{
    color:#000;
    font-size: $text_s;
    margin-bottom: 0;
  }
}
.conference_list{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.conference_item{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:28px;
}

.item_block{
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $primary;
  border-radius: 20px;
  color: #fff;
  padding: 10px;
  &__session{
    // font-size: $text_m;
    margin-bottom: 0;
  }
  &__name{
    // font-size: 34px;
    letter-spacing:5px;
  }
  &__time{
    color: $title1;
    width: calc(100% - 40px);
    padding: 2px 20px;
    border-radius: 5px;
    background-color: $secondary;
  }
}
</style>