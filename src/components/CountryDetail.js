import React from 'react';

const CountryDetail = ({selectedCountry, surroundingCountries}) => {

    const borderCountries = surroundingCountries.map((country) => {
        return <p>{country}</p>
    })

    return(

    <div>
        <h2>{selectedCountry.name}</h2>
        <h5>{selectedCountry.languages[0]["name"]}</h5>
        <img src={selectedCountry.flag}/>
        {borderCountries}
    </div>
    
    )
    
}

export default CountryDetail;