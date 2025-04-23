import { slide as Menu } from "react-burger-menu";
import "./Header.css";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <header>
        <img src="src/assets/img/SavorLogo.png" alt="logo" />
        <div className="nav menu">
          <a href="Home">Home</a>
          <a href="Map">Map</a>
          <a href="About">About</a>
        </div>
      </header>

      <Menu right={true}>
        <Link id="Home" className="menu-item" to="/">
          Home
        </Link>
        <Link id="Map" className="menu-item" to="/">
          Map
        </Link>
        <Link id="About" className="menu-item" to="/">
          About
        </Link>
      </Menu>
    </>
  );
};

export default Header;
