import React, { useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { useSelector } from 'react-redux'
import Search from './Search'

const Home = () => {
  const [books, setbooks] = useState([])
  const myBooks = useSelector((state)=>state.filler.value)
  
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Navbar user={false}/>
      <Search setbooks={setbooks}/>
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
