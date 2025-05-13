import { slide as Menu } from "react-burger-menu";
import "./Header.css";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <img src="src/assets/img/SavorLogo.png" alt="logo" />

        <div className="nav menu">
          <Link to="/"> Home </Link>
          <Link to="/world-map"> Map </Link>
          <Link to="/about"> About </Link>
          <Link to="/register"> Register </Link>
        </div>
      </header>

      <Menu
        right={true}
        isOpen={isOpen}
        onOpen={() => setIsOpen(!isOpen)}
        onClose={() => setIsOpen(!isOpen)}
      >
        <Link
          id="home"
          className="menu-item"
          to="/"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          id="map"
          className="menu-item"
          to="/world-map"
          onClick={() => setIsOpen(false)}
        >
          Map
        </Link>
        <Link
          id="about"
          className="menu-item"
          to="/about"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          id="register"
          className="menu-item"
          to="/register"
          onClick={() => setIsOpen(false)}
        >
          Register
        </Link>
      </Menu>
    </>
  );
};

export default Header;
