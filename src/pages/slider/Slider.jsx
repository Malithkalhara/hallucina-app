import React from "react";

export const Slider = () => {

  /**
 * Theme Name: Modern Slide In
 * Version: 2.0.0
 * Theme URL: http://sequencejs.com/themes/modern-slide-in/
 *
 * A minimalist theme for showcasing products
 *
 * This theme is powered by Sequence.js - The
 * responsive CSS animation framework for creating unique sliders,
 * presentations, banners, and other step-based applications.
 *
 * Author: Ian Lunn
 * Author URL: http://ianlunn.co.uk/
 *
 * Theme License: http://sequencejs.com/licenses/#free-theme
 * Sequence.js Licenses: http://sequencejs.com/licenses/
 *
 * Copyright © 2015 Ian Lunn Design Limited unless otherwise stated.
 */

// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

// Place your Sequence options here to override defaults
// See: http://sequencejs.com/documentation/#options
var options = {
  animateCanvas: false,
  phaseThreshold: false,
  preloader: true,
  reverseWhenNavigatingBackwards: true
}

// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);

  return (
    <div>
      <section id="aa-slider">
        <div className="aa-slider-area">
          <div id="sequence" className="seq">
            <div className="seq-screen">
              <ul className="seq-canvas">
                <li>
                  <div className="seq-model">
                    <img data-seq src="img/slider/1.jpg" alt="Men slide img" />
                  </div>
                  <div className="seq-title">
                    <span data-seq>Save Up to 75% Off</span>
                    <h2 data-seq>Men Collection</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      className="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>

                <li>
                  <div className="seq-model">
                    <img
                      data-seq
                      src="img/slider/2.jpg"
                      alt="Wristwatch slide img"
                    />
                  </div>
                  <div className="seq-title">
                    <span data-seq>Save Up to 40% Off</span>
                    <h2 data-seq>Wristwatch Collection</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      className="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>

                <li>
                  <div className="seq-model">
                    <img
                      data-seq
                      src="img/slider/3.jpg"
                      alt="Women Jeans slide img"
                    />
                  </div>
                  <div className="seq-title">
                    <span data-seq>Save Up to 75% Off</span>
                    <h2 data-seq>Jeans Collection</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      className="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>

                <li>
                  <div className="seq-model">
                    <img
                      data-seq
                      src="img/slider/4.jpg"
                      alt="Shoes slide img"
                    />
                  </div>
                  <div className="seq-title">
                    <span data-seq>Save Up to 75% Off</span>
                    <h2 data-seq>Exclusive Shoes</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      className="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>

                <li>
                  <div className="seq-model">
                    <img
                      data-seq
                      src="img/slider/5.jpg"
                      alt="Male Female slide img"
                    />
                  </div>
                  <div className="seq-title">
                    <span data-seq>Save Up to 50% Off</span>
                    <h2 data-seq>Best Collection</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      className="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <fieldset
              className="seq-nav"
              aria-controls="sequence"
              aria-label="Slider buttons"
            >
              <a type="button" className="seq-prev" aria-label="Previous">
                <span className="fa fa-angle-left"></span>
              </a>
              <a type="button" className="seq-next" aria-label="Next">
                <span className="fa fa-angle-right"></span>
              </a>
            </fieldset>
          </div>
        </div>
      </section>
    </div>
  );
};
