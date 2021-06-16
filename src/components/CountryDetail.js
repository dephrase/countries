import React from 'react';

const CountryDetail = ({selectedCountry}) => {

    return(

    <div>
        <h2>{selectedCountry.name}</h2>
        <h5>{selectedCountry.languages[0]["name"]}</h5>
        <img src={selectedCountry.flag}/>
    </div>
    )
}

export default CountryDetail;