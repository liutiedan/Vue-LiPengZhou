import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state){
      state.count++;
    }
  },
  actions: {
    //模拟异步操作
    //这个方法写错了 state 状态应该由 mutations 去修改
    // increment({state}){
    //   setTimeout(() => {state.count++}, 2000);
    // }

    increment({commit}){
      setTimeout(() => {
        commit('increment');
      }, 2000);
    }
  },
  //和computed差不多，起到一个缓存的作用
  getters: {
    doubleCount(state){
      return state.count * 2;
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
