import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  const anchorCont = {
    display: "flex",
    flexdirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "6vh",
  };
  const anchor = {
    flex: 1,
  };
  const aStyles = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <AppBar position="relative">
      <Toolbar style={anchorCont}>
        <div></div>
        <Typography variant="h6" style={anchor}>
          <a href="#home" style={aStyles}>
            ./Home
          </a>
        </Typography>
        <Typography variant="h6" style={anchor}>
          <a href="#expertise" style={aStyles}>
            ./Expertise
          </a>
        </Typography>
        <Typography variant="h6" style={anchor}>
          <a href="#work" style={aStyles}>
            ./Work
          </a>
        </Typography>
        <Typography variant="h6" style={anchor}>
          <a href="#experience" style={aStyles}>
            ./Experience
          </a>
        </Typography>
        <Typography variant="h6" style={anchor}>
          <a href="#contact" style={aStyles}>
            ./Contact
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
