import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'funtazia',
  title: 'Funtazia Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Főcím',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Háttérkép',
      type: 'image',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'headline',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Szerző',
      type: 'string',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Dátum',
      type: 'datetime',
    }),

    defineField({
      name: 'content',
      title: 'Leírás',
      type: 'text',
    }),
    defineField({
      name: 'content2',
      title: 'Poszt',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'blogpost',
          fields: [
            {
              name: 'subhead',
              type: 'string',
              title: 'Alcím',
            },
            {
              name: 'content',
              type: 'text',
              title: 'Tartalom',
            },
            {
              name: 'imagesTest',
              title: 'Képek',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'person',
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Leírás',
                    },
                    {
                      name: 'image',
                      type: 'image',
                      title: 'Kép',
                      options: {
                        hotspot: true,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),

    defineField({
      name: 'imagesGallery',
      title: 'Galéria',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
