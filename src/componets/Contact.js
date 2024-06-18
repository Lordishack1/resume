import me from "../images/Me.PNG";
export default function Contact() {
  const contact = {
    backgroundColor: "blue",
    display: "flex",
    flexdirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };
  const image = {
    height: "150px",
    width: "100px",
    borderRadius: "100px",
    border: "2px solid black",
    margin: "20px",
  };
  const contactStyle = {};
  const reviewStyle = {};
  return (
    <div id="contact" style={contact}>
      <div style={contactStyle}>
        <img src={me} alt="Headshot" style={image} />
      </div>
      <div style={reviewStyle}>
        <h1>Reviews</h1>
      </div>
    </div>
  );
}
