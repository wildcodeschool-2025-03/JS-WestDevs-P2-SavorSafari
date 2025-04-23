import "./BurgerMenu.css";

interface MenuProps {
  className: string;
}

function BurgerMenu() {
  return (
    <>
      <div className="menu">
        <div className="burger1" />
        <div className="burger2" />
        <div className="burger3" />
      </div>
    </>
  );
}

export default BurgerMenu;
