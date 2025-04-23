import { slide as Menu } from "react-burger-menu";
import "./Header.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <header>
        <img src="src/assets/img/SavorLogo.png" alt="logo" />
        <div className="nav menu">
          <Link to="home">Home</Link>
          <Link to="map">Map</Link>
          <Link to="about">About</Link>
        </div>
      </header>

      <Menu right={true}>
        <Link id="home" className="menu-item" to="/">
          Home
        </Link>
        <Link id="map" className="menu-item" to="/">
          Map
        </Link>
        <Link id="about" className="menu-item" to="/">
          About
        </Link>
      </Menu>
    </>
  );
};

export default Header;
