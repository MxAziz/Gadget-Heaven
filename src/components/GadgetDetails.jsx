import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GadgetDetails = () => {

    const data = useLoaderData();
    return (
        <div>
            details page
        </div>
    );
};

export default GadgetDetails;