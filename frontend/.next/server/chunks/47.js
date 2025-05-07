exports.id=47,exports.ids=[47],exports.modules={805:(e,t,i)=>{"use strict";i.a(e,async(e,r)=>{try{i.d(t,{A:()=>C});var n=i(8732),o=i(2015),s=i(6761),a=i.n(s),l=i(3345),c=i(7495),d=i(4327),h=i(1789),x=i(6229),m=i(3441),p=i(6015),g=i(6585),u=i(6883),A=i(4995),j=i(5597),f=i(3365),y=i(6751),v=i(9623),b=i(3664),w=e([l,c,d,h,x,m,p,y,g,v,u,A,j,f]);[l,c,d,h,x,m,p,y,g,v,u,A,j,f]=w.then?(await w)():w;let C=({open:e,onClose:t,formCalculateData:i={},resetForm:r})=>{let[s,w]=(0,o.useState)({name:"",phone:"",description:"",photo:null}),[C,k]=(0,o.useState)({}),[z,S]=(0,o.useState)(!1),[I,W]=(0,o.useState)({open:!1,message:"",severity:"success"}),[T,R]=(0,o.useState)(null),q=e=>{let{name:t,value:i}=e.target;w(e=>({...e,[t]:i}))},P=()=>{let e={};return s.name||(e.name="Введите имя"),s.phone||(e.phone="Введите телефон"),k(e),0===Object.keys(e).length},D=async e=>{if(e.preventDefault(),P()){S(!0);try{let e=new FormData;e.append("chat_id","-4786257873");let t=`📌 Новая заявка:

👤 Имя: ${s.name}
📞 Телефон: ${s.phone}
📝 Описание: ${s.description||"не указано"}`;if(i&&!0===i.agree){t+=`

Данные из калькулятора:`;let e=i.repairTypes?i.repairTypes.join(", "):"не выбрано";t+=`

Вид ремонта: ${e}`;let r="не заполнено";if(i.windowMeasurements){let e=[];for(let[t,r]of Object.entries(i.windowMeasurements))r.width&&r.height&&e.push(`${t}: ${r.width}x${r.height} мм`);r=e.join("; ")}t+=`

Размеры окна: ${r}`;let n="не выбрано";i.openedWindows&&(n=i.openedWindows.map(e=>`${e.windowType}: ${e.openings.join(", ")} (${e.count} шт.)`).join("; ")),t+=`

Открытые окна: ${n}`;let o="не указано";"in_city"===i.repairLocation?o="в городе":i.distance&&(o=`${i.distance}км от города`),t+=`

Находится: ${o}`}if(s.photo){if(e.append("photo",s.photo),e.append("caption",t),!(await fetch("https://api.telegram.org/bot7990508257:AAGug1yARMViw2lIwaKLT5nORcfTWmDGQIA/sendPhoto",{method:"POST",body:e})).ok)throw Error("Ошибка отправки фото в Telegram")}else if(!(await fetch("https://api.telegram.org/bot7990508257:AAGug1yARMViw2lIwaKLT5nORcfTWmDGQIA/sendMessage",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:"-4786257873",text:t})})).ok)throw Error("Ошибка отправки сообщения в Telegram");let r={name:s.name,phone:s.phone,text:t};if(!(await fetch("https://api.okna-globus.ru/api/request-services",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:r})})).ok)throw Error("Ошибка при отправке");L()}catch(e){W({open:!0,message:`Ошибка отправки: ${e?.message||"Неизвестная ошибка"}`,severity:"error"})}finally{S(!1)}}},L=()=>{W({open:!0,message:"Заявка успешно отправлена!",severity:"success"}),w({name:"",phone:"",description:"",photo:null}),R(null),r&&r(),t()};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.A,{open:e,onClose:t,closeAfterTransition:!0,slots:{backdrop:c.A},children:(0,n.jsx)(d.A,{in:e,children:(0,n.jsxs)(h.A,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"90%",sm:500},maxHeight:"90vh",overflowY:"auto",bgcolor:"background.paper",boxShadow:24,p:{xs:2,sm:4},borderRadius:2},children:[(0,n.jsx)(x.A,{variant:"h6",component:"h2",gutterBottom:!0,children:"Заказать обратный звонок"}),(0,n.jsxs)(h.A,{component:"form",onSubmit:D,sx:{mt:2},children:[(0,n.jsx)(m.A,{fullWidth:!0,label:"Имя*",name:"name",value:s.name,onChange:q,error:!!C.name,helperText:C.name,margin:"normal",disabled:z,size:"small"}),(0,n.jsx)(m.A,{fullWidth:!0,label:"Телефон*",name:"phone",value:s.phone,onChange:q,error:!!C.phone,helperText:C.phone,margin:"normal",disabled:z,size:"small"}),(0,n.jsx)(m.A,{fullWidth:!0,label:"Описание",name:"description",value:s.description,onChange:q,margin:"normal",multiline:!0,rows:4,disabled:z,size:"small"}),(0,n.jsxs)(h.A,{sx:{position:"relative",mt:2},children:[(0,n.jsxs)(p.A,{variant:"contained",component:"label",fullWidth:!0,startIcon:(0,n.jsx)(y.A,{}),disabled:z,sx:{bgcolor:"primary.main","&:hover":{bgcolor:"primary.dark"},py:{xs:1,sm:1.5},borderRadius:2,textTransform:"none",fontSize:"0.875rem",fontWeight:500},children:["Загрузить фото",(0,n.jsx)("input",{type:"file",hidden:!0,accept:"image/*",onChange:e=>{let t=e.target.files[0];if(t&&t.size>5242880)return void W({open:!0,message:"Файл слишком большой (макс. 5MB)",severity:"warning"});w(e=>({...e,photo:t}))}})]}),s.photo&&(0,n.jsxs)(h.A,{sx:{display:"flex",alignItems:"center",mt:2,border:"1px solid #e0e0e0",borderRadius:2,p:{xs:1,sm:1.5},bgcolor:"#fafafa",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)"},children:[(0,n.jsx)(h.A,{sx:{position:"relative",width:{xs:80,sm:100},height:{xs:80,sm:100},borderRadius:1,overflow:"hidden",mr:2},children:(0,n.jsx)(a(),{src:URL.createObjectURL(s.photo),alt:"Preview",fill:!0,style:{objectFit:"cover"},unoptimized:!0})}),(0,n.jsxs)(h.A,{sx:{flexGrow:1},children:[(0,n.jsx)(x.A,{variant:"body1",sx:{fontWeight:500},children:s.photo.name}),(0,n.jsxs)(x.A,{variant:"caption",color:"text.secondary",children:["Размер: ",(s.photo.size/1048576).toFixed(2)," MB"]})]}),(0,n.jsx)(g.A,{onClick:()=>{s.photo&&URL.revokeObjectURL(URL.createObjectURL(s.photo)),w(e=>({...e,photo:null}))},size:"small",sx:{color:"error.main","&:hover":{bgcolor:"rgba(255, 0, 0, 0.1)"}},children:(0,n.jsx)(v.A,{fontSize:"small"})})]})]}),(0,n.jsx)(h.A,{sx:{my:2},children:(0,n.jsxs)(x.A,{variant:"caption",children:["Отправляя данные вы соглашаетесь с"," ",(0,n.jsx)(b.A,{href:"/politika-konfidenczialnosti",onClick:t,children:(0,n.jsx)(u.A,{variant:"text",children:"политикой конфиденциальности"})})]})}),(0,n.jsxs)(h.A,{sx:{mt:3,display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"flex-end",gap:2},children:[(0,n.jsx)(p.A,{onClick:t,fullWidth:!0,disabled:z,sx:{py:{xs:1,sm:1.5}},children:"Отмена"}),(0,n.jsx)(p.A,{type:"submit",variant:"contained",fullWidth:!0,disabled:z,endIcon:z&&(0,n.jsx)(A.A,{size:20}),sx:{py:{xs:1,sm:1.5}},children:z?"Отправка...":"Отправить"})]})]})]})})}),(0,n.jsx)(j.A,{open:I.open,autoHideDuration:6e3,onClose:()=>W({...I,open:!1}),children:(0,n.jsx)(f.A,{severity:I.severity,children:I.message})})]})};r()}catch(e){r(e)}})},979:()=>{},1160:(e,t,i)=>{"use strict";i.d(t,{BP:()=>s,Di:()=>l,GG:()=>h,Qt:()=>d,Sv:()=>g,VX:()=>A,Vr:()=>c,Xi:()=>o,ar:()=>p,bs:()=>m,dO:()=>u,u5:()=>j,xq:()=>x,zS:()=>a,zT:()=>n});var r=i(143);let n=(0,r.gql)`
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
`,o=(0,r.gql)`
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
`,s=(0,r.gql)`
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
      services {
        title
        slug
        documentId
        service_category {
          documentId
          slug
        }
      }
        workDescription
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
`},2979:(e,t,i)=>{"use strict";i.d(t,{A:()=>n});var r=i(143);let n=new r.ApolloClient({cache:new r.InMemoryCache,link:new r.HttpLink({uri:"https://api.okna-globus.ru/graphql"})})},3664:(e,t,i)=>{"use strict";i.d(t,{A:()=>s});var r=i(8732),n=i(9918),o=i.n(n);let s=(0,i(2015).forwardRef)(function({href:e,as:t,passHref:i=!0,children:n,...s},a){if(e)return(0,r.jsx)(o(),{href:e,as:t,passHref:i,ref:a,...s,children:n})})},4843:(e,t,i)=>{"use strict";i.a(e,async(e,r)=>{try{i.d(t,{A:()=>a});var n=i(8732),o=i(6701),s=e([o]);o=(s.then?(await s)():s)[0];let a=e=>(0,n.jsx)(o.A,{viewBox:"0 0 512 520",component:"svg",...e,children:(0,n.jsxs)("g",{transform:"translate(0.000000,520.000000) scale(0.100000,-0.100000)",fill:"currentColor",stroke:"none",children:[(0,n.jsx)("path",{d:"M2015 5026 c-41 -18 -83 -69 -90 -109 -4 -18 -5 -118 -3 -224 3 -210   5 -218 72 -267 39 -29 133 -29 172 0 68 51 69 53 69 294 0 205 -1 220 -21 246   -11 15 -32 37 -46 47 -33 25 -113 32 -153 13z"}),(0,n.jsx)("path",{d:"M2972 5024 c-18 -10 -45 -33 -60 -52 -27 -35 -27 -36 -30 -238 -4   -229 1 -253 64 -300 31 -24 47 -29 95 -29 62 0 94 17 133 69 20 26 21 41 21   246 0 205 -1 220 -21 246 -50 67 -135 92 -202 58z"}),(0,n.jsx)("path",{d:"M948 4870 c-72 -12 -145 -38 -233 -83 -61 -31 -102 -63 -171 -132   -79 -79 -97 -103 -142 -195 -89 -181 -83 -48 -80 -1855 l3 -1590 23 -70 c46   -136 99 -223 197 -321 76 -77 105 -98 185 -137 181 -89 18 -82 1830 -82 1813   0 1650 -7 1830 82 79 39 110 62 185 138 76 75 99 106 138 185 89 180 82 17 82   1830 0 1812 7 1649 -82 1830 -39 80 -60 109 -137 185 -69 69 -110 101 -171   132 -146 75 -195 86 -410 90 -183 4 -191 3 -229 -19 -105 -61 -107 -211 -4   -273 28 -17 57 -21 208 -26 149 -5 183 -9 233 -28 109 -43 203 -138 249 -251   21 -52 23 -72 26 -367 l4 -313 -1922 0 -1921 0 3 313 c3 295 5 315 26 367 45   111 142 209 252 252 46 18 84 22 237 27 162 5 184 8 209 27 53 39 69 71 69   134 0 71 -21 105 -85 138 -41 20 -57 22 -200 21 -85 -1 -176 -5 -202 -9z   m3530 -2702 l-3 -1113 -23 -56 c-48 -116 -142 -208 -257 -251 l-60 -23 -1580   0 -1580 0 -55 23 c-113 46 -207 140 -252 249 l-23 58 -3 1113 -2 1112 1920 0   1920 0 -2 -1112z"}),(0,n.jsx)("path",{d:"M1855 2946 c-93 -40 -124 -168 -60 -245 53 -62 43 -61 599 -61 l506   0 -34 -52 c-125 -197 -271 -510 -351 -753 -105 -316 -145 -646 -89 -722 70   -93 192 -96 261 -6 23 31 27 48 35 151 22 311 129 641 326 1003 70 128 190   319 265 423 38 53 42 64 42 117 0 62 -17 94 -69 133 -27 21 -38 21 -714 23   -556 2 -693 0 -717 -11z"})]})});r()}catch(e){r(e)}})},6047:(e,t,i)=>{"use strict";i.a(e,async(e,r)=>{try{i.r(t),i.d(t,{default:()=>c});var n=i(8732);i(979);var o=i(143),s=i(2979),a=i(6925),l=e([a]);function c({Component:e,pageProps:t}){return(0,n.jsx)(o.ApolloProvider,{client:s.A,children:(0,n.jsx)(a.A,{children:(0,n.jsx)(e,{...t})})})}a=(l.then?(await l)():l)[0],r()}catch(e){r(e)}})},6925:(e,t,i)=>{"use strict";i.a(e,async(e,r)=>{try{i.d(t,{A:()=>h});var n=i(8732),o=i(7488),s=i(1227),a=i(7766),l=i(9364),c=e([a,l,o,s]);[a,l,o,s]=c.then?(await c)():c;let d=(0,o.A)({typography:{fontSize:14,h1:{fontSize:"2.875rem",lineHeight:"3.25rem",fontWeight:900},h2:{fontSize:"2.25rem",lineHeight:"2.625rem",fontWeight:700},h3:{fontSize:"1.5rem",lineHeight:"1.75rem",fontWeight:700},h4:{fontSize:"1.125rem",lineHeight:"1.3rem",fontWeight:700},h5:{fontSize:"1rem",lineHeight:"1.3rem",fontWeight:400},h6:{fontSize:".75rem",lineHeight:".7rem"}}}),h=({children:e})=>(0,n.jsxs)(s.A,{theme:d,children:[(0,n.jsx)(a.A,{}),(0,n.jsx)("section",{children:e}),(0,n.jsx)(l.A,{})]});r()}catch(e){r(e)}})},7766:(e,t,i)=>{"use strict";i.a(e,async(e,r)=>{try{i.d(t,{A:()=>B});var n=i(8732),o=i(2479),s=i(8861),a=i(3978),l=i(1789),c=i(3365),d=i(7767),h=i(1117),x=i(6229),m=i(6015),p=i(5733),g=i(4921),u=i(5171),A=i(9827),j=i(6585),f=i(9923),y=i(6883),v=i(237),b=i(7259),w=i(2477),C=i(2015),k=i(143),z=i(4928),S=i(5160),I=i(4459),W=i(9760),T=i(7676),R=i(9623),q=i(1160),P=i(4843),D=i(805),L=i(3664),M=e([P,D,o,s,a,l,c,d,h,x,m,z,p,g,u,A,S,j,f,I,y,W,T,v,R,b,w]);[P,D,o,s,a,l,c,d,h,x,m,z,p,g,u,A,S,j,f,I,y,W,T,v,R,b,w]=M.then?(await M)():M;let B=()=>{let{loading:e,data:t,error:i}=(0,k.useQuery)(q.zT),[r,M]=(0,C.useState)(!1),[B,$]=(0,C.useState)(null),G=!!B,[H,U]=(0,C.useState)(!1);if(e)return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.A,{position:"static",color:"inherit",elevation:0,sx:{py:1,borderBottom:"1px solid",borderColor:"divider",backgroundColor:"grey.50",boxShadow:"0px 5px 5px rgba(0, 0, 0, 0.2)"},children:(0,n.jsxs)(s.A,{sx:{display:"flex",justifyContent:"space-around"},children:[(0,n.jsx)(a.A,{variant:"circular",width:40,height:40}),(0,n.jsx)(a.A,{height:30,sx:{ml:2,width:{xs:"100px",sm:"200px"}}}),(0,n.jsx)(a.A,{width:"100%",height:30,sx:{display:{xs:"none",md:"flex"},maxWidth:600}}),(0,n.jsx)(a.A,{variant:"circular",width:30,height:30,sx:{display:{md:"none",xs:"flex"},ml:"auto"}})]})})});if(i)return(0,n.jsx)(s.A,{sx:{my:2},children:(0,n.jsx)(l.A,{component:"header",children:(0,n.jsxs)(c.A,{variant:"filled",severity:"error",children:[(0,n.jsx)(d.A,{children:"Ошибка"}),i?.message]})})});let O=function(e){let t=e.match(/.*?\d(?=\D*$)/)?.[0]?.length||0;return{timeRange:e.substring(0,t+1).trim(),note:e.substring(t+1).trim()}}(t?.header?.schedule),E=()=>{M(!r)},F=e=>{$(e.currentTarget)},_=()=>{$(null)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(D.A,{open:H,onClose:()=>U(!1)}),(0,n.jsx)(o.A,{position:"static",color:"inherit",elevation:0,sx:{py:1,borderBottom:"1px solid",borderColor:"divider",backgroundColor:"grey.50",boxShadow:"0px 5px 5px rgba(0, 0, 0, 0.2)",width:"100%"},children:(0,n.jsx)(s.A,{children:(0,n.jsxs)(h.A,{disableGutters:!0,sx:{justifyContent:"space-between"},children:[(0,n.jsx)(L.A,{href:"/",children:(0,n.jsxs)(l.A,{sx:{display:"flex",alignItems:"center",mr:4,justifyContent:"space-around",textDecoration:"none","&:hover":{cursor:"pointer"}},children:[(0,n.jsx)(l.A,{component:"img",loading:"lazy",src:"https://api.okna-globus.ru"+t?.header?.logo?.url,alt:t?.header?.logo?.caption,sx:{height:40,width:"auto",mr:2}}),(0,n.jsx)(x.A,{variant:"h5",component:"div",sx:{fontWeight:700,color:"text.primary"},children:t?.header?.title})]})}),(0,n.jsxs)(l.A,{sx:{flexGrow:1,display:{xs:"none",md:"flex"}},children:[t?.header?.menu.map(e=>"/uslugi"===e.url?(0,n.jsxs)(l.A,{children:[(0,n.jsx)(m.A,{onClick:F,variant:"contained",color:"error",sx:{mx:1,fontWeight:500,fontSize:{xs:"0.8rem",lg:"0.875rem"},"&:hover":{color:"white"}},startIcon:(0,n.jsx)(z.A,{}),children:e.title},e.id),(0,n.jsx)(p.A,{disableScrollLock:!0,anchorEl:B,open:G,onClose:_,slotProps:{paper:{sx:{width:"100%",maxWidth:"500px",borderRadius:"8px",mt:1,boxShadow:"0px 4px 20px rgba(0, 0, 0, 0.15)","& .MuiPaper-root":{overflow:"hidden !important",pr:0},"& .MuiMenu-list":{py:0}}}},children:(0,n.jsxs)(g.A,{sx:{display:"flex",width:"100%",flexDirection:"column"},children:[t?.serviceCategories?.slice(0,4).map(e=>(0,n.jsx)(L.A,{href:"/uslugi/"+e?.slug,children:(0,n.jsxs)(u.A,{onClick:_,sx:{px:2,py:1.5,borderRadius:1,"&:hover":{bgcolor:"action.hover"}},children:[(0,n.jsx)(A.A,{primary:e?.title.length>=48?e?.title.substring(0,46)+"...":e?.title,primaryTypographyProps:{fontWeight:500}}),(0,n.jsx)(S.A,{color:"action"})]})},e?.documentId)),(0,n.jsx)(L.A,{href:"/uslugi",children:(0,n.jsx)(m.A,{variant:"contained",onClick:_,fullWidth:!0,size:"medium",children:"Полный список услуг"})})]})})]},e.id):(0,n.jsx)(L.A,{href:e.url,children:(0,n.jsx)(m.A,{variant:"text",color:"text.primary",sx:{mx:1,fontWeight:500,fontSize:{xs:"0.8rem",lg:"0.875rem"},"&:hover":{color:"primary.main"}},children:e.title})},e.id)),(0,n.jsx)(m.A,{variant:"contained",color:"info",onClick:()=>{U(!H)},sx:{fontWeight:500,fontSize:{xs:"0.8rem",lg:"0.875rem"}},children:"Перезвоните мне"})]}),(0,n.jsx)(j.A,{color:"inherit","aria-label":"open menu",edge:"end",onClick:E,sx:{display:{xs:"flex",md:"none"},color:"text.primary"},children:(0,n.jsx)(z.A,{})})]})})}),(0,n.jsx)(s.A,{sx:{boxShadow:"0 10px 15px -5px rgba(0,0,0,0.3)",py:2,display:{xs:"none",md:"block"},position:"relative",zIndex:2},children:(0,n.jsxs)(f.A,{container:!0,spacing:2,alignItems:"center",sx:{"& .MuiSvgIcon-root":{fontSize:"2.5rem",color:"error.main",mr:1},"& .MuiBox-root":{display:"flex",alignItems:"center",justifyContent:"center"},"& .MuiLink-root":{display:"flex",flexDirection:"column"}},children:[(0,n.jsx)(f.A,{size:{md:3},children:(0,n.jsxs)(l.A,{children:[(0,n.jsx)(P.A,{}),(0,n.jsxs)(l.A,{sx:{flexDirection:"column"},children:[(0,n.jsx)(x.A,{fontWeight:"bold",variant:"h4",children:O.timeRange}),(0,n.jsx)(x.A,{variant:"caption",children:O.note})]})]})}),(0,n.jsx)(f.A,{size:{md:3},children:(0,n.jsxs)(l.A,{children:[(0,n.jsx)(I.A,{}),(0,n.jsxs)(y.A,{href:`mailto:${t?.header?.email}`,children:[(0,n.jsx)(x.A,{fontWeight:"bold",children:t?.header?.email}),(0,n.jsx)(x.A,{variant:"overline",textAlign:"right",children:t?.header?.emailCaption})]})]})}),(0,n.jsx)(f.A,{size:{md:3},children:(0,n.jsxs)(l.A,{children:[(0,n.jsx)(W.A,{}),(0,n.jsxs)(y.A,{href:`tel:${t?.header?.phone}`,children:[(0,n.jsx)(x.A,{fontWeight:"bold",children:t?.header?.phone}),(0,n.jsx)(x.A,{variant:"overline",textAlign:"right",children:t?.header?.phoneCaption})]})]})}),(0,n.jsx)(f.A,{size:{md:3},children:(0,n.jsxs)(l.A,{children:[(0,n.jsx)(T.A,{}),(0,n.jsxs)(y.A,{href:t?.header?.telegramLink,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(x.A,{fontSize:"1.2rem",fontWeight:"bold",children:"TELEGRAM"}),(0,n.jsx)(x.A,{variant:"overline",textAlign:"right",children:t?.header?.telegramCaption})]})]})})]})}),(0,n.jsxs)(v.Ay,{anchor:"right",open:r,onClose:E,PaperProps:{sx:{width:"80%",maxWidth:300}},children:[(0,n.jsx)(l.A,{sx:{p:2,display:"flex",justifyContent:"flex-end"},children:(0,n.jsx)(j.A,{onClick:E,children:(0,n.jsx)(R.A,{})})}),(0,n.jsxs)(b.A,{children:[t?.header?.menu.map(e=>(0,n.jsx)(w.Ay,{disablePadding:!0,sx:{borderBottom:"1px solid",borderColor:"divider"},children:(0,n.jsx)(L.A,{href:e.url,children:(0,n.jsx)(m.A,{fullWidth:!0,sx:{py:2,px:3,justifyContent:"flex-start",color:"text.primary","& :hover":{color:"primary.main",backgroundColor:"action.hover"}},onClick:E,children:e.title})})},e.id)),(0,n.jsxs)(w.Ay,{sx:{flexDirection:"column",alignItems:"flex-start",p:3},children:[(0,n.jsx)(y.A,{href:"tel:"+t?.header?.schedule,variant:"body1",fontWeight:600,gutterBottom:!0,underline:"hover",children:t?.header?.phone}),(0,n.jsx)(x.A,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:t?.header?.schedule}),(0,n.jsx)(y.A,{href:"mailto:"+t?.header?.email,color:"primary",underline:"hover",sx:{mt:1},children:t?.header?.email})]})]})]})]})};r()}catch(e){r(e)}})},9364:(e,t,i)=>{"use strict";i.a(e,async(e,r)=>{try{i.d(t,{A:()=>w});var n=i(8732),o=i(143),s=i(1789),a=i(8861),l=i(3978),c=i(3365),d=i(7767),h=i(9923),x=i(6229),m=i(4301),p=i(6883),g=i(29),u=i(4459),A=i(9760),j=i(7676),f=i(1160),y=i(4843),v=i(3664),b=e([y,s,a,l,c,d,h,x,g,m,p,u,A,j]);[y,s,a,l,c,d,h,x,g,m,p,u,A,j]=b.then?(await b)():b;let w=()=>{let{loading:e,data:t,error:i}=(0,o.useQuery)(f.zS);if(e)return(0,n.jsx)(s.A,{component:"footer",sx:{py:3,px:2,backgroundColor:"grey.50"},children:(0,n.jsxs)(a.A,{maxWidth:"lg",children:[(0,n.jsx)(l.A,{variant:"text",width:"20%",height:"2rem"}),(0,n.jsx)(l.A,{variant:"rounded",height:"4rem",sx:{my:1}}),(0,n.jsx)(l.A,{variant:"rounded",height:"4rem"})]})});if(i)return(0,n.jsx)(s.A,{component:"footer",sx:{py:3,px:2,backgroundColor:"grey.50"},children:(0,n.jsx)(a.A,{maxWidth:"lg",children:(0,n.jsxs)(c.A,{severity:"error",variant:"filled",sx:{mt:2},children:[(0,n.jsx)(d.A,{children:"Ошибка"}),i.message]})})});let r=function(e){let t=e.match(/.*?\d(?=\D*$)/)?.[0]?.length||0;return{timeRange:e.substring(0,t+1).trim(),note:e.substring(t+1).trim()}}(t?.header?.schedule);return(0,n.jsx)(s.A,{component:"footer",sx:{py:3,px:2,mt:2,backgroundColor:"grey.50"},children:(0,n.jsxs)(a.A,{maxWidth:"lg",children:[(0,n.jsx)(h.A,{container:!0,spacing:2,children:(0,n.jsx)(x.A,{variant:"body1",fontWeight:700,children:"Услуги"})}),(0,n.jsx)(h.A,{container:!0,spacing:2,children:t?.serviceCategories?.map(e=>(0,n.jsxs)(h.A,{size:{xs:12,md:4},sx:{display:"flex",alignItems:"center"},children:[(0,n.jsx)(g.A,{}),(0,n.jsx)(v.A,{href:"/uslugi/"+e?.slug,children:(0,n.jsx)(x.A,{sx:{color:"#000",textDecoration:"none",fontFamily:'"Roboto","Helvetica","Arial",sans-serif',"&:hover":{color:"primary.main",textDecoration:"underline"}},children:e?.title})})]},e?.documentId))}),(0,n.jsx)(m.A,{sx:{my:2}}),(0,n.jsxs)(h.A,{container:!0,spacing:1,sx:{"& .MuiSvgIcon-root":{width:"40px",height:"40px",color:"error.main"},"& .MuiTypography-root":{display:"block"},"& .MuiTypography-body1":{fontSize:{xs:"1.5rem",md:"1.15rem"},fontWeight:"700"},"& .MuiGrid-container":{justifyContent:"center",alignItems:"center"}},children:[(0,n.jsx)(h.A,{size:{xs:12,md:2},children:(0,n.jsx)(v.A,{href:"/",children:(0,n.jsxs)(h.A,{container:!0,spacing:0,sx:{"&:hover":{cursor:"pointer"}},children:[(0,n.jsx)(h.A,{size:{xs:5},sx:{display:"flex",justifyContent:"center"},children:(0,n.jsx)(s.A,{component:"img",src:"https://api.okna-globus.ru"+t?.header?.logo?.url,alt:t?.header?.logo?.caption,sx:{height:48,maxWidth:"100%"},loading:"lazy"})}),(0,n.jsx)(h.A,{size:{xs:5},children:(0,n.jsx)(x.A,{variant:"body1",children:t?.header?.title})})]})})}),(0,n.jsx)(h.A,{size:{xs:12,md:2},children:(0,n.jsxs)(h.A,{container:!0,spacing:1,children:[(0,n.jsx)(h.A,{size:{xs:3},children:(0,n.jsx)(y.A,{})}),(0,n.jsxs)(h.A,{children:[(0,n.jsx)(x.A,{variant:"caption",sx:{fontSize:"1rem",fontWeight:"700"},children:r.timeRange}),(0,n.jsx)(x.A,{variant:"caption",sx:{textAlign:{xs:"left",md:"right"},color:"text.secondary"},children:r.note})]})]})}),(0,n.jsx)(h.A,{size:{xs:12,md:3},children:(0,n.jsx)(p.A,{href:"mailto:"+t?.header?.email,children:(0,n.jsxs)(h.A,{container:!0,spacing:1,children:[(0,n.jsx)(h.A,{size:{xs:2},children:(0,n.jsx)(u.A,{})}),(0,n.jsxs)(h.A,{children:[(0,n.jsx)(x.A,{variant:"caption",sx:{fontSize:"1rem",fontWeight:"700"},children:t?.header?.email}),(0,n.jsx)(x.A,{variant:"caption",sx:{textAlign:{xs:"left",md:"right"},color:"text.secondary"},children:t?.header?.emailCaption})]})]})})}),(0,n.jsx)(h.A,{size:{xs:12,md:3},children:(0,n.jsx)(p.A,{href:"tel:"+t?.header?.phone,children:(0,n.jsxs)(h.A,{container:!0,spacing:1,children:[(0,n.jsx)(h.A,{size:{xs:2},children:(0,n.jsx)(A.A,{})}),(0,n.jsxs)(h.A,{children:[(0,n.jsx)(x.A,{variant:"caption",sx:{fontSize:"1rem",fontWeight:"700"},children:t?.header?.phone}),(0,n.jsx)(x.A,{variant:"caption",sx:{textAlign:{xs:"left",md:"right"},color:"text.secondary"},children:t?.header?.phoneCaption})]})]})})}),(0,n.jsx)(h.A,{size:{xs:12,md:2},children:(0,n.jsx)(p.A,{href:t?.header?.telegramLink,target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(h.A,{container:!0,spacing:1,children:[(0,n.jsx)(h.A,{size:{xs:3},children:(0,n.jsx)(j.A,{})}),(0,n.jsxs)(h.A,{children:[(0,n.jsx)(x.A,{variant:"caption",sx:{fontSize:"1rem",fontWeight:"700"},children:"TELEGRAM"}),(0,n.jsx)(x.A,{variant:"caption",sx:{textAlign:{xs:"left",md:"right"},color:"text.secondary"},children:t?.header?.telegramCaption})]})]})})})]}),(0,n.jsx)(h.A,{container:!0,sx:{mt:2,justifyContent:"center"},children:(0,n.jsx)(h.A,{children:(0,n.jsxs)(x.A,{children:["Copyright \xa9 ",new Date().getFullYear()]})})})]})})};r()}catch(e){r(e)}})}};