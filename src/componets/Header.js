import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "../css/header.css";
const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar className="anchorCont">
        <Typography variant="h6" className="anchor">
          <a href="#home" className="aStyles">
            ./Home
          </a>
        </Typography>
        <Typography variant="h6" className="anchor">
          <a href="#expertise" className="aStyles">
            ./Expertise
          </a>
        </Typography>
        <Typography variant="h6" className="anchor">
          <a href="#work" className="aStyles">
            ./Work
          </a>
        </Typography>
        <Typography variant="h6" className="anchor">
          <a href="#experience" className="aStyles">
            ./Experience
          </a>
        </Typography>
        <Typography variant="h6" className="anchor">
          <a href="#contact" className="aStyles">
            ./Contact
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
