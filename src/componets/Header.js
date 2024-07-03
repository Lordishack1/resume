import "../css/header.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  const email = "isaac.stertzbach@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/isaac-stertzbach-65545b172";
  const githubUrl = "https://github.com/Lordishack1";
  const pdfUrl = "../images/Resume.pdf";

  const handleEmailClick = () => {
    window.open(`mailto:${email}`, "_blank");
  };

  return (
    <div className="flexCont">
      <div className="name">
        <p>Isaac Stertzbach</p>
      </div>
      <div className="iconsRight">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="anc"
        >
          Resume
        </a>
        <MdOutlineEmail className="icon" onClick={handleEmailClick} />
        <a
          className="anc"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="icon" />
        </a>
        <a
          className="anc"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
