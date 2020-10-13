import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      tabIndex:0
  },
  mutations: {
      setTabIndex(state,index){
          state.tabIndex = index;
      }
  },
    getters:{
        getTabIndex(state){
            return state.tabIndex;
        }
    },
  actions: {}
});
