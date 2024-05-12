import React from "react";
import web from "../Images/web2.jpg";
import { Link } from "react-router-dom";
import team from "../Images/pic.jpeg";

export default function Webimg() {
  return (
    <>
      <section id="web">
        <div className="webimg">
          <p style={{ textAlign: "justify" }}>
            <Link to="/Products">
              <img
                className="img-fluid"
                title="Join And Avail Discount on your first purchase!!"
                src={web}
                alt="Join Our fitness hub now!!"
              />
            </Link>
          </p>
        </div>
        <div className="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
          <div className="w3-quarter">
            <span className="w3-xxlarge">14+</span>
            <br />
            Partners
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">55+</span>
            <br />
            Store Products
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">89+</span>
            <br />
            Happy Clients
          </div>
          <div className="w3-quarter">
            <span className="w3-xxlarge">150+</span>
            <br />
            Registered Customers
          </div>
        </div>
      </section>
      <section id="review">
        <br />
        <br />
        <br />
        <div className="w3-container bg-light">
          <h3 className="mb-5 w3-center w3-xlarge">
            <b>CUSTOMER REVIEWS</b>
          </h3>
          <div className="w3-row">
            <div className="w3-col m2 text-center">
              <img
                className="w3-circle"
                src={team}
                style={{ width: 110, height: 110 }}
              />
            </div>
            <div className="mt-3 w3-col m8 w3-container">
              <h2>
                <b>Hamza </b>
                <span className="w3-opacity w3-medium">
                  {" "}
                  Jan, 2023, 6:40 PM
                </span>
              </h2>

              <p className="mt-2">
                Keep up the GREAT work! I am cheering for you!! Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <br />
            </div>
          </div>
          <br />
          <br />
          <div className="w3-row">
            <div className="w3-col m2 text-center">
              <img
                className="w3-circle"
                src={team}
                style={{ width: 110, height: 110 }}
              />
            </div>
            <div className="mt-3 w3-col m8 w3-container">
              <h2>
                <b>Umer </b>
                <span className="w3-opacity w3-medium">Dec, 2022, 9:12 PM</span>
              </h2>
              <p className="mt-2">
                Keep up the GREAT work! I am cheering for you!! Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <br />
            </div>
          </div>
          <br />
          <br />
          <div className="w3-row">
            <div className="w3-col m2 text-center">
              <img
                className="w3-circle"
                src={team}
                style={{ width: 110, height: 110 }}
              />
            </div>
            <div className="mt-3 w3-col m8 w3-container">
              <h2>
                <b>Ali </b>
                <span className="w3-opacity w3-medium">
                  Nov, 2022, 11:12 AM
                </span>
              </h2>
              <p className="mt-2">
                Keep up the GREAT work! I am cheering for you!! Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
