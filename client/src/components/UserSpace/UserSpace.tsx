import ConsultedRecipe from "./ConsultedRecipe";
import FormUsers from "./FormUsers";
import "./UserSpace.css";

function UserSpace() {
  const userName = "Head Chef";

  return (
    <section className="userspace">
      <div>
        <img src="/public/img/SavorLogo.png" alt="Logo SavorSafari" />
      </div>
      <section>
        <p>Hello {userName}</p>
      </section>
      <section>
        <ConsultedRecipe />
      </section>
      <section>
        <FormUsers />
      </section>
    </section>
  );
}

export default UserSpace;
