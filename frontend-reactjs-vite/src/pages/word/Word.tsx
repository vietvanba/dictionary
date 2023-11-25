import "./word.scss";
import { useParams } from "react-router-dom";

export const Word = () => {
  const { word } = useParams();
  return <div className="word">{word}</div>;
};
