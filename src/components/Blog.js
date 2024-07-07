import { useState } from "react";
import blog1 from "../Images/blog-1.jpg";
import reply from "../Images/team.jpg";

export default function Blog() {
  const [showComments, setShowComments] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleLike = () => {
    setLikeClicked(!likeClicked);
  };

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
          <div className="blog-post">
            <div className="mt-2">
              <p className="w3-left">
                <button
                  className="w3-button w3-white w3-border"
                  onClick={handleLike}
                >
                  <b>
                    {likeClicked ? (
                      "✓ Liked"
                    ) : (
                      <span>
                        <i className="fa fa-thumbs-up"></i> Like
                      </span>
                    )}
                  </b>
                </button>
              </p>
              <p className="w3-right">
                <button className="w3-button w3-black" onClick={toggleComments}>
                  <b>Comments</b> <span className="w3-tag w3-white">2</span>
                </button>
              </p>
              <p className="w3-clear"></p>
            </div>

            {showComments && (
              <div>
                <div className="w3-row">
                  <br />
                  <hr />
                  {/* Comment 1 */}
                  <div>
                    <div className="w3-col l2 m3">
                      <img src={reply} alt="Avatar" style={{ width: "90px" }} />
                    </div>
                    <div className="w3-col l10 m9">
                      <h4 className="bg-light mb-1">
                        <b>
                          Amber&nbsp;
                          <span className="w3-opacity w3-medium mx-1">
                            December 26, 2022, 10:52 PM
                          </span>
                        </b>
                      </h4>
                      <p>
                        Love your blog page! Simply the best! Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Comment 2 */}
                <div className="w3-row mt-3">
                  <div className="w3-col l2 m3">
                    <img src={reply} alt="Avatar" style={{ width: "90px" }} />
                  </div>
                  <div className="w3-col l10 m9">
                    <h4 className="bg-light mb-1">
                      <b>
                        {" "}
                        Angie&nbsp;
                        <span className="w3-opacity w3-medium mx-1">
                          January 7, 2023, 9:12 PM
                        </span>
                      </b>
                    </h4>
                    <p>I Love your blogs!!</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
