import me from "../images/Me.PNG";
import "../css/contact.css";
export default function Contact() {
  return (
    <div id="contact">
      <div className="contactStyle">
        <img src={me} alt="Headshot" className="image" />
      </div>
      <div className="reviewStyle">
        <h1>Reviews</h1>
      </div>
    </div>
  );
}
