(this["webpackJsonpmern-todo-app"]=this["webpackJsonpmern-todo-app"]||[]).push([[0],{36:function(e,t,o){},37:function(e,t,o){},65:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o(1),c=o.n(i),s=o(29),a=o.n(s),r=(o(36),o(11)),l=o(12),d=o(14),h=o(13),b=(o(37),o(38),o(9)),j=o(2),p=o(8),u=o(15),m=o.n(u),O=function(e){Object(d.a)(o,e);var t=Object(h.a)(o);function o(e){var n;return Object(r.a)(this,o),(n=t.call(this,e)).state={description:"",responsible:"",priority:"",completed:!1},n.edit=!1,n.onChangeTodoDescription=n.onChangeTodoDescription.bind(Object(p.a)(n)),n.onChangeTodoResponsible=n.onChangeTodoResponsible.bind(Object(p.a)(n)),n.onChangeTodoPriority=n.onChangeTodoPriority.bind(Object(p.a)(n)),n.onSubmit=n.onSubmit.bind(Object(p.a)(n)),n}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;t&&(m.a.get("http://localhost:4000/todos/".concat(t)).then((function(t){e.setState(t.data)})).catch((function(e){return console.log(e)})),this.edit=!0,this.setState({id:t}))}},{key:"onChangeTodoDescription",value:function(e){this.setState({description:e.target.value})}},{key:"onChangeTodoResponsible",value:function(e){this.setState({responsible:e.target.value})}},{key:"onChangeTodoPriority",value:function(e){this.setState({priority:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),console.log("Form submitted"),console.log("Todo Description:  ".concat(this.state.description)),console.log("Todo Responsible:  ".concat(this.state.responsible)),console.log("Todo Priority:  ".concat(this.state.priority));var t={description:this.state.description,responsible:this.state.responsible,priority:this.state.priority,completed:this.state.completed};this.edit?m.a.put("http://localhost:4000/todos/".concat(this.state.id),t).then((function(e){return console.log(e.data)})):(console.log("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/mern-todo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SERVER_PORT:"4000"}).REACT_APP_SERVER_URL,":").concat("4000","/todos/")),m.a.post("http://localhost:4000/todos/",t).then((function(e){return console.log(e.data)})),this.setState({description:"",responsible:"",priority:"",completed:!1}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{style:{marginTop:10},children:[Object(n.jsxs)("h3",{children:[" ",this.edit?"Edit Todo":"Create new Todo"," "]}),Object(n.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Description: "}),Object(n.jsx)("input",{type:"text",className:"form-control",value:this.state.description,onChange:this.onChangeTodoDescription})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Responsible: "}),Object(n.jsx)("input",{type:"text",className:"form-control",value:this.state.responsible,onChange:this.onChangeTodoResponsible})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("div",{className:"formn-check form-check-inline",children:[Object(n.jsx)("input",{type:"radio",className:"form-check-input",name:"priorityOptions",id:"priorityLow",value:"Low",checked:"Low"===this.state.priority,onChange:this.onChangeTodoPriority}),Object(n.jsx)("label",{className:"form-check-label",children:"Low"})]})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("div",{className:"formn-check form-check-inline",children:[Object(n.jsx)("input",{type:"radio",className:"form-check-input",name:"priorityOptions",id:"priorityMedium",value:"Medium",checked:"Medium"===this.state.priority,onChange:this.onChangeTodoPriority}),Object(n.jsx)("label",{className:"form-check-label",children:"Medium"})]})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("div",{className:"formn-check form-check-inline",children:[Object(n.jsx)("input",{type:"radio",className:"form-check-input",name:"priorityOptions",id:"priorityHigh",value:"High",checked:"High"===this.state.priority,onChange:this.onChangeTodoPriority}),Object(n.jsx)("label",{className:"form-check-label",children:"High"})]})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",value:this.edit?"Save":"Create",className:"btn btn-primary"})})]})]})}}]),o}(i.Component),x=function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.todo.description}),Object(n.jsx)("td",{children:e.todo.responsible}),Object(n.jsx)("td",{children:e.todo.priority}),Object(n.jsx)("td",{children:e.todo.completed?"Yes":"No"}),Object(n.jsxs)("td",{children:[Object(n.jsx)(b.b,{to:"/edit/"+e.todo._id,children:" Edit "}),"|",Object(n.jsx)("button",{style:{border:0,background:"transparent",color:"#007bff"},onClick:function(t){console.log("delete ".concat(e.todo._id))},children:" Delete "})]})]})},v=function(e){Object(d.a)(o,e);var t=Object(h.a)(o);function o(e){var n;return Object(r.a)(this,o),(n=t.call(this,e)).state={todos:[]},n}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var e=this;m.a.get("http://localhost:4000/todos/").then((function(t){e.setState({todos:t.data})})).catch((function(e){return console.log(e)}))}},{key:"todoList",value:function(){return this.state.todos.map((function(e,t){return Object(n.jsx)(x,{todo:e},t)}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Todos list"}),Object(n.jsxs)("table",{className:"table table-striped",style:{marginTop:20},children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Description"}),Object(n.jsx)("th",{children:"Responsible"}),Object(n.jsx)("th",{children:"Priority"}),Object(n.jsx)("th",{children:"Completed"}),Object(n.jsx)("th",{children:"Action"})]})}),Object(n.jsx)("tbody",{children:this.todoList()})]})]})}}]),o}(i.Component),g=function(e){Object(d.a)(o,e);var t=Object(h.a)(o);function o(){return Object(r.a)(this,o),t.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsx)(b.a,{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(n.jsx)(b.b,{to:"/",className:"navbar-brand",children:"MERN-Stack Todo App"}),Object(n.jsx)("div",{className:"collapse navbar-collapse",children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"navbar-item",children:Object(n.jsx)(b.b,{to:"/",className:"nav-link",children:"Todos"})}),Object(n.jsx)("li",{className:"navbar-item",children:Object(n.jsx)(b.b,{to:"/new",className:"nav-link",children:"Create Todo"})})]})})]}),Object(n.jsx)("br",{}),Object(n.jsx)(j.a,{path:"/",exact:!0,component:v}),Object(n.jsx)(j.a,{path:"/edit/:id",component:O}),Object(n.jsx)(j.a,{path:"/new",component:O})]})})}}]),o}(i.Component),f=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,66)).then((function(t){var o=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;o(e),n(e),i(e),c(e),s(e)}))};a.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),f()}},[[65,1,2]]]);
//# sourceMappingURL=main.78cd1b81.chunk.js.map