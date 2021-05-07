(this.webpackJsonpcovid_service=this.webpackJsonpcovid_service||[]).push([[0],{218:function(e,t,a){},340:function(e,t,a){},401:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),i=a.n(r),l=(a(218),a(54)),s=(a(219),a(448)),o=a(449),d=a(451),j=a(452),b=a(453),m=a(454),u=a(411),h=a(34),O=a(458),x=a(450),p=a(455),v=a(13),g=a(33),f=(a(399),a(22)),N=a(193),y=a.n(N),w=(a(339),a(340),a(6));var k=function(e){return Object(w.jsx)("div",{className:"error",children:e.children})},C={name:"",idNumber:"",sampleMode:"",slot:"",id:"",mobileNumber:"",gender:"",address:"",emailID:"",dob:null,age:0,wardNumber:"",nagarNigam:"",location:""},I=function(e,t){console.log(e),t.resetForm(),alert("Form Submitted")},S=f.c({id:f.d().required("Required"),idNumber:f.d().required("Required").when("id",{is:"aadhar",then:f.d().matches(/^[2-9]{1}[0-9]{3}\s?[0-9]{4}\s?[0-9]{4}$/,"Must be 12 digits"),otherwise:f.d().matches(/^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/,"Invalid format")}),name:f.d().required("Required"),slot:f.d().required("Required"),gender:f.d().required("Required"),nagarNigam:f.d().required("Required"),address:f.d().required("Required"),sampleMode:f.d().required("Required"),dob:f.a().required("Required").nullable(),emailID:f.d().email("Invalid email format").required("Required"),wardNumber:f.b().positive().integer().min(10).max(999),mobileNumber:f.b().required("Required").test("len","Must be 10 digits",(function(e){return e&&10===e.toString().length}))}),q=[{key:"Home Collection",value:"home"},{key:"Drive-in",value:"drive"}],R=[{key:"Aadhar Card",value:"aadhar"},{key:"Passport",value:"passport"}],M=[{key:"MALE",value:"male"},{key:"FEMALE",value:"female"},{key:"OTHERS",value:"other"}],A=[{key:"Heritage, Jaipur",value:"heritage"},{key:"Greater, Jaipur",value:"greater"}];var D=function(e){var t=e.click;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{style:{backgroundColor:"darkBlue",color:"white"},children:Object(w.jsx)("h2",{children:"Please fill all the details"})}),Object(w.jsx)(v.d,{className:"Apps",initialValues:C,validationSchema:S,onSubmit:I,children:function(e){return Object(w.jsxs)(v.c,{children:[Object(w.jsxs)("div",{className:"form-control",children:[Object(w.jsx)("label",{children:"Mode of Sample Collection:"}),Object(w.jsx)(v.b,{name:"sampleMode",children:function(e){var t=e.field;return q.map((function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("input",Object(h.a)(Object(h.a)({type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value})),Object(w.jsx)("label",{children:e.key})]})}))}}),Object(w.jsx)("div",{className:"error",children:e.values.age<65&&"home"===e.values.sampleMode?e.errors.sampleMode="Must be 65 years or above":""}),Object(w.jsx)(v.a,{component:k,name:"sampleMode"})]}),Object(w.jsxs)("div",{className:"form-control",children:[Object(w.jsx)("label",{children:"Slot Availability:"}),"Available for the next day-",Object(w.jsxs)(v.b,{width:200,component:g.a,name:"slot",inputProps:{id:"slot"},children:[Object(w.jsx)(O.a,{value:"",children:"Select an MenuItem"}),Object(w.jsx)(O.a,{value:"10-10.3",children:"10:00 - 10:30"}),Object(w.jsx)(O.a,{value:"12-12.3",children:"12:00 - 12:30"}),Object(w.jsx)(O.a,{value:"13-13.3",children:"13:00 - 13:30"}),Object(w.jsx)(O.a,{value:"14-14.3",children:"14:00 - 14:30"}),Object(w.jsx)(O.a,{value:"15-15.3",children:"15:00 - 15:30"})]}),Object(w.jsx)(v.a,{component:k,name:"slot"})]}),Object(w.jsxs)("div",{className:"form-control",children:[Object(w.jsx)("label",{children:"ID Proof:"}),Object(w.jsx)(v.b,{component:g.b,name:"id",children:function(e){var t=e.field;return R.map((function(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("label",{children:[Object(w.jsx)("input",Object(h.a)(Object(h.a)({type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value})),e.key]})})}))}}),Object(w.jsx)(v.a,{component:k,name:"id"})]}),Object(w.jsx)("div",{className:"form-control",children:Object(w.jsx)(v.b,{component:g.b,variant:"outlined",label:"ID Proof Number",type:"text",id:"idNumber",name:"idNumber"})}),Object(w.jsx)("div",{className:"form-control",children:Object(w.jsx)(v.b,{component:g.b,variant:"outlined",label:"Name",type:"text",id:"name",name:"name"})}),Object(w.jsxs)("div",{className:"form-control",children:[Object(w.jsx)("label",{children:"Date of Birth:"}),Object(w.jsx)(v.b,{name:"dob",children:function(e){var t=e.field,a=e.form;return Object(w.jsx)(y.a,Object(h.a)(Object(h.a)({className:"date",id:"dob",placeholderText:"Click to select a date",maxDate:new Date,showYearDropdown:!0,dropdownMode:"select"},t),{},{selected:t.value,onChange:function(e){a.setFieldValue("dob",e),a.setFieldValue("age",~~((Date.now()-+e)/315576e5))}}))}}),console.log(e,"below date"),Object(w.jsx)(v.a,{component:k,name:"dob"})]}),Object(w.jsxs)("div",{className:"form-control",children:[Object(w.jsx)("label",{children:"Gender:"}),Object(w.jsx)(v.b,{component:g.b,name:"gender",children:function(e){var t=e.field;return M.map((function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("input",Object(h.a)(Object(h.a)({type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value})),Object(w.jsx)("label",{children:e.key})]})}))}}),Object(w.jsx)(v.a,{component:k,name:"gender"})]}),Object(w.jsx)("div",{className:"form-control",children:Object(w.jsx)(v.b,{className:"num",component:g.b,variant:"outlined",label:"Mobile Number",InputProps:{startAdornment:Object(w.jsx)(x.a,{position:"start",children:"+91"})},type:"number",id:"mobileNumber",name:"mobileNumber"})}),Object(w.jsx)("div",{className:"form-control",children:Object(w.jsx)(v.b,{component:g.b,label:"Email ID",variant:"outlined",type:"email",id:"emailID",name:"emailID"})}),Object(w.jsx)("div",{className:"form-control",children:Object(w.jsx)(v.b,{component:g.b,variant:"outlined",label:"Address",id:"address",placeholder:"House Number, Colony, City with PIN Code",type:"text",name:"address"})}),Object(w.jsx)("div",{className:"form-control",children:Object(w.jsx)(v.b,{component:g.b,label:"Ward Number",variant:"outlined",type:"number",id:"wardNumber",name:"wardNumber"})}),Object(w.jsxs)("div",{className:"form-control",children:[Object(w.jsx)("label",{children:"Nagar Nigam:"}),Object(w.jsx)(v.b,{component:g.b,name:"nagarNigam",children:function(e){var t=e.field;return A.map((function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("input",Object(h.a)(Object(h.a)({type:"radio",id:e.value},t),{},{value:e.value,checked:t.value===e.value})),Object(w.jsx)("label",{children:e.key})]})}))}}),Object(w.jsx)(v.a,{component:k,name:"nagarNigam"})]}),Object(w.jsxs)(p.a,{margin:2,children:[Object(w.jsx)(o.a,{style:{marginRight:"1em"},type:"submit",variant:"contained",color:"primary",disabled:!e.isValid,children:"Submit"}),Object(w.jsx)(o.a,{variant:"contained",color:"primary",onClick:t,children:"Go Back"})]})]})}})]})},F=Object(s.a)({root:{maxWidth:345},media:{height:140}});var P=function(){var e=F(),t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),s=Object(l.a)(i,2);function h(){r(!c)}return s[0],s[1],Object(w.jsx)(w.Fragment,{children:c?Object(w.jsx)(D,{click:h}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{style:{alignItems:"center",flexDirection:"column",alignContent:"space-between",backgroundColor:"darkBlue",height:"50vh",display:"flex",justifyContent:"center",width:"100vw"},children:[Object(w.jsx)("h1",{style:{color:"white",fontSize:"2em",textAlign:"center"},children:"SHYAM NAGAR VIKAS SAMITI COVID HELP SERVICES"}),Object(w.jsx)(o.a,{variant:"contained",onClick:h,children:"BOOK NOW"})]}),Object(w.jsxs)("div",{style:{paddingLeft:"2em"},children:[Object(w.jsx)("h3",{children:"Services offered like:"}),Object(w.jsxs)(d.a,{container:!0,spacing:3,children:[Object(w.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(w.jsxs)(j.a,{className:e.root,children:[Object(w.jsx)(b.a,{className:e.media,image:"https://images.cnbctv18.com/wp-content/uploads/2021/02/COVID19test_swab-768x432.jpg",title:"Contemplative Reptile"}),Object(w.jsx)(m.a,{children:Object(w.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"RT-PCR TEST"})})]})}),Object(w.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(w.jsxs)(j.a,{className:e.root,children:[Object(w.jsx)(b.a,{className:e.media,image:"https://wwwassets.rand.org/content/rand/blog/2020/08/its-going-to-be-the-vaccination-stupid/jcr:content/par/blogpost.aspectcrop.868x455.lt.jpg/x1598055738172.jpg.pagespeed.ic.WPm0htSOxE.jpg",title:"Contemplative Reptile"}),Object(w.jsx)(m.a,{children:Object(w.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"VACCINATION"})})]})}),Object(w.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(w.jsxs)(j.a,{className:e.root,children:[Object(w.jsx)(b.a,{className:e.media,image:"https://www.sheppardhealthlaw.com/wp-content/uploads/sites/25/2020/11/Global-Trade-Blog-Image_Covid-2-660x283-1.png",title:"Contemplative Reptile"}),Object(w.jsx)(m.a,{children:Object(w.jsx)(u.a,{gutterBottom:!0,variant:"h5",component:"h2",children:"OTHERS"})})]})})]})]})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,461)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(P,{})}),document.getElementById("root")),E()}},[[401,1,2]]]);
//# sourceMappingURL=main.784d3ce3.chunk.js.map