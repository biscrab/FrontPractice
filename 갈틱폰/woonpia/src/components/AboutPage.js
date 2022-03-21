import React from 'react';
import { useLocation, useParams } from 'react-router';

const AboutPage = () => {
    const { name } = useParams();
    let location = useLocation();

    const bool = new URLSearchParams(location.search).get('bool');

    console.log(name);

    return(
        <>
            <h2>About {name} {bool ? 'exist bool' : 'not exist bool'}</h2>
        </>
    )
}

export default AboutPage;