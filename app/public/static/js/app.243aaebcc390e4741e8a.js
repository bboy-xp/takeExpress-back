webpackJsonp([1],{"5ng9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADV0lEQVRoQ+2XS2gTURSG//+OpNpMNpWKguBCVKzWFwqKK0HEB25KTVLFnSDowgeCggtfi/pA7cKFGwVBMFOKG7UguhO6EDciKoigoIhYUWkm9Tn3yERTozSZm5m0YyFZZs7j/85/58wMMcF/nOD60QCI28GGAw0HIk6gcYQiDjByupEDKpffBeIEwZYKHfu9jL0pspoQBcwAnPwQwVS1+p4lC9GZehxCQ6QUQwC3QKC5KgCwHhn7diQ1IZJNAd4QmBFQf7uXsa+G0BApxQwgl39Ccn61TgIc0Bn7bCQ1IZKNACzHvQVgY1UAQU5n7a4QGiKlGAGonNtDYk+AA291xg46ZpHEjpZsCFDYScrFoO6eTJqH7ORnQXH1vG4EgL4vcyzvR6CwOFapGQAA5bivCMysND0RXNJZe0c9p2tSqxaAcwT2jVZUgMs6ndwBUkya1jPGGAC5wgqLcv/f5gL06Iw9Klg9hVaqZQ7gH6Nc/jnJ2aViInJcZ1NHxkNofQCc/G6CF0rFvJheH8phanIAvZJQ4r4m2OoXEeC1ZnIu0vwclwu1ARS30d8uTKh7oDhlESqn8IDEst8ueJrYgLR9Jw4XanagKLLXbVeCBwQSv5hkSCOxEtmmp+MNEQ6guJHcvSTOj2wk/37wkkuxle/HEyI0gC/SctybAEY+JUXwUCdkHTpS7wIh+vIL0GS/wGYOB8ZWCYgEgBvSrAqFARKL/zwb8FKLtQZdU15W6qsc9ySBgwJxKbwnwF2trPsAB4GmQaT5wRQqGoDf5bpMVd/cAZJzy47TO02sRdp+9K8QlXO7SRwKEijAeZ2x9wfFRQco3tTSYol/nLiqDOIzwG6daj6Njfzq/28qfuRB+SmZwE5+rwZRHwC/Q780qaHCFRKZ8oYCvNDkXqWxhJRjQRMtv+79SLZgGz+OD8DvLspxD0BwioSqRexosbEAFIU4w6st0T0glkeBiA+gpLp3uFOJd4xgWxiQ+AF81UdFWW3uFhEeJtBeC8j/AVCu+FphuVLa/+zsKL3RVgPyUsnJpQ1WKa5+W6iW0fqxfe4i5WEdhLNAmUbIdBH4r+mt8BeA8IzO2ieDysYHEKTM8HoDwHBQYxbWcGDMRmtYuOGA4aDGLKzhwJiN1rDwT7y7CEBlt04eAAAAAElFTkSuQmCC"},"8Q0l":function(t,e){},Er00:function(t,e,a){t.exports=a.p+"static/img/QRcodeSouth.c6364cc.jpg"},MGXF:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},s,!1,function(t){a("8Q0l")},null,null).exports,i=a("/ocq"),r=a("Xxa5"),u=a.n(r),l=a("exGp"),c=a.n(l),v=a("aozt"),p=a.n(v),d={data:function(){return{options:[{value:"北一寝室楼"},{value:"北二寝室楼"},{value:"北三寝室楼"},{value:"北四寝室楼"},{value:"北五寝室楼"},{value:"北六寝室楼"},{value:"北七寝室楼"},{value:"北八寝室楼"},{value:"北九寝室楼"},{value:"北十寝室楼"},{value:"北区其他"},{value:"南一寝室楼"},{value:"南二寝室楼"},{value:"南三寝室楼"},{value:"南四寝室楼"},{value:"南五寝室楼"},{value:"南六寝室楼"},{value:"南七寝室楼"},{value:"南八寝室楼"},{value:"南九寝室楼"},{value:"南十寝室楼"},{value:"南十一寝室楼"},{value:"南十二寝室楼"},{value:"南区其他"}],position:"",phoneNumber:""}},mounted:function(){document.title="代取快递",localStorage.getItem("position")&&(this.position=localStorage.getItem("position")),localStorage.getItem("phoneNumber")&&(this.phoneNumber=localStorage.getItem("phoneNumber"))},methods:{submit:function(){var t=this;return c()(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.setItem("position",t.position),localStorage.setItem("phoneNumber",t.phoneNumber),a={position:t.position,phoneNumber:t.phoneNumber},e.next=5,p.a.post("/postUserdata",a);case 5:e.sent,"南一寝室楼"===t.position||"南二寝室楼"===t.position||"南三寝室楼"===t.position||"南四寝室楼"===t.position||"南五寝室楼"===t.position||"南六寝室楼"===t.position||"南七寝室楼"===t.position||"南八寝室楼"===t.position||"南九寝室楼"===t.position||"南十寝室楼"===t.position||"南十一寝室楼"===t.position||"南十二寝室楼"===t.position||"南区其他"===t.position?(t.$message({message:"恭喜你，提交成功",type:"success"}),t.$router.push("/successSouth")):(t.$message({message:"恭喜你，提交成功",type:"success"}),t.$router.push("/successNorth"));case 7:case"end":return e.stop()}},e,t)}))()}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"formContent"},[n("div",{staticClass:"title"},[t._v("邮寄快递")]),t._v(" "),n("div",{staticClass:"form"},[n("div",{staticClass:"tableContent1"},[n("div",{staticClass:"formTitle"},[n("img",{staticClass:"positionImg",attrs:{src:a("jzOa"),alt:"404"}}),t._v(" "),n("sapn",[t._v("选择取件地址")])],1),t._v(" "),n("el-select",{attrs:{placeholder:"请选择"},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}},t._l(t.options,function(t){return n("el-option",{key:t.value,attrs:{label:t.value,value:t.value}})}))],1),t._v(" "),n("div",{staticClass:"tableContent2"},[t._m(0),t._v(" "),n("el-input",{attrs:{type:"number",placeholder:"请输入手机号"},model:{value:t.phoneNumber,callback:function(e){t.phoneNumber=e},expression:"phoneNumber"}})],1)]),t._v(" "),n("el-button",{staticClass:"submitBtn",attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"formTitle"},[e("img",{staticClass:"phoneImg",attrs:{src:a("5ng9"),alt:"404"}}),this._v(" "),e("span",[this._v("手机号")])])}]};var f=a("VU/8")(d,m,!1,function(t){a("nnMs")},"data-v-46a7a858",null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"successNorthContent"},[e("div",{staticClass:"qrCodeContent"},[e("img",{staticClass:"QRcodeImg",attrs:{src:a("uaGG"),alt:"404"}})]),this._v(" "),e("div",{staticClass:"footer"},[this._v("识别二维码填写快递信息")])])}]};var A=a("VU/8")({data:function(){return{}}},h,!1,function(t){a("sp5E")},"data-v-5ff27a40",null).exports,g={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"successSouthContent"},[e("div",{staticClass:"qrCodeContent"},[e("img",{staticClass:"QRcodeImg",attrs:{src:a("Er00"),alt:"404"}})]),this._v(" "),e("div",{staticClass:"footer"},[this._v("识别二维码填写快递信息")])])}]};var w=a("VU/8")({data:function(){return{}}},g,!1,function(t){a("wftw")},"data-v-7d8fff66",null).exports,C={data:function(){return{activeIndex:"1",tableData:[],position:"",options:[{value:"北一寝室楼"},{value:"北二寝室楼"},{value:"北三寝室楼"},{value:"北四寝室楼"},{value:"北五寝室楼"},{value:"北六寝室楼"},{value:"北七寝室楼"},{value:"北八寝室楼"},{value:"北九寝室楼"},{value:"北十寝室楼"},{value:"北区其他"},{value:"南一寝室楼"},{value:"南二寝室楼"},{value:"南三寝室楼"},{value:"南四寝室楼"},{value:"南五寝室楼"},{value:"南六寝室楼"},{value:"南七寝室楼"},{value:"南八寝室楼"},{value:"南九寝室楼"},{value:"南十寝室楼"},{value:"南十一寝室楼"},{value:"南十二寝室楼"},{value:"南区其他"}]}},mounted:function(){var t=this;return c()(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="代取快递后台",e.next=3,p.a.get("/getSubmissionOrders");case 3:a=e.sent,t.tableData=a.data;case 5:case"end":return e.stop()}},e,t)}))()},methods:{gotoTaken:function(){this.$router.replace("/admin/taken")},handleEdit:function(t,e){var a=this,n=e._id;this.$confirm("此操作将修改该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(c()(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post("/changeTaken",{_id:n});case 2:e=t.sent,a.tableData=e.data,a.$message({type:"success",message:"修改成功!"});case 5:case"end":return t.stop()}},t,a)}))).catch(function(){a.$message({type:"info",message:"已取消修改"})})},targetOrder:function(){var t=this;return c()(u.a.mark(function e(){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={position:t.position},e.next=3,p.a.post("/submissionGetTargetOrders",a);case 3:n=e.sent,t.tableData=n.data;case 5:case"end":return e.stop()}},e,t)}))()},allOrders:function(){var t=this;return c()(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/getSubmissionOrders");case 2:a=e.sent,t.tableData=a.data;case 4:case"end":return e.stop()}},e,t)}))()}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"submissionContent"},[a("div",{staticClass:"nav"},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"1"}},[t._v("已提交订单")]),t._v(" "),a("el-menu-item",{attrs:{index:"2"},on:{click:t.gotoTaken}},[t._v("已取订单")])],1)],1),t._v(" "),a("div",{staticClass:"tableContent"},[a("div",[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.targetOrder},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.value,value:t.value}})})),t._v(" "),a("el-button",{staticClass:"showAllOrders",attrs:{type:"primary"},on:{click:t.allOrders}},[t._v("显示全部订单")])],1),t._v(" "),a("div",{staticClass:"tableBody"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"position",label:"地址",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phoneNumber",label:"电话",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:"tel:"+e.row.phoneNumber}},[t._v(t._s(e.row.phoneNumber))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createdAt",label:"提交时间",width:"108"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"btnContent"},[a("div",{staticClass:"editBtn",on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[a("i",{staticClass:"el-icon-check"}),a("span",{staticClass:"text-margin"},[t._v("已取")])])])]}}])})],1)],1)])])},staticRenderFns:[]};var x=a("VU/8")(C,b,!1,function(t){a("hEmf")},"data-v-0de2e03d",null).exports,k={data:function(){return{activeIndex:"2",tableData:[],position:"",options:[{value:"北一寝室楼"},{value:"北二寝室楼"},{value:"北三寝室楼"},{value:"北四寝室楼"},{value:"北五寝室楼"},{value:"北六寝室楼"},{value:"北七寝室楼"},{value:"北八寝室楼"},{value:"北九寝室楼"},{value:"北十寝室楼"},{value:"北区其他"},{value:"南一寝室楼"},{value:"南二寝室楼"},{value:"南三寝室楼"},{value:"南四寝室楼"},{value:"南五寝室楼"},{value:"南六寝室楼"},{value:"南七寝室楼"},{value:"南八寝室楼"},{value:"南九寝室楼"},{value:"南十寝室楼"},{value:"南十一寝室楼"},{value:"南十二寝室楼"},{value:"南区其他"}]}},mounted:function(){var t=this;return c()(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="代取快递后台",e.next=3,p.a.get("/getTakenOrders");case 3:a=e.sent,t.tableData=a.data;case 5:case"end":return e.stop()}},e,t)}))()},methods:{gotoSubmission:function(){this.$router.replace("/admin/submission")},handleEdit:function(t,e){var a=this,n=e._id;this.$confirm("此操作将修改该记录, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",center:!0}).then(c()(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post("/returnTaken",{_id:n});case 2:e=t.sent,a.tableData=e.data,a.$message({type:"success",message:"修改成功!"});case 5:case"end":return t.stop()}},t,a)}))).catch(function(){a.$message({type:"info",message:"已取消修改"})})},targetOrder:function(){var t=this;return c()(u.a.mark(function e(){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={position:t.position},e.next=3,p.a.post("/takenGetTargetOrders",a);case 3:n=e.sent,t.tableData=n.data;case 5:case"end":return e.stop()}},e,t)}))()},allOrders:function(){var t=this;return c()(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/getTakenOrders");case 2:a=e.sent,t.tableData=a.data;case 4:case"end":return e.stop()}},e,t)}))()}}},Q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"takenContent"},[a("div",{staticClass:"nav"},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"1"},on:{click:t.gotoSubmission}},[t._v("已提交订单")]),t._v(" "),a("el-menu-item",{attrs:{index:"2"}},[t._v("已取订单")])],1)],1),t._v(" "),a("div",{staticClass:"tableContent"},[a("div",{staticClass:"selectContent"},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:t.targetOrder},model:{value:t.position,callback:function(e){t.position=e},expression:"position"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.value,value:t.value}})})),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.allOrders}},[t._v("显示全部订单")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"position",label:"地址",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phoneNumber",label:"电话",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{attrs:{href:"tel:"+e.row.phoneNumber}},[t._v(t._s(e.row.phoneNumber))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createdAt",label:"提交时间",width:"108"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"btnContent"},[a("div",{staticClass:"editBtn",on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[a("i",{staticClass:"el-icon-close"}),a("span",{staticClass:"text-margin"},[t._v("未取")])])])]}}])})],1)],1)])},staticRenderFns:[]};var E=a("VU/8")(k,Q,!1,function(t){a("MGXF")},"data-v-399a85d9",null).exports;n.default.use(i.a);var S=new i.a({routes:[{path:"/",name:"Form",component:f},{path:"/successNorth",name:"SuccessNorth",component:A},{path:"/successSouth",name:"SuccessSouth",component:w},{path:"/admin/submission",name:"Submission",component:x},{path:"/admin/taken",name:"Taken",component:E}]}),D=a("zL8q"),N=a.n(D);a("tvR6");n.default.config.productionTip=!1,n.default.use(N.a),new n.default({el:"#app",router:S,components:{App:o},template:"<App/>"})},hEmf:function(t,e){},jzOa:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFcklEQVRoQ+2Za4wTVRTH/2emC2TdXdpx8YEvyM5UCAF5BJ9Ro4mSqGjQRBMkqB9M3ZllVYyJPELwAajRqEs7hUSNEeMHE4waMRKNJKsoH0zEgIqdwgeekZXe7QqUzW57zHSBEKR37kzrBxL69f7P/5zfvXfO3LklnOc/Os/rxwWAUyvYvHbv+NH64DwC5jJjPBG3M9BOjEEGHSHC3wD2MFMvSOsVnRN3gIjr3QF1r0Aim78FlcpqEN1KCLOi/GeZsKzYmdxYD0RkgJZMbnIT8AYR3VNPAWD8DMbjhS7rtyg+kQDiae8BTcPHAJqjJP1PDPNRZv0R0dXxVVi/0AAJ11tCwOqwiYL0DDCYuoVjpoO0Z46HAkhkcikiWhcmQRgtMyoV0uYU7Y5vVeOUAdqye67XefgHAjWpmkfRMVCs6JhVTFm7VeLVANYfbDaGj3ogGq9iWq+GGT8Jx7pZxUcJwHC9FwGsUDEE4z0GtpSh5QZaL/q9uXSirWl4aKoOvpcJCwhkqPhUQPP6bfOzIG0gQEuPN65Jxz4ijJaaMQaYtPnC7thUS2f0eG3Q6SUQPx1UGBi5gm1OCnrZBQKodB0G7ymzNmfAMfOBhQFIZLxHifCRgvamgm1tk+lUALYSUHM/MvMRKtP0Qre1X6Gg0xLDzb0M0HJZDDOvEk5SqpECtKb3XxzTSn2yIwIDLwjbei1M8VXtJ6wbfd5OEE2qFcvgX4WdnB55BeKud78GfF47Aco0DKPQbQ2EBgAQd3NPaKD3Jf4sOk1d9hxIVyDu5hdp4B7JDH0v7ORtUYr3Y1qy+UtGMf8lbw50dcEx99XSSAESbu51Aj0vmaENwrYWRgXw4xJubpBAoyQe0gc5ACCfJfBTtQFonbDNzjoB+gjUXsujDO0u2dFCDpDJvUJEy2oWyPxpwUk+FBmAmRLZfFnWJCrMM/qd5PZIWyju5h/TwB/ULpAPFexk5ONFWzp3Q0wjaZ8vnBjTjMVXlSIBGGlvCjTslM1wpcK393cle6OsguF6bwF4RrLCuwpOcnLkNgpmMrLeAYAulzzIv4h2czYepnIYCP8d06SV/JffmJrejLRwrEXRAapdwnMJkD6oDGSEbXUpA2QOtySouFn2hve9Kkx39jvmlroAVPapn4AZrhhndgethNHjXckx/pJA18kKY2CfOGxOwEqq1AVQ7dUZbycRpgTP8MmbBs36AikaOlufyHhzAXxIhHiQFwNLhW2tCdIFHuZGXjbeAgI2BJmdHq8erbEVYP+moQ2MSQS6FoRLlTwYpTKNuqJoXyOC9EoAWMkxY1x+v3IBQVkDxhnICtuyVWzUAKrbKN9FxGtVTOvRMGMQMS0pUh17VXyUAfzjb6Ivv4sIpopxVA0Da4RtLVWNVwcAMDbj3a0TNquah9Uxo0+0tk7EwsuOqcaGAvBNDdf7GsAc1QQhdU8WbOvdMDHhAdLeFCbeTkSxMImCtMy8XdjWzKCP+LN9QgP4BnHXW6EB/lVLQ37MPDwETDvqJP8IaxgJYKStej+CaHbYhOfSM9Ny4ZironhFA/Cvpat/aJzYoXpRVas4Bm8SndbcsFvnlF9kgOpWyuTvIOJvCNCjzB4Du6Frs0Sqoxgl3o+pC+BkV1oM4M3QBTBKQ7HYzH9SE3eFjj0joG6AKkQmtxFED4YphKHdJ7uGVPVqCADWH2xODB/bRoSpKomZ8apwrCUq2iBNYwAAjNziHf+OQNMCkr5dsK1ngwpTHW8YQDXhyJdWLwEzzt0uGzfzDelC5yoysX73WJQr/mfo/NPjjBJreE50WlnVmVXVNXYFzshquN6NDDgADgzqTe8cT004pFpUGN3/BhCmiHq0FwDqmb1GxP4LlrfmQNEgH3IAAAAASUVORK5CYII="},nnMs:function(t,e){},sp5E:function(t,e){},tvR6:function(t,e){},uaGG:function(t,e,a){t.exports=a.p+"static/img/QRcodeNorth.0f04813.jpg"},wftw:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.243aaebcc390e4741e8a.js.map