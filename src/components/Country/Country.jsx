import React from 'react';

const Country = ({ country }) => {
    const { altSpellings, continents } = country;

    return (
        <div className="border-2 border-lime-700 rounded-2xl my-4">
            <p>Name: {altSpellings[1] ? altSpellings[1] : "N/A"}</p>
            <p>Initial: {altSpellings[0] ? altSpellings[0] : "N/A"}</p>
            {/* <p>Capital: {capital[0] ? capital[0] : "N/A"}</p> */}
            <p>Continent: {continents[0] ? continents[0] : "N/A"}</p>
        </div>
    );
};

export default Country;