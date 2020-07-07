import React, { useEffect, useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import fetchCountryData from '../API/index';
import style from './styling.module.css';


const CountryPicker = ({ handleCountryChange }) => {
 const [ countryName, setCountryName ] = useState([]);

  useEffect(() => {
   const API = async () =>{
       setCountryName(await fetchCountryData());
   }
   API();
  }, [setCountryName]);



    return (
        <div className={style.container}>
        <FormControl>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                 <option>Global</option>
                 {countryName.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
        </div>
    );
}

export default CountryPicker;
