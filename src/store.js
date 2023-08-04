import { createStore } from 'vuex'
import { useRoute, useRouter } from "vue-router";
import router from '@/router.js'

export default createStore({
  state: {
    login:{
      user:"",
      state:false
    }
  },
  mutations: {
    
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
})