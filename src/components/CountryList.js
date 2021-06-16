import React, {useState} from 'react';
import ListItem from './ListItem';


const CountryList = ({countries, onCountryClick}) => {


    const countriesList = countries.map((country, index) => {
        return <ListItem country={country} key={index} onCountryClick={onCountryClick}/>
        
    })

    return <ul>{countriesList}</ul>
}

export default CountryList;