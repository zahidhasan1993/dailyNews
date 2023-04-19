import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Career from './components/Career';


const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout></Layout>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/about",
        element : <About></About>
      },
      {
        path : "/career",
        element : <Career></Career>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
