!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var r in n)("object"==typeof exports?exports:t)[r]=n[r]}}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,n){var r=n(4)(n(1),n(5),null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=n.n(r);e.default={components:{},mixins:[],props:{size:{type:String,default:"256x128"},text:{type:String,default:"equal to size"},fstyle:{type:String,default:"normal",validator:function(t){return["normal","italic","oblique"].indexOf(t)>-1}},fweight:{type:[String,Number],default:"normal",validator:function(t){var e=["normal","bold","bolder","lighter"];return"number"==typeof t?t>0:e.indexOf(t)>-1}},fsize:{type:String,default:""},ffamily:{type:String,default:"consolas"},color:{type:String,default:"#FFF"},bgcolor:{type:String,default:"random"}},data:function(){return{img:""}},watch:{$route:"build"},created:function(){this.build()},mounted:function(){},computed:{opts:function(){return{size:this.size,bgcolor:this.bgcolor,color:this.color,text:this.text,fstyle:this.fstyle,fweight:this.fweight,fsize:this.fsize,ffamily:this.ffamily}}},methods:{build:function(){this.img=o.a.getData(this.opts)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=n.n(r);o.a.install=function(t){t.component("v-placeholder",o.a)},"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(o.a),e.default=o.a},function(t,e){!function(e,n){"object"==typeof t&&t.exports?t.exports=n():e.placeholder=n()}("undefined"!=typeof window?window:this,function(){function t(t){l&&u||(l=document.createElement("canvas"),u=l.getContext("2d"));var e=parseInt(t.a[0]),n=parseInt(t.a[1]);l.width=e,l.height=n,u.clearRect(0,0,e,n),u.fillStyle=t.c,u.fillRect(0,0,e,n),u.fillStyle=t.d,u.font=t.e+" normal "+t.f+" "+(t.g||100)+"px "+t.h;var r=1;if(""===t.g){var o=.7*e,i=.7*n,a=u.measureText(t.b).width;r=Math.min(o/a,i/100)}return u.translate(e/2,n/2),u.scale(r,r),u.textAlign="center",u.textBaseline="middle",u.fillText(t.b,0,0),l}function e(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)}function n(t){t=t||{};var n=t.size||"128x128",r=t.text||n,o=t.bgcolor||e(),i=t.color||e(),a=t.fstyle||"normal",f=t.fweight||"bold",l=t.fsize||"",u=t.ffamily||"consolas",s={};return n=n.split("x"),2!==n.length&&(n=[128,128]),s.a=n,s.b=r,s.c=o,s.d=i,s.e=a,s.f=f,s.g=l,s.h=u,t=null,s}function r(e){return e=n(e),t(e)}function o(t){return r(t).toDataURL()}function i(t,e,n){return t.getAttribute(e)||n}function a(t){var e,n={},r=t.split("&");for(var o in r){e=r[o].split("=");try{n[e[0]]=decodeURIComponent(e[1])}catch(t){n[e[0]]=e[1]}}return n}function f(t){for(var e,n,r=document.querySelectorAll("img.placeholder"),f=0;f<r.length;f++)e=r[f],!t&&i(e,s,"")||(n=a(i(e,"options","")),e.setAttribute("src",o(n)),e.setAttribute(s,"1"))}var l,u,s="placeholder-rendered";return f(),{getData:o,getCanvas:r,render:f}})},function(t,e){t.exports=function(t,e,n,r,o){var i,a=t=t||{},f=typeof t.default;"object"!==f&&"function"!==f||(i=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns),r&&(l._scopeId=r);var u;if(o?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):n&&(u=n),u){var s=l.functional,c=s?l.render:l.beforeCreate;s?l.render=function(t,e){return u.call(e),c(t,e)}:l.beforeCreate=c?[].concat(c,u):[u]}return{esModule:i,exports:a,options:l}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body bg-fff"},[n("div",{},[n("img",{attrs:{src:t.img}})])])},staticRenderFns:[]}}])});
//# sourceMappingURL=vue-placeholder.js.map