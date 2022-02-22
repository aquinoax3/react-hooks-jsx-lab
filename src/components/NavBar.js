import React from "react";

const home = <a href="#home">Home</a>;
const about = <a href="#about">About</a>;

function NavBar() {
  // update the JSX being returned!
  return (
    <nav>
      NavBar
      {home}
      {about}
    </nav>
  );
}

export default NavBar;
