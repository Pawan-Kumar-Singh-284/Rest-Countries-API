import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const uri = "https://restcountries.com/v3.1/all";
function Countries() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const input = document.querySelector("#search");
  if (input) {
    input.addEventListener("input", (e) => {
      const value = e.target.value;
      setSearch(value);
    });
  }

  const select = document.querySelector("#select");
  if (select) {
    select.addEventListener("change", (e) => {
      const { value } = e.target;
      setFilter(value);
    });
  }

  const countryData = async () => {
    const res = await fetch(uri);
    const countries = await res.json();
    setCountries(countries);
    console.log(countries);
  };
  useEffect(() => {
    countryData();
  }, []);

  return (
    <>
      <section className="grid">
        {countries
          .filter((country) =>
            country.name.common.toLowerCase().includes(search.toLowerCase())
          )
          .filter((country) =>
            country.region.toLowerCase().includes(filter.toLowerCase())
          )
          .map((country) => {
            const { name, capital, flags, population, region } = country;

            return (
              <article key={name.common}>
                <div>
                  <img src={flags.svg} alt={name} />
                  <div className="details">
                    <h3 className="country-name">{name.common}</h3>
                    <h4>
                      Population: <span>{population}</span>
                    </h4>
                    <h4>
                      Region: <span>{region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                    <Link to={`/countries/${name.common}`} className="btn">
                      learn more...
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
      </section>
    </>
  );
}

export default Countries;
