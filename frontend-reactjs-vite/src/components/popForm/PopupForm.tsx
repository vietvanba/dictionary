import "./popupForm.scss";
import { formField } from "../type/type";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  fields: formField[];
  buttonTitle: string;
};

export const PopupForm = (props: Props) => {
  const [formData, setFormData] = useState([]);

  const notify = (message: string) => toast.success(message);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    notify("submit");
    console.log(formData);
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName.toLowerCase()]: value,
    }));
  };
  return (
    <div className="form">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          <img src="cancel.svg" />
        </span>
        <h1>{props.title}</h1>
        <form onSubmit={handleSubmit}>
          {props.fields.map((x) => (
            <div className="item" key={x.title}>
              <label>{x.title}:</label>
              <input
                type={x.type}
                placeholder={x.title}
                onChange={(e) => handleInputChange(e, x.title)}
              />
            </div>
          ))}
          <div className="button">
            <button>{props.buttonTitle}</button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
