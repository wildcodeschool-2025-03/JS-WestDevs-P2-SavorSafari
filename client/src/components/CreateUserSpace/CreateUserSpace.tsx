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
            <input
              id="first-name"
              name=" First name *"
              defaultValue="First name *"
            />{" "}
            <input id="surname" name="Surname *" defaultValue="Surname *" />
            <br />
            <input id="username" name="Username *" defaultValue="User name" />{" "}
            <input
              id="date"
              name="Date of birth *"
              defaultValue="Date of birth *"
            />
            <br />
            <input id="mail" name="E mail *" defaultValue="E mail *" />
            <br />
            <input id="password" name="Password *" defaultValue="Passord *" />
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
