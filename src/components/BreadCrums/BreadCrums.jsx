import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import fashionHead from "../../assets/img/fashion/fashion-header-bg-8.jpg";

export const BreadCrums = ({ page }) => {
  return (
    <section id="aa-catg-head-banner">
      <img src={fashionHead} alt="fashion img"></img>
      <div className="aa-catg-head-banner-area">
        <div className="container">
          <div className="aa-catg-head-banner-content d-flex flex-column gap-4">
            <h2>{page} Page</h2>
            <ol className="breadcrumb justify-content-center align-content-center gap-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faArrowRight} color="white" />
              </li>
              <li className="active text-warning">{page}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
