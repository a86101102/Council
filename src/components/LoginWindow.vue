<template>
  <div class="loginWindow container">
    <div class="login_container">
      <div class="conference_item">
        <div class="item_block">
          <h2 class="item_block__session">108學年度第一會期</h2>
          <h2 class="item_block__name">第二次常會</h2>
          <div class="item_block__time">108.10.02 20:00 開放登入</div>
        </div>
        <p class="item_authority">權限：第四十三期學生代表大會 學代</p>
      </div>
      <div class="user_login">
        <div class="account">
          <label for="account">帳 號</label>
          <input id="account" name="account" type="text" placeholder="學號">
        </div>
        <div class="password">
          <label for="password">密 碼</label>
          <input id="password" name="password" type="password" placeholder="學號信箱密碼">
        </div>
        <div class="enter">
          <input type="submit" value="登入">
        </div>
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
.loginWindow{
  position: fixed;
  z-index: 400;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: #f2f2f2dd;
  display: flex;
  justify-content: center;
  align-items: center;
  // display: none;
}

.login_container{
  width: 100%;
  .user_login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    label{
      color:$title1;
    }
    input{
      text-align: center;
      border: 1.5px #767171 solid;
      border-radius: 7px;
      margin-left: 15px;
      margin-bottom: 20px;
      padding: 10px 5px;
      &[type="submit"]{
        background-color: $primary;
        border: none;
        color: #fff;
        font-size: $text_s;
        padding: 5px 30px;
        margin: 0;
      }
    }
  }
}
</style>