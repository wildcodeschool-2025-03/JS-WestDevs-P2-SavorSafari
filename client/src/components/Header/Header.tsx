import { slide as Menu } from "react-burger-menu";
import "./Header.css";
import { Link } from "react-router";

const Header = () => {
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

      <Menu right={true}>
        <Link id="home" className="menu-item" to="/" />
        Home
        <Link id="map" className="menu-item" to="/world-map" />
        Map
        <Link id="about" className="menu-item" to="/about" />
        About
        <Link id="register" className="menu-item" to="/register" />
      </Menu>
    </>
  );
};

export default Header;
