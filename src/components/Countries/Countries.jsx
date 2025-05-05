import React from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countryAllPromise }) => {
    const countries = use(countryAllPromise);

    return (
        <div className='countries'>
            {
                countries.map((country, index) => <Country key={index} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;