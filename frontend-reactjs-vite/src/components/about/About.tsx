import "./about.scss";
function About() {
  return (
    <div className="about">
      <div className="content">
        <div className="title">Thank you for visiting my project.</div>
        <div>This project aims to improve my development skills.</div>
        <div>
          All data used for the project has been fetched from the{" "}
          <a href="https://www.oxfordlearnersdictionaries.com/">
            Oxford Dictionary.
          </a>
        </div>
        <div>
          The purpose of the project is to learn. It is not used for commercial
          purposes.
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
export default About;
