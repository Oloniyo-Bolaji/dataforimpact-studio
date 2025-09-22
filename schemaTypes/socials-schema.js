export default {
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Start the socials name with a capital letter e.g, X, LinkedIn, Facebook',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'link',
      title: 'link',
      type: 'url',
    },
  ],
}
