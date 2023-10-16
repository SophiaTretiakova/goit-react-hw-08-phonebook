"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[928],{5928:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var a,r,i,o=t(2791),c=t(9434),u=t(3634),s=t(184),l=function(e){var n=e.contact,t=n.id,a=n.name,r=n.number,i=(0,c.I0)();return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:[a,": ",r]}),(0,s.jsx)("button",{onClick:function(){return e=t,i((0,u.deleteContact)(e));var e},children:"Delete"})]})},d=t(6916),h=function(e){return e.contacts.items},m=function(e){return e.contacts.isLoading},b=(0,d.P1)([function(e){return e.filter},h],(function(e,n){return null!==e&&void 0!==e&&e.trim()?n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase().trim())})):n})),f=function(){var e=(0,c.I0)();(0,o.useEffect)((function(){e((0,u.getContacts)())}),[e]);var n=(0,c.v9)(b);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("ul",{children:n.length>0&&n.map((function(e){return(0,s.jsx)(l,{contact:e},e.id)}))}),0===n.length&&(0,s.jsx)("p",{children:"No contacts are available"})]})},p=t(1413),x=t(5705),v=t(6727),g=t(168),j=t(6487),C=j.zo.form(a||(a=(0,g.Z)(["\n  padding: 20px 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),Z=j.zo.label(r||(r=(0,g.Z)(["\n  font-weight: bold;\n"]))),y=j.zo.button(i||(i=(0,g.Z)(["\n  width: 222px;\n"]))),_=t(5568),w=t(6686),A=v.Ry().shape({name:v.Z_().required("Required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:v.Z_().required("Required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),k=function(){var e=(0,c.v9)(h),n=(0,c.I0)(),t=(0,x.TA)({initialValues:{name:"",number:""},validationSchema:A,onSubmit:function(t){!function(t){e.filter((function(e){return t.name===e.name})).length?(0,_.Am)("".concat(t.name," is already in your contacts")):n((0,u.addContact)((0,p.Z)({},t)))}((0,p.Z)({},t))}});return(0,s.jsxs)(C,{onSubmit:t.handleSubmit,children:[(0,s.jsx)(Z,{children:(0,s.jsx)(w.Z,{id:"name",value:t.values.name,label:"Name",name:"name",type:"text",onChange:t.handleChange,error:t.touched.name&&Boolean(t.errors.name),helperText:t.touched.name&&t.errors.name})}),(0,s.jsx)(Z,{children:(0,s.jsx)(w.Z,{id:"number",value:t.values.number,label:"Number",name:"number",type:"tel",onChange:t.handleChange,error:t.touched.number&&Boolean(t.errors.number),helperText:t.touched.number&&t.errors.number})}),(0,s.jsx)(y,{variant:"outlined",type:"submit",children:"Add contact"})]})},z=t(1273),q=function(){var e=(0,c.I0)();return(0,s.jsx)("div",{children:(0,s.jsx)("input",{id:"outlined-basic",label:"search",variant:"outlined",onChange:function(n){var t;t=n.target.value,e((0,z.Tv)(t))},type:"text",placeholder:"Find contact by name"})})},I=function(){var e=(0,c.v9)(m);return(0,s.jsxs)("div",{children:[(0,s.jsx)(k,{}),(0,s.jsx)(q,{}),e&&(0,s.jsx)("p",{children:"Refreshing data..."}),(0,s.jsx)(f,{})]})}}}]);
//# sourceMappingURL=928.5c365966.chunk.js.map