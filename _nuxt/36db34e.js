(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{445:function(e,t,r){var content=r(463);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("716725b3",content,!0,{sourceMap:!1})},462:function(e,t,r){"use strict";r(445)},463:function(e,t,r){var n=r(14)(!1);n.push([e.i,"iframe[data-v-6994b64a]{background-color:#d3d3d3;width:100%;border:0}@media screen and (max-width:960px){iframe[data-v-6994b64a]{height:50vh}}@media screen and (min-width:961px){iframe[data-v-6994b64a]{height:80vh}}",""]),e.exports=n},489:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{iframe:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.489094229306!2d-122.6107825842012!3d45.540485836370564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a12f3efcb58f%3A0xdd04b30546b713e2!2sZien%20Hong!5e0!3m2!1sen!2sus!4v1602826806147!5m2!1sen!2sus",loaded:!1}}},head:function(){return{title:"Location",meta:[{hid:"description",name:"description",content:"Location information for Zien Hong restaurant."}]}}},o=(r(462),r(70)),d=r(81),c=r.n(d),l=r(424),f=r(175),m=r(416),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"mt-6"},[r("div",{staticClass:"text-center"},[r("h1",[e._v("Hours & Location")])]),e._v(" "),r("div",{staticClass:"text-center mt-6 mb-12"},[r("p",{staticClass:"my-0 text-h5"},[e._v("Open Everyday")]),e._v(" "),r("p",{staticClass:"my-0 text-h5"},[e._v("\n      "+e._s(e.$store.state.business_info.open_hour)+" -\n      "+e._s(e.$store.state.business_info.close_hour)+"\n    ")]),e._v(" "),r("p",{staticClass:"my-0 mt-6 font-weight-bold text-h5"},[r("a",{attrs:{href:"https://goo.gl/maps/rEanfSNmhZtGz42J9",target:"_blank",rel:"noopener"}},[e._v(e._s(e.$store.state.business_info.address_full))])]),e._v(" "),r("p",{staticClass:"my-0 mt-2 font-weight-bold text-h5"},[r("a",{attrs:{href:"tel:"+e.$store.state.business_info.telephone}},[e._v(e._s(e.$store.state.business_info.telephone_pretty))])])]),e._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:!e.iframe.loaded,expression:"!iframe.loaded"}],attrs:{indeterminate:"",color:"red",size:"250",width:"10"}})],1),e._v(" "),r("transition",{attrs:{name:"fade"}},[r("iframe",{directives:[{name:"show",rawName:"v-show",value:e.iframe.loaded,expression:"iframe.loaded"}],attrs:{src:e.iframe.src,frameborder:"0",allowfullscreen:"false","aria-hidden":"false",tabindex:"0"},on:{load:function(t){e.iframe.loaded=!0}}})])],1)}),[],!1,null,"6994b64a",null);t.default=component.exports;c()(component,{VContainer:l.a,VProgressCircular:f.a,VRow:m.a})}}]);