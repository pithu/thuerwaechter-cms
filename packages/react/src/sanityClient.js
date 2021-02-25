import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
    projectId: '7shyam02',
    dataset: 'production',
    useCdn: true,
})

const builder = imageUrlBuilder(client)

const urlFor = (source) => {
    return builder.image(source)
}

const fetchAll = (setCmsData) => {
    const query = "{" +
        "'employee': *[_type == 'employee'][0]{ title, firstName, lastName }, " +
        "'contact': *[_type == 'contact'][0]{ address }, " +
        "'header': *[_type == 'header'][0]{ header, logo }" +
        "}"
    client
        .fetch(query)
        .then((data) => setCmsData(data))
        .catch(console.error);
};

export {
    urlFor,
    fetchAll,
};
