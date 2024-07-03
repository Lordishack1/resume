import me from "../images/compCoding3.png";
import hand from "../images/HandWave2.webp";
import "../css/home.css";
export default function Home() {
  return (
    <div className="homeStyle" id="home">
      <div className="centering">
        <img src={me} alt="Headshot" className="image" />
      </div>
      <div className="text">
        <div className="title">
          <img src={hand} alt="HandWave Emoji" className="handStyle" />
          <h1 className="titleStyle">Hi, Im Isaac Stertzbach</h1>
        </div>
        <h3>
          Aspiring Software Developer that would love an opportunity to be on a
          winning team!
        </h3>
        <p>
          Im an aspiring software engineer that just graduated from Appalachian
          State University with a bachelors of Science. I have a great passion
          for creating software applications and love to be part the winning
          team!
        </p>
      </div>
    </div>
  );
}
