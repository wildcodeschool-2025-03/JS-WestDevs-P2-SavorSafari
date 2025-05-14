import { Link } from "react-router";
import "./CreateUserSpace.css";

const CreateUserSpace = () => {
  return (
    <section className="create-user-space">
      <section className="formulaire">
        <article className="head">
          <img className="logo" src="img/logo rogner.png" alt="logo" />
          <div id="text">
            <h1> CREATING MY PERSONAL SPACE </h1>

            <p> We are delighted to have you with us! </p>
          </div>
        </article>

        <article className="form">
          <label id="input">
            <input name=" First name *" defaultValue="First name *" />{" "}
            <input name="Surname *" defaultValue="Surname *" />
            <br />
            <input name="Username *" defaultValue="User name" />{" "}
            <input name="Date of birth *" defaultValue="Date of birth *" />
            <br />
            <input name="E mail *" defaultValue="E mail *" />
            <br />
            <input name="Password *" defaultValue="Passord *" />
            <br />
          </label>
          <button className="log-in" type="button">
            <Link to="/user space"> Log in</Link>
          </button>
          <p> * required.</p>
        </article>
      </section>
    </section>
  );
};

export default CreateUserSpace;
