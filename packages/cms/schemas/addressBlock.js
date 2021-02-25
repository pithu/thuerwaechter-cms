export default {
    title: 'Address Block',
    name: 'addressBlock',
    type: 'array',
    of: [{
        title: 'Phone',
        name: 'phone',
        type: 'object',
        fields: [
            {
                name: 'kind',
                type: 'string',
                title: 'Kind',
                options: {
                    layout: 'dropdown',
                    list: ['Office', 'Home', 'Mobile', 'Fax'],
                },
                validation: Rule => Rule.required(),
            },
            {
                name: 'value',
                type: 'string',
                title: 'Value',
                validation: Rule => Rule.required(),
            },
        ],
    }, {
        title: 'Email',
        name: 'email',
        type: 'object',
        fields: [
            {
                name: 'kind',
                type: 'string',
                title: 'Kind',
                options: {
                    layout: 'dropdown',
                    list: ['Email'],
                },
                validation: Rule => Rule.required(),
            },
            {
                name: 'value',
                type: 'email',
                title: 'Value',
                validation: Rule => Rule.required(),
            },
        ],
    }, {
        title: 'Postal',
        name: 'postal',
        type: 'object',
        fields: [
            {
                name: 'kind',
                type: 'string',
                title: 'Kind',
                options: {
                    layout: 'dropdown',
                    list: ['Postal'],
                },
                validation: Rule => Rule.required(),
            },
            {
                name: 'value',
                type: 'text',
                title: 'Value',
                validation: Rule => Rule.required(),
            },
        ],
    }, {
        title: 'Ids',
        name: 'ids',
        type: 'object',
        fields: [
            {
                name: 'kind',
                type: 'string',
                title: 'Kind',
                options: {
                    layout: 'dropdown',
                    list: ['UstId', 'Steuernummer'],
                },
                validation: Rule => Rule.required(),
            },
            {
                name: 'value',
                type: 'string',
                title: 'Value',
                validation: Rule => Rule.required(),
            },
        ],
    },
    ],
}
