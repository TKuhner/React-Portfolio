import SocialMediaIcons from "./SocialMediaIcons";

const Landing = () => {
  return (
    <section id="landing">
      {/* IMAGE */}
      <div id="landingImg">
        <img alt="profile" src={require("../assets/profile-image.png")} />
      </div>

      {/* TEXT */}
      <div id="landingText">
        <p id="nameP">
          Trevor{""}
          <span id="nameSpan">Kuhner</span>
        </p>

        <p id="blurb">
          I am a recent computer science graduate with a passion for coding and
          problem-solving. Eager to embark on a career in software development,
          I am currently honing my skills through a rigorous coding bootcamp to
          become a full-stack developer. Throughout my computer science studies,
          I gained a solid foundation in programming languages such as C++,
          Java, Python, and JavaScript, as well as hands-on experience with
          databases, algorithms, and software development methodologies.
        </p>
      {/* BUTTON */}
      <div>
        <SocialMediaIcons />
      </div>
      </div>

    </section>
  );
};

export default Landing;
