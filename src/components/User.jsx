import React,{ useEffect,useState } from 'react'
import Navbar from './Navbar'
import { deleteBook } from '../redux/filler/fillerSlice'
import { useSelector,useDispatch } from 'react-redux'

const User = () => {
   const dispatch = useDispatch()
   const myBooks = useSelector((state) => state.filler.value)
   const handleClick = (title) => {
     dispatch(deleteBook(title))
   }
   
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <Navbar/>
      <h3 className=' text-4xl font-bold'>My BookShelf</h3>
      <div className="cards flex flex-row m-6 gap-3 flex-wrap">
        {myBooks.map((b, index) => {
          return <div className="card relative w-96 h-48 rounded-xl bg-pink-200 p-3" key={index}>
            <h2 className='font-bold text-2xl m-2'>{b.payload.title}</h2>
            <p className='text-xl font-medium m-2'>Edition Count:{b.payload.edition_count}</p>
            <button className=' text-white absolute m-4 bg-purple-600 rounded-md p-2 self-end bottom-0 right-0 ' onClick={()=>handleClick(b.payload.title)}>Delete From BookShelf</button>
          </div>
        })}
      </div>
    </div>
  )
}

export default User
