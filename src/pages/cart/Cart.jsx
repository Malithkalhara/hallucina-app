import React from "react";
import { Link } from "react-router-dom";
import { BreadCrums } from "../../components/BreadCrums/BreadCrums";

const Cart = () => {
  return (
    <div>
      <BreadCrums page="Cart" />

      <section id="cart-view">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-view-area">
                <div className="cart-view-table">
                  <form action="">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th></th>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <a className="remove" href="#">
                                <fa className="fa fa-close"></fa>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <img
                                  src="img/man/polo-shirt-1.png"
                                  alt="img"
                                ></img>
                              </a>
                            </td>
                            <td>
                              <a className="aa-cart-title" href="#">
                                Polo T-Shirt
                              </a>
                            </td>
                            <td>$250</td>
                            <td>
                              <input
                                className="aa-cart-quantity"
                                type="number"
                                value="1"
                              ></input>
                            </td>
                            <td>$250</td>
                          </tr>
                          <tr>
                            <td>
                              <a className="remove" href="#">
                                <fa className="fa fa-close"></fa>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <img
                                  src="img/man/polo-shirt-2.png"
                                  alt="img"
                                ></img>
                              </a>
                            </td>
                            <td>
                              <a className="aa-cart-title" href="#">
                                Polo T-Shirt
                              </a>
                            </td>
                            <td>$150</td>
                            <td>
                              <input
                                className="aa-cart-quantity"
                                type="number"
                                value="1"
                              ></input>
                            </td>
                            <td>$150</td>
                          </tr>
                          <tr>
                            <td>
                              <a className="remove" href="#">
                                <fa className="fa fa-close"></fa>
                              </a>
                            </td>
                            <td>
                              <a href="#">
                                <img
                                  src="img/man/polo-shirt-3.png"
                                  alt="img"
                                ></img>
                              </a>
                            </td>
                            <td>
                              <a className="aa-cart-title" href="#">
                                Polo T-Shirt
                              </a>
                            </td>
                            <td>$50</td>
                            <td>
                              <input
                                className="aa-cart-quantity"
                                type="number"
                                value="1"
                              ></input>
                            </td>
                            <td>$50</td>
                          </tr>
                          <tr>
                            <td colspan="6" className="aa-cart-view-bottom">
                              <div className="aa-cart-coupon">
                                <input
                                  className="aa-coupon-code"
                                  type="text"
                                  placeholder="Coupon"
                                ></input>
                                <input
                                  className="aa-cart-view-btn"
                                  type="submit"
                                  value="Apply Coupon"
                                ></input>
                              </div>
                              <input
                                className="aa-cart-view-btn"
                                type="submit"
                                value="Update Cart"
                              ></input>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </form>

                  <div className="cart-view-total">
                    <h4>Cart Totals</h4>
                    <table className="aa-totals-table">
                      <tbody>
                        <tr>
                          <th>Subtotal</th>
                          <td>$450</td>
                        </tr>
                        <tr>
                          <th>Total</th>
                          <td>$450</td>
                        </tr>
                      </tbody>
                    </table>
                    <Link to="/checkout" className="aa-cart-view-btn">
                      Proced to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
