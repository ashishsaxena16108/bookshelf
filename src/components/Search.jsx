import React from 'react'
import search from '../assets/search.svg'

const Search = ({ setbooks }) => {
    const searchBooks = (e) => {
        getBooks(e.target.value)
    }
    const getBooks = async (value) => {
      const response = await fetch(`https://openlibrary.org/search.json?q=${value}&limit=10&page=1`)
      const data = await response.json()
      setbooks(data.docs)
    }
  return (
    <div className="search flex justify-around w-2/3 m-5 h-12 bg-amber-100 rounded-2xl md:w-1/2">
        <input type="text" placeholder='Search books ...' className=' w-2/3 focus:outline-none h-full font-bold bg-transparent text-2xl p-3 ' onKeyDown={(e) => searchBooks(e)} />
        <button className=' ' onClick={(e)=>searchBooks(e)}><img src={search}/></button>
      </div>
  )
}

export default Search
