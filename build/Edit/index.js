!function(){var t=function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var o=n(4),i=n(5),a=n(6);$app_define$("@app-component/index",[],function(t,e,n){a(n,e,t),e.__esModule&&e.default&&(n.exports=e.default),n.exports.template=o,n.exports.style=i}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},,,,function(t,e){t.exports={type:"div",attr:{},classList:["layout"],children:[{type:"div",attr:{},classList:["title"],children:[{type:"input",attr:{type:"text",placeholder:"标题",value:function(){return this.title}},events:{change:"handleTitleChange"}}]},{type:"div",attr:{},classList:["content"],children:[{type:"textarea",attr:{placeholder:"内容",value:function(){return this.content}},events:{change:"handleContentChange"}}]},{type:"div",attr:{},classList:["footer"],children:[{type:"input",attr:{type:"button",value:"保存"},classList:["btn","btn-success"],events:{click:"handleSaveClick"}},{type:"input",attr:{type:"button",value:"返回"},classList:["btn","btn-cancel"],events:{click:"handleCancelClick"}}]}]}},function(t,e){t.exports={".layout":{flexDirection:"column"},".title":{height:"10%",paddingTop:"0px",paddingRight:"20px",paddingBottom:"0px",paddingLeft:"20px"},".title input":{width:"100%",color:"#191919",borderBottomWidth:"1px",borderBottomColor:"#e6e6e6",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"title"},{t:"d"},{t:"t",n:"input"}]}},".content":{height:"92%",paddingTop:"20px",paddingRight:"20px",paddingBottom:"20px",paddingLeft:"20px"},".content textarea":{width:"100%",height:"100%",color:"#636363",_meta:{ruleDef:[{t:"a",n:"class",i:!1,a:"element",v:"content"},{t:"d"},{t:"t",n:"textarea"}]}},".footer":{height:"8%"},".btn":{flex:1,color:"#ffffff"},".btn-success":{backgroundColor:"#519650"},".btn-cancel":{backgroundColor:"#FFA500"}}},function(t,e){t.exports=function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=n("@app-module/system.router"),r=o(a),c=n("@app-module/system.prompt");o(c);e.default={public:{index:""},private:{title:"",content:""},onShow:function(){if(this.index){var t=this.$app.$def.getNote(this.index),e=t.title,n=t.content;this.title=e,this.content=n}},onMenuPress:function(){this.$app.showMenu()},handleTitleChange:function(t){this.title=t.value},handleContentChange:function(t){this.content=t.value},handleSaveClick:function(t){var e=this,n=this.title,o=this.content;this.$app.$def.saveNote({title:n,content:o,time:+new Date},this.index).then(function(){e.handleCancelClick()})},handleCancelClick:function(t){r.default.back()}};var l=e.default||t.exports,p=["public","protected","private"];if(l.data&&p.some(function(t){return l[t]}))throw new Error('页面VM对象中的属性data不可与"'+p.join(",")+'"同时存在，请使用private替换data名称');l.data||(l.data={},l._descriptor={},p.forEach(function(t){var e=i(l[t]);if("object"===e){l.data=Object.assign(l.data,l[t]);for(var n in l[t])l._descriptor[n]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")}))}}])};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();