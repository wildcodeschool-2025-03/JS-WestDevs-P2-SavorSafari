import { useState } from "react";
import "./Register.css";
import { Link } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => event.preventDefault();

  return (
    <section className="register-page">
      <img src="./public/img/SavorLogo.png" alt="logo savorsafari" />
      <div className="section-register">
        <h1>Log in</h1>
        <h2>
          It's a pleasure to see <br /> you again!
        </h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="E-mail or Username"
            />
          </label>
          <br />
          <label htmlFor="password">
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </label>
          <br />
          <Link to="/userspace">
            <button type="submit">Log in</button>
          </Link>
          <p>or</p>
          <Link to="/create-user-space">
            <button type="submit">Create an account</button>
          </Link>
          <br />
          <button
            popoverTarget="forgot-password"
            type="button"
            popoverTargetAction="show"
          >
            Forgot password
          </button>
          <div id="forgot-password" popover="auto">
            <h2>Forgot your password ?</h2>
            <p>
              Enter the email address you used when you registered.
              <br /> You will receive a link to reset your password by email.
            </p>
            <input type="email" placeholder="E-mail or Username" />
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
