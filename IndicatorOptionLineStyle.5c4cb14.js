import{C as t,t as e,V as o,n}from"./index.5c4cb14.js";import{I as r}from"./indicatorOptionMixin.5c4cb14.js";var i=Object.defineProperty,l=Object.getOwnPropertyDescriptor;let s=class extends o{};s=((t,e,o,n)=>{for(var r,s=n>1?void 0:n?l(e,o):e,a=t.length-1;a>=0;a--)(r=t[a])&&(s=(n?r(e,o,s):r(s))||s);return n&&s&&i(e,o,s),s})([t({name:"IndicatorOptionLineStyle",mixins:[r],components:{DropdownButton:e}})],s);const a=n(s,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("div",{staticClass:"indicator-option-line-style form-group"},[e("label",[t._v(t._s(t.label)),t._t("description")],2),e("dropdown-button",{staticClass:"-outline form-control -arrow",attrs:{options:{0:"Solid",1:"Dotted",2:"Dashed",3:"LargeDashed",4:"SparseDotted"},placeholder:t.definition.placeholder||"lineStyle"},on:{input:function(e){return t.$emit("input",e)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)}),[],!1,null,null,null,null).exports;export{a as default};
