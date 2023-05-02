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
import PrivateRoute from "./components/privateRooute/PrivateRoute";
import Terms from "./components/Terms";

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
          fetch(`https://daily-news-server-rbofa08ay-zahidhasan1993.vercel.app/category/${params.id}`),
      },
      {
        path: "newsdetails/:id",
        element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://daily-news-server-rbofa08ay-zahidhasan1993.vercel.app/news/${params.id}`),
      },
      {
        path : "terms",
        element : <Terms></Terms>
      }
      
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
