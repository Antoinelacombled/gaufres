import React from "react";

import waffle from "../assets/gauffres.gif";

function Header() {
  return (
    <header>
      <img className="hero-logo" src={waffle} />
      <h1 className="text-3xl font-bold underline text-red-500">hey</h1>
    </header>
  );
}

export default Header;
