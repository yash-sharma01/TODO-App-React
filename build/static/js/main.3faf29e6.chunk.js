(this.webpackJsonptesto=this.webpackJsonptesto||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),u=n(3),l=n.n(u),r=n(1),s=n(4),c=n(5),o=n(6),m=n(7),d=n(8),h=function(t){Object(d.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={newItem:"",list:[]},a}return Object(o.a)(n,[{key:"updateInput",value:function(t,e){this.setState(Object(s.a)({},t,e))}},{key:"addItem",value:function(){var t={id:1+Math.random(),value:this.state.newItem},e=Object(r.a)(this.state.list);e.push(t),this.setState({list:e,newItem:""})}},{key:"deleteItem",value:function(t){var e=Object(r.a)(this.state.list).filter((function(e){return e.id!==t}));this.setState({list:e})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",null,i.a.createElement("h1",null,"My TODO List"),"Add an Item",i.a.createElement("input",{type:"text",name:"newItem",value:this.state.newItem,onChange:function(e){return t.updateInput(e.target.name,e.target.value)}}),i.a.createElement("button",{onClick:function(){return t.addItem()},disabled:!this.state.newItem.length},"Add"),i.a.createElement("br",null),i.a.createElement("ul",null,this.state.list.map((function(e){return i.a.createElement("li",{key:e.id},e.value,i.a.createElement("button",{onClick:function(){return t.deleteItem(e.id)}},"X"))}))))}}]),n}(i.a.Component);l.a.render(i.a.createElement(h,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(14)}},[[9,1,2]]]);
//# sourceMappingURL=main.3faf29e6.chunk.js.map