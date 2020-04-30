import { FormControl } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { fetchCountries } from '../../api';
import styles from './CountryPicker.module.css';

let arr = [{ value: '', label: 'Global'}];

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      let count = await fetchCountries();
      var len = count.length;
      for (var i = 0; i < len; i++) {
        arr.push({
            value: count[i],
            label: count[i],
        });
      }
    await setCountries(arr);
    };

    fetchAPI();
  }, []);

  const handleChange = (selectedOption) => {
      handleCountryChange(selectedOption.value);
  }

  return (
    <>
    <FormControl className={styles.formControl}>
      <Select
      className="basic-single"
      defaultValue={''}
      placeholder={'Global'}
      isSearchable={true}
      onChange={handleChange}
      name="color"
      options={countries}
      style={{width: '50%'}}  
      />
    </FormControl>
    </>
  );
};

export default Countries;
