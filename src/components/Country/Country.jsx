import React from 'react';

const Country = ({ country }) => {
    const { name, altSpellings, continents, population, flags } = country;

    return (
        <div className="border-2 border-lime-700 rounded-2xl my-4">
            <section>
                <img src={flags["png"]} alt={flags["alt"]} />
            </section>
            <p>Name: {name["common"] ? name["common"] : "N/A"}</p>
            <p>Official Name: {name["official"] ? name["official"] : "N/A"}</p>
            <p>Initial: {altSpellings[0] ? altSpellings[0] : "N/A"}</p>
            {/* <p>Capital: {capital.length > 0 ? capital[0] : "N/A"}</p> */}
            <p>Continent: {continents[0] ? continents[0] : "N/A"}</p>
            <p>Population: {population.toLocaleString()}</p>
        </div>
    );
};

export default Country;