import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import './index.css'
import Home from './components/Home.jsx'
import User from './components/User.jsx'
import { store } from "./redux/store.js"
import { Provider } from 'react-redux'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/user',
    element: <User />
  },
]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App router={router} />
    </Provider>
  </React.StrictMode>,
)
