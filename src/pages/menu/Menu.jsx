import React from "react";
import { Link } from "react-router-dom";


import NavDropdown from 'react-bootstrap/NavDropdown';


export const Menu = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [active, setActive] = React.useState(1);
  const navHeaders = [
    {
      key: 2,
      title: "Men",
      content : ["Costume Sets","Tops","Pants"],
      path: "/product-details"    
    },
    {
      key: 3,
      title: "Women",
      content : ["Costume Sets","Dresses", "Skirts","Tops","Pants"],
      path: "/product-details"
    },
    {
      key: 4,
      title: "Accessories",
      content : ["Pocket belts and Bags","Belts", "Cuffs","Holsters","Footwear"],
      path: "/product-details"
    },
    {
      key: 5,
      title: "Jewelery",
      content : ["Hair","Neck", "Body Jewelery","Piercings"],
      path: "/product-details"
    },
    {
      key: 6,
      title: "Offers",
      dropdown: null,
      path: "/Offer"
    },
    
  ];

  const handleClick = (e) => {
    setActive(e.target.id);
  };
  return (
    <div>
      <section id="menu">
        <div className="container">
          <nav className="menu-area d-flex justify-content-end">
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
                <div className="navbar-nav">
                  {navHeaders.map((header) => {
                    if (header.dropdown === null) {
                      return (
                        <Link
                          id={header.key}
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
                        <li className="nav-item dropdown">
                          <NavDropdown title={header.title} id="basic-nav-dropdown">
                          {header.content.map((item, index) => (
                            <NavDropdown.Item  key={index} href={`${header.path}`}>
                              {item}
                            </NavDropdown.Item>
                          ))}
                          </NavDropdown>
                        </li>
                      );
                    }
                  })}
                    <NavDropdown title="About" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                      <NavDropdown.Item href="Contact" path="/Contact" >Contact Us</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Reviews</NavDropdown.Item>
                    </NavDropdown>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};
