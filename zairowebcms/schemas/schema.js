// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      title: "Navigation Item",
      name: "navigationItem",
      type: "object",
      fields: [
        {
          name: "linkText",
          type: "string",
          title: "Link Text"
        },
        {
          name: "navigationItemLink",
          type: "link",
          title: "Navigation Item Link"
        },
      ]
    },
    {
      name: "link",
      type: "object",
      title: "Link",
      fields: [
        {
          name: "externalContent",
          title: "Content is from an external source",
          type: "boolean"
        },
        {
          name: "linkUrl",
          title: "Link URL",
          description:
            "Use this field to add a link to the source. For external links use full url e.g. ‘https://google.com/’. For internal links use the page path e.g. ‘companies’",
          type: "string"
        }
      ]
    },
    {
      title: "Homepage",
      name: "homepage",
      type: "document",
      fields: [
        {
          title: "Metadata Title",
          name: "metadataTitle",
          type: "string",
        },
        {
          title: "Metadata Description",
          name: "metadataDescription",
          type: "string",
        },
        {
          title: "Hero Heading",
          name: "heroHeading",
          type: "string",
        },
        {
          title: "Hero Subheading",
          name: "heroSubheading",
          type: "string",
        },
        {
          title: "Hero CTA 1 Text",
          name: "heroCTA1Text",
          type: "string",
        },
        {
          title: "Hero CTA 2 Text",
          name: "heroCTA2Text",
          type: "string",
        },
        {
          title: "How Pretitle",
          name: "howPretitle",
          type: "string",
        },
        {
          title: "How Heading",
          name: "howHeading",
          type: "string",
        },
        {
          title: "How Description",
          name: "howDescription",
          type: "string",
        },
        {
          title: "How CTA",
          name: "howCTA",
          type: "navigationItem"
        },
        {
          title: "Why Pretitle",
          name: "whyPretitle",
          type: "string",
        },
        {
          title: "Why Heading",
          name: "whyHeading",
          type: "string",
        },
        {
          name: "whyItems",
          type: "array",
          title: "Why Items",
          of: [{ type: "whyItem" }]
        },
        {
          title: "Why CTA",
          name: "whyCTA",
          type: "navigationItem"
        },
        {
          title: "Who Pretitle",
          name: "whoPretitle",
          type: "string",
        },
        {
          title: "Who Heading",
          name: "whoHeading",
          type: "string",
        },
        {
          name: "reviews",
          type: "array",
          title: "Reviews",
          of: [{ type: "review" }]
        },
      ]
    },
    {
      title: "Primary Page",
      name: "primarypage",
      type: "document",
      fields: [
        {
          title: "Metadata Title",
          name: "metadataTitle",
          type: "string",
        }
      ]
    },
    {
      title: "Primary Navigation",
      name: "primarynavigation",
      type: "document",
      fields: [
        {
          name: "navigationItems",
          type: "array",
          title: "Navigation Items",
          of: [{ type: "navigationItem" }]
        }
      ]
    },
    {
      title: "Why Item",
      name: "whyItem",
      type: "object",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string"
        },
        {
          title: "Description",
          name: "description",
          type: "string"
        },
        {
          title: "Icon",
          name: "icon",
          type: "string"
        }
      ]
    },
    {
      title: "Review",
      name: "review",
      type: "object",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string"
        },
        {
          title: "Description",
          name: "description",
          type: "string"
        },
        {
          title: "Location",
          name: "location",
          type: "string"
        },
        {
          title: "Image",
          name: "image",
          type: "image"
        }
      ]
    }
  ]),
})
