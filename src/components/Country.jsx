import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Country.css";

function Country() {
  const { name } = useParams();

  const [country, setCountry] = useState([]);
  useEffect(() => {
    const fetchcountryData = async () => {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}
      `);
      const country = await res.json();
      setCountry(country);
    
    };

    fetchcountryData();
    setCountry(country);
    console.log(country)
  }, []);

  return (
    <>
      <section className="country">
        {country.map((c) => {
          const {
            name,
            population,
            capital,
            region,
            subregion,
            currencies,
            flags,
            languages,
            borders,
          } = country[0];
          return (
            <article key={name.common}>
              <div className="inner-details">
                <div className="flag">
                  <img src={flags.svg} alt={flags.alt} />
                </div>
                <div className="country-details">
                  <div>
                    <h2>{name.common}</h2>
                    <h5>
                      Native Name: <span>{name.common}</span>{" "}
                    </h5>
                    <h5>
                      Population: <span>{population}</span>
                    </h5>
                    <h5>
                      Region: <span>{region}</span>
                    </h5>
                    <h5>
                      Sub Region: <span>{subregion}</span>
                    </h5>
                    <h5>
                      Capital: <span>{capital}</span>
                    </h5>
                  </div>
                  <div>
                    <h5>Top Level Domain: </h5>
                    <h5>
                   
                      Currencies: {Object.keys(currencies).map(key=><span>{key}</span>)} 
                     
                    </h5>
                    <h5>
                      Languages: {Object.keys(languages).map(key=><span>{languages[key]}</span>)}
                    </h5>
                  </div>
                </div>
              </div>
              <div>
                <h3>Border Countries: </h3>
                <div className="border">
                  {borders
                    ? borders.map((border) => {
                        return (
                          <ul key={border}>
                            <li>{border}</li>
                          </ul>
                        );
                      })
                    : undefined}
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Country;
