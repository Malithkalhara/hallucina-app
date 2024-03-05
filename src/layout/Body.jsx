import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "../pages/account/Account";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Collections from "../pages/collections";
import Contact from "../pages/contact/Contact";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";

import Login from "../pages/login/Login";
import ProductDetails from "../pages/product-detail/ProductDetails";
import { Product } from "../pages/product/Product";

export const Body = () => {
  const router = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/account",
      element: <Account />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/product-details",
      element: <ProductDetails />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/collections/*",
      element: <Collections />,
    },
    {
      path: "/*",
      element: <ErrorPage />,
    },
  ];
  return (
    <div className="vh-100">
      {/* <RouterProvider router={router} /> */}
      <Routes>
        {router.map((item, index) => {
          return (
            <Route key={index} path={item.path} element={item.element}></Route>
          );
        })}
      </Routes>
    </div>
  );
};
