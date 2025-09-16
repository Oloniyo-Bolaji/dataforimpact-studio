export default {
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    {
      name: "newAnnouncement",
      title: "New Announcement",
      description:"To post new announcements, just edit then publish",
      type: "string",
    },
      {
      name: "link",
      title: "Link",
      description: "To post new registration link, just edit then publish",
      type: "url",
    },
  ],
};
