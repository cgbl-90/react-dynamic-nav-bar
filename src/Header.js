import { useState } from "react";
import carmen from "./carmen.svg";
import menu from "./menu.png";
import socialLinks from "./social.js";
import sectionLinks from "./links.js";
import "./sass/App.css";

function Header() {
  const [showToggleDown, setShowToggleDown] = useState(false);
  const [style, setStyle] = useState(false);

  return (
    <>
      <header className="flex">
        <img src={carmen} alt="Carmen Lopez" className="logo" />
        <img
          src={menu}
          alt="menu"
          className="logo toggleBtn"
          onClick={() => setStyle(!style)}
        />
        <nav className="toggleNav">
          {sectionLinks.map((el) => {
            const { id, name, url } = el;
            return (
              <a
                key={id}
                href={url}
                rel="noopener noreferrer"
                className="links"
                onClick={(e) => e.preventDefault()} // Prevent from refresh, comment this when links are set properly
              >
                {name}
              </a>
            );
          })}
        </nav>
        <nav className="socialNav">
          {socialLinks.map((el) => {
            const { id, name, url, img } = el;
            return (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img className="social" key={id} src={img} alt={name} />
              </a>
            );
          })}
        </nav>
      </header>
      <nav
        className="toggleDown"
        style={{
          display: style ? "block" : "none",
        }}
      >
        {sectionLinks.map((el) => {
          const { id, name, url } = el;
          return (
            <a
              key={id}
              href={url}
              rel="noopener noreferrer"
              className="links links-down"
              onClick={(e) => e.preventDefault()} // Prevent from refresh, comment this when links are set properly
            >
              {name}
            </a>
          );
        })}
      </nav>
    </>
  );
}

export default Header;
