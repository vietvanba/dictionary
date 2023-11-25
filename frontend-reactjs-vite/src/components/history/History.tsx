import { useState } from "react";
import "./history.scss";
import Greeting from "../greeting/Greeting";

export const History = () => {
  const [open, setOpen] = useState(true);
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
              <div className="button">Login</div>
            </div>
          </div>
        )}
      </div>
      <div className="footer"></div>
    </div>
  );
};
