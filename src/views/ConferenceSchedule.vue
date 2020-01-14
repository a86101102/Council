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
        <div class="schedule_block__detail">
          <div class="case">
            <div class="case__number">第一案</div>
            <div class="case__proposer">學生會長</div>
          </div>
          <div class="case">
            <div class="case__number">第二案</div>
            <div class="case__proposer">文學院代</div>
          </div>
          <div class="case">
            <div class="case__number">第三案</div>
            <div class="case__proposer">學生會長</div>
          </div>
        </div>
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
  letter-spacing:5px;
  margin-top: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .schedule_block{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    &__detail{
      margin: 12px 0 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .case{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        &__number{
          width: 140px;
          font-size: $text_s;
          color: #fff;
          font-weight: 700;
          background-color: $title2;
          border-radius: 7px;
          padding: 7px 0 7px 5px;
        }
        &__proposer{
          z-index: -1;
          position: relative;
          left: -5px;
          font-size: $text;
          color: #fff;
          font-weight: 700;
          background-color: $title3;
          border-radius: 7px;
          padding: 7px 0 7px 5px;
          height: 38px;
          width: 120px;
        }
      }
    }
  }
}

// .schedule_title{
  
// }
</style>