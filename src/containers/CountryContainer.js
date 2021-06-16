import React, { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';
import CountrySelect from '../components/CountrySelect';

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
    
    function calculateTotalPop(countries){
        let totalPopulation = countries.reduce((total, country) => {
            return total + country.population;
        }, 0);
        return totalPopulation
    }

    let totalPop = calculateTotalPop(countries)
    console.log("Total population is: " + totalPop)

    return(
        <div className="countryContainer">
        <h1>Welcome to Countries thing</h1>
        <h3>The total population of all countries is: {totalPop}</h3>
        <CountrySelect countries={countries} onCountryClick={onCountryClick}/>
        {selectedCountry ? <CountryDetail selectedCountry={selectedCountry}/> : null}
        
        </div>
    )


}

export default CountryContainer;