import{C as t,t as e,V as n,n as o}from"./index.5c4cb14.js";import{I as i}from"./indicatorOptionMixin.5c4cb14.js";var r=Object.defineProperty,l=Object.getOwnPropertyDescriptor;let s=class extends n{};s=((t,e,n,o)=>{for(var i,s=o>1?void 0:o?l(e,n):e,a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o?i(e,n,s):i(s))||s);return o&&s&&r(e,n,s),s})([t({name:"IndicatorOptionLineType",mixins:[i],components:{DropdownButton:e}})],s);const a=o(s,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("label",{staticClass:"indicator-option-line-type form-group"},[e("label",[t._v(t._s(t.label)),t._t("description")],2),e("dropdown-button",{staticClass:"-outline form-control -arrow",attrs:{options:{0:"Simple",1:"with steps"},placeholder:t.definition.placeholder||"lineType"},on:{input:function(e){return t.$emit("input",e)}},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)}),[],!1,null,null,null,null).exports;export{a as default};
