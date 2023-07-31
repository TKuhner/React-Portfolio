const SocialMediaIcons = () => {
  return (
    <div id="socialIcons">
      <a
        id="linkedIn"
        href="https://www.linkedin.com/in/trevor-kuhner-897a83a3/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={require("../assets/linkedin.png")} />
      </a>
      <a id="github"
        href="https://www.github.com/TKuhner"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src={require("../assets/github.png")} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
