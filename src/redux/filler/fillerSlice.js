import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }

const fillerSlice = createSlice({
  name: 'filler',
  initialState,
  reducers: {
    addBook(state, book) {
      state.value?.push(book)
      if (state.value?.length === 0)
        localStorage.setItem("books", JSON.stringify(state.value))
    },
    getBooks(state) {
      const books = JSON.parse(localStorage.getItem("books"))
      state.value = books
    },
    deleteBook(state, title) {
      state.value = state.value?.filter((book) => {
        return book?.payload.title !== title?.payload
      })
      localStorage.setItem("books", JSON.stringify(state.value))
    }
  },
})

export const { addBook, getBooks, deleteBook } = fillerSlice.actions
export default fillerSlice.reducer