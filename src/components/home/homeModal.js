
import routes from '../../router'
export default {
    namespaced: true,
    state:{
        navList:[],
        count:1
    },
    actions: {
        getNavList({commit},path){
            // console.log(path)
            commit('getNavList',path)
        },
        test({commit}) {
            commit('test')
        }
    },
    mutations: {
        getNavList(state,path) {
            // console.log(path)
            let navList = routes.options.routes
            // console.log(navList)
            for(let item of navList) {
                if(item.path === path) {
                    state.navList = item.children
                    break;
                }else {
                    let list = item.children || []
                    for(let v of list) {
                        let _path = v.path || ''
                        if(_path.indexOf(path) >-1) {
                            state.navList = list 
                            break;
                        }else if(v.children){
                            let _children = v.children
                            for(let r of _children) {
                                if(r.path.indexOf(path) >-1) {
                                    state.navList = list
                                    break;
                                    console.log('===========================')
                                }
                            }
                        }
                    }
                    
                }
            }
        },
        test(state) {
            console.log('======================test======================')
            state.count+=1
        }
    },
    getters: {}
}