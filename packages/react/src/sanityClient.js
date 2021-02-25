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

export {
    client as sanityClient,
    urlFor,
};
