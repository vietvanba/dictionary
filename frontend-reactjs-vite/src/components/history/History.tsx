import { useState } from "react";
import "./history.scss";
import Greeting from "../greeting/Greeting";
import { PopupForm } from "../popForm/PopupForm";
import { fieldsOfLogin } from "../type/type";

export const History = () => {
  const [open, setOpen] = useState(true);
  const [login, setLogin] = useState(false);

  return (
    <div className="history">
      <div className="title">
        <div className="text">History search</div>
      </div>
      <div className="body">
        {open && (
          <div className="welcome">
            <div className="box">
              <div className="title">{Greeting()}</div>
              <div className="content">
                Please login to save your search history
              </div>
              <div className="button" onClick={() => setLogin(true)}>
                Login
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
      <div className="footer"></div>
    </div>
  );
};
