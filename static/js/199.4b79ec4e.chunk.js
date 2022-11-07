(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[199],{199:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return P}});var o,i,a,r,s,l,c,f,m,p,d,x=n(168),y=n(6444),u=y.ZP.div(o||(o=(0,x.Z)(["\n  @media screen and (min-width: 768px) {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: flex-start;\n    padding-left:20px\n  } ;\n"]))),b=y.ZP.h2(i||(i=(0,x.Z)(["\n  text-align: center;\n  color: rgb(160, 111, 43);\n  margin-bottom: 10px;\n  font-weight: 900;\n  font-size: 18px;\n  line-height: 1.17;\n  letter-spacing: 0.03em;\n"]))),g=n(885),h=y.ZP.form(a||(a=(0,x.Z)(["\n  max-width: 400px;\n  border: 1px solid rgb(244, 205, 151);\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: inset 0 0 10px rgb(244, 205, 151);\n  margin: auto;\n  @media screen and (min-width: 768px) {\n    width: 320px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 500px;\n  }\n"]))),w=y.ZP.label(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  color: rgb(244, 205, 151);\n  margin-bottom: 10px;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.71;\n  letter-spacing: 0.03em;\n"]))),v=y.ZP.input(s||(s=(0,x.Z)(["\n  width: 100%;\n  height: 30px;\n  padding-left: 10px;\n  background-color: transparent;\n  border: 1px solid rgb(244, 205, 151);\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: 1.14;\n  letter-spacing: 0.03em;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  margin-top: 10px;\n  color: rgb(244, 205, 151);\n  &:focus {\n    box-shadow: inset 0 0 10px rgb(244, 205, 151);\n  }\n  &::placeholder {\n    color: rgb(160, 111, 43);\n  }\n"]))),k=y.ZP.button(l||(l=(0,x.Z)(["\n  width: 80px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  letter-spacing: 0.03em;\n  background: transparent;\n  text-align: center;\n  align-items: center;\n  color: rgb(244, 205, 151);\n  border-radius: 4px;\n  border: 1px solid rgb(244, 205, 151);\n  outline: none;\n  cursor: pointer;\n  padding: 5px 10px;\n  margin: 20px auto 0 auto;\n  display: block;\n  &:hover,\n  &:focus {\n    box-shadow: inset 0 0 10px rgb(244, 205, 151);\n  }\n"]))),N=n(2791),C=n(9434),z=n(5264),I=n(6978),A=n(6351),W=n(184),j=function(){var t=(0,N.useState)(""),e=(0,g.Z)(t,2),n=e[0],o=e[1],i=(0,N.useState)(""),a=(0,g.Z)(i,2),r=a[0],s=a[1],l=(0,C.v9)(A.Af).items,c=(0,C.I0)(),f=function(t){var e=t.currentTarget,n=e.name,i=e.value;switch(n){case"name":o(i);break;case"number":s(i);break;default:return}},m=function(){o(""),s("")};return(0,W.jsxs)(h,{onSubmit:function(t){t.preventDefault();var e=l.find((function(t){return t.name.toLowerCase()===n.toLowerCase()||t.number===r}));return""===n||""===r?z.Notify.warning("Fill in the fields to save the contact"):e?z.Notify.warning("".concat(n," is already in the Phonebook")):e?z.Notify.warning("".concat(r," is already in the Phonebook")):(c((0,I.uK)({name:n,number:r})),void m())},children:[(0,W.jsxs)(w,{children:["Name",(0,W.jsx)(v,{type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:f})]}),(0,W.jsxs)(w,{children:["Number",(0,W.jsx)(v,{type:"tel",name:"number",placeholder:"Enter number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:r,onChange:f})]}),(0,W.jsx)(k,{type:"submit",children:"Add"})]})},L=y.ZP.input(c||(c=(0,x.Z)(["\n  min-width: 260px;\n  display: block;\n  margin: 0 auto;\n  border: 1px solid rgb(244, 205, 151);\n  border-radius: 10px;\n  height: 30px;\n  padding-left: 10px;\n  background-color: transparent;\n  box-sizing: border-box;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: 1.14;\n  letter-spacing: 0.03em;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  outline: none;\n  color: rgb(244, 205, 151);\n  &:focus {\n     box-shadow: inset 0 0 10px rgb(244, 205, 151),\n    inset 0 0 40px rgb(160, 111, 43);\n  }\n  &::placeholder {\n    color: rgb(160, 111, 43);\n  }\n  @media screen and (min-width: 768px) {\n    width: 300px;\n  }\n"]))),T=n(7231),B=function(){var t=(0,C.v9)(A.AD),e=(0,C.I0)();return(0,W.jsx)(L,{type:"text",name:"filter",placeholder:" Find contacts by Name",required:!0,value:t,onChange:function(t){return e((0,T.T)(t.currentTarget.value))}})},D=y.ZP.ul(f||(f=(0,x.Z)(["\n  max-width: 400px;\n  height: auto;\n  margin: auto;\n  padding: 20px;\n  @media screen and (min-width: 768px) {\n    width: 320px;\n  }\n  @media screen and (min-width: 1200px) {\n    width: 500px;\n  }\n"]))),E=y.ZP.li(m||(m=(0,x.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 50px;\n  background-color: transparent;\n  border: 1px solid rgb(244, 205, 151);\n  box-sizing: border-box;\n  border-radius: 4px;\n  margin-top: 10px;\n  color: rgb(244, 205, 151);\n  list-style: none;\n  box-shadow: inset 0 0 10px rgb(244, 205, 151),\n    inset 0 0 40px rgb(160, 111, 43);\n"]))),S=y.ZP.p(p||(p=(0,x.Z)(["\n  padding: 10px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  letter-spacing: 0.03em;\n"]))),Z=y.ZP.button(d||(d=(0,x.Z)(["\n  height: 100%;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.14;\n  letter-spacing: 0.03em;\n  background: transparent;\n  text-align: center;\n  align-items: center;\n  color: rgb(244, 205, 151);\n  border-radius: 4px;\n  border: 1px solid rgb(244, 205, 151);\n  outline: none;\n  cursor: pointer;\n  display: block;\n  &:hover,\n  &:focus {\n    box-shadow: inset 0 0 10px rgb(244, 205, 151);\n  }\n"]))),O=function(t){var e=(0,C.I0)(),n=t.id,o=t.number,i=t.name;return(0,W.jsxs)(E,{children:[(0,W.jsxs)(S,{children:[i,": ",o]}),(0,W.jsx)(Z,{type:"button",onClick:function(){return e((0,I.zY)(n))},children:"Delete"})]})},M=n(7793),F=function(){var t=(0,C.v9)(A.Af),e=t.items,n=t.isLoading,o=t.error,i=(0,C.v9)(A.AD),a=(0,C.I0)();(0,N.useEffect)((function(){a((0,I.yF)())}),[a]);var r=i?e.filter((function(t){return t.name.toLocaleLowerCase().includes(i.toLocaleLowerCase())})):e;return(0,W.jsxs)(W.Fragment,{children:[n&&(0,W.jsx)(M.Z,{}),o&&(0,W.jsx)("div",{children:"Something went wrong, please, try again"}),(0,W.jsx)(D,{children:r.length>0&&r.map((function(t){var e=t.id,n=t.name,o=t.number;return(0,W.jsx)(O,{id:e,name:n,number:o},e)}))})]})},P=function(){return(0,W.jsx)("main",{children:(0,W.jsx)("div",{className:"section",children:(0,W.jsx)("div",{className:"container",children:(0,W.jsxs)(u,{children:[(0,W.jsxs)("div",{children:[(0,W.jsx)(b,{children:"Add contacts"}),(0,W.jsx)(j,{})]}),(0,W.jsxs)("div",{children:[(0,W.jsx)(b,{children:"Contacts"}),(0,W.jsx)(B,{}),(0,W.jsx)(F,{})]})]})})})})}},5264:function(t,e,n){var o,i;i="undefined"!==typeof n.g?n.g:"undefined"!==typeof window?window:this,o=function(){return function(t){"use strict";if("undefined"===typeof t&&"undefined"===typeof t.document)return!1;var e,n="Notiflix",o="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",i='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',a={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},r={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},s=function(t){return console.error("%c "+n+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+t+o)},l=function(e){return e||(e="head"),null!==t.document[e]||(s('\nNotiflix needs to be appended to the "<'+e+'>" element, but you called it before the "<'+e+'>" element has been created.'),!1)},c=function(e,n){if(!l("head"))return!1;if(null!==e()&&!t.document.getElementById(n)){var o=t.document.createElement("style");o.id=n,o.innerHTML=e(),t.document.head.appendChild(o)}},f=function t(){var e={},n=!1,o=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],o++);for(var i=function(o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n&&"[object Object]"===Object.prototype.toString.call(o[i])?e[i]=t(e[i],o[i]):e[i]=o[i])};o<arguments.length;o++)i(arguments[o]);return e},m=function(e){var n=t.document.createElement("div");return n.innerHTML=e,n.textContent||n.innerText||""},p=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},d=0,x=function(n,o,s,c){if(!l("body"))return!1;e||y.Notify.init({});var p=f(!0,e,{});if("object"===typeof s&&!Array.isArray(s)||"object"===typeof c&&!Array.isArray(c)){var x={};"object"===typeof s?x=s:"object"===typeof c&&(x=c),e=f(!0,e,x)}var u=e[n.toLocaleLowerCase("en")];d++,"string"!==typeof o&&(o="Notiflix "+n),e.plainText&&(o=m(o)),!e.plainText&&o.length>e.messageMaxLength&&(e=f(!0,e,{closeButton:!0,messageMaxLength:150}),o='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),o.length>e.messageMaxLength&&(o=o.substring(0,e.messageMaxLength)+"..."),"shadow"===e.fontAwesomeIconStyle&&(u.fontAwesomeIconColor=u.background),e.cssAnimation||(e.cssAnimationDuration=0);var b=t.document.getElementById(r.wrapID)||t.document.createElement("div");if(b.id=r.wrapID,b.style.width=e.width,b.style.zIndex=e.zindex,b.style.opacity=e.opacity,"center-center"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.margin="auto",b.classList.add("nx-flex-center-center"),b.style.maxHeight="calc((100vh - "+e.distance+") - "+e.distance+")",b.style.display="flex",b.style.flexWrap="wrap",b.style.flexDirection="column",b.style.justifyContent="center",b.style.alignItems="center",b.style.pointerEvents="none"):"center-top"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.top=e.distance,b.style.bottom="auto",b.style.margin="auto"):"center-bottom"===e.position?(b.style.left=e.distance,b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.margin="auto"):"right-bottom"===e.position?(b.style.right=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.left="auto"):"left-top"===e.position?(b.style.left=e.distance,b.style.top=e.distance,b.style.right="auto",b.style.bottom="auto"):"left-bottom"===e.position?(b.style.left=e.distance,b.style.bottom=e.distance,b.style.top="auto",b.style.right="auto"):(b.style.right=e.distance,b.style.top=e.distance,b.style.left="auto",b.style.bottom="auto"),e.backOverlay){var g=t.document.getElementById(r.overlayID)||t.document.createElement("div");g.id=r.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=e.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=u.backOverlayColor||e.backOverlayColor,g.className=e.cssAnimation?"nx-with-animation":"",g.style.animationDuration=e.cssAnimation?e.cssAnimationDuration+"ms":"",t.document.getElementById(r.overlayID)||t.document.body.appendChild(g)}t.document.getElementById(r.wrapID)||t.document.body.appendChild(b);var h=t.document.createElement("div");h.id=e.ID+"-"+d,h.className=e.className+" "+u.childClassName+" "+(e.cssAnimation?"nx-with-animation":"")+" "+(e.useIcon?"nx-with-icon":"")+" nx-"+e.cssAnimationStyle+" "+(e.closeButton&&"function"!==typeof s?"nx-with-close-button":"")+" "+("function"===typeof s?"nx-with-callback":"")+" "+(e.clickToClose?"nx-notify-click-to-close":""),h.style.fontSize=e.fontSize,h.style.color=u.textColor,h.style.background=u.background,h.style.borderRadius=e.borderRadius,h.style.pointerEvents="all",e.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on")),h.style.fontFamily='"'+e.fontFamily+'", '+i,e.cssAnimation&&(h.style.animationDuration=e.cssAnimationDuration+"ms");var w="";if(e.closeButton&&"function"!==typeof s&&(w='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+u.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),e.useIcon)if(e.useFontAwesome)h.innerHTML='<i style="color:'+u.fontAwesomeIconColor+"; font-size:"+e.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+u.fontAwesomeClassName+" "+("shadow"===e.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+o+"</span>"+(e.closeButton?w:"");else{var v="";n===a.Success?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===a.Failure?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===a.Warning?v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===a.Info&&(v='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+u.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),h.innerHTML=v+'<span class="nx-message nx-with-icon">'+o+"</span>"+(e.closeButton?w:"")}else h.innerHTML='<span class="nx-message">'+o+"</span>"+(e.closeButton?w:"");if("left-bottom"===e.position||"right-bottom"===e.position){var k=t.document.getElementById(r.wrapID);k.insertBefore(h,k.firstChild)}else t.document.getElementById(r.wrapID).appendChild(h);var N=t.document.getElementById(h.id);if(N){var C,z,I=function(){N.classList.add("nx-remove");var e=t.document.getElementById(r.overlayID);e&&b.childElementCount<=0&&e.classList.add("nx-remove"),clearTimeout(C)},A=function(){if(N&&null!==N.parentNode&&N.parentNode.removeChild(N),b.childElementCount<=0&&null!==b.parentNode){b.parentNode.removeChild(b);var e=t.document.getElementById(r.overlayID);e&&null!==e.parentNode&&e.parentNode.removeChild(e)}clearTimeout(z)};if(e.closeButton&&"function"!==typeof s&&t.document.getElementById(h.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),("function"===typeof s||e.clickToClose)&&N.addEventListener("click",(function(){"function"===typeof s&&s(),I();var t=setTimeout((function(){A(),clearTimeout(t)}),e.cssAnimationDuration)})),!e.closeButton&&"function"!==typeof s){var W=function(){C=setTimeout((function(){I()}),e.timeout),z=setTimeout((function(){A()}),e.timeout+e.cssAnimationDuration)};W(),e.pauseOnHover&&(N.addEventListener("mouseenter",(function(){N.classList.add("nx-paused"),clearTimeout(C),clearTimeout(z)})),N.addEventListener("mouseleave",(function(){N.classList.remove("nx-paused"),W()})))}}if(e.showOnlyTheLastOne&&d>0)for(var j=t.document.querySelectorAll("[id^="+e.ID+"-]:not([id="+e.ID+"-"+d+"])"),L=0;L<j.length;L++){var T=j[L];null!==T.parentNode&&T.parentNode.removeChild(T)}e=f(!0,e,p)},y={Notify:{init:function(t){e=f(!0,r,t),c(p,"NotiflixNotifyInternalCSS")},merge:function(t){if(!e)return s("You have to initialize the Notify module before call Merge function."),!1;e=f(!0,e,t)},success:function(t,e,n){x(a.Success,t,e,n)},failure:function(t,e,n){x(a.Failure,t,e,n)},warning:function(t,e,n){x(a.Warning,t,e,n)},info:function(t,e,n){x(a.Info,t,e,n)}}};return"object"===typeof t.Notiflix?f(!0,t.Notiflix,{Notify:y.Notify}):{Notify:y.Notify}}(i)}.apply(e,[]),void 0===o||(t.exports=o)}}]);
//# sourceMappingURL=199.4b79ec4e.chunk.js.map