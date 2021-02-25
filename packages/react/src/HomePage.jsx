import React, { useState, useEffect } from 'react';

import { urlFor, fetchAll } from "./sanityClient";

import Loading from "./Loading";

const mapAddressField = (address) => {
    let row;

    switch (address.kind) {
        case 'Postal':
            row = <><td></td><td>{address.value.split("\n").map((v) => (<>{v}<br /></>))}</td></>;
            break;
        case 'UstId':
            row = <><td>Ust ID Nr.</td><td>{address.value}</td></>;
            break;
        default:
            row = <><td>{address.kind}</td><td>{address.value}</td></>;
    }

    return <tr key={address._key}>{row}</tr>;
}

const HomePage = () => {
    const [cmsData, setCmsData] = useState(null);

    useEffect(() => {
        fetchAll(setCmsData);
    }, []);

    if (cmsData == null) {
        return (<Loading />);
    }

    return (
        <div className="container">
            <div className="item leftColumn"></div>
            <div className="item middleColumn">
                <img src={urlFor(cmsData.header.header).width(499).url()} />
                <div className="middleContent">
                    <p />
                    <table>
                        <tr>
                            <td>Owner</td>
                            <td>
                                {cmsData.employee.title} {cmsData.employee.firstName} {cmsData.employee.lastName}
                            </td>
                        </tr>
                        { cmsData.contact.address.map(mapAddressField) }
                    </table>
                </div>
            </div>
            <div className='item rightColumn'>
                <img src={urlFor(cmsData.header.logo).width(236).url()} />
            </div>
        </div>
    );
}

export default HomePage
