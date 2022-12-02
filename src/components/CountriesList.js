import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CountryDetails from './CountryDetails';

const CountriesList = ({ countries }) => {
  return (
    <div className="row">
      <div className="details">
        {countries.map((country, i) => {
          return (
            <Link to={`/${country.alpha3Code}`} key={country.alpha2Code}>
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                alt=""
              />
              <h5 className="border-bottom p-5">{country.name.common}</h5>
            </Link>
          );
        })}
      </div>
      <div className="details2">
        <CountryDetails countries={countries} />
      </div>
    </div>
  );
};

export default CountriesList;
