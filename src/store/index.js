import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page:"成大學代會",
  },
  mutations: {
    changePage(state , to) {          //頁面跳轉也把navbar標題換掉
      if(to === 'conference_choose'){
        state.page = "登入會議"
      }else{
        state.page = "成大學代會"
      }
    }
  },
  actions: {
    changePage(context, to) {         //呼叫mutations的changePage
      context.commit('changePage',to)
    }
  },
  modules: {
  }
})
