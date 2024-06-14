import './App.css'
import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { getBooks } from './redux/filler/fillerSlice'
import { useDispatch } from 'react-redux'

function App({ router }) {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getBooks())
  }, [])
  
  return (
    <>
    <div className='flex flex-col justify-center items-center'>
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
