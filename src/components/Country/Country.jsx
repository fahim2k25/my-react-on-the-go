import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries }) => {

    //destructuring the properties sent from the Countries component
    const { name, altSpellings, continents, population, flags, independent } = country;

    //state management
    const [visit, setVisit] = useState(false);

    // adding event handler
    const handleVisitClick = () => {
        setVisit(!visit);
        handleVisitedCountries(name["common"]);
    }

    return (
        // <div className={`country ${ visit && 'country-visited'}`}>
        //     <section>
        //         <img className="w-64 h-40" src={flags["png"]} alt={flags["alt"]} />
        //     </section>
        //     <p>Name: {name["common"] ? name["common"] : "N/A"}</p>
        //     <p>Official Name: {name["official"] ? name["official"] : "N/A"}</p>
        //     <p>Initial: {altSpellings[0] ? altSpellings[0] : "N/A"}</p>
        //     <p>Capital: {country?.capital?.length > 0 ? country?.capital?.[0] : "N/A"}</p>
        //     {/* used optional chaining to bypass the error and also used conditional rendering at the same time */}
        //     <p>Continent: {continents[0] ? continents[0] : "N/A"}</p>
        //     <p>Population: {population.toLocaleString()}</p>
        //     <p>Independence: {independent ? "Yes, free" : "No, not free"}</p>
        //     <button className={visit ? 'btn btn-accent' : 'btn btn-error'} onClick={handleVisitClick}>{
        //         visit ? "Visited" : "Not Visited"
        //         }</button>
        // </div>

        <div className={`card bg-base-100 w-96 shadow-2xl ${visit && 'country-visited'}`}>
            <figure>
                <img
                    src={flags["png"]}
                    alt={flags["alt"]} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name["common"] ? name["common"] : "N/A"}</h2>
                <p>Official Name: {name["official"] ? name["official"] : "N/A"}</p>
                <p>Initial: {altSpellings[0] ? altSpellings[0] : "N/A"}</p>
                <p>Capital: {country?.capital?.length > 0 ? country?.capital?.[0] : "N/A"}</p>
                {/* used optional chaining to bypass the error and also used conditional rendering at the same time */}
                <p>Continent: {continents[0] ? continents[0] : "N/A"}</p>
                <p>Population: {population.toLocaleString()}</p>
                <p>Independence: {independent ? "Yes, free" : "No, not free"}</p>
                <div className='card-actions'>
                    <button  onClick={handleVisitClick} className={visit ? 'btn btn-accent' : 'btn btn-error'}>
                        {
                            visit ? "Visited" : "Not Visited"
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Country;