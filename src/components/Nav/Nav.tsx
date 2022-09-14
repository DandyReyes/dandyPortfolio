import React from "react";
import { SocialMedia } from "./SocialMedia/SocialMedia";
import "../css/Nav.min.css";

export default function Nav() {
  const links = [
    { key: 1, href: "#myHome", text: "Home" },
    { key: 2, href: "#about", text: "About" },
    { key: 3, href: "#projects", text: "Projects" },
    { key: 4, href: "#contact", text: "Contact" },
  ];
  return (
    <nav>
      <ul>
        <div id="nav-links">
          {links.map(({ key, href, text }) => (
            <li key={key}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </div>
        <div id="nav-icons">
          <SocialMedia />
        </div>
      </ul>
    </nav>
  );
}
