<template>
  <div class="loginWindow container window">
    <div class="login_container">
      <div class="login_target">
        <div class="conference_item">
          <div class="item_block">
            <h2 class="item_block__session">108學年度第一會期</h2>
            <h2 class="item_block__name">第二次常會</h2>
            <div class="item_block__time">108.10.02 20:00 開放登入</div>
          </div>
          <p class="item_authority">權限：第四十三期學生代表大會 學代</p>
        </div>
      </div>
      <div class="login_form">
        <div class="login_form__account">
          <label for="account">帳 號</label>
          <input id="account" name="account" type="text" placeholder="學號">
        </div>
        <div class="login_form__password">
          <label for="password">密 碼</label>
          <input id="password" name="password" type="password" placeholder="學號信箱密碼">
        </div>
        <button class="login_form__enter">登 入</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginWindow',
}
</script>

<style lang="scss">
.login_container{
  width: 100%;
  .login_form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    label{
      color:$title1;
    }
    input{
      text-align: center;
      font-size: $text;
      border: 1.5px #767171 solid;
      border-radius: 7px;
      margin-left: 15px;
      margin-bottom: 20px;
      padding: 10px 5px;
      background-color: #ffffff00;
    }
    &__enter{
      background-color: $primary;
      border-radius: 7px;
      border: none;
      color: #fff;
      font-size: $text_s;
      font-weight: bold;
      padding: 5px 30px;
      margin: 0;
      cursor: pointer;
    }
  }
}
</style>