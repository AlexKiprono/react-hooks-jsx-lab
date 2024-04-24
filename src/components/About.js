import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a software Engineer</p>
      <img src={image} alt="Your Image Description" />
    </div>
  );
}

export default About;
