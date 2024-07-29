(window.webpackJsonp=window.webpackJsonp||[]).push([[89,15,55],{466:function(e,t,r){"use strict";r.r(t);r(20),r(21),r(25),r(26),r(17),r(7),r(14);var n=r(4),o=r(10);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var c={name:"ErrorFormatter",props:{type:{type:String,default:"form"}},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({errorData:function(){return this.errors&&void 0!==this.errors[this.type]?this.errors[this.type]:null}},Object(o.c)("ui",["errors"]))},m=c,d=r(15),component=Object(d.a)(m,(function(){var e=this,t=e._self._c;return e.errorData?t("ul",{staticClass:"error-list mb-15"},[t("li",{staticClass:"mb-10"},[e._v(e._s(e.$t("error.feo")))]),e._v(" "),e._l(e.errorData,(function(r,n){return t("li",{key:n},[e._v("\n    "+e._s(r)+"\n  ")])}))],2):e._e()}),[],!1,null,null,null);t.default=component.exports},472:function(e,t,r){"use strict";r(32),r(28);t.a={data:function(){return{allowedImageExtensions:/(\.jpg|\.jpeg|\.png|\.svg|\.webp|\.gif)$/i,allowedVideoExtensions:/(\.mp4)$/i,allowedExcelExtensions:/(\.xlsx)$/i,passwordLength:6,maxImageSize:this.$store.state.media.image,maxExcelSize:this.$store.state.media.file,maxVideoSize:this.$store.state.media.video,reg:/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/}},methods:{isValidExcel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxExcelSize;return e.size>1024*t?this.$t("util.fSize",{size:t}):this.allowedExcelExtensions.exec(e.name)?null:this.$t("util.invFile")},isValidImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.maxImageSize,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return e.size>1024*t?this.$t("util.fSize",{size:t}):r&&!this.allowedImageExtensions.exec(e.name)?this.$t("util.invFile"):r||this.allowedVideoExtensions.exec(e.name)?null:this.$t("util.invFile")},isValidEmail:function(e){return this.reg.test(e)},isValidLength:function(e){return e&&e.length>=this.passwordLength||!1}}}},489:function(e,t,r){"use strict";r.r(t);r(124);var n={name:"PasswordField",data:function(){return{password:"",passwordFieldType:"password"}},props:{isInvalid:{type:Boolean,default:!1},value:{type:String}},watch:{value:function(e){this.password=e}},mixins:[],components:{},computed:{isPasswordTypePassword:function(){return"password"===this.passwordFieldType}},methods:{passwordFieldToggle:function(){this.isPasswordTypePassword?this.passwordFieldType="text":this.passwordFieldType="password"}},mounted:function(){this.password=this.value}},o=r(15),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"icon-input right-icon"},[t("i",{staticClass:"icon password-icon"}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.password,expression:"password",modifiers:{trim:!0}}],class:{invalid:!e.password||e.isInvalid},attrs:{type:e.passwordFieldType,placeholder:e.$t("user.pass")},domProps:{value:e.password},on:{change:function(t){return e.$emit("change",e.password)},input:function(t){t.target.composing||(e.password=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),t("i",{staticClass:"icon",class:e.isPasswordTypePassword?"eye-close-icon":"eye-icon",on:{click:e.passwordFieldToggle}})])}),[],!1,null,null,null);t.default=component.exports},867:function(e,t,r){"use strict";r.r(t);r(37),r(44),r(124),r(20),r(21),r(25),r(26),r(17),r(7),r(14);var n=r(1),o=r(4),l=(r(22),r(10)),c=r(86),m=r(472),d=r(156),f=r(489),h=r(466);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={name:"login",layout:"login-layout",middleware:["common-middleware","non-logged-in"],data:function(){return{email:"",password:"",rememberToken:"",hasError:!1,formSubmitting:!1}},mixins:[c.a,m.a],components:{AjaxButton:d.default,ErrorFormatter:h.default,PasswordField:f.default},watch:{},computed:w(w({isDemo:function(){return!1},isInvalidEmail:function(){return this.email&&!this.isValidEmail(this.email)},isLengthInvalid:function(){return this.password&&!this.isValidLength(this.password)}},Object(l.c)("language",["defaultLanguage"])),Object(l.c)("ui",["rememberMe"])),methods:w(w(w(w(w({setCredentials:function(data){data<0?(this.email="admin@mail.com",this.password="123456"):(this.email="vendor@mail.com",this.password="123456"),this.checkForm()},checkForm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.hasError=!1,e.email&&e.password&&!e.isInvalidEmail&&!e.isLengthInvalid){t.next=4;break}return e.hasError=!0,t.abrupt("return",!1);case 4:e.settingRemember(e.rememberToken),e.formSubmitting=!0,t.prev=6,"".trim()||(e.$axios.defaults.baseURL=window.location.origin+"/"),e.$auth.loginWith("local",{data:{remember_token:e.rememberToken,password:e.password,email:e.email}}).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var data,n,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.rememberToken?e.$auth.$storage.setCookie("remember_expires",7,{expires:7}):e.$auth.$storage.removeCookie("remember_expires"),200!==(data=r.data).status){t.next=19;break}return t.next=5,e.getRequest({params:{},api:"profile"});case 5:return n=t.sent,e.formSubmitting=!1,t.next=9,e.settingSiteData(n);case 9:if(e.setProfile(n),!n.languages.length){t.next=14;break}return t.next=13,e.getLangData({i18n:e.$i18n,token:null});case 13:null!==(o=e.defaultLanguage)&&void 0!==o&&o.code&&(e.$i18n.locale=null===(l=e.defaultLanguage)||void 0===l?void 0:l.code);case 14:e.hasError=!1,e.setErrors(),e.$auth.$state.redirect?e.$router.push(e.$auth.$state.redirect):e.$router.push("/"),t.next=21;break;case 19:e.formSubmitting=!1,e.setErrors(null==data?void 0:data.data);case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.formSubmitting=!1,e.setErrors({form:[t.message]}),console.error(t)})),t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(6),e.formSubmitting=!1,t.abrupt("return",e.$nuxt.error(t.t0));case 15:case"end":return t.stop()}}),t,null,[[6,11]])})))()}},Object(l.b)(["settingSiteData"])),Object(l.b)("admin",["setProfile"])),Object(l.b)("common",["getRequest"])),Object(l.b)("language",["getLangData"])),Object(l.b)("ui",["setErrors","settingRemember"])),mounted:function(){this.rememberToken="true"===this.rememberMe||"",this.setErrors()}},x=y,_=r(15),component=Object(_.a)(x,(function(){var e=this,t=e._self._c;return t("form",{ref:"loginForm",staticClass:"login-form",class:{"has-error":e.hasError},on:{submit:function(t){return t.preventDefault(),e.checkForm()}}},[t("h4",{staticClass:"mb-30 mb-sm-15"},[e._v("\n    "+e._s(e.$t("profile.wb"))+"\n  ")]),e._v(" "),t("error-formatter"),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("div",{staticClass:"icon-input"},[t("i",{staticClass:"icon email-icon"}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.email,expression:"email",modifiers:{trim:!0}}],class:{invalid:!e.email||e.isInvalidEmail},attrs:{type:"text",placeholder:e.$t("fSale.email")},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),!e.email&&e.hasError?t("span",{staticClass:"error"},[e._v("\n      "+e._s(e.$t("category.req",{type:e.$t("fSale.email")}))+"\n    ")]):e.isInvalidEmail&&e.hasError?t("span",{staticClass:"error"},[e._v("\n      "+e._s(e.$t("user.isValid",{type:e.$t("fSale.email")}))+"\n    ")]):e._e()]),e._v(" "),t("div",{staticClass:"input-wrapper"},[t("password-field",{attrs:{value:e.password,"is-invalid":e.isLengthInvalid},on:{change:function(t){e.password=t}}}),e._v(" "),!e.password&&e.hasError?t("span",{staticClass:"error"},[e._v("\n      "+e._s(e.$t("category.req",{type:e.$t("user.pass")}))+"\n    ")]):e.isLengthInvalid&&e.hasError?t("span",{staticClass:"error"},[e._v("\n      "+e._s(e.$t("user.inPass"))+"\n    ")]):e._e()],1),e._v(" "),t("div",{staticClass:"sided mt-15"},[t("label",{staticClass:"checkbox"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.rememberToken,expression:"rememberToken"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.rememberToken)?e._i(e.rememberToken,null)>-1:e.rememberToken},on:{change:function(t){var r=e.rememberToken,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&(e.rememberToken=r.concat([null])):l>-1&&(e.rememberToken=r.slice(0,l).concat(r.slice(l+1)))}else e.rememberToken=o}}}),e._v("\n      "+e._s(e.$t("profile.rm"))+"\n    ")]),e._v(" "),t("nuxt-link",{staticClass:"link",attrs:{to:"/forgot-password"}},[e._v("\n      "+e._s(e.$t("profile.fp"))+"\n    ")])],1),e._v(" "),t("ajax-button",{staticClass:"mt-20 primary-btn",attrs:{"activate-btn":!0,"fetching-data":e.formSubmitting,"loading-text":e.$t("dataPage.logging"),text:e.$t("dataPage.sign")}}),e._v(" "),t("client-only",[e.isDemo?t("div",[t("button",{staticClass:"outline-btn block mtb-15 w-100",on:{click:function(t){return t.preventDefault(),e.setCredentials(-1)}}},[e._v("\n        "+e._s(e.$t("profile.laa"))+"\n      ")]),e._v(" "),t("button",{staticClass:"outline-btn block w-100",on:{click:function(t){return t.preventDefault(),e.setCredentials(1)}}},[e._v("\n        "+e._s(e.$t("profile.lav"))+"\n      ")])]):e._e()])],1)}),[],!1,null,"2b2a1e1b",null);t.default=component.exports;installComponents(component,{ErrorFormatter:r(466).default,PasswordField:r(489).default,AjaxButton:r(156).default})}}]);