import React,{ useState } from 'react'
import { addBook } from '../redux/filler/fillerSlice'
import { useDispatch } from 'react-redux'

const Card = ({ book,index,isClick }) => {
  const [isClicked, setisClicked] = useState(isClick)  
  const dispatch = useDispatch()  
  const handleClick = (book) => {
    dispatch(addBook(book))
    setisClicked(!isClicked)
  }
  
  
  return (
    <div className="card relative w-96 h-48 rounded-xl bg-pink-200 p-3 m-auto" key={index}>
            <h2 className='font-bold text-2xl m-2'>{book.title}</h2>
            <p className='text-xl font-medium m-2'>Edition Count:{book.edition_count}</p>
            {!isClicked && <button className=' text-white absolute m-4 bg-purple-600 rounded-md p-2 self-end bottom-0 right-0 ' onClick={()=>handleClick(book)}>Add To BookShelf</button>}
    </div>
  )
}

export default Card
