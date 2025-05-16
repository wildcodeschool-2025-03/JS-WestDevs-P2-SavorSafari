import ConsultedRecipe from "./ConsultedRecipe";
import FormUsers from "./FormUsers";
import "./UserSpace.css";

function UserSpace() {
  const userName = "Head Chef";

  return (
    <section className="userspace-element">
      <div>
        <img src="/public/img/SavorLogo.png" alt="Logo SavorSafari" />
      </div>
      <section className="hello-user">
        <p>Hello {userName}</p>
      </section>
      <section>
        <ConsultedRecipe />
      </section>
      <section className="the-users-recipes">
        <FormUsers />
      </section>
    </section>
  );
}

export default UserSpace;
