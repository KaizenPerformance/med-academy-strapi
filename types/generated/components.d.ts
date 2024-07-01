import type { Schema, Attribute } from '@strapi/strapi';

export interface DestaquesCursoCourseHighlights extends Schema.Component {
  collectionName: 'components_destaques_curso_course_highlights';
  info: {
    displayName: 'courseHighlights';
  };
  attributes: {
    texto: Attribute.String & Attribute.Required;
  };
}

export interface LandingPageCardAboutUs extends Schema.Component {
  collectionName: 'components_landing_page_card_aboutuses';
  info: {
    displayName: 'cardAboutUs';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 155;
      }>;
    image: Attribute.Media & Attribute.Required;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface LandingPageFaq extends Schema.Component {
  collectionName: 'components_landing_page_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'apps';
    description: '';
  };
  attributes: {
    question: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 155;
      }>;
    response: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 455;
      }>;
  };
}

export interface LandingPageHighLights extends Schema.Component {
  collectionName: 'components_landing_page_high_lights';
  info: {
    displayName: 'highLights';
    icon: 'apps';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 115;
      }>;
  };
}

export interface LandingPageUserTestmonials extends Schema.Component {
  collectionName: 'components_landing_page_user_testmonials';
  info: {
    displayName: 'userTestmonials';
    icon: 'apps';
    description: '';
  };
  attributes: {
    avatar: Attribute.Media & Attribute.Required;
    name: Attribute.String & Attribute.Required;
    occupation: Attribute.String & Attribute.Required;
    testmonial: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'destaques-curso.course-highlights': DestaquesCursoCourseHighlights;
      'landing-page.card-about-us': LandingPageCardAboutUs;
      'landing-page.faq': LandingPageFaq;
      'landing-page.high-lights': LandingPageHighLights;
      'landing-page.user-testmonials': LandingPageUserTestmonials;
    }
  }
}
