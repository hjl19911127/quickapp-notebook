!function(){var t=function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){var r=e(10);$app_define$("@app-application/app",[],function(t,n,e){r(e,n,t),n.__esModule&&n.default&&(e.exports=n.default)}),$app_bootstrap$("@app-application/app",{packagerVersion:"0.0.5"})},,,,,,,,,,function(t,n,e){t.exports=function(t,n,r){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=e(11),u=o(i),c=e(14),s=o(c),a=r("@app-module/system.storage"),f=o(a),p=e(83),l=o(p);n.default={showMenu:l.default.showMenu,createShortcut:l.default.createShortcut,data:{items:[]},getNotes:function(){return this.data.items},getNote:function(t){return this.data.items[t]},saveNote:function(t,n){return void 0!==n&&""!==n?this.data.items.splice(n,1,t):this.data.items.unshift(t),this.saveData()},deleteNote:function(t){return void 0!==t&&""!==t?this.data.items.splice(t,1):this.data.items=[],this.saveData()},saveData:function(){var t=this;return new s.default(function(n){f.default.set({key:"app_data",value:(0,u.default)(t.data.items),success:function(e){console.log("handling success"),n(t.data.items)},fail:function(t,n){console.log("handling fail, code="+n)}})})},onCreate:function(){var t=this;console.info("Application onCreate"),f.default.get({key:"app_data",success:function(n){console.log("handling success"),n&&(t.$def.data.items=JSON.parse(n))},fail:function(t,n){console.log("handling fail, code="+n)}})},onDestroy:function(){console.info("Application onDestroy")}},(n.default||t.exports).manifest={package:"com.quick.notebook.plus",name:"快记事",versionName:"1.0.2",versionCode:"6",minPlatformVersion:"101",icon:"/Common/officialmark.png",features:[{name:"system.prompt"},{name:"system.router"},{name:"system.shortcut"},{name:"system.storage"}],permissions:[{origin:"*"}],config:{logLevel:"log"},router:{entry:"Home",pages:{Home:{component:"index"},Edit:{component:"index"},About:{component:"index"}}},display:{titleBarBackgroundColor:"#4d2517",titleBarTextColor:"#ad9a94",menu:!0,titleBarText:"快记事",pages:{Home:{},Edit:{},About:{menu:!1}}}}}},function(t,n,e){t.exports={default:e(12),__esModule:!0}},function(t,n,e){var r=e(13),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,n){var e=t.exports={version:"2.5.3"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports={default:e(15),__esModule:!0}},function(t,n,e){e(16),e(17),e(60),e(64),e(81),e(82),t.exports=e(13).Promise},function(t,n){},function(t,n,e){"use strict";var r=e(18)(!0);e(21)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},function(t,n,e){var r=e(19),o=e(20);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),s=r(e),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){"use strict";var r=e(22),o=e(23),i=e(37),u=e(27),c=e(38),s=e(39),a=e(40),f=e(56),p=e(58),l=e(57)("iterator"),v=!([].keys&&"next"in[].keys()),h="@@iterator",d="keys",m="values",y=function(){return this};t.exports=function(t,n,e,g,x,_,w){a(e,n,g);var b,S,O,T=function(t){if(!v&&t in k)return k[t];switch(t){case d:return function(){return new e(this,t)};case m:return function(){return new e(this,t)}}return function(){return new e(this,t)}},j=n+" Iterator",P=x==m,M=!1,k=t.prototype,L=k[l]||k[h]||x&&k[x],E=!v&&L||T(x),A=x?P?T("entries"):E:void 0,C="Array"==n?k.entries||L:L;if(C&&(O=p(C.call(new t)),O!==Object.prototype&&O.next&&(f(O,j,!0),r||c(O,l)||u(O,l,y))),P&&L&&L.name!==m&&(M=!0,E=function(){return L.call(this)}),r&&!w||!v&&!M&&k[l]||u(k,l,E),s[n]=E,s[j]=y,x)if(b={values:P?E:T(m),keys:_?E:T(d),entries:A},w)for(S in b)S in k||i(k,S,b[S]);else o(o.P+o.F*(v||M),n,b);return b}},function(t,n){t.exports=!0},function(t,n,e){var r=e(24),o=e(13),i=e(25),u=e(27),c="prototype",s=function(t,n,e){var a,f,p,l=t&s.F,v=t&s.G,h=t&s.S,d=t&s.P,m=t&s.B,y=t&s.W,g=v?o:o[n]||(o[n]={}),x=g[c],_=v?r:h?r[n]:(r[n]||{})[c];v&&(e=n);for(a in e)f=!l&&_&&void 0!==_[a],f&&a in g||(p=f?_[a]:e[a],g[a]=v&&"function"!=typeof _[a]?e[a]:m&&f?i(p,r):y&&_[a]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[c]=t[c],n}(p):d&&"function"==typeof p?i(Function.call,p):p,d&&((g.virtual||(g.virtual={}))[a]=p,t&s.R&&x&&!x[a]&&u(x,a,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(26);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(28),o=e(36);t.exports=e(32)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(29),o=e(31),i=e(35),u=Object.defineProperty;n.f=e(32)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(30);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){t.exports=!e(32)&&!e(33)(function(){return 7!=Object.defineProperty(e(34)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){t.exports=!e(33)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n,e){var r=e(30),o=e(24).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,e){var r=e(30);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){t.exports=e(27)},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports={}},function(t,n,e){"use strict";var r=e(41),o=e(36),i=e(56),u={};e(27)(u,e(57)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},function(t,n,e){var r=e(29),o=e(42),i=e(54),u=e(51)("IE_PROTO"),c=function(){},s="prototype",a=function(){var t,n=e(34)("iframe"),r=i.length,o="<",u=">";for(n.style.display="none",e(55).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),a=t.F;r--;)delete a[s][i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c[s]=r(t),e=new c,c[s]=null,e[u]=t):e=a(),void 0===n?e:o(e,n)}},function(t,n,e){var r=e(28),o=e(29),i=e(43);t.exports=e(32)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,s=0;c>s;)r.f(t,e=u[s++],n[e]);return t}},function(t,n,e){var r=e(44),o=e(54);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(38),o=e(45),i=e(48)(!1),u=e(51)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),s=0,a=[];for(e in c)e!=u&&r(c,e)&&a.push(e);for(;n.length>s;)r(c,e=n[s++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(46),o=e(20);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(47);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(45),o=e(49),i=e(50);t.exports=function(t){return function(n,e,u){var c,s=r(n),a=o(s.length),f=i(u,a);if(t&&e!=e){for(;a>f;)if(c=s[f++],c!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(19),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(52)("keys"),o=e(53);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(24),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(24).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(28).f,o=e(38),i=e(57)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){var r=e(52)("wks"),o=e(53),i=e(24).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,n,e){var r=e(38),o=e(59),i=e(51)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,e){var r=e(20);t.exports=function(t){return Object(r(t))}},function(t,n,e){e(61);for(var r=e(24),o=e(27),i=e(39),u=e(57)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var a=c[s],f=r[a],p=f&&f.prototype;p&&!p[u]&&o(p,u,a),i[a]=i.Array}},function(t,n,e){"use strict";var r=e(62),o=e(63),i=e(39),u=e(45);t.exports=e(21)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,n){t.exports=function(){}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,e){"use strict";var r,o,i,u,c=e(22),s=e(24),a=e(25),f=e(65),p=e(23),l=e(30),v=e(26),h=e(66),d=e(67),m=e(71),y=e(72).set,g=e(74)(),x=e(75),_=e(76),w=e(77),b="Promise",S=s.TypeError,O=s.process,T=s[b],j="process"==f(O),P=function(){},M=o=x.f,k=!!function(){try{var t=T.resolve(1),n=(t.constructor={})[e(57)("species")]=function(t){t(P,P)};return(j||"function"==typeof PromiseRejectionEvent)&&t.then(P)instanceof n}catch(t){}}(),L=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},E=function(t,n){if(!t._n){t._n=!0;var e=t._c;g(function(){for(var r=t._v,o=1==t._s,i=0,u=function(n){var e,i,u=o?n.ok:n.fail,c=n.resolve,s=n.reject,a=n.domain;try{u?(o||(2==t._h&&N(t),t._h=1),u===!0?e=r:(a&&a.enter(),e=u(r),a&&a.exit()),e===n.promise?s(S("Promise-chain cycle")):(i=L(e))?i.call(e,c,s):c(e)):s(r)}catch(t){s(t)}};e.length>i;)u(e[i++]);t._c=[],t._n=!1,n&&!t._h&&A(t)})}},A=function(t){y.call(s,function(){var n,e,r,o=t._v,i=C(t);if(i&&(n=_(function(){j?O.emit("unhandledRejection",o,t):(e=s.onunhandledrejection)?e({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=j||C(t)?2:1),t._a=void 0,i&&n.e)throw n.v})},C=function(t){return 1!==t._h&&0===(t._a||t._c).length},N=function(t){y.call(s,function(){var n;j?O.emit("rejectionHandled",t):(n=s.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),E(n,!0))},$=function(t){var n,e=this;if(!e._d){e._d=!0,e=e._w||e;try{if(e===t)throw S("Promise can't be resolved itself");(n=L(t))?g(function(){var r={_w:e,_d:!1};try{n.call(t,a($,r,1),a(R,r,1))}catch(t){R.call(r,t)}}):(e._v=t,e._s=1,E(e,!1))}catch(t){R.call({_w:e,_d:!1},t)}}};k||(T=function(t){h(this,T,b,"_h"),v(t),r.call(this);try{t(a($,this,1),a(R,this,1))}catch(t){R.call(this,t)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=e(78)(T.prototype,{then:function(t,n){var e=M(m(this,T));return e.ok="function"!=typeof t||t,e.fail="function"==typeof n&&n,e.domain=j?O.domain:void 0,this._c.push(e),this._a&&this._a.push(e),this._s&&E(this,!1),e.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a($,t,1),this.reject=a(R,t,1)},x.f=M=function(t){return t===T||t===u?new i(t):o(t)}),p(p.G+p.W+p.F*!k,{Promise:T}),e(56)(T,b),e(79)(b),u=e(13)[b],p(p.S+p.F*!k,b,{reject:function(t){var n=M(this),e=n.reject;return e(t),n.promise}}),p(p.S+p.F*(c||!k),b,{resolve:function(t){return w(c&&this===u?T:this,t)}}),p(p.S+p.F*!(k&&e(80)(function(t){T.all(t).catch(P)})),b,{all:function(t){var n=this,e=M(n),r=e.resolve,o=e.reject,i=_(function(){var e=[],i=0,u=1;d(t,!1,function(t){var c=i++,s=!1;e.push(void 0),u++,n.resolve(t).then(function(t){s||(s=!0,e[c]=t,--u||r(e))},o)}),--u||r(e)});return i.e&&o(i.v),e.promise},race:function(t){var n=this,e=M(n),r=e.reject,o=_(function(){d(t,!1,function(t){n.resolve(t).then(e.resolve,r)})});return o.e&&r(o.v),e.promise}})},function(t,n,e){var r=e(47),o=e(57)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n){t.exports=function(t,n,e,r){if(!(t instanceof n)||void 0!==r&&r in t)throw TypeError(e+": incorrect invocation!");return t}},function(t,n,e){var r=e(25),o=e(68),i=e(69),u=e(29),c=e(49),s=e(70),a={},f={},n=t.exports=function(t,n,e,p,l){var v,h,d,m,y=l?function(){return t}:s(t),g=r(e,p,n?2:1),x=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(v=c(t.length);v>x;x++)if(m=n?g(u(h=t[x])[0],h[1]):g(t[x]),m===a||m===f)return m}else for(d=y.call(t);!(h=d.next()).done;)if(m=o(d,g,h.value,n),m===a||m===f)return m};n.BREAK=a,n.RETURN=f},function(t,n,e){var r=e(29);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(39),o=e(57)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,n,e){var r=e(65),o=e(57)("iterator"),i=e(39);t.exports=e(13).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,n,e){var r=e(29),o=e(26),i=e(57)("species");t.exports=function(t,n){var e,u=r(t).constructor;return void 0===u||void 0==(e=r(u)[i])?n:o(e)}},function(t,n,e){var r,o,i,u=e(25),c=e(73),s=e(55),a=e(34),f=e(24),p=f.process,l=f.setImmediate,v=f.clearImmediate,h=f.MessageChannel,d=f.Dispatch,m=0,y={},g="onreadystatechange",x=function(){var t=+this;if(y.hasOwnProperty(t)){var n=y[t];delete y[t],n()}},_=function(t){x.call(t.data)};l&&v||(l=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return y[++m]=function(){c("function"==typeof t?t:Function(t),n)},r(m),m},v=function(t){delete y[t]},"process"==e(47)(p)?r=function(t){p.nextTick(u(x,t,1))}:d&&d.now?r=function(t){d.now(u(x,t,1))}:h?(o=new h,i=o.port2,o.port1.onmessage=_,r=u(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):r=g in a("script")?function(t){s.appendChild(a("script"))[g]=function(){s.removeChild(this),x.call(t)}}:function(t){setTimeout(u(x,t,1),0)}),t.exports={set:l,clear:v}},function(t,n){t.exports=function(t,n,e){var r=void 0===e;switch(n.length){case 0:return r?t():t.call(e);case 1:return r?t(n[0]):t.call(e,n[0]);case 2:return r?t(n[0],n[1]):t.call(e,n[0],n[1]);case 3:return r?t(n[0],n[1],n[2]):t.call(e,n[0],n[1],n[2]);case 4:return r?t(n[0],n[1],n[2],n[3]):t.call(e,n[0],n[1],n[2],n[3])}return t.apply(e,n)}},function(t,n,e){var r=e(24),o=e(72).set,i=r.MutationObserver||r.WebKitMutationObserver,u=r.process,c=r.Promise,s="process"==e(47)(u);t.exports=function(){var t,n,e,a=function(){var r,o;for(s&&(r=u.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?e():n=void 0,r}}n=void 0,r&&r.enter()};if(s)e=function(){u.nextTick(a)};else if(!i||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve();e=function(){f.then(a)}}else e=function(){o.call(r,a)};else{var p=!0,l=document.createTextNode("");new i(a).observe(l,{characterData:!0}),e=function(){l.data=p=!p}}return function(r){var o={fn:r,next:void 0};n&&(n.next=o),t||(t=o,e()),n=o}}},function(t,n,e){"use strict";function r(t){var n,e;this.promise=new t(function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r}),this.resolve=o(n),this.reject=o(e)}var o=e(26);t.exports.f=function(t){return new r(t)}},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,e){var r=e(29),o=e(30),i=e(75);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t),u=e.resolve;return u(n),e.promise}},function(t,n,e){var r=e(27);t.exports=function(t,n,e){for(var o in n)e&&t[o]?t[o]=n[o]:r(t,o,n[o]);return t}},function(t,n,e){"use strict";var r=e(24),o=e(13),i=e(28),u=e(32),c=e(57)("species");t.exports=function(t){var n="function"==typeof o[t]?o[t]:r[t];u&&n&&!n[c]&&i.f(n,c,{configurable:!0,get:function(){return this}})}},function(t,n,e){var r=e(57)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i=[7],u=i[r]();u.next=function(){return{done:e=!0}},i[r]=function(){return u},t(i)}catch(t){}return e}},function(t,n,e){"use strict";var r=e(23),o=e(13),i=e(24),u=e(71),c=e(77);r(r.P+r.R,"Promise",{finally:function(t){var n=u(this,o.Promise||i.Promise),e="function"==typeof t;return this.then(e?function(e){return c(n,t()).then(function(){return e})}:t,e?function(e){return c(n,t()).then(function(){throw e})}:t)}})},function(t,n,e){"use strict";var r=e(23),o=e(75),i=e(76);r(r.S,"Promise",{try:function(t){var n=o.f(this),e=i(t);return(e.e?n.reject:n.resolve)(e.v),n.promise}})},function(t,n){"use strict";function e(){var t=$app_require$("@app-module/system.prompt"),n=$app_require$("@app-module/system.router"),e=$app_require$("@app-module/system.app").getInfo();t.showContextMenu({itemList:["保存桌面","关于","取消"],success:function(o){switch(o.index){case 0:r();break;case 1:n.push({uri:"/About",params:{name:e.name,icon:e.icon}});break;case 2:break;default:t.showToast({message:"error"})}}})}function r(){var t=$app_require$("@app-module/system.prompt"),n=$app_require$("@app-module/system.shortcut");n.hasInstalled({success:function(e){e?t.showToast({message:"已创建桌面图标"}):n.install({success:function(){t.showToast({message:"成功创建桌面图标"})},fail:function(n,e){t.showToast({message:e+": "+n})}})}})}Object.defineProperty(n,"__esModule",{value:!0}),n.default={showMenu:e,createShortcut:r}}])};return"undefined"==typeof window?t():(window.createAppHandler=t,void(global.manifest={package:"com.quick.notebook.plus",name:"快记事",versionName:"1.0.2",versionCode:"6",minPlatformVersion:"101",icon:"/Common/officialmark.png",features:[{name:"system.prompt"},{name:"system.router"},{name:"system.shortcut"},{name:"system.storage"}],permissions:[{origin:"*"}],config:{logLevel:"log"},router:{entry:"Home",pages:{Home:{component:"index"},Edit:{component:"index"},About:{component:"index"}}},display:{titleBarBackgroundColor:"#4d2517",titleBarTextColor:"#ad9a94",menu:!0,titleBarText:"快记事",pages:{Home:{},Edit:{},About:{menu:!1}}}}))}();