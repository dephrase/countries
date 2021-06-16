import React, { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';

import '../styles/styles.css';

const CountryContainer = () => {



    const [countries, setCountries] = useState(([]))
    const [selectedCountry, setSelectedCountry] = useState((null))

    useEffect( () => {
        getCountries()
    }, [])

    const onCountryClick = (country) => {
        setSelectedCountry(country)
    }

    const getCountries = function(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(countries => setCountries(countries))
        
    }

    return(
        <div className="countryContainer">
        <CountryList countries={countries} onCountryClick={onCountryClick}/>
        {selectedCountry ? <CountryDetail selectedCountry={selectedCountry}/> : null}
        
        </div>
    )


}

export default CountryContainer;