// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      // This is the display name for the type
      title: "Homepage",
      
      // The identifier for this document type used in the api's
      name: "homepage",
      
      // Documents have the type 'document'. Your schema may describe types beyond documents
      // but let's get back to that later.
      type: "document",
      
      // Now we proceed to list the fields of our document
      fields: [
        {
          // The display name for this field
          title: "Metadata Title",

          // The identifier for this field used in the api's
          name: "metadataTitle",

          // The type of this field
          type: "string",
        },
        {
          // The display name for this field
          title: "Metadata Description",

          // The identifier for this field used in the api's
          name: "metadataDescription",

          // The type of this field
          type: "string",
        },
        {
          // The display name for this field
          title: "Hero Heading",

          // The identifier for this field used in the api's
          name: "heroHeading",

          // The type of this field
          type: "string",
        },
        {
          // The display name for this field
          title: "Hero Subheading",

          // The identifier for this field used in the api's
          name: "heroSubheading",

          // The type of this field
          type: "string",
        },
        {
          // The display name for this field
          title: "Hero CTA 1 Text",

          // The identifier for this field used in the api's
          name: "heroCTA1Text",

          // The type of this field
          type: "string",
        },
        {
          // The display name for this field
          title: "Hero CTA 2 Text",

          // The identifier for this field used in the api's
          name: "heroCTA2Text",

          // The type of this field
          type: "string",
        }
      ]
    }
  ]),
})
