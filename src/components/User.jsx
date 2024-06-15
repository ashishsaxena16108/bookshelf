import React,{ useEffect,useState } from 'react'
import Navbar from './Navbar'
import { deleteBook } from '../redux/filler/fillerSlice'
import { useSelector,useDispatch } from 'react-redux'
import Card from './Card'

const User = () => {
   const dispatch = useDispatch()
   const myBooks = useSelector((state) => state.filler.value)
   
   
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Navbar user={true}/>
      <h3 className=' text-4xl font-bold'>My BookShelf</h3>
      <div className="cards flex flex-col m-6 gap-3 flex-wrap md:flex-row">
        {myBooks?.map((b, index) => {
          return <Card book={b.payload} key={index} user={true}/>
        })}
      </div>
    </div>
  )
}

export default User
