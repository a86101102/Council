<template>
  <div class="conference_detail">
    <div class="schedule_block">
      <h3 class="schedule_block__title">四、議案與討論事項</h3>
    </div>
    <!-- <div class="detail_table">
      <div class="row">
        <div class="case_number"></div>
        <div class="case_proposer"></div>
      </div>
      <div class="row"></div>
      <div class="row"></div>
      <div class="row"></div>
    </div> -->
    <table class="detail_table">
      <tr class="case_info">
        <td class="title" width="25px">案次</td>
        <td class="title_data">第一案</td>
        <td class="title" width="50px">提案單位</td>
        <td class="title_data">會長 蔡一愷</td>
      </tr>
      <tr class="case_summary">
        <td class="title">案由</td>
        <td colspan="3" align="left">行政部門第一預算期間追加預算三讀案，共計76,700元整</td>
      </tr>
      <tr class="case_description">
        <td class="title">說明</td>
        <td colspan="3" align="left">
          <li>一、第一預算期間(6月至9月)追加預算共76,700元整，詳如附表。</li> 
          <li>二、第一會期第一次常會(6/11)一讀通過，附帶決議准許行政部門先動支後補正程序。</li>
          <li>三、第一會期第一次財政與預算委員會二讀通過，詳見會議記錄。</li>
        </td>
      </tr>
      <tr>
        <td class="title">討論</td>
        <td colspan="3" align="left">紀錄中......</td>
      </tr>
    </table>
    <VoteWindow/>
  </div>
</template>

<script>
import VoteWindow from '@/components/VoteWindow.vue'

export default {
  name: 'ConferenceDetail',
  components: {
    VoteWindow,
  }
}
</script>

<style lang="scss">
.conference_detail{
  padding-top: 20px;
  width: 100%;
}
.detail_table{
  border-color:#fff;
  border-collapse:collapse;
  margin-bottom: 130px;
  .case_summary{
    font-weight: 700;
  }
  .title{
    background-color: $primary;
    color: #fff;
    font-weight: 700;
    &_data{
      background-color: $secondary;
      font-weight: 700;
    }
  }
  td{
    border: 5px solid #fff;
  }
  li{
    margin-bottom: 10px;
  }
}
</style>