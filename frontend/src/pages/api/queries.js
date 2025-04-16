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
    } 
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