import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//(https://restcountries.com)

const uri = "https://restcountries.com/v3.1/all";
function Countries() {
  const [countries, setCountries] = useState([]);
  
  const countryData = async () => {
    const res = await fetch(uri);
    const countries = await res.json();
    setCountries(countries);
    console.log(countries);
  };
  useEffect(() => {
   countryData()
  }, []);
  console.log(countries)
  return (
    <>
    <section className="grid">
    {countries.map((country)=>{
        const {name, capital,flags,population,region }=country;

        return <article>
            <div>
                <img src={flags.svg} alt={name}/>
                <div className="details">
                 <h3>{name.common}</h3>
                <h4>Population: <span>{population}</span></h4>
                <h4>Region: <span>{ region}</span></h4>
                <h4>Capital: <span>{capital}</span></h4>
                <Link to={`/country`}>learn more</Link>
                </div>
            </div>
        </article>
    })}
    </section>
      </>
  );
}

export default Countries;
