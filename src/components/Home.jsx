import React, { useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { useSelector } from 'react-redux'

const Home = () => {
  const [books, setbooks] = useState([])
  const myBooks = useSelector((state)=>state.filler.value)
  const searchBooks = (e) => {
    if (e.key === "Enter")
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
      <div className="search w-1/2 m-5 h-12 md:w-2/3">
        <input type="text" placeholder='Search books ...' className='w-full h-full font-bold text-2xl p-3 bg-amber-100 rounded-2xl' onKeyDown={(e) => searchBooks(e)} />
      </div>
      <div className="cards flex flex-row m-6 gap-3 flex-wrap md:flex-col">
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
