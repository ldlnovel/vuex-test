export  default {
    namespaced: true, ///  用模块名 来区分
    state: { //// 默认状态
        count : 1

    },
    mutations: { //// 同步方法
        add(state,n){
            state.count+=1;
        },
        reduce(state){
            state.count-=1;
        }
    },
    getters: {}, ////  计算属性
    actions: {  ////  异步方法
        add({commit}){
            commit('add')
        },
        reduce({commit}){
            commit('reduce')
        }
    } 
}