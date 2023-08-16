export let routerDatas = {
    "router": [
      {
        "path": "",
        "component": "Layout",
        "redirect": "404",
        // "children": [
        //   {
        //     "path": "d3",
        //     "component": "views/d3",
        //     "meta": {
        //       "title": "首页",
        //       "icon": "dashboard"
        //     }
        //   }
        // ]
      },
      {
        "path": "/FileSaver",
        "component": "Layout",
        // "children": [
        //   {
        //     "path": "index",
        //     "name": "Form",
        //     "component": "form/index",
        //     "meta": {
        //       "title": "表单",
        //       "icon": "form"
        //     }
        //   }
        // ]
      },
      {
        "path": "*",
        "redirect": "/404",
        "hidden": true
      }
    ]
  }
