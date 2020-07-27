/*!
 * vue-pixel-bar v1.0.0
 * (c) Merouane Boucenna
 * Released under the MIT License.
 */
"use strict";var t={name:"pixel-bar",props:{value:{type:Number,default:2e3},maxValue:{type:Number,default:2e3},duration:{type:Number,default:4e3},play:{type:Boolean,default:!1},classBar:{type:String}},data:function(){return{count:0}},computed:{animatedCount:function(){return this.count.toFixed(0)}},mounted:function(){this.play&&this.countTo()},methods:{countTo:function(){var t=this,s=this.value/this.maxValue,e=setInterval((function(){t.count>t.value&&clearInterval(e),t.count+=t.value/(100*s)}),parseInt(this.duration/(100*s)))}},watch:{play:function(){this.countTo()}}};function s(t,s,e,a,i,n,r,o,c,d){"boolean"!=typeof r&&(c=o,o=r,r=!1);const l="function"==typeof e?e.options:e;let u;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),a&&(l._scopeId=a),n?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},l._ssrRegister=u):s&&(u=r?function(t){s.call(this,d(t,this.$root.$options.shadowRoot))}:function(t){s.call(this,o(t))}),u)if(l.functional){const t=l.render;l.render=function(s,e){return u.call(e),t(s,e)}}else{const t=l.beforeCreate;l.beforeCreate=t?[].concat(t,u):[u]}return e}!function(t,s){void 0===s&&(s={});var e=s.insertAt;if(t&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===e&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}("#center{height:2vw;width:100%;display:flex;position:relative;justify-content:flex-start;background:#000;border:1px solid #fff;border-radius:2px;transition:1s}.content{position:absolute;width:100%;height:100%;top:0;z-index:10;left:0;right:0;display:flex;justify-content:center;align-items:center;color:#fff;font-size:20px}#main{width:200px;height:100%;background:#92c81a;float:left;position:relative;box-sizing:border-box}.container-pixel{height:100%;display:flex;flex-direction:row}.row{width:5px;height:33%;background:#92c81a;float:right}.sq{height:100%;width:5px;float:left}#sq-2{background:#4a672f}#sq-3{background:#1d2019}#sq-6{background:#2c341c}#sq-1,#sq-5,#sq-9{background:#74b215}#sq-12,#sq-4,#sq-8{background:#7bc415}#sq-10,#sq-11,#sq-7{background:#92c81a}.disabled{display:none}");var e=s({render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:t.classBar,attrs:{id:"center"}},[e("span",{staticClass:"content"},[t._t("default",null,{count:t.animatedCount})],2),t._v(" "),e("div",{style:{width:t.animatedCount/t.maxValue*100+"%"},attrs:{id:"main"}}),t._v(" "),e("div",{staticClass:"container-pixel",class:{disabled:t.count/t.maxValue*100>100}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row",attrs:{id:"r-four"}},[s("span",{staticClass:"sq",attrs:{id:"sq-10"}}),this._v(" "),s("span",{staticClass:"sq",attrs:{id:"sq-11"}}),this._v(" "),s("span",{staticClass:"sq",attrs:{id:"sq-12"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row",attrs:{id:"r-three"}},[s("span",{staticClass:"sq",attrs:{id:"sq-7"}}),this._v(" "),s("span",{staticClass:"sq",attrs:{id:"sq-8"}}),this._v(" "),s("span",{staticClass:"sq",attrs:{id:"sq-9"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row",attrs:{id:"r-two"}},[s("span",{staticClass:"sq",attrs:{id:"sq-4"}}),this._v(" "),s("span",{staticClass:"sq",attrs:{id:"sq-5"}}),this._v(" "),s("span",{staticClass:"sq",attrs:{id:"sq-6"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row",attrs:{id:"r-one"}},[s("span",{staticClass:"sq",attrs:{id:"sq-1"}}),this._v(" "),s("span",{staticClass:"sq",attrs:{id:"sq-2"}}),this._v(" "),s("span",{staticClass:"sq",attrs:{id:"sq-3"}})])}]},void 0,t,void 0,!1,void 0,!1,void 0,void 0,void 0);Object.defineProperty(e,"install",{value:function(t){t.component("vue-pixel-bar",e)}}),module.exports=e;
//# sourceMappingURL=index.js.map
