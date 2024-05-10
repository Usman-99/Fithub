import React from "react";
import blog1 from "../Images/blog-1.jpg";

export default function Blog() {
  return (
    <>
      <div className="mt-5 w3-container w3-white w3-margin w3-padding-large">
        <div className="w3-center">
          <h3 className="mb-4 w3-center w3-xlarge">DAILY BLOGS</h3>
          <p className="w3-center w3-xlarge">
            BLOG-1, <span className="w3-opacity">May 2, 2016</span>
          </p>
        </div>
        <div className="w3-justify mb-3">
          <img
            src={blog1}
            alt="Girl Hat"
            style={{ width: "70%" }}
            className="rounded mx-auto d-block  w3-padding-16"
          />
          <p>
            <strong>More Hats!</strong> I am crazy about hats these days. Some
            text about this blog entry. Fashion fashion and mauris neque quam,
            fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id
            lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan
            tortor cursus at. Phasellus sed ultricies mi non congue ullam
            corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
          <br />
          <p className="w3-left">
            <button
              className="w3-button w3-white w3-border"
              onclick="likeFunction(this)"
            >
              <b>
                <i className="fa fa-thumbs-up" /> Like
              </b>
            </button>
          </p>
          <p className="w3-right">
            <button className="w3-button w3-black" id="myBtn">
              <b>Replies &nbsp;</b> <span className="w3-tag w3-white">1</span>
            </button>
          </p>
          <p className="w3-clear" />
          <div
            className="w3-row w3-margin-bottom"
            id="demo1"
            style={{ display: "none" }}
          >
            <hr />
            <div className="w3-col l2 m3"></div>
            <div className="w3-col l10 m9">
              <h4>
                George
                <span className="w3-opacity w3-medium">
                  May 3, 2015, 6:32 PM
                </span>
              </h4>
              <p>Great blog post! Following</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
