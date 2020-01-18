<template>
  <div class="conference_choose">
    <!-- <LoginWindow/> -->
    <p>請 選 擇 會 議</p>
    <div class="conference_list">
      <router-link v-for="(item,index) in conference_list" :key="index" to="/conference_schedule" tag="div" class="conference_item">
        <div class="item_block">
          <h3 class="item_block__session">{{item.semester}}學年度第{{item.period}}學期</h3>
          <h2 class="item_block__name">{{item.name}}</h2>
          <div class="item_block__time">{{item.startTime}} 開放登入</div>
        </div>
        <p class="item_authority">權限：{{item.position}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
// import LoginWindow from '@/components/LoginWindow.vue'

export default {
  name: 'ConferenceChoose',
  components: {
    // LoginWindow,
  },
  data(){
    return {
      'conference_list':[
        {
          // session: "108學年度第一會期",
          // name: "第一次財委會",
          // time: "108.09.23 19:00",
          // authority: "第四十三期學生代表大會 財委",
          delibrationID: "AX782",
          semester: "108",
          period: "1",
          name: "第一次財委會",
          createTime: "109-01-07 22:00:00",
          startTime: "109-02-02 12:00:00",
          endTime: "109-02-02 13:00:00",
          position: "第四十三期學生代表大會 財委",
        },
        {
          // session: "108學年度第一會期",
          // name: "第二次常會",
          // time: "108.10.02 20:00",
          // authority: "第四十三期學生代表大會 學代",
          delibrationID: "AX782",
          semester: "108",
          period: "1",
          name: "第二次常會",
          createTime: "109-01-07 22:00:00",
          startTime: "109-02-03 12:00:00",
          endTime: "109-02-03 13:00:00",
          position: "第四十三期學生代表大會 學代",
        },
        {
        //   session: "108學年度第一會期",
        //   name: "第一次財委會",
        //   time: "108.09.23 19:00",
        //   authority: "第四十三期學生代表大會 財委",
          delibrationID: "AX782",
          semester: "108",
          period: "1",
          name: "第一次財委會",
          createTime: "109-01-07 22:00:00",
          startTime: "109-02-02 12:00:00",
          endTime: "109-02-02 13:00:00",
          position: "第四十三期學生代表大會 財委",
        }
      ]
    }
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