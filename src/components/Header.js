import React from "react";

function Header({ onDarkModeClick }) {
  return (
    <header>
      <h2>Tiresome work</h2>
      <button onClick={onDarkModeClick}>Dark Mode</button>
    </header>
  );
}

export default Header;
