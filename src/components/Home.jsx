import React, { useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { useSelector } from 'react-redux'

const Home = () => {
  const [books, setbooks] = useState([])
  const myBooks = useSelector((state)=>state.filler.value)
  const searchBooks = (e) => {
      getBooks(e.target.value)
  }
  const getBooks = async (value) => {
    const response = await fetch(`https://openlibrary.org/search.json?q=${value}&limit=10&page=1`)
    const data = await response.json()
    setbooks(data.docs)
  }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Navbar />
      <div className="search flex justify-around w-2/3 m-5 h-12 bg-amber-100 rounded-2xl md:w-1/2">
        <input type="text" placeholder='Search books ...' className=' w-2/3 focus:outline-none h-full font-bold bg-transparent text-2xl p-3 ' onKeyDown={(e) => searchBooks(e)} />
        <button className=' ' onClick={(e)=>searchBooks(e)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20"><path fill="#878787" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg></button>
      </div>
      <div className="cards flex flex-col m-6 gap-3 justify-center items-center flex-wrap md:flex-row">
        {books.map((b, index) => {
          let clicked=false
          if(myBooks!==null)
             clicked = myBooks.find((book)=>{return book.payload.title===b.title})!==undefined
          return <Card isClick={clicked} book={b} key={index}/>
        })}
      </div>
    </div>
  )
}

export default Home
