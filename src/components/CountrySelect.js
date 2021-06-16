import React from 'react';
import ListItem from './ListItem';


const CountrySelect = ({countries, onCountryClick}) => {

    const handleClick = (event) => {
        onCountryClick(countries[event.target.value])
    }

    const countriesList = countries.map((country, index) => {
        return <option value={index}>{country.name}</option>
        
    })

    return (
            <select onChange={handleClick}>
                <option>Choose a country</option>
                {countriesList}
            </select>
    )

}

export default CountrySelect;