import ConsultedRecipe from "./ConsultedRecipe";
import FormUsers from "./FormUsers";
import "./UserSpace.css";

function UserSpace() {
  const userName = "Head Chef";

  return (
    <section className="userspace-element">
      <div className="logo-savorsafari">
        <img src="/public/img/SavorLogo.png" alt="Logo SavorSafari" />
      </div>
      <section className="hello-user">
        <p>Hello {userName}</p>
      </section>
      <section className="list-of-recipe-consulted">
        <ConsultedRecipe />
      </section>
      <section className="the-users-recipes">
        <FormUsers />
      </section>
    </section>
  );
}

export default UserSpace;
