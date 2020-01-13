<template>
  <div class="conference_schedule">
    <div class="topic">議程</div>
    <div class="schedule_list">
      <div class="schedule_block">
        <h3 class="schedule_block__title">一、正式開會</h3>
      </div>
      <div class="schedule_block">
        <h3 class="schedule_block__title">二、主席報告</h3>
      </div>
      <div class="schedule_block">
        <h3 class="schedule_block__title">三、行政報告</h3>
      </div>
      <div class="schedule_block">
        <h3 class="schedule_block__title">四、議案與討論事項</h3>
      </div>
      <div class="schedule_block">
        <h3 class="schedule_block__title">五、臨時動議</h3>
      </div>
      <div class="schedule_block">
        <h3 class="schedule_block__title">六、聲明與補述</h3>
      </div>
      <div class="schedule_block">
        <h3 class="schedule_block__title">七、散會</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConferenceSchedule',
  components: {
    // LoginWindow,
  }
}
</script>

<style lang="scss" scoped>
.conference_schedule{
  width: 100%;
}

.topic{
  position: absolute;
  left: -20px;
  border-radius: 7px;
  background-color: $primary;
  color: #fff;
  font-size: $text_l;
  font-weight: 700;
  padding: 0 20px 0 60px;
  margin-top: 20px;
}

.schedule_list{
  margin-top: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .schedule_block{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    &__title{
      border-radius: 7px;
      background-color: $title1;
      color: #fff;
      font-size: $text_m;
      font-weight: 700;
      text-align: left;
      padding: 5px 15px;
      width: 100%;
      max-width: 360px;
    }
  }
}

// .schedule_title{
  
// }
</style>