import React, { useState } from 'react';
import { use } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countryAllPromise }) => {

    const countries = use(countryAllPromise);

    // creating a state lift scenario
    const [visitedCountries, setVisitedCountries] = useState([]);
   
    //Declaring event trigger
    const handleVisitedCountries = (nameC) => {
        const arr = [...visitedCountries, nameC];
        setVisitedCountries(arr);
        
    }

    return (
        <div>
            <section className='border-2 border-blue-600 border-dotted'>
            <h5 className='text-center text-3xl font-thin my-4'>🚀 Traveled Countries so far: <span className='traveled'>{visitedCountries.length}</span> </h5>
            <ol>
                {
                    visitedCountries.map(elem => <li>{elem}</li>)
                }
            </ol>
            </section>

            <section className='countries'>
                {
                    countries.map((country, index) => <Country key={index} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </section>
        </div>
    );
};

export default Countries;