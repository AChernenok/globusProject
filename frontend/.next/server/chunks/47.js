exports.id=47,exports.ids=[47],exports.modules={3664:(e,i,t)=>{"use strict";t.d(i,{A:()=>o});var r=t(8732),n=t(19918),s=t.n(n);let o=(0,t(82015).forwardRef)(function({href:e,as:i,passHref:t=!0,children:n,...o},a){if(e)return(0,r.jsx)(s(),{href:e,as:i,passHref:t,ref:a,...o,children:n})})},9364:(e,i,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.d(i,{A:()=>C});var n=t(8732),s=t(60143),o=t(51789),a=t(58861),l=t(21597),c=t(3365),d=t(87767),h=t(59923),x=t(66229),m=t(24301),p=t(93325),g=t(76883),u=t(50029),A=t(24459),j=t(67379),f=t(7676),y=t(81160),b=t(64843),v=t(3664),w=t(98829),k=e([b,w,o,a,l,c,d,h,x,u,m,p,g,A,j,f]);[b,w,o,a,l,c,d,h,x,u,m,p,g,A,j,f]=k.then?(await k)():k;let C=()=>{let{loading:e,data:i,error:t}=(0,s.useQuery)(y.zS);if(e)return(0,n.jsx)(o.A,{component:"footer",sx:{py:3,px:2,backgroundColor:"grey.50"},children:(0,n.jsxs)(a.A,{maxWidth:"lg",children:[(0,n.jsx)(l.A,{variant:"text",width:"20%",height:"2rem"}),(0,n.jsx)(l.A,{variant:"rounded",height:"4rem",sx:{my:1}}),(0,n.jsx)(l.A,{variant:"rounded",height:"4rem"})]})});if(t)return(0,n.jsx)(o.A,{component:"footer",sx:{py:3,px:2,backgroundColor:"grey.50"},children:(0,n.jsx)(a.A,{maxWidth:"lg",children:(0,n.jsxs)(c.A,{severity:"error",variant:"filled",sx:{mt:2},children:[(0,n.jsx)(d.A,{children:"Ошибка"}),t.message]})})});let r=function(e){let i=e.match(/.*?\d(?=\D*$)/)?.[0]?.length||0;return{timeRange:e.substring(0,i+1).trim(),note:e.substring(i+1).trim()}}(i?.header?.schedule);return(0,n.jsxs)(o.A,{component:"footer",sx:{py:3,px:2,mt:2,backgroundColor:"grey.50"},children:[(0,n.jsx)(w.A,{data:i?.header}),(0,n.jsxs)(a.A,{maxWidth:"lg",children:[(0,n.jsx)(h.A,{container:!0,spacing:2,children:(0,n.jsx)(x.A,{variant:"body1",fontWeight:700,children:"Услуги"})}),(0,n.jsx)(h.A,{container:!0,spacing:2,children:i?.serviceCategories?.map(e=>(0,n.jsxs)(h.A,{size:{xs:12,md:4},sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(u.A,{}),(0,n.jsx)(v.A,{href:"/uslugi/"+e?.slug,children:(0,n.jsx)(x.A,{sx:{color:"#000",textDecoration:"none",fontFamily:'"Roboto","Helvetica","Arial",sans-serif',"&:hover":{color:"primary.main",textDecoration:"underline"}},children:e?.title})})]},e?.documentId))}),(0,n.jsx)(m.A,{sx:{my:2}}),(0,n.jsxs)(h.A,{container:!0,spacing:2,sx:{"& .MuiSvgIcon-root":{fontSize:40,color:"error.main"},"& .MuiTypography-caption":{fontSize:"1rem"},alignItems:"center"},children:[(0,n.jsx)(h.A,{size:{xs:12,md:2},children:(0,n.jsx)(v.A,{href:"/",children:(0,n.jsxs)(p.A,{direction:"row",spacing:1,alignItems:"center",alignContent:"center",children:[(0,n.jsx)(o.A,{component:"img",src:"https://api.okna-globus.ru"+i?.header?.logo?.url,alt:i?.header?.title,sx:{height:48,maxWidth:"100%"},loading:"lazy"}),(0,n.jsx)(x.A,{variant:"body1",fontWeight:700,children:i?.header?.title})]})})}),(0,n.jsx)(h.A,{size:{xs:12,md:2},children:(0,n.jsxs)(p.A,{direction:"row",spacing:1,alignItems:"flex-start",children:[(0,n.jsx)(b.A,{}),(0,n.jsxs)(p.A,{spacing:.5,children:[(0,n.jsx)(x.A,{variant:"caption",fontWeight:700,children:r.timeRange}),(0,n.jsx)(x.A,{variant:"subtitle2",color:"text.secondary",children:r.note})]})]})}),(0,n.jsx)(h.A,{size:{xs:12,md:3},children:(0,n.jsx)(g.A,{href:`mailto:${i?.header?.email}`,underline:"none",children:(0,n.jsxs)(p.A,{direction:"row",spacing:1,alignItems:"flex-start",children:[(0,n.jsx)(A.A,{}),(0,n.jsxs)(p.A,{spacing:.5,children:[(0,n.jsx)(x.A,{variant:"caption",fontWeight:700,children:i?.header?.email}),(0,n.jsx)(x.A,{variant:"subtitle2",color:"text.secondary",children:i?.header?.emailCaption})]})]})})}),(0,n.jsx)(h.A,{size:{xs:12,md:3},children:(0,n.jsx)(g.A,{href:`tel:${i?.header?.phone}`,underline:"none",children:(0,n.jsxs)(p.A,{direction:"row",spacing:1,alignItems:"flex-start",children:[(0,n.jsx)(j.A,{}),(0,n.jsxs)(p.A,{spacing:.5,children:[(0,n.jsx)(x.A,{variant:"caption",fontWeight:700,children:i?.header?.phone}),(0,n.jsx)(x.A,{variant:"subtitle2",color:"text.secondary",children:i?.header?.phoneCaption})]})]})})}),(0,n.jsx)(h.A,{size:{xs:12,md:2},children:(0,n.jsx)(g.A,{href:i?.header?.telegramLink,target:"_blank",rel:"noopener noreferrer",underline:"none",children:(0,n.jsxs)(p.A,{direction:"row",spacing:1,alignItems:"flex-start",children:[(0,n.jsx)(f.A,{}),(0,n.jsxs)(p.A,{spacing:.5,children:[(0,n.jsx)(x.A,{variant:"caption",fontWeight:700,children:"TELEGRAM"}),(0,n.jsx)(x.A,{variant:"subtitle2",color:"text.secondary",children:i?.header?.telegramCaption})]})]})})}),(0,n.jsx)(h.A,{size:{xs:12},sx:{mt:2,textAlign:"center"},children:(0,n.jsxs)(x.A,{variant:"caption",color:"text.secondary",children:["\xa9 ",new Date().getFullYear()," Все права защищены"]})})]})]})]})};r()}catch(e){r(e)}})},26047:(e,i,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.r(i),t.d(i,{default:()=>c});var n=t(8732);t(60979);var s=t(60143),o=t(32979),a=t(46925),l=e([a]);function c({Component:e,pageProps:i}){return(0,n.jsx)(s.ApolloProvider,{client:o.A,children:(0,n.jsx)(a.A,{children:(0,n.jsx)(e,{...i})})})}a=(l.then?(await l)():l)[0],r()}catch(e){r(e)}})},27766:(e,i,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.d(i,{A:()=>F});var n=t(8732),s=t(12479),o=t(58861),a=t(21597),l=t(51789),c=t(3365),d=t(87767),h=t(51117),x=t(66229),m=t(56015),p=t(35733),g=t(24921),u=t(75171),A=t(39827),j=t(96585),f=t(59923),y=t(76883),b=t(90237),v=t(37259),w=t(82477),k=t(27501),C=t(24757),z=t(43511),I=t(24301),S=t(82015),T=t.n(S),P=t(60143),R=t(64928),W=t(25160),q=t(24459),D=t(67379),L=t(7676),$=t(29623),M=t(11222),B=t(10846),U=t(81160),H=t(64843),O=t(80805),G=t(3664),E=e([H,O,s,o,a,l,c,d,h,x,m,R,p,g,u,A,W,j,f,q,y,D,L,b,$,v,w,k,M,B,C,z,I]);[H,O,s,o,a,l,c,d,h,x,m,R,p,g,u,A,W,j,f,q,y,D,L,b,$,v,w,k,M,B,C,z,I]=E.then?(await E)():E;let F=()=>{let{loading:e,data:i,error:t}=(0,P.useQuery)(U.zT),[r,E]=(0,S.useState)(!1),[F,_]=(0,S.useState)(!1),[Q,N]=(0,S.useState)(null),V=!!Q,[J,K]=(0,S.useState)(!1);if(e)return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s.A,{position:"static",color:"inherit",elevation:0,sx:{py:1,borderBottom:"1px solid",borderColor:"divider",backgroundColor:"grey.50",boxShadow:"0px 5px 5px rgba(0, 0, 0, 0.2)"},children:(0,n.jsxs)(o.A,{sx:{display:"flex",justifyContent:"space-around"},children:[(0,n.jsx)(a.A,{variant:"circular",width:40,height:40}),(0,n.jsx)(a.A,{height:30,sx:{ml:2,width:{xs:"100px",sm:"200px"}}}),(0,n.jsx)(a.A,{width:"100%",height:30,sx:{display:{xs:"none",md:"flex"},maxWidth:600}}),(0,n.jsx)(a.A,{variant:"circular",width:30,height:30,sx:{display:{md:"none",xs:"flex"},ml:"auto"}})]})})});if(t)return(0,n.jsx)(o.A,{sx:{my:2},children:(0,n.jsx)(l.A,{component:"header",children:(0,n.jsxs)(c.A,{variant:"filled",severity:"error",children:[(0,n.jsx)(d.A,{children:"Ошибка"}),t?.message]})})});let X=function(e){let i=e.match(/.*?\d(?=\D*$)/)?.[0]?.length||0;return{timeRange:e.substring(0,i+1).trim(),note:e.substring(i+1).trim()}}(i?.header?.schedule),Y=()=>{E(!r)},Z=e=>{N(e.currentTarget)},ee=()=>{N(null)},ei=()=>{K(!J)},et=()=>{_(!F)};return(0,n.jsxs)(l.A,{sx:{pb:10},children:[(0,n.jsx)(O.A,{open:J,onClose:()=>K(!1)}),(0,n.jsx)(s.A,{position:"fixed",color:"inherit",elevation:0,sx:{py:1,borderBottom:"1px solid",borderColor:"divider",backgroundColor:"grey.50",boxShadow:"0px 5px 5px rgba(0, 0, 0, 0.2)",width:"100%"},children:(0,n.jsx)(o.A,{children:(0,n.jsxs)(h.A,{disableGutters:!0,sx:{justifyContent:"space-between"},children:[(0,n.jsx)(G.A,{href:"/",children:(0,n.jsxs)(l.A,{sx:{display:"flex",alignItems:"center",mr:4,justifyContent:"space-around",textDecoration:"none","&:hover":{cursor:"pointer"}},children:[(0,n.jsx)(l.A,{component:"img",loading:"lazy",src:"https://api.okna-globus.ru"+i?.header?.logo?.url,alt:i?.header?.title,sx:{height:40,width:"auto",mr:2}}),(0,n.jsx)(x.A,{variant:"h5",component:"div",sx:{fontWeight:700,color:"text.primary"},children:i?.header?.title})]})}),(0,n.jsxs)(l.A,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[i?.header?.menu.map(e=>"/uslugi"===e.url?(0,n.jsxs)(l.A,{children:[(0,n.jsx)(m.A,{onClick:Z,variant:"contained",color:"error",sx:{mx:1,fontWeight:500,fontSize:{xs:"0.8rem",lg:"0.875rem"},"&:hover":{color:"white"}},startIcon:(0,n.jsx)(R.A,{}),children:e.title},e.id),(0,n.jsx)(p.A,{disableScrollLock:!0,anchorEl:Q,open:V,onClose:ee,slotProps:{paper:{sx:{width:"100%",maxWidth:"500px",borderRadius:"8px",mt:1,boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.15)","& .MuiPaper-root":{overflow:"hidden !important",pr:0},"& .MuiMenu-list":{py:0}}}},children:(0,n.jsxs)(g.A,{sx:{display:"flex",width:"100%",flexDirection:"column"},children:[i?.serviceCategories?.slice(0,4).map(e=>(0,n.jsx)(G.A,{href:"/uslugi/"+e?.slug,children:(0,n.jsxs)(u.A,{onClick:ee,sx:{px:2,py:1.5,borderRadius:1,"&:hover":{bgcolor:"action.hover"}},children:[(0,n.jsx)(A.A,{primary:e?.title.length>=48?e?.title.substring(0,46)+"...":e?.title,slotProps:{primary:{fontWeight:500}}}),(0,n.jsx)(W.A,{color:"action"})]})},e?.documentId)),(0,n.jsx)(G.A,{href:"/uslugi",children:(0,n.jsx)(m.A,{variant:"contained",onClick:ee,fullWidth:!0,size:"medium",children:"Полный список услуг"})})]})})]},e.id):(0,n.jsx)(G.A,{href:e.url,children:(0,n.jsx)(m.A,{variant:"text",color:"text.primary",sx:{mx:1,fontWeight:500,fontSize:{xs:"0.8rem",lg:"0.875rem"},"&:hover":{color:"primary.main"}},children:e.title})},e.id)),(0,n.jsx)(m.A,{variant:"contained",color:"info",onClick:ei,sx:{fontWeight:500,fontSize:{xs:"0.8rem",lg:"0.875rem"}},children:"Перезвоните мне"})]}),(0,n.jsx)(j.A,{color:"inherit","aria-label":"open menu",edge:"end",onClick:Y,sx:{display:{xs:"flex",md:"none"},color:"text.primary"},children:(0,n.jsx)(R.A,{})})]})})}),(0,n.jsx)(o.A,{sx:{boxShadow:"0 10px 15px -5px rgba(0,0,0,0.3)",py:2,mt:10,display:{xs:"none",md:"block"},position:"relative",zIndex:2},children:(0,n.jsxs)(f.A,{container:!0,spacing:2,alignItems:"center",sx:{"& .MuiSvgIcon-root":{fontSize:"2.5rem",color:"error.main",mr:1},"& .MuiBox-root":{display:"flex",alignItems:"center",justifyContent:"center"},"& .MuiLink-root":{display:"flex",flexDirection:"column"}},children:[(0,n.jsx)(f.A,{size:{md:3},children:(0,n.jsxs)(l.A,{children:[(0,n.jsx)(H.A,{}),(0,n.jsxs)(l.A,{sx:{flexDirection:"column"},children:[(0,n.jsx)(x.A,{fontWeight:"bold",variant:"h4",children:X.timeRange}),(0,n.jsx)(x.A,{variant:"caption",children:X.note})]})]})}),(0,n.jsx)(f.A,{size:{md:3},children:(0,n.jsxs)(l.A,{children:[(0,n.jsx)(q.A,{}),(0,n.jsxs)(y.A,{href:`mailto:${i?.header?.email}`,children:[(0,n.jsx)(x.A,{fontWeight:"bold",children:i?.header?.email}),(0,n.jsx)(x.A,{variant:"overline",textAlign:"right",children:i?.header?.emailCaption})]})]})}),(0,n.jsx)(f.A,{size:{md:3},children:(0,n.jsxs)(l.A,{children:[(0,n.jsx)(D.A,{}),(0,n.jsxs)(y.A,{href:`tel:${i?.header?.phone}`,children:[(0,n.jsx)(x.A,{fontWeight:"bold",children:i?.header?.phone}),(0,n.jsx)(x.A,{variant:"overline",textAlign:"right",children:i?.header?.phoneCaption})]})]})}),(0,n.jsx)(f.A,{size:{md:3},children:(0,n.jsxs)(l.A,{children:[(0,n.jsx)(L.A,{}),(0,n.jsxs)(y.A,{href:i?.header?.telegramLink,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(x.A,{fontSize:"1.2rem",fontWeight:"bold",children:"TELEGRAM"}),(0,n.jsx)(x.A,{variant:"overline",textAlign:"right",children:i?.header?.telegramCaption})]})]})})]})}),(0,n.jsxs)(b.Ay,{anchor:"right",open:r,onClose:Y,PaperProps:{sx:{width:"80%",maxWidth:300}},children:[(0,n.jsx)(l.A,{sx:{p:2,display:"flex",justifyContent:"flex-end"},children:(0,n.jsx)(j.A,{onClick:Y,children:(0,n.jsx)($.A,{})})}),(0,n.jsxs)(v.A,{disablePadding:!0,children:[i?.header?.menu.map(e=>e?.url==="/uslugi"?(0,n.jsxs)(T().Fragment,{children:[(0,n.jsx)(w.Ay,{disablePadding:!0,sx:{borderBottom:"1px solid",borderColor:"divider",bgcolor:"error.main",color:"primary.contrastText"},children:(0,n.jsxs)(k.A,{onClick:et,children:[(0,n.jsx)(A.A,{primary:e?.title}),F?(0,n.jsx)(M.A,{}):(0,n.jsx)(B.A,{})]})}),(0,n.jsx)(C.A,{in:F,timeout:"auto",unmountOnExit:!0,children:(0,n.jsxs)(v.A,{component:"div",disablePadding:!0,children:[i?.serviceCategories?.slice(0,4).map(e=>(0,n.jsx)(G.A,{href:`/uslugi/${e?.slug}`,children:(0,n.jsx)(k.A,{sx:{pl:4},children:(0,n.jsx)(A.A,{secondary:e?.title})})},e?.documentId)),(0,n.jsx)(G.A,{href:"/uslugi",children:(0,n.jsx)(k.A,{sx:{pl:4,bgcolor:"primary.main",color:"primary.contrastText"},onClick:()=>{et(),Y()},children:(0,n.jsx)(A.A,{primary:"Все услуги"})})})]})})]},e?.id):(0,n.jsx)(G.A,{href:e.url,children:(0,n.jsx)(w.Ay,{disablePadding:!0,sx:{borderBottom:"1px solid",borderColor:"divider"},children:(0,n.jsx)(k.A,{onClick:Y,children:(0,n.jsx)(A.A,{primary:e?.title})})})},e.id)),(0,n.jsx)(w.Ay,{disablePadding:!0,children:(0,n.jsxs)(k.A,{component:"a",href:`tel:${i?.header?.phone}`,children:[(0,n.jsx)(z.A,{children:(0,n.jsx)(D.A,{sx:{color:"error.main"}})}),(0,n.jsx)(A.A,{primary:i?.header?.phone,sx:{color:"primary.main",textDecoration:"underline"},slotProps:{primary:{variant:"h4"}}})]})}),(0,n.jsx)(I.A,{}),(0,n.jsx)(w.Ay,{disablePadding:!0,children:(0,n.jsxs)(k.A,{component:"a",href:`mailto:${i?.header?.email}`,children:[(0,n.jsx)(z.A,{children:(0,n.jsx)(q.A,{sx:{color:"error.main"}})}),(0,n.jsx)(A.A,{primary:i?.header?.email,sx:{color:"primary.main",textDecoration:"underline"},slotProps:{primary:{variant:"h4"}}})]})}),(0,n.jsx)(I.A,{}),(0,n.jsxs)(w.Ay,{children:[(0,n.jsx)(z.A,{children:(0,n.jsx)(H.A,{sx:{color:"error.main"}})}),(0,n.jsx)(A.A,{primary:i?.header?.schedule})]}),(0,n.jsx)(I.A,{}),(0,n.jsx)(w.Ay,{sx:{bgcolor:"primary.main",color:"primary.contrastText"},children:(0,n.jsx)(k.A,{onClick:()=>{ei(),Y()},children:(0,n.jsx)(A.A,{primary:"Перезвоните мне"})})})]})]})]})};r()}catch(e){r(e)}})},32979:(e,i,t)=>{"use strict";t.d(i,{A:()=>n});var r=t(60143);let n=new r.ApolloClient({cache:new r.InMemoryCache,link:new r.HttpLink({uri:"https://api.okna-globus.ru/graphql"})})},46925:(e,i,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.d(i,{A:()=>h});var n=t(8732),s=t(47488),o=t(81227),a=t(27766),l=t(9364),c=e([a,l,s,o]);[a,l,s,o]=c.then?(await c)():c;let d=(0,s.A)({typography:{fontSize:14,h1:{fontSize:"2.875rem",lineHeight:"3.25rem",fontWeight:900},h2:{fontSize:"2.25rem",lineHeight:"2.625rem",fontWeight:700},h3:{fontSize:"1.5rem",lineHeight:"1.75rem",fontWeight:700},h4:{fontSize:"1.125rem",lineHeight:"1.3rem",fontWeight:700},h5:{fontSize:"1rem",lineHeight:"1.3rem",fontWeight:400},h6:{fontSize:".75rem",lineHeight:".7rem"}}}),h=({children:e})=>(0,n.jsxs)(o.A,{theme:d,children:[(0,n.jsx)(a.A,{}),(0,n.jsx)("section",{children:e}),(0,n.jsx)(l.A,{})]});r()}catch(e){r(e)}})},60979:()=>{},64843:(e,i,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.d(i,{A:()=>a});var n=t(8732),s=t(66701),o=e([s]);s=(o.then?(await o)():o)[0];let a=e=>(0,n.jsx)(s.A,{viewBox:"0 0 512 520",component:"svg",...e,children:(0,n.jsxs)("g",{transform:"translate(0.000000,520.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:[(0,n.jsx)("path",{d:"M2015 5026 c-41 -18 -83 -69 -90 -109 -4 -18 -5 -118 -3 -224 3 -210   5 -218 72 -267 39 -29 133 -29 172 0 68 51 69 53 69 294 0 205 -1 220 -21 246   -11 15 -32 37 -46 47 -33 25 -113 32 -153 13z"}),(0,n.jsx)("path",{d:"M2972 5024 c-18 -10 -45 -33 -60 -52 -27 -35 -27 -36 -30 -238 -4   -229 1 -253 64 -300 31 -24 47 -29 95 -29 62 0 94 17 133 69 20 26 21 41 21   246 0 205 -1 220 -21 246 -50 67 -135 92 -202 58z"}),(0,n.jsx)("path",{d:"M948 4870 c-72 -12 -145 -38 -233 -83 -61 -31 -102 -63 -171 -132   -79 -79 -97 -103 -142 -195 -89 -181 -83 -48 -80 -1855 l3 -1590 23 -70 c46   -136 99 -223 197 -321 76 -77 105 -98 185 -137 181 -89 18 -82 1830 -82 1813   0 1650 -7 1830 82 79 39 110 62 185 138 76 75 99 106 138 185 89 180 82 17 82   1830 0 1812 7 1649 -82 1830 -39 80 -60 109 -137 185 -69 69 -110 101 -171   132 -146 75 -195 86 -410 90 -183 4 -191 3 -229 -19 -105 -61 -107 -211 -4   -273 28 -17 57 -21 208 -26 149 -5 183 -9 233 -28 109 -43 203 -138 249 -251   21 -52 23 -72 26 -367 l4 -313 -1922 0 -1921 0 3 313 c3 295 5 315 26 367 45   111 142 209 252 252 46 18 84 22 237 27 162 5 184 8 209 27 53 39 69 71 69   134 0 71 -21 105 -85 138 -41 20 -57 22 -200 21 -85 -1 -176 -5 -202 -9z   m3530 -2702 l-3 -1113 -23 -56 c-48 -116 -142 -208 -257 -251 l-60 -23 -1580   0 -1580 0 -55 23 c-113 46 -207 140 -252 249 l-23 58 -3 1113 -2 1112 1920 0   1920 0 -2 -1112z"}),(0,n.jsx)("path",{d:"M1855 2946 c-93 -40 -124 -168 -60 -245 53 -62 43 -61 599 -61 l506   0 -34 -52 c-125 -197 -271 -510 -351 -753 -105 -316 -145 -646 -89 -722 70   -93 192 -96 261 -6 23 31 27 48 35 151 22 311 129 641 326 1003 70 128 190   319 265 423 38 53 42 64 42 117 0 62 -17 94 -69 133 -27 21 -38 21 -714 23   -556 2 -693 0 -717 -11z"})]})});r()}catch(e){r(e)}})},80805:(e,i,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.d(i,{A:()=>k});var n=t(8732),s=t(82015),o=t(56761),a=t.n(o),l=t(53345),c=t(67495),d=t(84327),h=t(51789),x=t(66229),m=t(93441),p=t(56015),g=t(96585),u=t(76883),A=t(94995),j=t(35597),f=t(3365),y=t(26751),b=t(29623),v=t(3664),w=e([l,c,d,h,x,m,p,y,g,b,u,A,j,f]);[l,c,d,h,x,m,p,y,g,b,u,A,j,f]=w.then?(await w)():w;let k=({open:e,onClose:i,formCalculateData:t={},resetForm:r})=>{let[o,w]=(0,s.useState)({name:"",phone:"",description:"",photo:null}),[k,C]=(0,s.useState)({}),[z,I]=(0,s.useState)(!1),[S,T]=(0,s.useState)({open:!1,message:"",severity:"success"}),[P,R]=(0,s.useState)(null),W=e=>{let{name:i,value:t}=e.target;w(e=>({...e,[i]:t}))},q=()=>{let e={};return o.name||(e.name="Введите имя"),o.phone||(e.phone="Введите телефон"),C(e),0===Object.keys(e).length},D=async e=>{if(e.preventDefault(),q()){I(!0);try{let e=new FormData;e.append("chat_id","-4786257873");let i=`📌 Новая заявка:

👤 Имя: ${o.name}
📞 Телефон: ${o.phone}
📝 Описание: ${o.description||"не указано"}`;if(t&&!0===t.agree){i+=`

Данные из калькулятора:`;let e=t.repairTypes?t.repairTypes.join(", "):"не выбрано";i+=`

Вид ремонта: ${e}`;let r="не заполнено";if(t.windowMeasurements){let e=[];for(let[i,r]of Object.entries(t.windowMeasurements))r.width&&r.height&&e.push(`${i}: ${r.width}x${r.height} мм`);r=e.join("; ")}i+=`

Размеры окна: ${r}`;let n="не выбрано";t.openedWindows&&(n=t.openedWindows.map(e=>`${e.windowType}: ${e.openings.join(", ")} (${e.count} шт.)`).join("; ")),i+=`

Открытые окна: ${n}`;let s="не указано";"in_city"===t.repairLocation?s="в городе":t.distance&&(s=`${t.distance}км от города`),i+=`

Находится: ${s}`}if(o.photo){if(e.append("photo",o.photo),e.append("caption",i),!(await fetch("https://api.telegram.org/bot7990508257:AAGug1yARMViw2lIwaKLT5nORcfTWmDGQIA/sendPhoto",{method:"POST",body:e})).ok)throw Error("Ошибка отправки фото в Telegram")}else if(!(await fetch("https://api.telegram.org/bot7990508257:AAGug1yARMViw2lIwaKLT5nORcfTWmDGQIA/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:"-4786257873",text:i})})).ok)throw Error("Ошибка отправки сообщения в Telegram");let r={name:o.name,phone:o.phone,text:i};if(!(await fetch("https://api.okna-globus.ru/api/request-services",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:r})})).ok)throw Error("Ошибка при отправке");L()}catch(e){T({open:!0,message:`Ошибка отправки: ${e?.message||"Неизвестная ошибка"}`,severity:"error"})}finally{I(!1)}}},L=()=>{T({open:!0,message:"Заявка успешно отправлена!",severity:"success"}),w({name:"",phone:"",description:"",photo:null}),R(null),r&&r(),i()};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{open:e,onClose:i,closeAfterTransition:!0,slots:{backdrop:c.A},children:(0,n.jsx)(d.A,{in:e,children:(0,n.jsxs)(h.A,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"90%",sm:500},maxHeight:"90vh",overflowY:"auto",bgcolor:"background.paper",boxShadow:24,p:{xs:2,sm:4},borderRadius:2},children:[(0,n.jsx)(x.A,{variant:"h6",component:"h2",gutterBottom:!0,children:"Заказать обратный звонок"}),(0,n.jsxs)(h.A,{component:"form",onSubmit:D,sx:{mt:2},children:[(0,n.jsx)(m.A,{fullWidth:!0,label:"Имя*",name:"name",value:o.name,onChange:W,error:!!k.name,helperText:k.name,margin:"normal",disabled:z,size:"small"}),(0,n.jsx)(m.A,{fullWidth:!0,label:"Телефон*",name:"phone",value:o.phone,onChange:W,error:!!k.phone,helperText:k.phone,margin:"normal",disabled:z,size:"small"}),(0,n.jsx)(m.A,{fullWidth:!0,label:"Описание",name:"description",value:o.description,onChange:W,margin:"normal",multiline:!0,rows:4,disabled:z,size:"small"}),(0,n.jsxs)(h.A,{sx:{position:"relative",mt:2},children:[(0,n.jsxs)(p.A,{variant:"contained",component:"label",fullWidth:!0,startIcon:(0,n.jsx)(y.A,{}),disabled:z,sx:{bgcolor:"primary.main","&:hover":{bgcolor:"primary.dark"},py:{xs:1,sm:1.5},borderRadius:2,textTransform:"none",fontSize:"0.875rem",fontWeight:500},children:["Загрузить фото",(0,n.jsx)("input",{type:"file",hidden:!0,accept:"image/*",onChange:e=>{let i=e.target.files[0];if(i&&i.size>5242880)return void T({open:!0,message:"Файл слишком большой (макс. 5MB)",severity:"warning"});w(e=>({...e,photo:i}))}})]}),o.photo&&(0,n.jsxs)(h.A,{sx:{display:"flex",alignItems:"center",mt:2,border:"1px solid #e0e0e0",borderRadius:2,p:{xs:1,sm:1.5},bgcolor:"#fafafa",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)"},children:[(0,n.jsx)(h.A,{sx:{position:"relative",width:{xs:80,sm:100},height:{xs:80,sm:100},borderRadius:1,overflow:"hidden",mr:2},children:(0,n.jsx)(a(),{src:URL.createObjectURL(o.photo),alt:"Preview",fill:!0,style:{objectFit:"cover"},unoptimized:!0})}),(0,n.jsxs)(h.A,{sx:{flexGrow:1},children:[(0,n.jsx)(x.A,{variant:"body1",sx:{fontWeight:500},children:o.photo.name}),(0,n.jsxs)(x.A,{variant:"caption",color:"text.secondary",children:["Размер: ",(o.photo.size/1048576).toFixed(2)," MB"]})]}),(0,n.jsx)(g.A,{onClick:()=>{o.photo&&URL.revokeObjectURL(URL.createObjectURL(o.photo)),w(e=>({...e,photo:null}))},size:"small",sx:{color:"error.main","&:hover":{bgcolor:"rgba(255, 0, 0, 0.1)"}},children:(0,n.jsx)(b.A,{fontSize:"small"})})]})]}),(0,n.jsx)(h.A,{sx:{my:2},children:(0,n.jsxs)(x.A,{variant:"caption",children:["Отправляя данные вы соглашаетесь с"," ",(0,n.jsx)(v.A,{href:"/politika-konfidenczialnosti",onClick:i,children:(0,n.jsx)(u.A,{variant:"text",children:"политикой конфиденциальности"})})]})}),(0,n.jsxs)(h.A,{sx:{mt:3,display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"flex-end",gap:2},children:[(0,n.jsx)(p.A,{onClick:i,fullWidth:!0,disabled:z,sx:{py:{xs:1,sm:1.5}},children:"Отмена"}),(0,n.jsx)(p.A,{type:"submit",variant:"contained",fullWidth:!0,disabled:z,endIcon:z&&(0,n.jsx)(A.A,{size:20}),sx:{py:{xs:1,sm:1.5}},children:z?"Отправка...":"Отправить"})]})]})]})})}),(0,n.jsx)(j.A,{open:S.open,autoHideDuration:6e3,onClose:()=>T({...S,open:!1}),children:(0,n.jsx)(f.A,{severity:S.severity,children:S.message})})]})};r()}catch(e){r(e)}})},81160:(e,i,t)=>{"use strict";t.d(i,{BP:()=>o,Di:()=>l,GG:()=>h,Qt:()=>d,Sv:()=>g,VX:()=>A,Vr:()=>c,Xi:()=>s,ar:()=>p,bs:()=>m,dO:()=>u,u5:()=>j,xq:()=>x,zS:()=>a,zT:()=>n});var r=t(60143);let n=(0,r.gql)`
query Header{
  header {
    title,
    menu {
      title,
      url,
      order,
      id
    },
    schedule,
    phone
    email
    logo {
      caption
      alternativeText
      url
    }
    emailCaption
    phoneCaption
    telegramLink
    telegramCaption
  }
  serviceCategories {
    title
    slug
    documentId
    services (pagination:  {
       limit: 5
    }) {
      title
      slug
      documentId
    }
  }
}
`,s=(0,r.gql)`
query HomePage{
  homePage {
    sections{
      ... on ComponentBannerHeroBanner {
        id
        title
        description
        animatedText
        bulletPoints {
          text
          id
          highlight
          icon
        }
        backgroundImage {
          formats
          url
          caption
        }
      }
      ... on ComponentSectionsAdvantages{
        title
        id
        card {
          title
          id
          icon
          description
        }
      }
      ... on ComponentSectionsMaster {
        id
        title
        items {
          id
          description
          icon
        }
        titleBlock
        descriptionBlock
        buttonsGroup {
          buttonText
          buttonLink
        }
      }
    }
    seo {
      id
      metaTitle
      metaDescription
      metaRobots
      keywords
      canonicalURL
      shareImage {
        url
      }
    }
  }
  services(filters: { popular: { eq: true }}, pagination: { limit: 12 }){
    title
    slug
    image {
      formats
    }
    discount
    discountAmount
    popular
    service_category {
      title
      slug
    } 
  }
  calculateWindow {
    title
    windowTypes {
      openings
      name
      image {
        url
      }
      id
    }
    repairType {
      price
      name
      id
    }
  }
  portfolioItems {
    title
    workDescription
    address
    slug
    services {
      title
    }
    minImage {
      url
      formats
    }
    documentId
  }
}
`,o=(0,r.gql)`
query PrivacyPolicyPage {
  privacyPolicyPage {
    title
    slug
    description
    seo {
      canonicalURL
      id
      keywords
      metaDescription
      metaRobots
      metaTitle
      shareImage {
        url
      }
    }
  }
}
`,a=(0,r.gql)`
query Footer{
  header {
    title
    telegramLink
    telegramCaption
    schedule
    phoneCaption
    phone
    logo {
      url
      caption
    }
    emailCaption
    email
    menu {
      id
      order
      title
      url
    }
  }
  serviceCategories {
    title
    slug
    documentId
  }
}
`,l=(0,r.gql)`
query ServicesPrice{
  serviceCategories {
    title
    slug
    services {
      title
      description
      slug
      price
      discount
      discountAmount
    }
  }
}
`,c=(0,r.gql)`
query ServicePage {
  servicePage {
    title
    description
    seo {
      metaTitle
      metaDescription
      id
      keywords
      metaRobots
      shareImage {
        url
      }
      canonicalURL
    }
    service_categories {
      title
      slug
      description
      services {
        title
        description
        slug
        image {
          url
          formats
        }
        price
        discount
        discountAmount
      }
        image {
        url
        formats
      }
    }
  }
}
`,d=(0,r.gql)`
query ServiceCategory($slug: String!) {
  serviceCategories(filters: { slug: { eq: $slug } }) {
    title
    slug
    description
    services {
      title
      description
      slug
      price
      discount
      discountAmount
    }
    seo {
      metaTitle
      metaDescription
      id
      keywords
      metaRobots
      shareImage {
        url
      }
      canonicalURL
    }
  }
  calculateWindow {
    title
    windowTypes {
      openings
      name
      image {
        url
      }
      id
    }
    repairType {
      price
      name
      id
    }
  }
  portfolioItems {
    documentId
    title
    slug
    address
    minImage {
      url
    }
    workDescription
  }
}
`,h=(0,r.gql)`
query Discounts {
  discounts {
    title
    shortDescription
    documentId
    discountAmount
    active
    slug
    image {
      url
      formats
    }
  }
}
`,x=(0,r.gql)`
query AboutPage {
  aboutPage {
  seo {
      shareImage {
        url
      }
      metaTitle
      metaRobots
      metaDescription
      keywords
      id
      canonicalURL
    }
    documentId
    title
    description
    textBtB
    textBtC
    workTypesBtC {
      id
      text
      description
    }
    workTypesBtB {
      id
      text
      description
    }
    slug
  }
}
`,m=(0,r.gql)`
query PortfolioPage {
  portfolioPage {
    title
    description
    portfolio_items {
      title
      slug
      minImage {
        url
        formats
      }
      documentId
      address
        workDescription
    }
    seo {
      shareImage {
        url
      }
      metaTitle
      metaRobots
      metaDescription
      keywords
      canonicalURL
    }
  }
}
`,p=(0,r.gql)`
query ContactPage {
  contactPage {
    title
    description
    phone
    email
    address
    dataIP
    schedule
    seo {
      metaTitle
      metaDescription
      id
      keywords
      metaRobots
      shareImage {
        url
      }
      canonicalURL
    }
    additionalBlock {
      title
      id
      description
    }
  }
}
`,g=(0,r.gql)`
query FaqPage {
  faqPage {
    title
    description
    mainBlock {
      id
      title
      answers {
        id
        title
        answer
      }
    }
    seo {
      metaTitle
      metaDescription
      id
      keywords
      metaRobots
      shareImage {
        url
      }
      canonicalURL
    }
  }
}
`,u=(0,r.gql)`
query Employees {
  employees {
    documentId
    name
    position
    workExperienceAt
    photo {
      formats
    }
  }
}
`,A=(0,r.gql)`
query AkciiPage {
  akciiPage {
    seo {
      shareImage {
        url
      }
      metaTitle
      metaRobots
      metaDescription
      keywords
      id
      canonicalURL
    }
    title
    documentId
    description
    discounts {
      title
      shortDescription
      image {
        url
        formats
      }
      documentId
      discountAmount
      active
      slug
    }
  }
}
`,j=(0,r.gql)`
query GlobalSetting {
  globalSetting {
    isPriceNoticeActive
    priceNotice
  }
}
`},98829:(e,i,t)=>{"use strict";t.a(e,async(e,r)=>{try{t.d(i,{A:()=>g});var n=t(8732),s=t(24459),o=t(67379),a=t(7676),l=t(29623),c=t(95335),d=t(51789),h=t(90061),x=t(46421),m=t(82015),p=e([d,h,x,s,o,a,l,c]);[d,h,x,s,o,a,l,c]=p.then?(await p)():p;let g=({data:e})=>{let[i,t]=(0,m.useState)(!1);return(0,n.jsxs)(d.A,{sx:{position:"fixed",bottom:16,right:16,display:"flex",flexDirection:"column",alignItems:"center",gap:1,zIndex:2},children:[(0,n.jsx)(h.A,{in:i,children:(0,n.jsx)(x.A,{color:"secondary",size:"small","aria-label":"Отправить email",href:`mailto:${e?.email}`,children:(0,n.jsx)(s.A,{})})}),(0,n.jsx)(h.A,{in:i,children:(0,n.jsx)(x.A,{color:"secondary",size:"small","aria-label":"Позвонить",href:`tel:${e?.phone}`,children:(0,n.jsx)(o.A,{})})}),(0,n.jsx)(h.A,{in:i,children:(0,n.jsx)(x.A,{color:"secondary",size:"small","aria-label":"Написать в Telegram",href:e?.telegramLink,target:"_blank",children:(0,n.jsx)(a.A,{})})}),(0,n.jsx)(x.A,{size:"large",color:"primary","aria-label":"Связаться с нами",variant:"circular",onClick:()=>{t(!i)},children:i?(0,n.jsx)(l.A,{}):(0,n.jsx)(c.A,{})})]})};r()}catch(e){r(e)}})}};