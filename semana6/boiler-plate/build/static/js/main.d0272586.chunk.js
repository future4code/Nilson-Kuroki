(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(25)},19:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),r=a.n(l),i=a(10),s=a(1),c=a(2);a(19);function u(){const e=Object(s.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  gap: 10px;\n"]);return u=function(){return e},e}function p(){const e=Object(s.a)(["\n  text-align: left;\n  text-decoration: ",";\n"]);return p=function(){return e},e}function m(){const e=Object(s.a)(["\n  padding: 0;\n  width: 200px;\n"]);return m=function(){return e},e}const h=c.a.ul(m()),d=c.a.li(p(),({completa:e})=>e?"line-through":"none"),f=c.a.div(u());var E=class extends o.a.Component{constructor(...e){super(...e),this.state={tarefas:[{id:Date.now(),texto:"Texto da tarefa",completa:!1},{id:Date.now(),texto:"tarefas mesmo",completa:!0}],inputValue:"",filter:""},this.onChangeInput=(e=>{this.setState({inputValue:e.target.value})}),this.criaTarefa=(()=>{const e=[{id:Date.now(),texto:this.state.inputValue,completa:!1},...this.state.tarefas];this.setState({tarefas:e,inputValue:""})}),this.selectTarefa=(e=>{const t=this.state.tarefas.map(t=>e===e.id?Object(i.a)({},e,{completa:!t.completa}):t);this.setState({completa:t})}),this.onChangeFilter=(e=>{})}componentDidUpdate(){}componentDidMount(){}render(){const e=this.state.tarefas.filter(e=>{switch(this.state.filter){case"pendentes":return!e.completa;case"completas":return e.completa;default:return!0}});return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Lista de tarefas"),o.a.createElement(f,null,o.a.createElement("input",{value:this.state.inputValue,onChange:this.onChangeInput}),o.a.createElement("button",{onClick:this.criaTarefa},"Adicionar")),o.a.createElement("br",null),o.a.createElement(f,null,o.a.createElement("label",null,"Filtro"),o.a.createElement("select",{value:this.state.filter,onChange:this.onChangeFilter},o.a.createElement("option",{value:""},"Nenhum"),o.a.createElement("option",{value:"pendentes"},"Pendentes"),o.a.createElement("option",{value:"completas"},"Completas"))),o.a.createElement(h,null,e.map(e=>o.a.createElement(d,{completa:e.completa,onClick:()=>this.selectTarefa(e.id)},e.texto))))}};const g=document.getElementById("root");r.a.render(o.a.createElement(E,null),g)}},[[13,1,2]]]);
//# sourceMappingURL=main.d0272586.chunk.js.map