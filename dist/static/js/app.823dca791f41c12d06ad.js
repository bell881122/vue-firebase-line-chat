webpackJsonp([0],{"/bIL":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("div",{staticClass:"nameInput"},[e._v("\n    UserName :\n    "),s("input",{staticClass:"userName",attrs:{type:"text",id:"js-userName"}}),e._v(" "),s("button",{attrs:{type:"button"},on:{click:function(t){e.setName()}}},[e._v("Set")])]),e._v(" "),s("div",{staticClass:"chatRoom"},[e._m(0),e._v(" "),s("div",{staticClass:"roomBody",attrs:{id:"js-roomBody"}},e._l(e.messages,function(t){return s("div",[t.userName!=e.userName?[s("div",{staticClass:"messageBox"},[s("img",{staticClass:"messageBox__img",attrs:{src:"https://www.w3schools.com/bootstrap/cinqueterre.jpg"}}),e._v(" "),s("div",{staticClass:"messageBox_content"},[s("div",{staticClass:"messageBox__name"},[e._v(e._s(t.userName))]),e._v(" "),s("div",{staticClass:"messageBox__text"},[e._v(e._s(t.message))])]),e._v(" "),s("div",{staticClass:"messageBox__time"},[e._v(e._s(t.timeStamp))])])]:e._e(),e._v(" "),t.userName==e.userName?[s("div",{staticClass:"messageBox messageBox--self"},[s("div",{staticClass:"messageBox__time messageBox__time--self"},[e._v(e._s(t.timeStamp))]),e._v(" "),s("div",{staticClass:"messageBox_content messageBox_content--self"},[s("div",{staticClass:"messageBox__text messageBox__text--self"},[e._v(e._s(t.message))])])])]:e._e()],2)})),e._v(" "),s("div",{staticClass:"roomBottom"},[s("div",{staticClass:"roomBottom__tools"}),e._v(" "),s("textarea",{staticClass:"roomBottom__input",class:{disable:!e.userName},attrs:{id:"js-message"},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.sendMessage(t)}}})])])])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"roomHead"},[s("img",{staticClass:"roomHead__img",attrs:{src:"https://www.w3schools.com/bootstrap/cinqueterre.jpg"}}),e._v(" "),s("div",{staticClass:"roomHead__title"},[e._v("Test Room")])])}],n={render:a,staticRenderFns:o};t.a=n},Cl4r:function(e,t){},Ds4J:function(e,t,s){"use strict";var a=firebase.database().ref("/messages/");t.a={name:"ChatRoom",data:function(){return{userName:"",messages:[]}},methods:{setName:function(){var e=this,t=document.querySelector("#js-userName").value;console.log(t),e.userName=t},getTime:function(){var e=new Date,t=e.getHours(),s=e.getMinutes();return{nowTime:(t>=12?"下午":"上午")+" "+t+":"+s,timeStamp:Math.floor(e/1e3)}},sendMessage:function(e){if(!e.shiftKey){var t=this,s=document.querySelector("#js-userName"),o=document.querySelector("#js-message"),n=t.getTime();a.child(n.timeStamp).set({userName:s.value,message:o.value,timeStamp:n.nowTime}),o.value="",t.$nextTick(function(){var e=document.querySelector("#js-roomBody");e.scrollTop=e.scrollHeight})}}},mounted:function(){var e=this;a.on("value",function(t){var s=t.val();e.messages=s})}}},M93x:function(e,t,s){"use strict";function a(e){s("Cl4r")}var o=s("xJD8"),n=s("U9jt"),i=s("VU/8"),r=a,c=i(o.a,n.a,r,null,null);t.a=c.exports},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),o=s("M93x"),n=s("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:n.a,template:"<App/>",components:{App:o.a}})},RFZe:function(e,t,s){"use strict";function a(e){s("b3Qj")}var o=s("Ds4J"),n=s("/bIL"),i=s("VU/8"),r=a,c=i(o.a,n.a,r,"data-v-d66600dc",null);t.a=c.exports},U9jt:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],n={render:a,staticRenderFns:o};t.a=n},YaEn:function(e,t,s){"use strict";var a=s("7+uW"),o=s("/ocq"),n=s("RFZe");a.a.use(o.a),t.a=new o.a({routes:[{path:"/",name:"ChatRoom",component:n.a}]})},b3Qj:function(e,t){},xJD8:function(e,t,s){"use strict";t.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.823dca791f41c12d06ad.js.map