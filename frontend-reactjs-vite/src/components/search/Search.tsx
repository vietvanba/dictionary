import "./search.scss";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [keyword, setKeyword] = useState("");
  //   const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
    console.log(e.currentTarget.value);
  };
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && keyword != "") {
      navigate("/search/" + keyword);
    }
  };
  const onClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (keyword != "") navigate("/search/" + keyword);
  };
  return (
    <div className="search">
      <input
        type="text"
        className="keyword"
        placeholder="Search..."
        value={keyword}
        onKeyPress={handleEnter}
        onChange={onChange}
      />
      <img className="button" src="search.svg" onClick={onClick}></img>
    </div>
  );
};
