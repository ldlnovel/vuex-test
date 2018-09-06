
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const home = r => require.ensure([], () => r(require('./components/home/index.vue')), 'home');
const homeZro = r => require.ensure([], () => r(require('./page/Zro/index.vue')), 'homeZro');
const homeOne = r => require.ensure([], () => r(require('./page/one/index.vue')), 'homeOne');
const homeTow = r => require.ensure([], () => r(require('./page/tow/index.vue')), 'homeTow');
const routes = [
    {
		path: '/',
        component: home,
        titlename:'首页',
        children:[{
            path: '',
            titlename:'todomvc',
            component: homeZro,
            children:[{
                path: '/toodlist',
                titlename:'第零条',
                component: homeZro,
            }]
        },
        {
            path: '/home/one',
            titlename:'第一条',
            component: homeOne,
        },
        {
            path: '/home/tow',
            titlename:'第二条',
            component: homeTow,
        }]
    },
    {
        path: 'one',
        titlename:'阿萨德阿萨德啊',        
        component: home,
        children:[{
            path: '',
            component: home,
        },
        {
            path: '/one/one',
            titlename:'阿萨德打算多',
            component: home,
        },
        {
            path: '/one/tow',
            titlename:'按时打算大群翁',
            component: home,
        }]
    },
    {
        path: 'tow',
        titlename:'tow阿萨德阿萨德啊',      
        component: home,
        children:[{
            path: '',
            component: home,
        },
        {
            path: '/tow/one',
            titlename:'在线程在线程',
            component: home,
        },
        {
            path: '/tow/tow',
            titlename:'Asdasd',
            component: home,
        }]
    },
    {
        path: 'there',
        titlename:'在线程在线程',        
        component: home,
        children:[{
            path: '',
            component: home,
        },
        {
            path: '/there/one',
            titlename:'个电饭锅电饭锅',
            component: home,
        },
        {
            path: '/there/tow',
            titlename:'高合金钢环境规划',
            component: home,
        }]
    },
    {
        path: 'four',
        titlename:'高合金钢环境规划',        
        component: home,
        children:[{
            path: '',
            component: home,
        },
        {
            path: '/four/one',
            titlename:'尽快离开了家',
            component: home,
        },
        {
            path: '/four/tow',
            titlename:'与我与我姨2',
            component: home,
        }]
	},
]
const router = new Router({
	routes,
})
export default router
