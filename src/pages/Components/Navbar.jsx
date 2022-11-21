import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/eOLogo.png";
import { navLinks } from "../../constants/constants";

export const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <nav>
      <img className="logo" src={logo} alt="" />

      <ul>
        {navLinks.map(({ path, title }, index) => (
          <li
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            <Link className={selectedIndex === index ? "active" : ""} to={path}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
