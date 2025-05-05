import React from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countryAllPromise }) => {
    const countries = use(countryAllPromise);

    return (
        <div>

            <section className='countries'>
                {
                    countries.map((country, index) => <Country key={index} country={country}></Country>)
                }
            </section>
        </div>
    );
};

export default Countries;