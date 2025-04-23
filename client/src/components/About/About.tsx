import "./About.css";

const About = () => {
  return (
    <>
      <div className="avatar woman">
        <img src="/src/assets/img/avatar_projet_2.webp" alt="avatar woman" />
      </div>

      <img src="/src/assets/img/SavorLogo.png" alt="logo" />

      <article className="text">
        <h1>About us:</h1>
        <p>
          At SavorSafari, we believe that cooking is much more than just a way
          to nourish ourselves; it's a sensory adventure that allows us to
          explore new cultures and create unforgettable memories. That’s why
          we’ve created a unique interactive platform that lets you travel the
          world right from your kitchen.
        </p>
        <h2>We wish you a wonderful journey!</h2>
      </article>
    </>
  );
};

export default About;
