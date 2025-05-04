import React from 'react';
import { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ countryAllPromise }) => {
    const countries = use(countryAllPromise);

    return (
        <div>
            {
                countries.map((country, index) => <Country key={index} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;