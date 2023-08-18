import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Qrcode from '@/views/qrcode'
// import UrlParse from '@/views/UrlParse'
// import betterScroll from '@/views/betterScroll'
// import D3 from '@/views/d3'
// import ParenSqlEditor from '@/views/ParenSqlEditor'
// import CodeMirror from '@/views/CodeMirror'
// import Dropzone from '@/views/Dropzone'
// import FileSaver from '@/views/FileSaver'
// import Fuse from '@/views/Fuse'
// import Nprogress from '@/views/Nprogress'
// import Screenfull from '@/views/Screenfull'
// import Layout from '@/layout/index'
const _import = require('./_import_' + process.env.NODE_ENV)

    // console.log(_import('form/index'), '_import222', _import('login/index'))

Vue.use(Router)

export const constantRoutes = [
  
  // {
  //   path: '/',
  //   component: () => import('@/views/home'),
  //   redirect: '/login',
  //   hidden: true
  // },
  // {
  //   path: '/redirect',
  //   component: Layout,
  //   hidden: true,
  //   children: [
  //     {
  //       path: '/redirect/:path(.*)',
  //       component: () => import('@/views/redirect/index')
  //     }
  //   ]
  // },
  {
    path: '/login',
    name: 'login',
    // redirect: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
    // children: [
    //   {
    //     path: '/auth_redirect',
    //     component: _import('form/index'),
    //     hidden: true
    //   },
    // ]
  },

  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  // {
  //   path: '/401',
  //   component: () => import('@/views/error-page/401'),
  //   hidden: true
  // },
  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: () => import('@/views/dashboard/index'),
  //       name: 'Dashboard',
  //       meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
  //     }
  //   ]
  // },
  // {
  //   path: '/documentation',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/documentation/index'),
  //       name: 'Documentation',
  //       meta: { title: 'Documentation', icon: 'documentation', affix: true }
  //     }
  //   ]
  // },
  //   ]
  // },
]
// export default new Router({
  export let asyncRouterMap = [
    {
      path: '/',
      component: 'home',
      redirect: '/Echart',
      hidden: true,
      children: [
        {
          path: '/Echart',
          name: 'Echart',
          component: "echarts/echart",
          meta: {title: 1, keep: true},
          children: []
        },
        {
          path: '/el_table',
          name: 'el_table',
          component: "el_table/el_table",
          meta: {title: 1, keep: true},
          children: []
        },
        {
          path: '/Preview',
          name: 'Preview',
          component: "docx/Preview",
          meta: {title: '文件预览', keep: true},
          children: []
        },
        {
          path: '/Qrcode',
          name: 'Qrcode',
          component: "code/qrcode",
          meta: {title: 1, keep: true},
            //  children: [
            //   {
            //     path: "form",
            //     name: "form",
            //     component: "form/index",
            //     meta: {title: 2 ,keep: true},
            //     children: []
            //   }
            // ]
        },
        {
          path: '/UrlParse',
          name: 'UrlParse',
          component: "UrlParse",
          meta: {title: 1, keep: true},
          children: [],
        },
        {
          path: '/betterScroll',
          name: 'betterScroll',
          component: "betterScroll",
          meta: {title: 1, keep: true},
          children: []
        },
        {
          path: '/ParenSqlEditor',
          name: 'ParenSqlEditor',
          component: "ParenSqlEditor",
          meta: {title: 1, keep: true},
          children: []
          
        },
        {
          path: '/D3',
          name: 'D3',
          component: "d3",
          meta: {title: 1, keep: true},
          children: []
    
        },
        {
          path: '/CodeMirror',
          name: 'CodeMirror',
          component: "CodeMirror",
          meta: {title: 1, keep: true},
          children: []
    
        },
        {
          path: '/Dropzone',
          name: 'Dropzone',
          component: "Dropzone",
          meta: {title: 1, keep: true},
          children: []
    
        },
        {
          path: '/FileSaver',
          name: 'FileSaver',
          component: "FileSaver",
          meta: {title: 1, keep: true},
          children: []
    
        },
        {
          path: '/Fuse',
          name: 'Fuse',
          component: "Fuse",
          meta: {title: 1, keep: true},
          children: []
    
        },
        {
          path: '/Nprogress',
          name: 'Nprogress',
          component: "Nprogress",
          meta: {title: 1, keep: true},
          children: []
        },
        {
          path: '/Screenfull',
          name: 'Screenfull',
          component: "Screenfull",
          meta: {title: 1, keep: true},
          children: []
    
        },
        {
          path: '/editor',
          name: 'editor',
          component: "editor/editor",
          meta: {title: 1, keep: true},
          children: []
    
        },
      ]
    },
   
  ]
// })
//清空路由表
// export const asyncRouterMap = []

const createRouter = ()=>  new Router({
  scrollBehavior: ()=> ({y: 0}),
  routes: constantRoutes
})
const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
