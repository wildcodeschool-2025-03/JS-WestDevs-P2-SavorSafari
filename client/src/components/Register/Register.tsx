import { useState } from "react";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => event.preventDefault();

  return (
    <main className="register-page">
      <img src="./public/img/SavorLogo.png" alt="logo savorsafari" />
      <h1>Log in</h1>
      <h2>It's a pleasure to see you again!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="E-mail or username"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
            />
          </label>
        </div>
        <button type="submit">Log in</button>
        <p>or</p>
        <button type="submit">Create an account</button>
      </form>
    </main>
  );
};

export default Register;
