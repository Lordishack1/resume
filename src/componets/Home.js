import me from "../images/CompMan.png";
export default function Home() {
  const homeStyle = {
    backgroundColor: "blue",
    display: "flex",
    flexdirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "93vh",
    width: "100vw",
    color: "white",
  };
  const image = {
    width: "500px",
    height: "500px",
    marginLeft: "100px",
  };
  const text = {
    flex: 1,
    margin: "20px",
  };
  const centering = {
    flex: 0.5,
  };
  return (
    <div style={homeStyle} id="home">
      <div style={centering}>
        <img src={me} alt="Headshot" style={image} />
      </div>
      <div style={text}>
        <h1>Hi, Im Isaac Stertzbach</h1>
        <h4>Aspiring software developer</h4>
      </div>
    </div>
  );
}
