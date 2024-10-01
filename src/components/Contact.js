import map from "../Images/map.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Contact() {
  return (
    <div className="mt-5 w3-container w3-light-grey" id="contact">
      <h3 className="w3-center w3-xlarge">
        <b>CONTACT US</b>
      </h3>
      <div>
        <p className="mt-5 mb-2">
          <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>{" "}
          Karachi, Pakistan
        </p>
        <p className="mb-2">
          <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i>{" "}
          Phone: +92 33151515
        </p>
        <a
          href="mailto:usmanyousuf1137@gmail.com"
          className="text-decoration-none text-black"
        >
          <p>
            <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right text-black">
              {" "}
            </i>{" "}
            Email: fithub@gmail.com
          </p>
        </a>
        <LazyLoadImage
          src={map}
          className="w3-image w3-greyscale"
          style={{ width: "100%", marginTop: "48px" }}
          alt="map"
        />
      </div>
    </div>
  );
}
