import router from './router'
import {asyncRouterMap} from './router/index'
import Layout from '@/layout/index'
import store from './store'
const _import = require('./router/_import_' + process.env.NODE_ENV)
    // console.log(_import, '_import')
let request_url = window.location.href
console.log(request_url,'33333')

router.beforeEach((to, from, next)=> {
      routerGo(to, next)
})

var getRouter
function routerGo(to, next) {
    if (!getRouter) {
        getRouter = filterAsyncRouter(asyncRouterMap) //过滤路由
        store.commit('getRouterDates', getRouter)
    
        router.options.routes = getRouter;//必须在addroutes前，使用router.options.routes=XXXXX的方法手动添加
        router.addRoutes(getRouter) //动态添加路由
        console.log(router, 'router')
        // global.antRouter = getRouter //将路由数据传递给全局变量，做侧边栏菜单渲染工作
        next({ ...to, replace: true })
    }else {
      next()

      // if(store.state.passInfo){
      //   next()
      // }else {
      //   // next({path: '/login', query: {redirect: to.path}})
      //   next({path: '/login'})
      // }
    }

  }
function filterAsyncRouter(asyncRouterMap) { //遍历后台传来的路由字符串，转换为组件对象
    // debugger
    const accessedRouters = asyncRouterMap.filter(route => {
      if (route.component) {
        if (route.component === 'Layout') {//Layout组件特殊处理
          route.component = Layout
        } else {
          route.component = _import(route.component)
        }
      }
      if (route.children && route.children.length) {
        // debugger
        route.children = filterAsyncRouter(route.children)
      }
      return true
    })
  
    return accessedRouters
  }