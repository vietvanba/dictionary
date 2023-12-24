import { Link } from "react-router-dom";
import "./navbar.scss";
import { useState } from "react";
import { PopupForm } from "../popForm/PopupForm";
import { fieldsOfLogin, fieldsOfRegister, formField } from "../type/type";
export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

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
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="item">
          <div className="history">
            <Link to="/history">History</Link>
          </div>
        </div>
      </div>
      <div className="login">
        <div className="text" onClick={() => setLogin(true)}>
          Login
        </div>
        <div className="text" onClick={() => setRegister(true)}>
          Register
        </div>
      </div>
      <div className="hamburger">
        {open ? (
          <img src="cancel.svg" alt="menu" onClick={() => setOpen(false)} />
        ) : (
          <img
            src="Hamburger_icon.svg"
            alt="menu"
            onClick={() => setOpen(true)}
          />
        )}
        {open && (
          <div className="menu">
            <div className="items">
              <Link className="item" to="/history">
                History
              </Link>
              <Link className="item" to="/about">
                About
              </Link>
              <Link className="item" to="/history">
                History
              </Link>
              <div className="item" onClick={() => setLogin(true)}>
                Login
              </div>
              <div className="item" onClick={() => setRegister(true)}>
                Register
              </div>
            </div>
          </div>
        )}
      </div>
      {login && (
        <PopupForm
          setOpen={setLogin}
          title="Login"
          fields={fieldsOfLogin}
          buttonTitle="Login"
        />
      )}
      {register && (
        <PopupForm
          setOpen={setRegister}
          title="Register for a new account."
          fields={fieldsOfRegister}
          buttonTitle="Register"
        />
      )}
    </div>
  );
};
