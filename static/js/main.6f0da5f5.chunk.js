(this["webpackJsonptest-app"]=this["webpackJsonptest-app"]||[]).push([[0],{101:function(e,t,n){e.exports={contentWrapper:"editToDoPoint_contentWrapper__3oKGF",EditToDoReduxFormContainer:"editToDoPoint_EditToDoReduxFormContainer__1z5n6",ExistElementContainer:"editToDoPoint_ExistElementContainer__14hAa"}},202:function(e,t,n){},203:function(e,t,n){},370:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(0),o=n.n(c),a=n(9),r=n.n(a),l=(n(202),n(203),n(24)),s=n(90),d=n(91),u=n(98),j=n(97),b=n(13),h=n(30),f=n(403),m=n(63),p=n.n(m),O=n(405),x=function(e){return Object(i.jsxs)("div",{className:p.a.header,children:[Object(i.jsx)("div",{className:p.a.loginBlock,children:e.isAuth?Object(i.jsx)(O.a,{id:"outlined-basic",value:"Name:"+e.userData.first_name+" "+e.userData.last_name,variant:"outlined"}):Object(i.jsx)(h.b,{to:"/login",children:Object(i.jsx)(f.a,{variant:"contained",color:"primary",children:"Login"})})}),Object(i.jsx)("div",{className:p.a.loginBlock,children:Object(i.jsx)(h.b,{to:"/registrate",children:Object(i.jsx)(f.a,{variant:"contained",color:"primary",children:"Registration"})})}),Object(i.jsx)("div",{className:p.a.loginBlock,children:Object(i.jsx)(h.b,{to:"/profile",children:Object(i.jsx)(f.a,{variant:"contained",color:"primary",children:"Main Page"})})}),Object(i.jsx)("div",{className:p.a.loginBlock,children:Object(i.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){e.exitAC()},children:"Exit"})})]})},v=n(184).create({baseURL:"https://to-do-task-server.herokuapp.com/"}),_=function(e,t){return v.post("sessions",{email:e,password:t}).then((function(e){return e}))},D=function(e,t,n,i,c){return v.post("registrations",{email:e,password:t,password_confirmation:n,first_name:i,last_name:c}).then((function(e){return e}))},g=function(e){return v.get("todo/".concat(e)).then((function(e){return e}))},E=function(e,t,n,i,c,o,a){return v.patch("todo/".concat(e),{contact_id:t,title:n,description:i,priority:c,done:o,due_date:a}).then((function(e){return e}))},T=function(e,t){return v.post("todo",{contact_id:e,title:t}).then((function(e){return e}))},P=function(e){return v.delete("todo/".concat(e)).then((function(e){return e}))},N="SET_CONTACT_DATA",y="EXIT",k={userData:{id:0},isAuth:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(l.a)(Object(l.a)({},e),{},{userData:{id:0},isAuth:!1});case N:return Object(l.a)(Object(l.a)({},e),{},{userData:t.data,isAuth:!0});default:return e}},w=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(i.jsx)(x,Object(l.a)({},this.props))}}]),n}(o.a.Component),A=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,userData:e.auth.userData}}),{exitAC:function(){return{type:y}}})(w),S=n(406),L=n(407),B=n(189),I=function(e){if(!e)return"This field cant be empty"},R=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},W=function(e){return e&&isNaN(Number(e))?"Must be a number":void 0},M=n(99),F=n.n(M),H=R(100),J=function(e){var t=e.label,n=e.input,c=e.meta,o=c.touched,a=c.invalid,r=c.error,s=Object(B.a)(e,["label","input","meta"]);return Object(i.jsx)(O.a,Object(l.a)(Object(l.a)({label:t,placeholder:t,error:o&&a,helperText:o&&r},n),s))},K=Object(S.a)({form:"post"})((function(e){return Object(i.jsx)("div",{className:F.a.block,children:Object(i.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(i.jsx)("div",{children:Object(i.jsx)(L.a,{className:F.a.field,validate:[I,H],name:"newPost",component:J})}),Object(i.jsx)("button",{className:F.a.button,children:Object(i.jsx)(f.a,{children:"Add new Work"})})]})})})),Y=function(e){return Object(i.jsx)(K,{onSubmit:function(t){e.addPost(e.userId,t.newPost)}})},G=n(73),U=n.n(G),Z=Object(S.a)({form:"login"})((function(e){var t=e.handleSubmit;return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{className:U.a.form,onSubmit:t,children:[Object(i.jsx)("div",{className:U.a.fields,children:Object(i.jsx)(L.a,{validate:[I],placeholder:"login",name:"login",component:J})}),Object(i.jsx)("div",{className:U.a.fields,children:Object(i.jsx)(L.a,{validate:[I],placeholder:"Password",name:"password",component:J})}),Object(i.jsx)("div",{className:U.a.fields,children:Object(i.jsx)("button",{children:Object(i.jsx)(f.a,{placeholder:"login",children:"Login"})})})]})})})),z=Object(b.b)((function(e){return{}}),{setLogIn:function(e,t){return function(n){return _(e,t).then((function(e){if(201===e.status){var t=e.data;n(function(e){return{type:N,data:e}}(t))}}))}}})((function(e){return Object(i.jsx)(Z,{onSubmit:function(t){e.setLogIn(t.login,t.password)}})})),Q=n(74),V=n(48),X=n.n(V),q=Object(S.a)({form:"registration"})((function(e){var t=e.handleSubmit;return Object(i.jsxs)("form",{className:X.a.form,onSubmit:t,children:[Object(i.jsx)("div",{className:X.a.fields,children:Object(i.jsx)(L.a,{placeholder:"first_name",name:"first_name",component:J})}),Object(i.jsx)("div",{className:X.a.fields,children:Object(i.jsx)(L.a,{placeholder:"last_name",name:"last_name",component:J})}),Object(i.jsx)("div",{className:X.a.fields,children:Object(i.jsx)(L.a,{validate:[I],placeholder:"email",name:"email",component:J})}),Object(i.jsx)("div",{className:X.a.fields,children:Object(i.jsx)(L.a,{validate:[I],placeholder:"Password",name:"password",component:J})}),Object(i.jsx)("div",{className:X.a.fields,children:Object(i.jsx)(L.a,{validate:[I],placeholder:"Password_confirmation",name:"password_confirmation",component:J})}),Object(i.jsx)("div",{className:X.a.fields,children:Object(i.jsx)("button",{children:Object(i.jsx)(f.a,{placeholder:"registration",children:"Registration"})})})]})})),$=Object(b.b)((function(e){return{}}),{setRegistration:function(e,t,n,i,c){return function(o){return D(e,t,n,i,c).then((function(e){201===e.status&&alert("Registration successful")}))}}})((function(e){return Object(i.jsx)(q,{onSubmit:function(t){e.setRegistration(t.email,t.password,t.password_confirmation,t.first_name,t.last_name)}})})),ee=n(131),te="ADD_WORK",ne="SET_TODO_EDIT_POINT",ie="SET_TODOLIST",ce="SET_EDIT_ELEMENT",oe="DELETE_EDIT_ELEMENT",ae="CHANGE_BATCH_DELETE",re="CHANGE_BATCH_DELETE_ALL",le="SORT_ALL",se={changeBatchDeleteAll:!1,editedElement:{id:0},newWork:"",uncomplete:[],complete:[]},de=function(e){return{type:ce,element:e}},ue=function(e){return{type:oe,id:e}},je=function(e){return{type:ae,id:e}},be=function(e){return function(t){return E(e.id,e.contact_id,e.title,e.description,e.priority,e.done,e.due_date).then((function(e){if(201===e.status){var n=e.data;t(function(e){return{type:ne,data:e}}(n))}}))}},he=function(e){return function(t){return P(e).then((function(n){200===n.status&&t(ue(e))}))}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0,n=Object(l.a)(Object(l.a)({},e),{},{uncomplete:Object(ee.a)(e.uncomplete),complete:Object(ee.a)(e.complete)});switch(t.type){case le:return n.complete.sort((function(e,t){return e.title>t.title?1:t.title>e.title?-1:0})),n.uncomplete.sort((function(e,t){return e.title>t.title?1:t.title>e.title?-1:0})),n;case re:return n.changeBatchDeleteAll=!n.changeBatchDeleteAll,n.complete.map((function(e){return e.batchDelete=n.changeBatchDeleteAll,e})),n.uncomplete.map((function(e){return e.batchDelete=n.changeBatchDeleteAll,e})),n;case ae:return n.complete.map((function(e){return e.id===t.id&&(e.batchDelete=!e.batchDelete),e})),n.uncomplete.map((function(e){return e.id===t.id&&(e.batchDelete=!e.batchDelete),e})),n;case te:return t.newToDoPoint.batchDelete=!1,n.uncomplete.push(t.newToDoPoint),n;case ce:return n.editedElement=t.element,n;case oe:return n.complete=e.complete.filter((function(e){return e.id!==t.id})),n.uncomplete=e.uncomplete.filter((function(e){return e.id!==t.id})),n;case ne:return n.complete=e.complete.filter((function(e){return e.id!==t.data.id})),n.uncomplete=e.uncomplete.filter((function(e){return e.id!==t.data.id})),t.data.done?(t.data.batchDelete=!1,n.complete.push(t.data)):(t.data.batchDelete=!1,n.uncomplete.push(t.data)),n;case ie:return t.data.map((function(e){return e.batchDelete=!1})),n.complete=t.data.filter((function(e){return!0===e.done})),n.uncomplete=t.data.filter((function(e){return!0!==e.done})),n;default:return e}},me=Object(b.b)((function(e){return{userId:e.auth.userData.id}}),(function(e){return{addPost:function(t,n){var i,c;e((i=t,c=n,function(e){return T(i,c).then((function(t){if(201===t.status){var n=t.data;e({type:"ADD_WORK",newToDoPoint:n})}}))}))}}}))(Y),pe=n(408),Oe=function(e){return Object(i.jsx)("div",{children:e.todo.complete.map((function(t){return Object(i.jsx)("div",{children:Object(i.jsxs)("span",{children:[Object(i.jsx)("div",{onClick:function(){e.EditedElement(t)},children:Object(i.jsx)(h.b,{to:"/edit",children:Object(i.jsx)(O.a,{id:"outlined-basic",value:t.title,variant:"outlined"})})}),Object(i.jsx)(f.a,{variant:"contained",color:"secondary",onClick:function(){e.EditToDoPoint(t,t.done=!1)},children:"Uncomplete"}),Object(i.jsx)(f.a,{variant:"contained",color:"secondary",onClick:function(){e.deleteToDoPoint(t.id)},children:"Delete"}),Object(i.jsx)(pe.a,{checked:t.batchDelete,onChange:function(){e.batchDelete(t.id)},inputProps:{"aria-label":"primary checkbox"}})]})},t.id)}))})},xe=Object(b.b)((function(e){return{todo:e.toDoPage}}),(function(e){return{EditToDoPoint:function(t){e(be(t))},EditedElement:function(t){e(de(t))},deleteToDoPoint:function(t){e(he(t))},batchDelete:function(t){e(je(t))}}}))(Oe),ve=function(e){return Object(i.jsx)("div",{children:e.todo.uncomplete.map((function(t){return Object(i.jsx)("div",{children:Object(i.jsx)("span",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(h.b,{to:"/edit",onClick:function(){e.EditedElement(t)},children:Object(i.jsx)(O.a,{id:"outlined-basic",value:t.title,variant:"outlined"})}),Object(i.jsxs)("div",{children:[Object(i.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){e.EditToDoPoint(t,t.done=!0)},children:"complete"}),Object(i.jsx)(f.a,{variant:"contained",color:"secondary",onClick:function(){e.deleteToDoPoint(t.id)},children:"Delete"}),Object(i.jsx)(pe.a,{checked:t.batchDelete,onChange:function(){e.batchDelete(t.id)},inputProps:{"aria-label":"primary checkbox"}})]})]})})},t.id)}))})},_e=Object(b.b)((function(e){return{todo:e.toDoPage}}),(function(e){return{EditToDoPoint:function(t){e(be(t))},EditedElement:function(t){e(de(t))},deleteToDoPoint:function(t){e(he(t))},batchDelete:function(t){e(je(t))}}}))(ve),De=n(64),ge=n.n(De),Ee=Object(b.b)((function(e){return{toDoPoints:e.toDoPage}}),(function(e){return{batchDeleteAll:function(){e({type:re})},batchDelete:function(t){e(function(e){return function(t){return e.forEach((function(e){P(e).then((function(n){200===n.status&&t(ue(e))}))}))}}(t))},sort:function(){e({type:le})}}}))((function(e){var t=e.toDoPoints.complete.filter((function(e){return 1==e.batchDelete})).concat(e.toDoPoints.uncomplete.filter((function(e){return 1==e.batchDelete}))).map((function(e){return e.id}));return Object(i.jsxs)("div",{children:[Object(i.jsx)(f.a,{variant:"contained",color:"secondary",onClick:function(){e.batchDeleteAll()},children:"Select All"}),Object(i.jsx)(f.a,{variant:"contained",color:"secondary",onClick:function(){e.batchDelete(t)},children:"Delete multiple"}),Object(i.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(){e.sort()},children:"Sort"})]})})),Te=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){0!==this.props.userId&&this.props.getToDoListThunk(this.props.userId)}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:ge.a.contentWrapper,children:[Object(i.jsx)("div",{className:ge.a.input,children:Object(i.jsx)(me,{})}),Object(i.jsx)("div",{className:ge.a.batchDelete,children:Object(i.jsx)(Ee,{})}),Object(i.jsx)("div",{className:ge.a.complete,children:Object(i.jsx)(xe,{})}),Object(i.jsx)("div",{className:ge.a.uncomplete,children:Object(i.jsx)(_e,{})})]})}}]),n}(o.a.Component),Pe=Object(b.b)((function(e){return{userId:e.auth.userData.id}}),{getToDoListThunk:function(e){return function(t){return g(e).then((function(e){if(201===e.status){var n=e.data;t(function(e){return{type:ie,data:e}}(n))}}))}}})(Te),Ne=n(404),ye=Object(b.b)((function(e){return{editedElement:e.toDoPage.editedElement}}))((function(e){var t;return t=null!==e.editedElement.due_date&&void 0!==e.editedElement.due_date?e.editedElement.due_date.substring(0,10):"\u0412\u0440\u0435\u043c\u044f \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:Object(i.jsxs)(Ne.a,{variant:"subtitle1",children:["Old title: ",e.editedElement.title]})}),Object(i.jsx)("div",{children:Object(i.jsxs)(Ne.a,{variant:"subtitle1",children:["Old description: ",e.editedElement.description]})}),Object(i.jsx)("div",{children:Object(i.jsxs)(Ne.a,{variant:"subtitle1",children:["Old priority: ",e.editedElement.priority]})}),Object(i.jsx)("div",{children:Object(i.jsxs)(Ne.a,{variant:"subtitle1",children:["Complete: ",e.editedElement.done]})}),Object(i.jsx)("div",{children:Object(i.jsxs)(Ne.a,{variant:"subtitle1",children:["Due_date: ",t]})})]})})),ke=n(68),Ce=n(186),we=n.n(Ce),Ae=n(125),Se=n.n(Ae),Le=n(187),Be=n.n(Le);n(369);Be()(Se.a);var Ie,Re=function(e){var t=e.input,n=t.onChange,c=t.value,o=e.showTime;return Object(i.jsx)(we.a,{onChange:n,format:"DD MMM YYYY",time:o,value:c?new Date(c):null})},We=R(100),Me=(Ie=Date(),function(e){return e&&e<Ie?"Must be at least ".concat(Ie):void 0}),Fe=Object(S.a)({form:"edit"})((function(e,t){var n,c=e.handleSubmit;return Object(i.jsxs)("form",{onSubmit:c,children:[Object(i.jsx)("div",{children:Object(i.jsx)(L.a,(n={validate:[I,We],name:"newPost",placeholder:"title"},Object(ke.a)(n,"name","title"),Object(ke.a)(n,"component",J),n))}),Object(i.jsx)("div",{children:Object(i.jsx)(L.a,{placeholder:"description",name:"description",component:J})}),Object(i.jsxs)("div",{children:[Object(i.jsx)(L.a,{component:"input",name:"done",type:"checkbox"})," Done?"]}),Object(i.jsx)("div",{children:Object(i.jsx)(L.a,{validate:[W],placeholder:"Priority(nember)",name:"priority",component:J})}),Object(i.jsxs)("div",{children:[Object(i.jsx)("label",{children:"Due date"}),Object(i.jsx)(L.a,{validate:[Me],name:"due_date",showTime:!1,component:Re})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{children:Object(i.jsx)(f.a,{placeholder:"save",children:"Save"})})})]})})),He=Object(b.b)((function(e){return{editElement:e.toDoPage.editedElement,contact_id:e.auth.userData.id}}),{EditToDoPointThunk:be})((function(e){return Object(i.jsx)(Fe,{onSubmit:function(t){e.EditToDoPointThunk(t,t.contact_id=e.contact_id,t.id=e.editElement.id)}})})),Je=n(101),Ke=n.n(Je),Ye=function(e){return Object(i.jsxs)("div",{className:Ke.a.contentWrapper,children:[Object(i.jsx)(He,{className:Ke.a.EditToDoReduxFormContainer}),Object(i.jsx)(ye,{className:Ke.a.ExistElementContainer})]})};var Ge=function(e){return Object(i.jsx)(h.a,{children:Object(i.jsxs)("div",{className:"app-wrapper",children:[Object(i.jsx)(A,{className:"header"}),Object(i.jsxs)("div",{className:"app-wrapper-content",children:[Object(i.jsx)(Q.a,{path:"/profile",render:function(){return Object(i.jsx)(Pe,{})}}),Object(i.jsx)(Q.a,{path:"/login",render:function(){return Object(i.jsx)(z,{})}}),Object(i.jsx)(Q.a,{path:"/registrate",render:function(){return Object(i.jsx)($,{})}}),Object(i.jsx)(Q.a,{path:"/edit",render:function(){return Object(i.jsx)(Ye,{})}})]})]})})},Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,411)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),o(e),a(e)}))},Ze=n(18),ze=n(188),Qe=n(409),Ve=Object(Ze.c)({toDoPage:fe,form:Qe.a,auth:C}),Xe=Object(Ze.d)(Ve,Object(Ze.a)(ze.a));window.store=Xe;var qe=Xe;r.a.render(Object(i.jsx)(b.a,{store:qe,children:Object(i.jsx)(Ge,{})}),document.getElementById("root")),Ue()},48:function(e,t,n){e.exports={form:"registration_form__GAbWe",fields:"registration_fields__3VMJ-"}},63:function(e,t,n){e.exports={header:"header_header__26JZb",loginBlock:"header_loginBlock__1NpDD"}},64:function(e,t,n){e.exports={contentWrapper:"mainpage_contentWrapper__2nnWs",input:"mainpage_input__Mr5Et",complete:"mainpage_complete__RPaZx",uncomplete:"mainpage_uncomplete__1ERY7",batchDelete:"mainpage_batchDelete__1m1Uf"}},73:function(e,t,n){e.exports={form:"login_form__2IFQP",fields:"login_fields__KwWPm"}},99:function(e,t,n){e.exports={field:"todopost_field__NZ13t",button:"todopost_button__J8bCp",loginBlock:"todopost_loginBlock__2KIi8",block:"todopost_block__1PuHR"}}},[[370,1,2]]]);
//# sourceMappingURL=main.6f0da5f5.chunk.js.map