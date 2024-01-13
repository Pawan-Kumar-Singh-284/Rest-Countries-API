import React from 'react'

function Search() {
  return (
    <section className='filter'>
        <form className='form-control'>
        <input type='search' name='search' id='search' placeholder='Search for the country '/>

        </form>

        <div className='option'>
            <select className='select' id='select' name='select'>
                <option value="filter by region">Filter by region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Eronia">Eronia</option>
            </select>
        </div>
    </section>
  )
}

export default Search