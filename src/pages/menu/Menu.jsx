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
    },
    {
      key: 2,
      title: "Men",
      dropdown: null,
    },
    {
      key: 3,
      title: "Women",
      dropdown: null,
    },
    {
      key: 4,
      title: "Kids",
      dropdown: null,
    },
    {
      key: 5,
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
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="navbar-collapse collapse">
                {/* <ul className="navbar-nav">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">
                      Men <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Casual</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Formal</a>
                      </li>
                      <li>
                        <a href="#">Standard</a>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">
                          And more.. <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">Sleep Wear</a>
                          </li>
                          <li>
                            <a href="#">Sandals</a>
                          </li>
                          <li>
                            <a href="#">Loafers</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Women <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Kurta & Kurti</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">Casual</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Formal</a>
                      </li>
                      <li>
                        <a href="#">Sarees</a>
                      </li>
                      <li>
                        <a href="#">Shoes</a>
                      </li>
                      <li>
                        <a href="#">
                          And more.. <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">Sleep Wear</a>
                          </li>
                          <li>
                            <a href="#">Sandals</a>
                          </li>
                          <li>
                            <a href="#">Loafers</a>
                          </li>
                          <li>
                            <a href="#">
                              And more.. <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a href="#">Rings</a>
                              </li>
                              <li>
                                <a href="#">Earrings</a>
                              </li>
                              <li>
                                <a href="#">Jewellery Sets</a>
                              </li>
                              <li>
                                <a href="#">Lockets</a>
                              </li>
                              <li className="disabled">
                                <a className="disabled" href="#">
                                  Disabled item
                                </a>
                              </li>
                              <li>
                                <a href="#">Jeans</a>
                              </li>
                              <li>
                                <a href="#">Polo T-Shirts</a>
                              </li>
                              <li>
                                <a href="#">SKirts</a>
                              </li>
                              <li>
                                <a href="#">Jackets</a>
                              </li>
                              <li>
                                <a href="#">Tops</a>
                              </li>
                              <li>
                                <a href="#">Make Up</a>
                              </li>
                              <li>
                                <a href="#">Hair Care</a>
                              </li>
                              <li>
                                <a href="#">Perfumes</a>
                              </li>
                              <li>
                                <a href="#">Skin Care</a>
                              </li>
                              <li>
                                <a href="#">Hand Bags</a>
                              </li>
                              <li>
                                <a href="#">Single Bags</a>
                              </li>
                              <li>
                                <a href="#">Travel Bags</a>
                              </li>
                              <li>
                                <a href="#">Wallets & Belts</a>
                              </li>
                              <li>
                                <a href="#">Sunglases</a>
                              </li>
                              <li>
                                <a href="#">Nail</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Kids <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Casual</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Formal</a>
                      </li>
                      <li>
                        <a href="#">Standard</a>
                      </li>
                      <li>
                        <a href="#">T-Shirts</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">Jeans</a>
                      </li>
                      <li>
                        <a href="#">Trousers</a>
                      </li>
                      <li>
                        <a href="#">
                          And more.. <span className="caret"></span>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">Sleep Wear</a>
                          </li>
                          <li>
                            <a href="#">Sandals</a>
                          </li>
                          <li>
                            <a href="#">Loafers</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Sports</a>
                  </li>
                  <li>
                    <a href="#">
                      Digital <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">Camera</a>
                      </li>
                      <li>
                        <a href="#">Mobile</a>
                      </li>
                      <li>
                        <a href="#">Tablet</a>
                      </li>
                      <li>
                        <a href="#">Laptop</a>
                      </li>
                      <li>
                        <a href="#">Accesories</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Furniture</a>
                  </li>
                  <li>
                    <a href="blog-archive.html">
                      Blog <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="blog-archive.html">Blog Style 1</a>
                      </li>
                      <li>
                        <a href="blog-archive-2.html">Blog Style 2</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="#">
                      Pages <span className="caret"></span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="product.html">Shop Page</a>
                      </li>
                      <li>
                        <a href="product-detail.html">Shop Single</a>
                      </li>
                      <li>
                        <a href="404.html">404 Page</a>
                      </li>
                    </ul>
                  </li>
                </ul> */}
                <div className="navbar-nav">
                  {navHeaders.map((header) => {
                    if (header.dropdown === null) {
                      return (
                        <a
                          id={header.key}
                          className={
                            active === header.key
                              ? "nav-item nav-link active"
                              : "nav-item nav-link"
                          }
                          href="#"
                          onClick={(e) => handleClick(e)}
                        >
                          {header.title}
                        </a>
                      );
                    } else {
                      return (
                        <li className="nav-item dropdown">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Dropdown
                          </a>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
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
                  <div className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Dropdown
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
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
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};
