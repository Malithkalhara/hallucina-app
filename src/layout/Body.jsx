import React from 'react'
import Home from "../pages/home/Home"
import ErrorPage from "../pages/error/ErrorPage"
import Account from '../pages/account/Account';
import Login from '../pages/login/Login';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Cart from '../pages/cart/Cart';
import Checkout from '../pages/checkout/Checkout';
import Contact from '../pages/contact/Contact';
import ProductDetails from '../pages/product-detail/ProductDetails';

export const Body = () => {
  const router = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/account",
      element: <Account />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/cart",
      element: <Cart />
    },
    {
      path: "/checkout",
      element: <Checkout />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/product-details",
      element: <ProductDetails />
    },
    {
      path: "/*",
      element: <ErrorPage />
    }
  ];
  return (
    <div className="vh-100">
      {/* <RouterProvider router={router} /> */}
      <Routes>
        {router.map((item,index) => {
          return (
            <Route key={index} path={item.path} element={item.element}></Route>
          )
        })}
      </Routes>
    </div>
  )
}
