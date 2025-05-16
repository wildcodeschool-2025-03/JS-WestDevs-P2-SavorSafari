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
          <form id="input">
            <input
              id="first-name"
              name="First name *"
              type="text"
              defaultValue="First name *"
              required
            />{" "}
            <input
              id="surname"
              name="surname *"
              type="text"
              defaultValue="Surname *"
              required
            />
            <br />
            <input id="username" name="Username *" defaultValue="User name" />{" "}
            <input
              id="date"
              name="Date of birth *"
              type="text"
              defaultValue="Date of birth *"
              required
            />
            <br />
            <input
              id="mail"
              name="E mail *"
              type="text"
              defaultValue="E mail *"
              required
            />
            <br />
            <input
              id="password"
              name="Password *"
              type="text"
              defaultValue="Password *"
              required
            />
            <br />
          </form>
          <button className="log-in" type="button">
            <Link to="/userspace"> Log in</Link>
          </button>
          <p> * required.</p>
        </article>
      </section>
    </section>
  );
};

export default CreateUserSpace;
