<template>
    <div class="json-editor">
      <div id="editor"></div>
    </div>
  </template>
  
  <script>
// import {EditorState} from "@codemirror/state"
// import {onMounted} from 'vue'
import {EditorState,Extension, Compartment,StateEffect} from "@codemirror/state"
import {EditorView} from "@codemirror/view"
import {basicSetup} from "codemirror"
1
// import * as CodeMirror from '/lib/codemirror'
// import 'codemirror/lib/codemirror.css'
  // import 'codemirror/addon/lint/lint'
  // import 'codemirror/addon/lint/json-lint'
  const createEditorCompartment = () => {
    const compartment = new Compartment()
    const run = (extension,view) => {
        if(compartment.get(view.state)){
            //动态地重新配置插件
            view.dispatch({ effects: compartment.reconfigure(extension) }) // reconfigure
        }else{
            //向编辑器注入某一个插件
            view.dispatch({ effects: StateEffect.appendConfig.of(compartment.of(extension)) })// inject
        }
    }
    return { compartment, run }
}

//动态语言包函数
let {compartment, run } = createEditorCompartment()
let editor = null
const updateLang = (lang) => {
    //根据语言名称匹配语言描述信息
    const languageDescription = LanguageDescription.matchLanguageName(languages, "java", true);
    //注入高亮插件
    languageDescription.load().then(support=>{
        run(support,editor)
    })
}
  export default {
    name: 'JsonEditor',
    /* eslint-disable vue/require-prop-types */
    // props: ['value'],
    data() {
      return {
        str: ''
      }
    },
    // watch: {
    //   value(value) {
    //     const editorValue = this.jsonEditor.getValue()
    //     if (value !== editorValue) {
    //       this.jsonEditor.setValue(JSON.stringify(this.value, null, 2))
    //     }
    //   }
    // },
    mounted() {
      console.log(basicSetup, 'basicSetup')
      let element = document.getElementById("editor")
    let state = EditorState.create({
        doc: "hello!!!",  //这是文本
        extensions:[basicSetup]  //传入的插件数组
    })
    let view = new EditorView({
        state:state, //编辑器状态，编辑器视图创建时初始化的状态
        parent:element //挂载的dom，可以通过parent挂载到指定的div块
    })
    editor = view
    },
    methods: {
      getValue() {
        return this.jsonEditor.getValue()
      }
    }
  }
  </script>
  
  <!-- <style lang="scss" scoped>
  .json-editor {
    height: 100%;
    position: relative;
  
    ::v-deep {
      .CodeMirror {
        height: auto;
        min-height: 300px;
      }
  
      .CodeMirror-scroll {
        min-height: 300px;
      }
  
      .cm-s-rubyblue span.cm-string {
        color: #F08047;
      }
    }
  }
  </style> -->
  