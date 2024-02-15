import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [active, setActive] = React.useState(1);
  const navHeaders = [
    {
      key: 1,
      title: "Women",
      dropdown: [
        {
          key: 1,
          title: "Costume Sets",
          path: "/",
        },
        {
          key: 2,
          title: "Dresses",
          path: "/",
        },
        {
          key: 3,
          title: "Skirts",
          path: "/",
        },
        {
          key: 4,
          title: "Tops",
          path: "/",
        },
        {
          key: 5,
          title: "Pants",
          path: "/",
        }
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
          path: "/",
        },
        {
          key: 1,
          title: "Tops",
          path: "/",
        },
        {
          key: 1,
          title: "Pants",
          path: "/",
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
          path: "/",
        },
        {
          key: 2,
          title: "Accessories",
          path: "/",
        },
        {
          key: 3,
          title: "Cuffs",
          path: "/",
        },
        {
          key: 4,
          title: "Holsters",
          path: "/",
        },
        {
          key: 5,
          title: "Footwear",
          path: "/",
        }
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
          path: "/",
        },
        {
          key: 2,
          title: "Neck",
          path: "/",
        },
        {
          key: 3,
          title: "Body Jewelery",
          path: "/",
        },
        {
          key: 4,
          title: "Piercings",
          path: "/",
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
        }
      ],
      path: "/login",
    }
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
                            {header.dropdown.map((item) => {
                              return (
                                <Link
                                  key={item.key}
                                  className="dropdown-item"
                                  to={item.path}
                                >
                                  {item.title}
                                </Link>
                              );
                            })}
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
