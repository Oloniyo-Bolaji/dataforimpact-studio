export default {
  name: "graduates",
  title: "Graduates",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "picture",
      title: "Picture",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "cohort",
      title: "Cohort",
      type: "string",
    },
  ],
};
