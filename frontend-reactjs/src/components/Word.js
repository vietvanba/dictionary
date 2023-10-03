import React from "react";
import Header from "./Header";
import SearchDictionary from "./SearchDic";
import { DescriptionOfWord } from "./DescriptionOfWord";
import { useParams } from "react-router-dom";
export function Word() {
  const { word } = useParams();
  return (
    <>
      <Header />
      <SearchDictionary />
      <DescriptionOfWord word={word} />
    </>
  );
}
