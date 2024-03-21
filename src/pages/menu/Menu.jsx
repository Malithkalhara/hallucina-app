import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Menu = () => {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);
  const [active, setActive] = useState(1);
  const navHeaders = [
    {
      key: 1,
      title: "Women",
      dropdown: [
        {
          key: 1,
          title: "Costume Sets",
          path: "/collections/womens-costume-sets",
        },
        {
          key: 2,
          title: "Dresses",
          path: "/collections/womens-dresses",
        },
        {
          key: 3,
          title: "Skirts",
          path: "/collections/womens-skirts",
        },
        {
          key: 4,
          title: "Tops",
          path: "/collections/womens-tops",
        },
        {
          key: 5,
          title: "Pants",
          path: "/collections/womens-pants",
        },
      ],
      path: "/",
    },
    {
      key: 2,
      title: "Men",
      dropdown: [
        {
          key: 1,
          title: "Costume Sets",
          path: "/collections/mens-costume-sets",
        },
        {
          key: 2,
          title: "Tops",
          path: "/collections/mens-tops",
        },
        {
          key: 3,
          title: "Pants",
          path: "/collections/mens-pants",
        },
      ],
      path: "/",
    },
    {
      key: 3,
      title: "Accessories",
      dropdown: [
        {
          key: 1,
          title: "Pocket Belts and Bags",
          path: "/collections/accessories-pocket-belts-and-bags",
        },
        {
          key: 2,
          title: "Accessories",
          path: "/collections/accessories-accessories",
        },
        {
          key: 3,
          title: "Cuffs",
          path: "/collections/accessories-cuffs",
        },
        {
          key: 4,
          title: "Holsters",
          path: "/collections/accessories-holsters",
        },
        {
          key: 5,
          title: "Footwear",
          path: "/collections/accessories-footwear",
        },
      ],
      path: "/",
    },
    {
      key: 4,
      title: "Jewelery",
      dropdown: [
        {
          key: 1,
          title: "Hair",
          path: "/collections/jeweleries-hair",
        },
        {
          key: 2,
          title: "Neck",
          path: "/collections/jeweleries-neck",
        },
        {
          key: 3,
          title: "Body Jewelery",
          path: "/collections/jeweleries-body-jewelery",
        },
        {
          key: 4,
          title: "Piercings",
          path: "/collections/jeweleries-piercings",
        },
      ],
      path: "/",
    },
    {
      key: 5,
      title: "Offers",
      dropdown: null,
      path: "/account",
    },
    {
      key: 6,
      title: "About",
      dropdown: [
        {
          key: 1,
          title: "About Us",
          path: "/",
        },
        {
          key: 2,
          title: "Contact Us",
          path: "/",
        },
        {
          key: 3,
          title: "Reviews",
          path: "/",
        },
      ],
      path: "/login",
    },
  ];

  const handleClick = (e) => {
    setActive(e.target.id);
  };
  return (
    <div>
      <section id="menu">
        <div className="container">
          <nav className="menu-area">
            <div
              className="navbar navbar-dark navbar-expand-lg"
              role="navigation">
              <div className="navbar-header">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div
                className="navbar-collapse collapse"
                id="navbarNavAltMarkup"
                style={{ justifyContent: "center" }}>
                <div
                  className="navbar-nav ml-auto"
                  style={{ justifyContent: "center" }}>
                  {navHeaders.map((header) => {
                    if (header.dropdown === null) {
                      return (
                        <div style={{ padding: "0px 10px" }} className="">
                          <Link
                            key={header.key}
                            className={
                              active === header.key
                                ? "nav-item nav-link active"
                                : "nav-item nav-link"
                            }
                            to={header.path}
                            onClick={(e) => handleClick(e)}>
                            {header.title}
                          </Link>
                        </div>
                      );
                    } else {
                      return (
                        <div style={{ padding: "0px 10px" }} className="">
                          <li key={header.key} className="nav-item dropdown">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id={`navbarDropdown_${header.key}`}
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false">
                              {header.title}
                            </a>
                            <div
                              className="dropdown-menu"
                              aria-labelledby={`navbarDropdown_${header.key}`}>
                              {header.dropdown.map((item) => {
                                return (
                                  <Link
                                    key={item.key}
                                    className="dropdown-item"
                                    to={item.path}>
                                    {item.title}
                                  </Link>
                                );
                              })}
                            </div>
                          </li>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};
