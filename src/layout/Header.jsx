import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <header id="aa-header">
        <div className="aa-header-bottom">
          <div className="container" style={{ width: "100%" }}>
            <div className="row">
              <div className="col-md-12">
                <div className="aa-header-bottom-area">
                  <div className="row w-100">
                    <div className="col-3">
                      <div className="aa-logo">
                        <Link to="/">
                          <img
                            src="img/Picture1.jpg"
                            alt="logo img"
                            style={{
                              width: "100px",
                            }}></img>
                        </Link>
                      </div>
                    </div>
                    {/* <div className="col-6 d-flex justify-content-center align-items-center">
                      <div className="aa-search-box">
                        <form action="">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Search here ex. 'man' "
                          />
                          <button className="" type="submit">
                            <span className="fa fa-search"></span>
                          </button>
                        </form>
                      </div>
                    </div> */}

                    <div className="col-9 d-flex align-items-center justify-content-end">
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="aa-search-box">
                          <form action="">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Search here ex. 'man' "
                            />
                            <button className="" type="submit">
                              <span className="fa fa-search"></span>
                            </button>
                          </form>
                        </div>
                        <div className="aa-cartbox d-flex justify-content-center">
                          <a className="aa-cart-link" href="#">
                            {/* <div className="aa-browse-btn fa-xs"> */}
                            <FontAwesomeIcon icon={faCartShopping} size="lg" />
                            {/* </div> */}
                            {/* <span className="aa-cart-title">SHOPPING CART</span> */}
                            <span className="aa-cart-notify">5</span>
                          </a>

                          <div className="aa-cartbox-summary">
                            <ul>
                              <li>
                                <a className="aa-cartbox-img" href="#">
                                  <img
                                    src="img/woman-small-2.jpg"
                                    alt="img"></img>
                                </a>
                                <div className="aa-cartbox-info">
                                  <h4>
                                    <a href="#">Product Name</a>
                                  </h4>
                                  <p>1 x $250</p>
                                </div>
                                <a className="aa-remove-product" href="#">
                                  <span className="fa fa-times"></span>
                                </a>
                              </li>
                              <li>
                                <a className="aa-cartbox-img" href="#">
                                  <img
                                    src="img/woman-small-1.jpg"
                                    alt="img"></img>
                                </a>
                                <div className="aa-cartbox-info">
                                  <h4>
                                    <a href="#">Product Name</a>
                                  </h4>
                                  <p>1 x $250</p>
                                </div>
                                <a className="aa-remove-product" href="#">
                                  <span className="fa fa-times"></span>
                                </a>
                              </li>
                              <li>
                                <span className="aa-cartbox-total-title">
                                  {" "}
                                  Total{" "}
                                </span>
                                <span className="aa-cartbox-total-price">
                                  {" "}
                                  $500{" "}
                                </span>
                              </li>
                            </ul>
                            <a
                              className="aa-cartbox-checkout aa-primary-btn"
                              href="checkout.html">
                              Checkout
                            </a>
                          </div>
                        </div>
                        <div
                          className="aa-cartbox d-flex justify-content-center "
                          style={{ paddingLeft: "15px" }}>
                          <a className="aa-cart-link" href="#">
                            {/* <div className="aa-browse-btn fa-xs"> */}
                            <FontAwesomeIcon icon={faUser} size="lg" />
                            {/* </div> */}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
