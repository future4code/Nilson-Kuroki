(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},19:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(13),l=n.n(o),u=n(2),r=(n(19),n(3)),p=n.n(r);function i(e){var t=Object(a.useState)({}),n=Object(u.a)(t,2),o=n[0],l=n[1];return Object(a.useEffect)(function(){p.a.get("https://pokeapi.co/api/v2/pokemon/".concat(e.pokemon)).then(function(e){l(e.data)}).catch(function(e){console.log(e)})},[e.pokemon]),c.a.createElement("div",null,c.a.createElement("p",null,o.name),c.a.createElement("p",null,o.weight," Kg"),o.types&&c.a.createElement("p",null,o.types[0].type.name),o.sprites&&c.a.createElement("img",{src:o.sprites.front_default,alt:o.name}))}var m=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(""),r=Object(u.a)(l,2),m=r[0],s=r[1];return Object(a.useEffect)(function(){p.a.get("https://pokeapi.co/api/v2/pokemon/?limit=151").then(function(e){o(e.data.results)}).catch(function(e){console.log(e)})},[]),c.a.createElement("div",{className:"App"},c.a.createElement("select",{onChange:function(e){s(e.target.value)}},c.a.createElement("option",{value:""},"Nenhum"),n.map(function(e){return c.a.createElement("option",{key:e.name,value:e.name},e.name)})),m&&c.a.createElement(i,{pokemon:m}))},s=document.getElementById("root");l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),s)}},[[14,1,2]]]);
//# sourceMappingURL=main.d912db0f.chunk.js.map