import { useNavigate } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer w3-center w3-black w3-padding-64">
      <button
        className="btn btn-success"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <i className="fa fa-arrow-up w3-margin-right"></i>Go to Top
      </button>
      <div className="w3-xlarge w3-section">
        <ul className="flex gap-4" style={{ display: "-webkit-inline-flex" }}>
          <li>
            <a href="mailto:usmanyousuf1137@gmail.com">
              <SiGmail size={25} className="" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/muhammadusmanyousuf/">
              <FaLinkedin size={25} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Usman-99?tab=repositories">
              <FaGithub size={25} />
            </a>
          </li>
        </ul>
      </div>
      <p className="w3-large text-info">
        This website is made by Muhammad Usman Yousuf
        <b className="px-3">&copy;</b>
      </p>
      <br />
      <button
        className="btn btn-light border-info  btn-small  w3-margin-bottom"
        style={{ border: "4px solid" }}
        onClick={() => {
          navigate("/Products");
          window.scrollTo(0, 0);
        }}
      >
        <b>Buy now</b>
      </button>
    </footer>
  );
}
