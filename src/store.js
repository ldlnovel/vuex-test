import  Vue from 'vue';
import  Vuex from 'vuex';
import  homeModal from './components/home/homeModal';
import  moduleA from './page/one/moduleA';
import  moduleB from './page/tow/moduleB';

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        moduleA: moduleA,
        moduleB: moduleB,
        homeModal: homeModal
    }
})

console.log(store.state)
export default store