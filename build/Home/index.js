!function(){var t=function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var n=o(7),i=o(8),r=o(9);$app_define$("@app-component/index",[],function(t,e,o){r(o,e,t),e.__esModule&&e.default&&(o.exports=e.default),o.exports.template=n,o.exports.style=i}),$app_bootstrap$("@app-component/index",{packagerVersion:"0.0.5"})},,,,,,,function(t,e){t.exports={type:"div",attr:{},classList:["layout"],children:[{type:"list",attr:{},classList:["list"],children:[{type:"block",attr:{},repeat:{exp:function(){return this.items},key:"index",value:"item"},children:[{type:"list-item",attr:{type:"note"},classList:["list-item"],events:{click:function(t){this.handleClick(this.index,t)},longpress:function(t){this.handleLongPress(this.index,t)}},children:[{type:"text",attr:{value:function(){return this.item.title}},classList:["title"]},{type:"text",attr:{value:function(){return this.item.content}},classList:["content"]},{type:"text",attr:{value:function(){return this.formatTime(this.item.time)}},classList:["time"]}]}]}]},{type:"input",attr:{type:"button",value:"+"},classList:["fixed-btn"],events:{click:function(t){this.handleClick("",t)}}}]}},function(t,e){t.exports={".layout":{flexDirection:"column"},".list":{flexDirection:"column"},".list-item":{borderTopWidth:"1px",borderTopColor:"#eeeeee",borderBottomWidth:"1px",borderBottomColor:"#dddddd",height:"200px",flexDirection:"column",justifyContent:"center",marginBottom:"10px",paddingTop:"0px",paddingRight:"20px",paddingBottom:"0px",paddingLeft:"20px"},".title":{fontSize:"36px",width:"100%",textOverflow:"ellipsis",lines:1,marginBottom:"10px"},".content":{fontSize:"20px",color:"#aaaaaa",marginBottom:"40px",textOverflow:"ellipsis",lines:1},".time":{fontSize:"20px",color:"#dddddd"},".fixed-btn":{color:"#ffffff",fontSize:"50px",position:"fixed",width:"100px",height:"100px",right:"40px",bottom:"40px",borderRadius:"50px",backgroundColor:"#519650"}}},function(t,e){t.exports=function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=o("@app-module/system.router"),s=n(r),a=o("@app-module/system.prompt"),p=n(a),c=o("@app-module/system.app").getInfo();e.default={private:{items:[]},onMenuPress:function(){var t=this;p.default.showContextMenu({itemList:["清空数据","关于","取消"],success:function(e){switch(e.index){case 0:t.$app.$def.deleteNote().then(function(e){t.items=e});break;case 1:s.default.push({uri:"/About",params:{name:c.name,icon:c.icon}});break;case 2:break;default:p.default.showToast({message:"error"})}}})},onShow:function(){console.log("onShow"),this.items=this.$app.$def.getNotes()},formatTime:function(t){var e=60*-(new Date).getTimezoneOffset()*1e3;return new Date(t+e).toISOString().split(".")[0].replace("T"," ")},handleClick:function(t){s.default.push({uri:"/Edit",params:{index:t}})},handleLongPress:function(t){var e=this;p.default.showContextMenu({itemList:["删除","取消"],success:function(o){switch(o.index){case 0:e.$app.$def.deleteNote(t).then(function(t){e.items=t});break;case 1:}}})}};var l=e.default||t.exports,d=["public","protected","private"];if(l.data&&d.some(function(t){return l[t]}))throw new Error('页面VM对象中的属性data不可与"'+d.join(",")+'"同时存在，请使用private替换data名称');l.data||(l.data={},l._descriptor={},d.forEach(function(t){var e=i(l[t]);if("object"===e){l.data=Object.assign(l.data,l[t]);for(var o in l[t])l._descriptor[o]={access:t}}else"function"===e&&console.warn("页面VM对象中的属性"+t+"的值不能是函数，请使用对象")}))}}])};return"undefined"==typeof window?t():void(window.createPageHandler=t)}();