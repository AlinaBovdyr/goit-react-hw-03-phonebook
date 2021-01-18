(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={colors:"'../../styles/variables/colors.css'",mainColor:"#3e155d",bgColor:"#5b039f",accentColor:"#8d38cf",activeBtnColor:"#37039f",container:"ContactForm_container__1NU77",field:"ContactForm_field__2LYpL",label:"ContactForm_label__ElX9O",input:"ContactForm_input__1Ay43",button:"ContactForm_button__1FbcQ"}},function(t,e,n){t.exports={colors:"'../../styles/variables/colors.css'",secondaryColor:"#3968a5",container:"Sorter_container__2kO8A",subtitle:"Sorter_subtitle__1YzgG",inputWrapper:"Sorter_inputWrapper__3EevR",label:"Sorter_label__2aOLe",input:"Sorter_input__3lave"}},function(t,e,n){t.exports={colors:"'../../styles/variables/colors.css'",secondaryColor:"#3968a5",secondaryAccentColor:"#3b8bff87",container:"Filter_container__3XBnM",field:"Filter_field__3sppj",label:"Filter_label__C1Wej",input:"Filter_input__L1WiO"}},,,,,,function(t,e,n){t.exports={colors:"'../../styles/variables/colors.css'",mainColor:"#3e155d",accentColor:"#8d38cf",activeBtnColor:"#37039f",contactItem:"ContactList_contactItem__3yM4J",contactWrapper:"ContactList_contactWrapper__16-jl",button:"ContactList_button__2eBDJ"}},,,,function(t,e,n){t.exports={container:"Container_container__3wL-m"}},function(t,e,n){t.exports={colors:"'../../../styles/variables/colors.css'",bgColor:"#5b039f",button:"DeleteButton_button__1H6j4"}},,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),o=n(13),s=n.n(o),l=(n(23),n(24),n(16)),i=n(5),u=n(6),b=n(9),d=n(8),h=n(27),j=n(14),m=n.n(j),p=function(t){var e=t.children;return Object(a.jsx)("div",{className:m.a.container,children:e})},f=n(7),v=n(2),O=n.n(v),C=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(f.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onAddContact(a,c),t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{className:O.a.container,onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:O.a.field,children:[Object(a.jsx)("span",{className:O.a.label,children:"Name"}),Object(a.jsx)("input",{className:O.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,required:!0})]}),Object(a.jsxs)("label",{className:O.a.field,children:[Object(a.jsx)("span",{className:O.a.label,children:"Number"}),Object(a.jsx)("input",{className:O.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,required:!0})]}),Object(a.jsx)("button",{className:O.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(c.Component),_=n(4),x=n.n(_);var g=function(t){var e=t.value,n=t.onChangeFilter;return Object(a.jsx)("div",{className:x.a.container,children:Object(a.jsxs)("label",{className:x.a.field,children:[Object(a.jsx)("span",{className:x.a.label,children:"Find contacts by name:"}),Object(a.jsx)("input",{className:x.a.input,type:"text",name:"filter",value:e,onChange:function(t){return n(t.target.value)}})]})})},y=n(12),N=n(17),S=n(15),w=n.n(S);function k(){return(k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}function F(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var B=c.createElement("path",{d:"M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z"}),D=c.createElement("path",{d:"M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z"});function M(t,e){var n=t.title,a=t.titleId,r=F(t,["title","titleId"]);return c.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",ref:e,"aria-labelledby":a},r),n?c.createElement("title",{id:a},n):null,B,D)}var L=c.forwardRef(M),A=(n.p,function(t){var e=t.className,n=t.onClick,c=Object(N.a)(t,["className","onClick"]),r=[e,w.a.button].join(" ");return Object(a.jsx)("button",Object(y.a)(Object(y.a)({type:"button",className:r,onClick:n},c),{},{children:Object(a.jsx)(L,{width:"14",height:"14",fill:"#fff"})}))});A.defaultProps={className:"",children:null,onClick:function(){return null}};var E=A,I=n(10),z=n.n(I);var W=function(t){var e=t.name,n=t.number,c=t.onDelete;return Object(a.jsx)("li",{className:z.a.contactItem,children:Object(a.jsxs)("div",{className:z.a.contactWrapper,children:[Object(a.jsxs)("span",{children:[e,": ",n]}),Object(a.jsx)(E,{title:"Delete contact",className:z.a.button,onClick:c,"aria-label":"Delete contact"})]})})};var R=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ol",{children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsx)(W,{name:c,number:r,onDelete:function(){return n(e)}},e)}))})},J=n(3),P=n.n(J),q="abc",H="id";var U=function(t){var e=t.value,n=t.onRadioChange;return Object(a.jsxs)("div",{className:P.a.container,children:[Object(a.jsx)("p",{className:P.a.subtitle,children:"Sort by:"}),Object(a.jsxs)("div",{className:P.a.inputWrapper,children:[Object(a.jsxs)("label",{className:P.a.label,children:[Object(a.jsx)("input",{className:P.a.input,type:"radio",name:"id",value:H,onChange:n,checked:e===H}),Object(a.jsx)("span",{children:"date"})]}),Object(a.jsxs)("label",{className:P.a.label,children:[Object(a.jsx)("input",{className:P.a.input,type:"radio",name:"abc",value:q,onChange:n,checked:e===q}),Object(a.jsx)("span",{children:"name"})]})]})]})},V=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",sortBy:"id"},t.addContact=function(e,n){var a=t.state.contacts,c={id:Object(h.a)(),name:e,number:n,completed:!1};if(a.some((function(t){return t.name===e})))return alert("".concat(e," is already in contacts"));t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(l.a)(e),[c])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}})),t.setState({filter:""})},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.handleRadioChange=function(e){var n=e.target.value;t.setState({sortBy:n})},t.getSortedContacts=function(){var e=t.state,n=e.contacts,a=e.sortBy;return"abc"===a?n.sort((function(t,e){return t.name-e.name})):"id"===a?n.sort((function(t,e){return t.id-e.id})):void 0},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=e.contacts,a=this.state.contacts;a!==n&&localStorage.setItem("contacts",JSON.stringify(a))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=t.sortBy,r=this.getVisibleContacts(),o=this.getSortedContacts();return Object(a.jsxs)(p,{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(C,{onAddContact:this.addContact}),Object(a.jsx)("h2",{children:"Contacts"}),n.length>1&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{value:e,onChangeFilter:this.changeFilter}),Object(a.jsx)(U,{value:c,onRadioChange:this.handleRadioChange})]}),Object(a.jsx)(R,{contacts:null!==r&&void 0!==r?r:o,onDeleteContact:this.deleteContact})]})}}]),n}(c.PureComponent);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.b7d864c1.chunk.js.map