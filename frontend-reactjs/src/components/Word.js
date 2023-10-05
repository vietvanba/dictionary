import React from "react";
import Header from "./Header";
import SearchDictionary from "./SearchDic";
import { DescriptionOfWord } from "./DescriptionOfWord";
import { useParams } from "react-router-dom";
import History from "./History";
function Word() {
  const { word } = useParams();
  return (
    <>
      <Header />
      <div className="grid grid-cols-8 gap-12">
        <div className="col-span-2 pl-12 pt-12">
          <History word={word} />
        </div>
        <div className="col-span-4">
          <SearchDictionary />
          <DescriptionOfWord word={word} />
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
}
export default Word;
