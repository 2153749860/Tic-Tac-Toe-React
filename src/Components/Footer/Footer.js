import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" className="icon">
        <img
          src="https://img.icons8.com/windows/32/000000/wikipedia.png"
          alt="wikipedia"
        />
      </a>
      <a
        href="https://github.com/2153749860/Tic-Tac-Toe-React"
        className="icon"
      >
        <img
          src="https://img.icons8.com/ios-filled/50/000000/github-2.png"
          alt="github"
        />
      </a>
    </footer>
  );
}
