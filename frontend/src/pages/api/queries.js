import { gql } from "@apollo/client";

// Данные Header
export const GET_HEADER = gql`
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
`

export const GET_HOME_PAGE = gql`
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
`

export const GET_PRIVACY_POLICY_PAGE = gql`
query PrivacyPolicy{
  privacyPolicyPage {
    title
    description
    slug
  }
}
`

export const GET_FOOTER = gql`
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
`

export const GET_SERVICES_TABLE = gql`
query ServicesPrice{
  serviceCategories {
    title
    slug
    services {
      title
      slug
      price
    }
  }
}
`

export const GET_SERVICE_PAGE = gql`
query ServicePage {
  servicePage {
    title
    description
    service_categories {
      title
      slug
      description
      services {
        title
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
`

export const GET_SERVICE_CATEGORY = gql`
query ServiceCategory($slug: String!) {
  serviceCategories(filters: { slug: { eq: $slug } }) {
    title
    slug
    description
    services {
      title
      slug
      price
      discount
      discountAmount
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
`

export const GET_DISCOUNTS = gql`
query Discounts {
  discounts {
    title
    shortDescription
    documentId
    discountAmount
    active
    image {
      url
      formats
    }
  }
}
`

export const GET_ABOUT_PAGE = gql`
query AboutPage {
  aboutPage {
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
`

export const GET_PORTFOLIO_ITEMS = gql`
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
`

export const GET_CONTACT_PAGE = gql`
query ContactPage {
  contactPage {
    title
    description
    phone
    email
    address
    dataIP
    schedule
    yandexMapsUrl
    additionalBlock {
      title
      id
      description
    }
  }
}
`