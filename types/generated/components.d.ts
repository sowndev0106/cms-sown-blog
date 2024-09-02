import type { Schema, Attribute } from '@strapi/strapi';

export interface TagTag extends Schema.Component {
  collectionName: 'components_tag_tags';
  info: {
    displayName: 'tag';
    icon: 'tag';
  };
  attributes: {
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'tag.tag': TagTag;
    }
  }
}
