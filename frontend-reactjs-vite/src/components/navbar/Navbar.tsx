import { Link } from "react-router-dom";
import "./navbar.scss";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        <img src="logo192.jpg" alt="" />
        <div className="text">Viet Dictionary</div>
      </Link>
      <div className="items">
        <div className="item">
          <div className="history">
            <Link to="/history">History</Link>
          </div>
        </div>
        <div className="item">
          <div className="about">
            <Link to="/history">About</Link>
          </div>
        </div>
        <div className="item">
          <div className="history">
            <Link to="/history">History</Link>
          </div>
        </div>
      </div>
      <div className="login">
        <Link className="text" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};
