import React from "react";
import { IoSearch } from "react-icons/io5";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

function Header() {
  const header = document.querySelector(".header");
  const changeTheme = () => {
    const dark = document.querySelector(".dark");
    dark.addEventListener("click", () => {
      document.body.classList.toggle("light-theme");
      if (header) {
        header.classList.toogle("light-header");
      }
    });
  };

  return (
    <>
      <header className="header">
        <h3>Where in the World?</h3>

        {/* <WiMoonAltThirdQuarter className="dark" onClick={changeTheme} /> */}
      </header>
      <section className="filter">
        <div className="input">
          {/* <span className="icon">
            <IoSearch />
          </span> */}

          <input
            type="search"
            id="search"
            placeholder="Search for a country... "
          />
        </div>

        <div className="option">
          <select className="select" id="select" name="select">
            <option value="filter by region">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Eronia">Eronia</option>
          </select>
        </div>
      </section>
    </>
  );
}

export default Header;
