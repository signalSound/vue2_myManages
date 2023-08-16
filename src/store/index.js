import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex);

const state={ //要设置的全局访问的state对象,赋予初始属性值
    changeThemeCount:0,
    cache:'',
    routerArr: [],
    passInfo: null,
  }; 
const mutations = {
    getRouterDates(state, routes){
        state.routerArr = routes
    },
    savePass(state, infos){
        state.passInfo = infos
    }
}
const store = new Vuex.Store(
    {
        state,
        mutations,
        plugins: [createPersistedState({
            storage: window.sessionStorage
        })]
    },
);
 
export default store