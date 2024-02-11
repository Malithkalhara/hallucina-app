import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [active, setActive] = React.useState(1);
  const navHeaders = [
    {
      key: 1,
      title: "Home",
      dropdown: null,
      path: "/",
    },
    {
      key: 2,
      title: "Men",
      dropdown: null,
      path: "/",
    },
    {
      key: 3,
      title: "Women",
      dropdown: null,
      path: "/",
    },
    {
      key: 4,
      title: "Kids",
      dropdown: null,
      path: "/",
    },
    {
      key: 5,
      title: "Account",
      dropdown: null,
      path: "/account",
    },
    {
      key: 6,
      title: "Login",
      dropdown: null,
      path: "/login",
    },
    {
      key: 4,
      title: "Cart",
      dropdown: null,
      path: "/cart",
    },
    {
      key: 4,
      title: "Checkout",
      dropdown: null,
      path: "/checkout",
    },
    {
      key: 4,
      title: "Contact",
      dropdown: null,
      path: "/contact",
    },
    {
      key: 4,
      title: "ProductDetails",
      dropdown: null,
      path: "/product-details",
    },
    {
      key: 7,
      title: "Dropdown",
      dropdown: [
        {
          key: 1,
          title: "Option 1",
        },
      ],
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
              role="navigation"
            >
              <div className="navbar-header">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="navbar-collapse collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  {navHeaders.map((header) => {
                    if (header.dropdown === null) {
                      return (
                        <Link
                          key={header.key}
                          className={
                            active === header.key
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                          to={header.path}
                          onClick={(e) => handleClick(e)}
                        >
                          {header.title}
                        </Link>
                      );
                    } else {
                      return (
                        <li key={header.key} className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id={`navbarDropdown_${header.key}`}
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {header.title}
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby={`navbarDropdown_${header.key}`}
                          >
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </li>
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
