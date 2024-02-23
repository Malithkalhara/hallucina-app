import React from "react";

export const Products = () => {
  return (
    <div>
      <section id="aa-product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="aa-product-area">
                  <div className="aa-product-inner">
                    <ul className="nav nav-tabs aa-products-tab">
                      <li className="active">
                        <a href="#men" data-toggle="tab">
                          Men
                        </a>
                      </li>
                      <li>
                        <a href="#women" data-toggle="tab">
                          Women
                        </a>
                      </li>
                      <li>
                        <a href="#sports" data-toggle="tab">
                          Sports
                        </a>
                      </li>
                      <li>
                        <a href="#electronics" data-toggle="tab">
                          Electronics
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content">
                      <div className="tab-pane in active" id="men">
                        <ul className="aa-product-catg">
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/polo-shirt-2.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Polo T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/t-shirt-1.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/polo-shirt-1.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Polo T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/polo-shirt-4.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Polo T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-hot" href="#">
                              HOT!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/polo-shirt-5.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/polo-shirt-6.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Polo T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/polo-shirt-2.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Polo T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/man/t-shirt-1.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">T-Shirt</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>
                        </ul>
                        <a className="aa-browse-btn" href="#">
                          Browse all Product
                          <span className="fa fa-long-arrow-right"></span>
                        </a>
                      </div>

                      <div className="tab-pane fade" id="women">
                        <ul className="aa-product-catg">
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-1.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">This is Title</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-2.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-hot" href="#">
                              HOT!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-3.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-4.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-5.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>

                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-6.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-7.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/women/girl-1.jpg"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>
                        </ul>
                        <a className="aa-browse-btn" href="#">
                          Browse all Product
                          <span className="fa fa-long-arrow-right"></span>
                        </a>
                      </div>

                      <div className="tab-pane fade" id="sports">
                        <ul className="aa-product-catg">
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">This is Title</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-2.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-3.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-4.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-hot" href="#">
                              HOT!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-5.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-6.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-7.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/sports/sport-8.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="tab-pane fade" id="electronics">
                        <ul className="aa-product-catg">
                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-1.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">This is Title</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-2.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-3.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-4.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-hot" href="#">
                              HOT!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-5.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-6.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-7.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                                <span className="aa-product-price">
                                  <del>$65.50</del>
                                </span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sale" href="#">
                              SALE!
                            </span>
                          </li>

                          <li>
                            <figure>
                              <a className="aa-product-img" href="#">
                                <img
                                  src="img/electronics/electronic-8.png"
                                  alt="polo shirt img"
                                />
                              </a>
                              <a className="aa-add-card-btn" href="#">
                                <span className="fa fa-shopping-cart"></span>Add To
                                Cart
                              </a>
                              <figcaption>
                                <h4 className="aa-product-title">
                                  <a href="#">Lorem ipsum doller</a>
                                </h4>
                                <span className="aa-product-price">$45.50</span>
                              </figcaption>
                            </figure>
                            <div className="aa-product-hvr-content">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                              >
                                <span className="fa fa-heart-o"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Compare"
                              >
                                <span className="fa fa-exchange"></span>
                              </a>
                              <a
                                href="#"
                                data-toggle2="tooltip"
                                data-placement="top"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick-view-modal"
                              >
                                <span className="fa fa-search"></span>
                              </a>
                            </div>

                            <span className="aa-badge aa-sold-out" href="#">
                              Sold Out!
                            </span>
                          </li>
                        </ul>
                        <a className="aa-browse-btn" href="#">
                          Browse all Product
                          <span className="fa fa-long-arrow-right"></span>
                        </a>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id="quick-view-modal"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="myModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-body">
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            >
                              &times;
                            </button>
                            <div className="row">
                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="aa-product-view-slider">
                                  <div
                                    className="simpleLens-gallery-container"
                                    id="demo-1"
                                  >
                                    <div className="simpleLens-container">
                                      <div className="simpleLens-big-image-container">
                                        <a
                                          className="simpleLens-lens-image"
                                          data-lens-image="img/view-slider/large/polo-shirt-1.png"
                                        >
                                          <img
                                            src="img/view-slider/medium/polo-shirt-1.png"
                                            className="simpleLens-big-image"
                                          />
                                        </a>
                                      </div>
                                    </div>
                                    <div className="simpleLens-thumbnails-container">
                                      <a
                                        href="#"
                                        className="simpleLens-thumbnail-wrapper"
                                        data-lens-image="img/view-slider/large/polo-shirt-1.png"
                                        data-big-image="img/view-slider/medium/polo-shirt-1.png"
                                      >
                                        <img src="img/view-slider/thumbnail/polo-shirt-1.png" />
                                      </a>
                                      <a
                                        href="#"
                                        className="simpleLens-thumbnail-wrapper"
                                        data-lens-image="img/view-slider/large/polo-shirt-3.png"
                                        data-big-image="img/view-slider/medium/polo-shirt-3.png"
                                      >
                                        <img src="img/view-slider/thumbnail/polo-shirt-3.png" />
                                      </a>

                                      <a
                                        href="#"
                                        className="simpleLens-thumbnail-wrapper"
                                        data-lens-image="img/view-slider/large/polo-shirt-4.png"
                                        data-big-image="img/view-slider/medium/polo-shirt-4.png"
                                      >
                                        <img src="img/view-slider/thumbnail/polo-shirt-4.png" />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="aa-product-view-content">
                                  <h3>T-Shirt</h3>
                                  <div className="aa-price-block">
                                    <span className="aa-product-view-price">
                                      $34.99
                                    </span>
                                    <p className="aa-product-avilability">
                                      Avilability: <span>In stock</span>
                                    </p>
                                  </div>
                                  <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Officiis animi, veritatis
                                    quae repudiandae quod nulla porro quidem,
                                    itaque quis quaerat!
                                  </p>
                                  <h4>Size</h4>
                                  <div className="aa-prod-view-size">
                                    <a href="#">S</a>
                                    <a href="#">M</a>
                                    <a href="#">L</a>
                                    <a href="#">XL</a>
                                  </div>
                                  <div className="aa-prod-quantity">
                                    <form action="">
                                      <select name="" id="">
                                        <option value="0" selected="1">
                                          1
                                        </option>
                                        <option value="1">2</option>
                                        <option value="2">3</option>
                                        <option value="3">4</option>
                                        <option value="4">5</option>
                                        <option value="5">6</option>
                                      </select>
                                    </form>
                                    <p className="aa-prod-category">
                                      Category: <a href="#">Polo T-Shirt</a>
                                    </p>
                                  </div>
                                  <div className="aa-prod-view-bottom">
                                    <a href="#" className="aa-add-to-cart-btn">
                                      <span className="fa fa-shopping-cart"></span>
                                      Add To Cart
                                    </a>
                                    <a href="#" className="aa-add-to-cart-btn">
                                      View Details
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
