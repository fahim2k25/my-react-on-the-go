import React from 'react';
import { use } from 'react';

const Countries = ({ countryAllPromise }) => {
    const countries = use(countryAllPromise);
    console.log(countries)
    return (
        <div>
            <ul>
                <li>Bangladesh</li>
                <li>Qatar</li>
                <li>England</li>
                <li>Australia</li>
                <li>Germany</li>
            </ul>
        </div>
    );
};

export default Countries;