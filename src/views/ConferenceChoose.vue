<template>
  <div class="conference_choose">
    <p>請選擇會議</p>
    <div class="conference_list">
      <div class="conference_item">
        <div class="item_block">
          <h2 class="item_block__session">108學年度第一會期</h2>
          <h2 class="item_block__name">第一次財委會</h2>
          <div class="item_block__time">108.09.23 19:00 開放登入</div>
        </div>
        <p class="item_authority">權限：第四十三期學生代表大會 財委</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConferenceChoose',
  components: {
    
  }
}
</script>

<style scoped lang="scss">
.conference_choose{
  width: 100%;
  flex-grow: 1;
  &>p{
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
    font-size: $text_m;
    margin-bottom: 0;
  }
  &__name{
    font-size: 34px;
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