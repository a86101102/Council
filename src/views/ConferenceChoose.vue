<template>
  <div class="conference_choose">
    <!-- <LoginWindow/> -->
    <p>請 選 擇 會 議</p>
    <div class="conference_list">
      <router-link v-for="(item,index) in conferenceList" :key="index" :to="{name: 'schedule', params: {delibrationID:item.delibrationID}}" tag="div" class="conference_item">
        <div class="item_block">
          <h3 class="item_block__session">{{item.semester}}學年度第{{convertNumber(item.period)}}學期</h3>
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
import {delibration} from '../api/delibration'
import {convertNumber} from '../services/converter'
export default {
  name: 'ConferenceChoose',
  components: {
    // LoginWindow,
  },
  data(){
    return {
      'conferenceList':[],
    }
  },
  created() {
    this.getDelibration()
  },
  methods: {
    async getDelibration() {
      let response = await delibration()
      this.conferenceList = response.data
    },
    convertNumber(num) {
      return convertNumber(num)
    },
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