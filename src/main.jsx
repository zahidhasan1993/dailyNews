import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Career from "./components/Career";
import CategoryNews from "./components/CategoryNews";
import NewsDetails from "./components/NewsDetails";
import AuthProvider from "./components/providers/AuthProvider";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "career",
        element: <Career></Career>,
      },
      {
        path: "category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "newsdetails/:id",
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
      
    ],
  },
  {
    path : "login",
    element : <Login></Login>
   
  },
  {
    path : "register",
    element : <Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
