import React from "react";
import "./Navbar.css";
import logo from "../../assets/QUIZ -1.svg";
import { Link, NavLink } from "react-router-dom";

const navList = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Quiz",
    link: "/quiz",
  },
  {
    id: 3,
    title: "About",
    link: "/about",
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
  },
  {
    id: 5,
    title: "Login",
    link: "/login",
  },
];

const Navbar = () => {
  return (
    <header>
      <nav>
        <a href="/" className="logo-container">
          {" "}
          <img src={logo} alt="logo" />
        </a>
        <ul className="nav-list">
          {navList.map((item) => (
            <li key={item.id}>
              <NavLink
              to={item.link}
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-inactive"
                }
              >{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
