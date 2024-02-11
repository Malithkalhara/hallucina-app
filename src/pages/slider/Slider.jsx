import React from "react";
import { Sequence } from "sequence";
import { useEffect } from "react";

export const Slider = () => {
  useEffect(() => {
    const sequenceElement = document.getElementById("sequence");

    const options = {
      animateCanvas: false,
      phaseThreshold: false,
      preloader: true,
      reverseWhenNavigatingBackwards: true,
    };

    const mySequence = Sequence(sequenceElement, options);

    return () => {
      // Try using destroy on sequenceElement directly
      if (sequenceElement && sequenceElement.destroy) {
        sequenceElement.destroy();
      }
    };
  }, []);
  return (
    <div>
      {/* <section id="aa-slider">
        <div classNameName="aa-slider-area">
          <div id="sequence" classNameName="seq">
            <div classNameName="seq-screen">
              <ul classNameName="seq-canvas">
                <li>
                  <div classNameName="seq-model">
                    <img data-seq src="img/slider/1.jpg" alt="Men slide img" /></img>
                  </div>
                  <div classNameName="seq-title">
                    <span data-seq>Save Up to 75% Off</span>
                    <h2 data-seq>Men Collection</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      classNameName="btn btn-secondary aa-shop-now-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>

                <li>
                  <div classNameName="seq-model">
                    <im></img>
                      data-seq
                      src="img/slider/2.jpg></img>
                      alt="Wristwatch slide img></img>
                    />
                  </div>
                  <div classNameName="seq-title">
                    <span data-seq>Save Up to 40% Off</span>
                    <h2 data-seq>Wristwatch Collection</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      classNameName="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>

                <li>
                  <div classNameName="seq-model">
                    <im></img>
                      data-seq
                      src="img/slider/3.jpg></img>
                      alt="Women Jeans slide img></img>
                    />
                  </div>
                  <div classNameName="seq-title">
                    <span data-seq>Save Up to 75% Off</span>
                    <h2 data-seq>Jeans Collection</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      classNameName="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>

                <li>
                  <div classNameName="seq-model">
                    <im></img>
                      data-seq
                      src="img/slider/4.jpg></img>
                      alt="Shoes slide img></img>
                    />
                  </div>
                  <div classNameName="seq-title">
                    <span data-seq>Save Up to 75% Off</span>
                    <h2 data-seq>Exclusive Shoes</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      classNameName="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>

                <li>
                  <div classNameName="seq-model">
                    <im></img>
                      data-seq
                      src="img/slider/5.jpg></img>
                      alt="Male Female slide img></img>
                    />
                  </div>
                  <div classNameName="seq-title">
                    <span data-seq>Save Up to 50% Off</span>
                    <h2 data-seq>Best Collection</h2>
                    <p data-seq>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Minus, illum.
                    </p>
                    <a
                      data-seq
                      href="#"
                      classNameName="aa-shop-now-btn aa-secondary-btn"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <fieldset
              classNameName="seq-nav"
              aria-controls="sequence"
              aria-label="Slider buttons"
            >
              <button type="button" classNameName="seq-prev" aria-label="Previous">
                <span classNameName="fa fa-angle-left"></span>
              </button>
              <button type="button" classNameName="seq-next" aria-label="Next">
                <span classNameName="fa fa-angle-right"></span>
              </button>
            </fieldset>
          </div>
        </div>
      </section> */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="img/slider/5.jpg" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="img/slider/5.jpg" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="img/slider/5.jpg" className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
