import React from 'react';

const Country = ({ country }) => {
    const { name, altSpellings, continents, population, flags, independent } = country;

    return (
        <div className="border-2 border-lime-700 rounded-2xl my-4">
            <section>
                <img src={flags["png"]} alt={flags["alt"]} />
            </section>
            <p>Name: {name["common"] ? name["common"] : "N/A"}</p>
            <p>Official Name: {name["official"] ? name["official"] : "N/A"}</p>
            <p>Initial: {altSpellings[0] ? altSpellings[0] : "N/A"}</p>
            <p>Capital: {country?.capital?.length > 0 ? country?.capital?.[0] : "N/A"}</p>
            {/* used optional chaining to bypass the error and also used conditional rendering at the same time */}
            <p>Continent: {continents[0] ? continents[0] : "N/A"}</p>
            <p>Population: {population.toLocaleString()}</p>
            <p>Independence: {independent ? "Yes, free" : "No, not free"}</p>
        </div>
    );
};

export default Country;