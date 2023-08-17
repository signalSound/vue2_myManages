import router from './router'
import {asyncRouterMap} from './router/index'
import Layout from '@/layout/index'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
const _import = require('./router/_import_' + process.env.NODE_ENV)
router.beforeEach((to, from, next)=> {
     NProgress.start()

      routerGo(to, next)
})
const whiteList = ['/login'] //不重定向白名单
let getRouter = null
function routerGo(to, next) {
    if (!getRouter) {
        getRouter = filterAsyncRouter(asyncRouterMap) //过滤路由
        store.commit('getRouterDates', getRouter) //将路由数据存储在vuex
        router.options.routes = getRouter;//必须在addroutes前，使用router.options.routes=XXXXX的方法手动添加
        router.addRoutes(getRouter) //动态添加路由
        // global.antRouter = getRouter //将路由数据传递给全局变量，做侧边栏菜单渲染工作
        next({ ...to, replace: true })
    }else {
      // console.log(store.state.passInfo, 'store.state.passInfo', sessionStorage.getItem('vuex'))
      if(store.state.passInfo){
        if(to.path === '/login'){
          next({ path: '/' })
          NProgress.done()
        }else {
          next()
        }
      }else {
        if (whiteList.indexOf(to.path) !== -1) {
          next()
        }else {
          next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
          NProgress.done()
        }
      }
    }

  }
  // 路由组件递归导入
function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
    const accessedRouters = asyncRouterMap.filter(route => {
      if (route.component) {
        if (route.component === 'Layout') {//Layout组件特殊处理
          route.component = Layout
        } else {
          route.component = _import(route.component)
        }
      }
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children)
      }
      return true
    })
  
    return accessedRouters
  }

  router.afterEach(() => {
    NProgress.done() // 结束Progress
  })