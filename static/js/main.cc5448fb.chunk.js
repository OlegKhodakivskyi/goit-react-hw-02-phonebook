(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=n(10),i=n(1),m=n(2),u=n(4),s=n(3),f=n(7),d=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(f.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onAddContact(e.state),e.setState({name:"",number:""})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"Name"},"Name",r.a.createElement("input",{type:"text",value:t,onChange:this.handleChange,name:"name"})),r.a.createElement("label",null,"Number:",r.a.createElement("input",{type:"text",value:n,onChange:this.handleChange,name:"number"})),r.a.createElement("button",{type:"submit"}," Add contact")))}}]),n}(a.Component),b=n(8),h=n.n(b),C=function(e){var t=e.id,n=e.name,a=e.number,o=e.onRemove;return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{key:t,className:h.a.ContactListItem},r.a.createElement("p",null," ",n," : "),r.a.createElement("p",null," ",a," "),r.a.createElement("button",{type:"button",onClick:o},"Delete")))},p=n(9),v=n.n(p),E=function(e){var t=e.findContact,n=e.onRemoveContact;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:v.a.ContactList},t.map((function(e){var t=e.id,a=e.name,o=e.number;return r.a.createElement(C,{key:t,name:a,number:o,onRemove:function(){return n(t)}})}))))},g=function(e){var t=e.filter,n=e.onChangeFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,r.a.createElement("p",null,"Find contacts by name"),r.a.createElement("input",{type:"text",name:"filter",value:t,onChange:function(e){return n(e.target.value)}})))},y=n(18),F=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.addContact=function(t){var n=t.name,a=t.number;e.state.contacts.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))?alert("The name is already exist"):e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[{id:Object(y.a)(),name:n,number:a}])}}))},e.onRemoveContact=function(t){var n=e.state.contacts;e.setState({contacts:n.filter((function(e){return e.id!==t}))})},e.onChangeFilter=function(t){e.setState({filter:t})},e.findContact=function(){return e.state.filter?e.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.state.filter.toLowerCase())})):e.state.contacts},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.filter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(d,{onAddContact:this.addContact}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(g,{filter:e,onChangeFilter:this.onChangeFilter}),r.a.createElement(E,{findContact:this.findContact(),onRemoveContact:this.onRemoveContact}))}}]),n}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))},8:function(e,t,n){e.exports={ContactListItem:"ContactFormListItem_ContactListItem__3ioqz"}},9:function(e,t,n){e.exports={ContactList:"ContactList_ContactList__zy3ic"}}},[[11,1,2]]]);
//# sourceMappingURL=main.cc5448fb.chunk.js.map