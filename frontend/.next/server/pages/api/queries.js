"use strict";(()=>{var e={};e.id=761,e.ids=[761],e.modules={3480:(e,t,i)=>{e.exports=i(5600)},5600:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6435:(e,t)=>{Object.defineProperty(t,"M",{enumerable:!0,get:function(){return function e(t,i){return i in t?t[i]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,i)):"function"==typeof t&&"default"===i?t:void 0}}})},8667:(e,t)=>{Object.defineProperty(t,"A",{enumerable:!0,get:function(){return i}});var i=function(e){return e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE",e.IMAGE="IMAGE",e}({})},9891:(e,t,i)=>{i.r(t),i.d(t,{config:()=>f,default:()=>_,routeModule:()=>v});var o={};i.r(o),i.d(o,{GET_ABOUT_PAGE:()=>E,GET_AKCII_PAGE:()=>q,GET_CONTACT_PAGE:()=>I,GET_DISCOUNTS:()=>P,GET_EMPLOYEES:()=>y,GET_FAQ_PAGE:()=>T,GET_FOOTER:()=>d,GET_HEADER:()=>l,GET_HOME_PAGE:()=>c,GET_PORTFOLIO_ITEMS:()=>A,GET_PRIVACY_POLICY_PAGE:()=>u,GET_SERVICES_TABLE:()=>m,GET_SERVICE_CATEGORY:()=>p,GET_SERVICE_PAGE:()=>g});var r=i(3480),n=i(8667),s=i(6435);let a=require("@apollo/client"),l=(0,a.gql)`
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
`,c=(0,a.gql)`
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
`,u=(0,a.gql)`
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
`,d=(0,a.gql)`
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
`,m=(0,a.gql)`
query ServicesPrice{
  serviceCategories {
    title
    slug
    services {
      title
      description
      slug
      price
    }
  }
}
`,g=(0,a.gql)`
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
`,p=(0,a.gql)`
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
`,P=(0,a.gql)`
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
`,E=(0,a.gql)`
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
`,A=(0,a.gql)`
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
`,I=(0,a.gql)`
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
`,T=(0,a.gql)`
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
  }
}
`,y=(0,a.gql)`
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
`,q=(0,a.gql)`
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
`,_=(0,s.M)(o,"default"),f=(0,s.M)(o,"config"),v=new r.PagesAPIRouteModule({definition:{kind:n.A.PAGES_API,page:"/api/queries",pathname:"/api/queries",bundlePath:"",filename:""},userland:o})}};var t=require("../../webpack-api-runtime.js");t.C(e);var i=t(t.s=9891);module.exports=i})();