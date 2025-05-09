import type { Schema, Struct } from '@strapi/strapi';

export interface BannerHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_banner_hero_banners';
  info: {
    description: '';
    displayName: 'hero-banner';
  };
  attributes: {
    animatedText: Schema.Attribute.JSON;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bulletPoints: Schema.Attribute.Component<'shared.bullet-points', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface CalculateRepairType extends Struct.ComponentSchema {
  collectionName: 'components_calculate_repair_types';
  info: {
    displayName: 'RepairType';
  };
  attributes: {
    name: Schema.Attribute.String;
    price: Schema.Attribute.Integer;
  };
}

export interface CalculateWindowType extends Struct.ComponentSchema {
  collectionName: 'components_calculate_window_types';
  info: {
    displayName: 'windowType';
  };
  attributes: {
    basePrice: Schema.Attribute.Integer;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String;
    openings: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface HeaderMenu extends Struct.ComponentSchema {
  collectionName: 'components_header_menus';
  info: {
    displayName: 'menu';
    icon: 'apps';
  };
  attributes: {
    order: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_sections_advantages';
  info: {
    description: '';
    displayName: 'Advantages';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.advantage-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMaster extends Struct.ComponentSchema {
  collectionName: 'components_sections_masters';
  info: {
    description: '';
    displayName: 'master';
    icon: 'bell';
  };
  attributes: {
    descriptionBlock: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.master-card', true>;
    linkButton: Schema.Attribute.String;
    textButton: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleBlock: Schema.Attribute.String;
  };
}

export interface SharedAdvantageCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_advantage_cards';
  info: {
    description: '';
    displayName: 'advantage-card';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Schema.Attribute.DefaultTo<'\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u044F 5 \u043B\u0435\u0442'>;
    highlightColor: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<
      [
        'Discount',
        'CleaningServices',
        'SentimentSatisfiedAlt',
        'ShowChart',
        'VerifiedUser',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedBulletPoints extends Struct.ComponentSchema {
  collectionName: 'components_shared_bullet_points';
  info: {
    description: '';
    displayName: 'bulletPoints';
  };
  attributes: {
    highlight: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    icon: Schema.Attribute.Enumeration<['VerifiedUser', 'Alarm', 'ShowChart']>;
    text: Schema.Attribute.String;
  };
}

export interface SharedMasterCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_master_cards';
  info: {
    description: '';
    displayName: 'master-card';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<
      ['CheckCircleOutline', 'CheckCircle', 'Check', 'TaskAlt']
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.hero-banner': BannerHeroBanner;
      'calculate.repair-type': CalculateRepairType;
      'calculate.window-type': CalculateWindowType;
      'header.menu': HeaderMenu;
      'sections.advantages': SectionsAdvantages;
      'sections.master': SectionsMaster;
      'shared.advantage-card': SharedAdvantageCard;
      'shared.bullet-points': SharedBulletPoints;
      'shared.master-card': SharedMasterCard;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
