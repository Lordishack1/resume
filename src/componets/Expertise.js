import "../css/expertise.css";
import { useInView } from "react-intersection-observer";
export default function Expertise() {
  const { ref: splitRef, inView: splitInView } = useInView({
    triggerOnce: true,
  });
  const { ref: subTitleRef, inView: subTitleInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="container">
      <h1
        ref={subTitleRef}
        className={`subTitle ${subTitleInView ? "animate" : ""}`}
      >
        ./Expertise
      </h1>
      <div
        ref={splitRef}
        className={`split ${splitInView ? "animate" : ""}`}
        id="expertise"
      >
        <div className="front">
          <h1 className="under">Front End</h1>
          <div className="skillsContainer">
            <div className="skills">
              <h4>
                <i className="devicon-html5-plain colored"></i> HTML
              </h4>
              <h4>
                <i class="devicon-css3-plain colored"></i> CSS
              </h4>
              <h4>
                <i class="devicon-angularjs-plain colored"></i> Angular
              </h4>
            </div>
            <div className="skills">
              <h4>
                <i class="devicon-react-original colored"></i> React
              </h4>
              <h4>
                <i class="devicon-jquery-plain colored"></i> jQuery
              </h4>
              <h4>
                <i class="devicon-typescript-plain colored"></i> TypeScript
              </h4>
            </div>
          </div>
        </div>
        <div className="back">
          <h1 className="under">Back End</h1>
          <div className="skillsContainer">
            <div className="skills">
              <h4>
                <i class="devicon-java-plain colored"></i> Java
              </h4>
              <h4>
                <i class="devicon-python-plain colored"></i> Python
              </h4>
              <h4>
                <i class="devicon-cplusplus-plain colored"></i> C++
              </h4>
              <h4>
                <i class="devicon-csharp-plain colored"></i> C#
              </h4>
            </div>
            <div className="skills">
              <h4>
                <i class="devicon-javascript-plain colored"></i> JavaScript
              </h4>
              <h4>
                <i class="devicon-mysql-original colored"></i> MySQL
              </h4>
              <h4>
                <i class="devicon-mongodb-plain colored"></i> MongoDB
              </h4>
              <h4>
                <i class="devicon-nodejs-plain colored"></i> Node
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
