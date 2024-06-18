export default function Expertise() {
  const split = {
    display: "flex",
    flexdirection: "row",
  };
  const front = {
    flex: 1,
    border: "2px solid black",
    margin: "10px 50px",
  };
  const back = {
    flex: 1,
    border: "2px solid black",
    margin: "10px 50px",
  };
  const under = {
    borderbottom: "2px solid black",
  };
  const skills = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };
  const skillsContainer = {
    display: "flex",
    flexdirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const subTitle = {
    fontSize: "30px",
    color: "white",
    textAlign: "left",
    marginLeft: "50px",
  };
  const container = {
    backgroundColor: "red",
  };
  const titleContainer = {};

  return (
    <div style={container}>
      <div style={titleContainer}>
        <h1 style={subTitle}>./Skills</h1>
      </div>
      <div style={split} id="expertise">
        <div style={front}>
          <h1 style={under}>Front End</h1>
          <div style={skillsContainer}>
            <div style={skills}>
              <h4>HTML</h4>
              <h4>CSS</h4>
              <h4>Angular</h4>
              <h4>React</h4>
            </div>
            <div style={skills}>
              <h4>React Native</h4>
              <h4>jQuery</h4>
              <h4>TypeScript</h4>
            </div>
          </div>
        </div>
        <div style={back}>
          <h1 style={under}>Back End</h1>
          <div style={skillsContainer}>
            <div style={skills}>
              <h4>Java</h4>
              <h4>Python</h4>
              <h4>C++</h4>
              <h4>C#</h4>
            </div>
            <div style={skills}>
              <h4>JavaScript</h4>
              <h4>MySQL</h4>
              <h4>MongoDB</h4>
              <h4>Node</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
