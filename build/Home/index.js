!function(){var t=function(){return function(t){function e(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var i=o(7),n=o(8),r=o(9);$app_define$("@app-component/index",[],function(t,e,o){r(o,e,t),e.__esModule&&e.default&&(o.exports=e.default),o.exports.template=i,o.exports.style=n}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},,,,,,,function(t,e){t.exports={type:"div",attr:{},classList:["layout"],children:[{type:"list",attr:{},classList:["list"],children:[{type:"block",attr:{},repeat:{exp:function(){return this.items},key:"index",value:"item"},children:[{type:"list-item",attr:{type:"product"},classList:["list-item"],events:{click:function(t){this.edit(this.index.toString(),t)}},children:[{type:"text",attr:{value:function(){return this.item.title}},classList:["title"]},{type:"text",attr:{value:function(){return this.item.content}},classList:["content"]},{type:"text",attr:{value:function(){return this.formatTime(this.item.time)}},classList:["time"]}]}]}]},{type:"input",attr:{type:"button",value:"+"},classList:["fixed-btn"],events:{click:function(t){this.edit("",t)}}}]}},function(t,e){t.exports={".layout":{flexDirection:"column"},".list":{flexDirection:"column"},".list-item":{borderTopWidth:"1px",borderTopColor:"#eeeeee",borderBottomWidth:"1px",borderBottomColor:"#dddddd",height:"200px",flexDirection:"column",justifyContent:"center",marginBottom:"10px",paddingTop:"0px",paddingRight:"20px",paddingBottom:"0px",paddingLeft:"20px"},".title":{fontSize:"36px"},".content":{fontSize:"20px",color:"#aaaaaa",marginBottom:"40px"},".time":{fontSize:"20px",color:"#dddddd"},".fixed-btn":{color:"#ffffff",fontSize:"50px",position:"fixed",width:"100px",height:"100px",right:"40px",bottom:"40px",borderRadius:"50px",backgroundColor:"#519650"}}},function(t,e){t.exports=function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=o("@app-module/system.router"),a=i(r);e.default={data:{items:[]},onMenuPress:function(){var t=this,e=o("@app-module/system.prompt");e.showContextMenu({itemList:["清空数据","取消"],success:function(o){switch(o.index){case 0:t.$app.deleteData();break;case 1:break;default:e.showToast({message:"error"})}}})},onShow:function(){console.log("onShow"),this.items=this.$app.$def.data.items},formatTime:function(t){return new Date(t).toJSON().split(".")[0].replace("T"," ")},edit:function(t){a.default.push({uri:"/Edit",params:{index:t}})},swipe:function(t){console.log(JSON.stringify(t))}};var s=e.default||t.exports,p=["public","protected","private"];if(s.data&&p.some(function(t){return s[t]}))throw new Error('页面VM对象中的属性data不可与"'+p.join(",")+'"同时存在，请使用private替换data名称');s.data||(s.data={},s._descriptor={},p.forEach(function(t){var e=n(s[t]);if("object"===e){s.data=Object.assign(s.data,s[t]);for(var o in s[t])s._descriptor[o]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")}))}}])};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();