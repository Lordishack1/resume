import { VscThreeBars } from "react-icons/vsc";
import "../css/header.css";

const Header = () => {
  return (
    <div className="anchorCont">
      <div className="symbol">
        <h1>HELLO</h1>
      </div>
      <div className="icon">
        <VscThreeBars style={{ color: "black", fontSize: "50px" }} />
      </div>
    </div>
  );
};

export default Header;
