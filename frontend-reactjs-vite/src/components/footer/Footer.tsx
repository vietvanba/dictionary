import { Link } from "react-router-dom";
import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="items">
        <div className="item">
          <Link to="https://github.com/vietvanba/dictionary" className="link">
            <img src="githublogo.png"></img>
            <div className="text">vietvanba/dictionary</div>
          </Link>
        </div>
        <div className="item">
          <Link
            to="https://join.skype.com/invite/kKGGgpjdlwg2"
            className="link"
          >
            <img src="skypeLogo.svg"></img>
            <div className="text">live:baviet19</div>
          </Link>
        </div>
        <div className="item">
          <Link to="mailto::baviet19@gmail.com" className="link">
            <img src="email.png"></img>
            <div className="text">baviet19@gmail.com</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
