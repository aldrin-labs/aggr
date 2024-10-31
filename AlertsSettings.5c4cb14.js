var t=Object.defineProperty,e=(e,i,s)=>(((e,i,s)=>{i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s})(e,"symbol"!=typeof i?i+"":i,s),s);import{C as i,t as s,az as o,V as a,z as r,ah as n,n as l}from"./index.5c4cb14.js";import{T as c}from"./ToggableGroup.5c4cb14.js";var p=Object.defineProperty,u=Object.getOwnPropertyDescriptor;let d,m=class extends a{constructor(){super(...arguments),e(this,"helps",{"notifications-disabled":"Push notification are disabled.","notifications-grant":"Enable notifications for this site in your browser."}),e(this,"notificationsPermissionState","granted")}get alertSound(){return this.$store.state.settings.alertSound}get alerts(){return this.$store.state.settings.alerts}get alertsColor(){return this.$store.state.settings.alertsColor}get alertsLineStyle(){return this.$store.state.settings.alertsLineStyle}get alertsLineWidth(){return this.$store.state.settings.alertsLineWidth}get alertsClick(){return this.$store.state.settings.alertsClick}get displayAlertSound(){const t=this.alertSound;return t?t.length<=14?t:t.slice(0,6)+".."+t.substr(-6):null}created(){this.checkNotificationsPermission()}checkNotificationsPermission(){navigator.permissions.query({name:"notifications"}).then((t=>{d||(t.onchange=t=>{this.setNotificationsPermission(t.target.state)},d=t),this.setNotificationsPermission(t.state)})).catch((t=>{}))}setNotificationsPermission(t){this.notificationsPermissionState=t,"granted"!==this.notificationsPermissionState&&this.alerts&&this.$store.commit("settings/TOGGLE_ALERTS",!1)}async toggleAlerts(t){let e=t.target.checked;e&&(this.notificationsPermissionState=await Notification.requestPermission()),"denied"===this.notificationsPermissionState&&e?(e=!1,this.$store.dispatch("app/showNotice",{id:"alert-notifications",type:"error",icon:"icon-warning -large pt0",timeout:1e5,html:!0,title:`<div class="ml8"><strong>This might not work as expected.</strong><br>${this.helps["notifications-grant"]}</div>`})):this.$store.dispatch("app/showNotice",{id:"alert-notifications",type:"info",title:e?"Alerts are enabled":"Alerts are disabled"}),t.target.checked=e,this.$store.commit("settings/TOGGLE_ALERTS",e)}async handleAlertSoundFile(t){const e=t.target.files[0];if(e)try{await r.importSound(e),this.$store.commit("settings/SET_ALERT_SOUND",e.name),n.playOnce(e.name)}catch(i){return void this.$store.dispatch("app/showNotice",{title:i.message,type:"error"})}}removeAlertSound(){this.alertSound&&this.$store.commit("settings/SET_ALERT_SOUND",null)}async playAlertSound(){if(this.alertSound)try{await n.playOnce(this.alertSound,3e3)}catch(t){this.$store.dispatch("app/showNotice",{type:"error",title:`Failed to play ${this.alertSound}`})}}};m=((t,e,i,s)=>{for(var o,a=s>1?void 0:s?u(e,i):e,r=t.length-1;r>=0;r--)(o=t[r])&&(a=(s?o(e,i,a):o(a))||a);return s&&a&&p(e,i,a),a})([i({components:{DropdownButton:s,ToggableGroup:c,ColorPickerControl:o},name:"AlertsSettings"})],m);const h=l(m,(function(){var t=this,e=t._self._c;return t._self._setupProxy,e("toggable-group",{staticClass:"alerts-settings",attrs:{value:t.alerts,label:"Price alerts"},on:{change:function(e){return t.toggleAlerts(e)}},scopedSlots:t._u([{key:"off",fn:function(){return["denied"===t.notificationsPermissionState?e("label",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"text-danger help-text mt0 mb0",attrs:{title:`${t.helps["notifications-disabled"]} ${t.helps["notifications-grant"]}`}},[e("i",{staticClass:"icon-warning mr4"}),t._v(" Notifications are blocked. ")]):"granted"!==t.notificationsPermissionState?e("p",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"text-info help-text mt0 mb0",attrs:{title:`${t.helps["notifications-disabled"]} ${t.helps["notifications-grant"]}`}},[e("i",{staticClass:"icon-info mr4"}),t._v(" Awaiting browser persmission. ")]):t._e()]},proxy:!0}])},[e("p",{staticClass:"mt0 text-color-50"},[e("i",{staticClass:"icon-info"}),t._v(" Uses average price of the coin ")]),e("div",{staticClass:"column"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Line style")]),e("dropdown-button",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"-outline form-control -arrow flex-grow-1 w-100",attrs:{value:t.alertsLineStyle,options:{0:"Solid",1:"Dotted",2:"Dashed",3:"LargeDashed",4:"SparseDotted"},placeholder:"lineStyle",title:"Line style (ex: dashed)"},on:{input:function(e){return t.$store.commit("settings/SET_ALERTS_LINESTYLE",e)}}})],1),e("div",{staticClass:"form-group"},[e("label",[t._v("Line width")]),e("editable",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"form-control -center w-100",attrs:{value:t.alertsLineWidth,title:"Line width (ex: 2)"},on:{input:function(e){return t.$store.commit("settings/SET_ALERTS_LINEWIDTH",e)}}})],1),e("div",{staticClass:"form-group"},[e("label",[t._v("Color")]),e("color-picker-control",{attrs:{value:t.alertsColor,label:"Alert color"},on:{input:function(e){return t.$store.commit("settings/SET_ALERTS_COLOR",e)}}})],1)]),e("div",{staticClass:"column"},[e("div",{staticClass:"form-group mb16 mt16"},[e("label",[e("i",{staticClass:"icon-click mr4"}),t._v(" Control")]),e("label",{directives:[{name:"tippy",rawName:"v-tippy"}],staticClass:"checkbox-control d-flex -aggr -auto -auto",attrs:{title:"Place alerts faster ⚡️"},on:{change:function(e){return t.$store.commit("settings/TOGGLE_ALERTS_CLICK")}}},[e("input",{staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:t.alertsClick}}),e("div",{attrs:{on:"1 CLICK ⚡️",off:"ALT+CLICK"}})])]),e("div",{staticClass:"form-group mt16 mb16"},[e("label",{attrs:{for:"audio-assistant-source"}},[e("i",{staticClass:"icon-music-note mr4"}),t._v(" Alert sound")]),e("button",{staticClass:"btn -file -blue -cases"},[e("i",{staticClass:"icon-upload mr8"}),t._v(" "+t._s(t.displayAlertSound||"Browse")+" "),t.alertSound?e("i",{staticClass:"icon-volume-high mr8 btn__suffix",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.playAlertSound.apply(null,arguments)}}}):t._e(),t.alertSound?e("i",{staticClass:"icon-cross mr8 btn__suffix",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.removeAlertSound.apply(null,arguments)}}}):t._e(),e("input",{staticClass:"input-file",attrs:{type:"file",accept:"audio/*"},on:{change:t.handleAlertSoundFile}})])])])])}),[],!1,null,null,null,null).exports;export{h as A};
