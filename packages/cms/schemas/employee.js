export default {
  name: 'employee',
  title: 'Employee',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'firstName',
      title: 'FirstName',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'LastName',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `${doc.firstName}-${doc.lastName}`,
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'birthDay',
      title: 'BirthDay',
      type: 'date',
    },
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
    },
    prepare(selection) {
      const {firstName, lastName} = selection
      return {
        title: `${firstName} ${lastName}`,
      }
    }
  },
}
