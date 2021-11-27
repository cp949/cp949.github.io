"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452],{57452:function(e,r,t){t.d(r,{Z:function(){return Ne}});var n=t(85893),o=t(98396),i=t(99226),a=t(77533),c=t(90948),s=t(2734),u=t(29323),l=t(67294);function f(){var e=(0,l.useContext)(u.yX);if(void 0===e)throw new Error("useStore must be used within StoreProvider");return e}function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d=(0,c.ZP)("div")((function(e){var r=e.theme;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){p(e,r,t[r])}))}return e}({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:r.spacing(0,1)},r.mixins.toolbar)})),b=t(19572),x=t(26215),h=t(93946),m=t(78462),g=t(21519),y=t(97212),j=t(79953),v=t(11163),O=t(16195),Z=t(49625),w="rgba(255, 255, 255, 0.2)",k="#707070",P=Z.Z.palette.primary.main,S=240,C=Z.Z.palette.action.hover,I="rgba(255, 255,255, 0.7)",L=[{type:"divider"},{type:"menu",icon:"dashboard",title:"Home",href:"/"},{type:"menu",icon:"dashboard",title:"\uc2a4\ud0c0\uc77c \uc0d8\ud50c",href:"/post-frame/style-sample"}];L.forEach((function(e){return"section"===(r=e).type&&r.submenus.forEach((function(e){"menu"===e.type&&(e.sectionId=r.sectionId)})),r;var r}));var E=L,M=function(e,r){return!!r&&("/"===r?"/"===e:"/"===e?e===r:r.startsWith(e))},_=function(e,r){return!!r&&L.filter((function(r){return"section"===r.type&&r.sectionId===e})).some((function(e){return e.submenus.some((function(e){return"menu"===e.type&&M(e.href,r)}))}))},z=t(50122),D=t(86010),F=t(41664);function N(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function R(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){N(e,r,t[r])}))}return e}function B(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var T=l.forwardRef((function(e,r){var t=e.as,o=e.href,i=e.replace,a=e.scroll,c=e.passHref,s=e.shallow,u=e.prefetch,l=B(e,["as","href","replace","scroll","passHref","shallow","prefetch"]);return(0,n.jsx)(F.default,{href:o,prefetch:u,as:t,replace:i,scroll:a,shallow:s,passHref:c,children:(0,n.jsx)("a",R({ref:r},l))})}));function H(e){var r=e.href,t=e.activeClassName,o=void 0===t?"active":t,i=e.className,a=e.innerRef,c=e.naked,s=B(e,["href","activeClassName","className","innerRef","naked"]),u=(0,v.useRouter)(),l="string"===typeof r?r:r.pathname,f=(0,D.Z)(i,N({},o,u.pathname===l&&o));if(c){var p="string"===typeof r?(0,O.e_)(r):r;return(0,n.jsx)(T,R({className:f,ref:a,href:p},s))}return(0,n.jsx)(z.Z,R({component:T,className:f,ref:a,href:r},s))}var W=l.forwardRef((function(e,r){return(0,n.jsx)(H,R({},e,{innerRef:r}))}));function G(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function A(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){G(e,r,t[r])}))}return e}function X(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var J=function(e){var r=e.children,t=e.href,o=X(e,["children","href"]);if(t.startsWith("http://")||t.startsWith("https://"))return(0,n.jsx)(y.ZP,A({button:!0,component:z.Z},o,{href:t,children:r}));var i=(0,O.e_)(t);return(0,n.jsx)(y.ZP,A({button:!0,component:W},o,{href:i,children:r}))};function Q(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){Q(e,r,t[r])}))}return e}function K(e){var r=e.menu,t=e.active,o=e.onLinkClick,i=(r.icon,r.title),a=r.href;return(0,n.jsx)(J,{href:a,replace:!0,onClick:function(){return null===o||void 0===o?void 0:o(a)},sx:q({display:"flex",pr:1,"&:hover":{backgroundColor:C},"& .MuiListItemIcon-root":{color:t?P:k},"& .MuiListItemText-root":{color:t?"#fff":I,fontWeight:t?700:500,marginLeft:t?"-6px":0,"& .MuiListItemText-primary":{fontSize:"0.9rem"}}},t&&{backgroundColor:"rgba(0,0,0,0.4)",marginLeft:"2px",borderLeft:"4px solid ".concat("#4AB4F5"),borderTopLeftRadius:"4px",borderBottomLeftRadius:"4px"}),children:(0,n.jsx)(j.Z,{primary:i})})}var U=t(75503),V=t(90813),Y=t(98619),$=t(10796),ee=t(57922),re=t(13264),te=t(35553),ne=t(58117),oe=t(13540),ie=t(49123),ae=t(23960),ce=t(94229),se=t(72965),ue=t(72660),le=t(12200),fe=t(25709),pe=t(86024),de=t(14465),be=t(23054),xe=t(25449),he=t(76403),me=t(75943),ge=t(2548);function ye(e){switch(e.iconName){case"adb":return(0,n.jsx)(ae.Z,{});case"science":return(0,n.jsx)(me.Z,{});case"grade":return(0,n.jsx)(he.Z,{});case"github":return(0,n.jsx)(xe.Z,{});case"construction":return(0,n.jsx)(be.Z,{});case"build":return(0,n.jsx)(pe.Z,{});case"bug_report":return(0,n.jsx)(de.Z,{});case"dashboard":return(0,n.jsx)(fe.Z,{});case"settings":return(0,n.jsx)(ce.Z,{});case"settings_input_hdmi":return(0,n.jsx)(se.Z,{});case"exit_to_app":return(0,n.jsx)(ie.Z,{});case"logout":return(0,n.jsx)(oe.Z,{});case"usb":return(0,n.jsx)(ue.Z,{});case"bluetooth":return(0,n.jsx)(le.Z,{});case"info":return(0,n.jsx)(ge.Z,{});case"mosaic":return(0,n.jsx)(ne.Z,{})}return(0,n.jsx)(te.Z,{})}function je(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var ve=(0,re.Z)(Y.Z,{shouldForwardProp:function(e){return"active"!==e}})((function(e){var r=e.theme,t=e.active;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){je(e,r,t[r])}))}return e}({"&:hover":{backgroundColor:C},"& .MuiListItemText-root":{color:I,marginLeft:r.spacing(1)},"& .MuiListItemIcon-root":{color:k}},t&&{borderTop:"1px solid ".concat(w),backgroundColor:"rgba(0, 0, 0, 0)"},{"& .MuiIcon-root.sectionIndicator":{color:t?P:"rgba(255,255,255,0.5)",marginRight:r.spacing(1)},"& + &":{marginBottom:r.spacing(1),marginTop:r.spacing(1)}})}));function Oe(e){var r,t=e.section,o=e.active,i=e.onClickSection,a=e.expanded,c=void 0!==a&&a,s=e.currentHref,u=e.onClickLink;return(0,n.jsxs)(l.Fragment,{children:[(0,n.jsxs)(ve,{onClick:i,active:o,sx:{pl:1},children:[t.icon&&(0,n.jsx)($.Z,{sx:{display:"none"},children:(0,n.jsx)(ye,{iconName:t.icon})}),(0,n.jsx)(j.Z,{primary:t.title,sx:{"& .MuiListItemText-primary":{fontWeight:o?700:500,fontSize:"0.9rem"}}}),c?(0,n.jsx)(V.Z,{sx:{color:o?"primary.main":"#bbb"}}):(0,n.jsx)(U.Z,{sx:{color:o?"primary.main":"#bbb"}})]}),(0,n.jsx)(ee.Z,{in:c,timeout:"auto",unmountOnExit:!0,sx:{boxSizing:"border-box",borderBottom:"1px solid ".concat(w)},children:(0,n.jsx)(m.Z,{disablePadding:!0,sx:{"& > .MuiListItem-root":{pl:4}},children:null===(r=t.submenus)||void 0===r?void 0:r.map((function(e,r){return"divider"===e.type?(0,n.jsx)(g.Z,{},r):(0,n.jsx)(K,{menu:e,onLinkClick:u,active:M(e.href,s)},e.href+r)}))})})]})}var Ze=E;var we=(0,u.Pi)((function(){var e=(0,s.Z)(),r=(0,v.useRouter)().asPath,t=(0,o.Z)(e.breakpoints.down("sm")),a=f().sidebarStore,c=function(){t&&a.setOpen(!1)};return a.isOpen,(0,n.jsxs)(i.Z,{component:"nav",sx:{position:"relative",color:I,backgroundColor:"#13132A","& > .MuiDivider-root":{backgroundColor:"rgba(255, 255, 255, 0.2)",marginTop:8,marginBottom:8},height:"100%","::before":{position:"absolute",content:"''",top:0,left:0,width:"100%",height:"100%",zIndex:0,background:"url(".concat((0,O.e_)("/images/sidebar/bg_sidebar.jpg"),")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"}},children:[(0,n.jsxs)(d,{sx:{justifyContent:"flex-start",color:"#FFF"},children:[(0,n.jsx)(i.Z,{component:"a",sx:{display:"block",flexGrow:1,pl:1,pr:1,pt:"6px",zIndex:1,borderRadius:1,fontSize:"1.1rem",textDecoration:"none",":hover .title1":{color:"#005CB8",fontWeight:500},":hover .title2":{color:"#005CB8"}},href:(0,O.e_)("/"),children:(0,n.jsx)(i.Z,{className:"title2",sx:{flexGrow:1,mt:"4px",color:"#fff",fontSize:"1.1rem",fontFamily:"Black Han Sans",textDecoration:"none"},children:"@cp949"})}),(0,n.jsx)(h.Z,{size:"small",onClick:a.toggleOpen,sx:{color:"#fff"},children:"ltr"===e.direction?(0,n.jsx)(b.Z,{}):(0,n.jsx)(x.Z,{})})]}),(0,n.jsx)(m.Z,{disablePadding:!0,children:Ze.map((function(e,t){if("menu"===e.type)return(0,n.jsx)(K,{menu:e,onLinkClick:c,active:M(e.href,r)},t);if("divider"===e.type)return(0,n.jsx)(g.Z,{light:!0},t);if("label"===e.type)return(0,n.jsx)(y.ZP,{sx:{pl:2,"& .MuiListItemText-root .MuiTypography-root":{color:I,opacity:.8}},dense:!0,children:(0,n.jsx)(j.Z,{children:e.title})},t);if("section"===e.type){var o=e;return(0,n.jsx)(Oe,{active:_(o.sectionId,r),section:o,currentHref:r,expanded:a.expandedSectionIds.includes(o.sectionId),onClickLink:c,onClickSection:function(){return a.toggleExpandSection(o.sectionId)}},t)}return(0,n.jsx)("div",{children:JSON.stringify(e)})}))})]})})),ke=t(82414),Pe=t(6236),Se=t(10155),Ce=t(15861),Ie=t(42293),Le=t(18377);function Ee(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Me=(0,c.ZP)(Ie.Z,{shouldForwardProp:function(e){return"shift"!==e}})((function(e){var r=e.theme,t=e.shift;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){Ee(e,r,t[r])}))}return e}({zIndex:r.zIndex.drawer+(t?1:-1),background:"#fff",transition:r.transitions.create(["margin","width"],{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen}),color:"#FFF"},t&&{width:"calc(100% - ".concat(S,"px)"),marginLeft:S,transition:r.transitions.create(["margin","width"],{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen})},!t&&{"& .MuiToolbar-root":Ee({paddingLeft:r.spacing(3.5)},r.breakpoints.down("xs"),{paddingLeft:r.spacing(3)})})}));function _e(e){var r=e.title,t=void 0===r?"No title":r,i=e.isSidebarOpen,a=e.onClickMenuButton,c=(0,s.Z)(),u=(0,o.Z)(c.breakpoints.down("sm")),l=!(!i||u);return(0,n.jsx)(Me,{position:"fixed",shift:l,elevation:0,sx:{borderBottom:"1px solid rgba(0,0,0,0.1)"},children:(0,n.jsx)(Se.Z,{sx:{color:"text.primary"},children:(0,n.jsxs)(Le.Z,{sx:{flexGrow:1,display:"flex",alignItems:"center"},children:[(0,n.jsx)(h.Z,{onClick:a,color:"inherit","aria-label":"open drawer",edge:"start",sx:{marginRight:"16px"},children:i?(0,n.jsx)(ke.Z,{color:"primary"}):(0,n.jsx)(Pe.Z,{color:"primary"})}),(0,n.jsx)(Ce.Z,{variant:"subtitle1",noWrap:!0,component:"div",sx:{fontSize:"1.2rem",fontWeight:700,fontFamily:"Do Hyeon"},children:t})]})})})}var ze=t(80938);function De(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var Fe=(0,c.ZP)("main",{shouldForwardProp:function(e){return"contentShift"!==e}})((function(e){var r=e.theme,t=e.contentShift;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){De(e,r,t[r])}))}return e}({flexGrow:1,padding:r.spacing(0,0,0,0),transition:r.transitions.create("margin",{easing:r.transitions.easing.sharp,duration:r.transitions.duration.leavingScreen})},0!==t&&{transition:r.transitions.create("margin",{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen}),marginLeft:t},0===t&&{transition:r.transitions.create("margin",{easing:r.transitions.easing.easeOut,duration:r.transitions.duration.enteringScreen}),marginLeft:0},{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"#fafafa"})}));var Ne=(0,u.Pi)((function(e){var r=e.title,t=e.children,c=f().sidebarStore,u=(0,s.Z)(),p=(0,o.Z)(u.breakpoints.down("sm")),b=c.isOpen,x=(0,l.useState)(),h=x[0],m=(x[1],0);m=p||b?0:-240;var g=(0,l.useMemo)((function(){return{searchQuery:h,sidebarWidth:b?S:0}}),[h,b]);return(0,n.jsx)(ze.Z.Provider,{value:g,children:(0,n.jsxs)(i.Z,{sx:{display:"flex",position:"relative"},children:[(0,n.jsx)(_e,{title:r,isSidebarOpen:b,onClickMenuButton:c.toggleOpen}),(0,n.jsx)(a.ZP,{sx:{width:S,flexShrink:0,"& .MuiDrawer-paper":{width:S,boxSizing:"border-box",overflowX:"hidden"}},variant:p?"temporary":"persistent",anchor:"left",open:b,onClose:function(){return c.setOpen(!1)},children:(0,n.jsx)(we,{})}),(0,n.jsxs)(Fe,{contentShift:m,children:[(0,n.jsx)(d,{}),(0,n.jsx)(i.Z,{sx:{flexGrow:1},children:t})]})]})})}))},80938:function(e,r,t){t.d(r,{S:function(){return i}});var n=t(67294),o=(0,n.createContext)(void 0);function i(){return(0,n.useContext)(o)}r.Z=o}}]);