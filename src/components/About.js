import React from "react";
import { image } from "../data/data";

const h2 = <h2>About Me</h2>;
const p = <p>What me get this!!!</p>;
const img = <img src={image} alt="I made this"></img>;

function About() {
  return (
    <div id="about">
      About
      {h2}
      {p}
      {img}
    </div>
  );
}

export default About;
