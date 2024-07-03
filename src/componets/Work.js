import React, { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "../css/work.css";
import blackTechWave from "../images/BlackTechWave.jpeg";
import techWave from "../images/techWave.jpeg";
import * as THREE from "three";
export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  //const mountRef = useRef(null);

  const projects = [
    {
      title: "Laps",
      des: "Tracks Speed/Distance while snowboard/skiing",
      lang: "React Native, JavaScript",
      image: blackTechWave,
    },
    {
      title: "title2",
      des: "description number 2",
      lang: "Python, javascript",
      image: techWave,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };
  /*
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a box
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);
*/
  return (
    <div className="workStyle" id="work">
      <div className="titleCont">
        <h1 className="titleShow">./Showroom</h1>
      </div>
      <div className="projectCont">
        <div className="navButton">
          <div onClick={handlePrev}>
            <MdKeyboardArrowLeft className="arrowLeft" />
          </div>
        </div>
        <div className="project">
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            className="image2"
          />
          <h3>{projects[currentIndex].title}</h3>
          <p>{projects[currentIndex].des}</p>
          <h5>{projects[currentIndex].lang}</h5>
        </div>
        <div className="navButton">
          <div onClick={handleNext}>
            <MdKeyboardArrowRight className="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}
// auto scrolling to the right with modals of my projects
// use three.js to create modals that have a
// picture of the program and when clicked on
// it brings you to the github project
// on the modal make sure include the following
// * Title
// * Description
// * stack/languages used
