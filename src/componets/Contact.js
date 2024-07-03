import "../css/contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Contact() {
  const email = "isaac.stertzbach@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/isaac-stertzbach-65545b172";
  const githubUrl = "https://github.com/Lordishack1";

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, "_blank");
  };

  return (
    <div id="contact" className="contactContSplit">
      <div className="contactCont">
        <h2>Contact Me</h2>
        <div className="info">
          <p>
            I would love to help just send me email and we can start talking!
          </p>
          <p>Email: Isaac.stertzbach@gmail.com</p>
          <div>
            <MdOutlineEmail className="icons" onClick={handleEmailClick} />
            <a
              className="anc"
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="icons" />
            </a>
            <a
              className="anc"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icons" />
            </a>
          </div>
        </div>
      </div>
      <div className="reviewCont">
        <h2>Reviews</h2>
        <div className="info">
          <p>No reivews yet!</p>
        </div>
      </div>
    </div>
  );
}
