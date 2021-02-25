import {sanityClient} from "./sanityClient";

const fetchAll = (setCmsData) => {
    const query = "{" +
        "'employee': *[_type == 'employee'][0]{ title, firstName, lastName }, " +
        "'contact': *[_type == 'contact'][0]{ address }, " +
        "'header': *[_type == 'header'][0]{ header, logo }" +
        "}"
    sanityClient
        .fetch(query)
        .then((data) => setCmsData(data))
        .catch(console.error);
};



const sanityApi = {
    fetchAll,
}

export {
    sanityApi,
}
