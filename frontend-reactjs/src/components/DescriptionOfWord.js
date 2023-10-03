import { React, useEffect, useState } from "react";
import { get } from "../API";
import { loading } from "./Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import CarouselImage from "./CarouselImage";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export function sense(data) {
  return (
    <>
      <div>{data.sense}</div>
      <ul className="pl-4 pt-2">
        {data.examples.map((x) => {
          return <li className="list-disc text-base pt-2 italic">{x}</li>;
        })}
      </ul>
    </>
  );
}
export function pronunciation(word, pro, lang) {
  return (
    <>
      <div
        className={
          lang == "English"
            ? "hover:text-blue-600 text-lg flex items-center pt-2"
            : "hover:text-red-600 text-lg flex items-center pt-2"
        }
        onClick={() => {
          let audio = new Audio(pro.mp3_url);
          audio.play();
        }}
      >
        <FontAwesomeIcon
          className="pr-2"
          icon={faVolumeUp}
          title={word + " pronunciation " + lang}
        />
        <div
          className="pb-1"
          style={{ fontFamily: "'Lucida Grande', 'Lucida Sans Unicode'" }}
        >
          {pro.pronunciation}
        </div>
      </div>
    </>
  );
}
export function DescriptionOfWord(props) {
  const [json, SetJson] = useState();
  const [flag, SetFlag] = useState(0);
  useEffect(() => {
    SetFlag(0);
    SetJson(null);
    get("/api/v1/search?word=" + props.word)
      .then((res) => {
        if (res.status == 200) {
          SetJson(res.data);
        }
      })
      .catch((error) => {
        console.error(error);
        SetFlag(1);
      });
  }, [props.word]);
  return (
    <>
      {json && flag === 0 ? (
        <div className="w-full max-w-4xl mx-auto mt-4 font-sans">
          <div className="relative">
            <div className="items-end">
              <h1 className="flex-none text-4xl font-medium text-blue-600">
                {json.word}
                <FontAwesomeIcon
                  className="text-black text-2xl pb-1 pl-3 hover:text-yellow-300"
                  title="Favorite?"
                  icon={faStar}
                />
              </h1>
              <span className="italic">{json.partOfSpeech}</span>
            </div>
            {pronunciation(json.word, json.uk, "English")}
            {pronunciation(json.word, json.us, "American")}
            <ol className="list-decimal pl-4 text-lg pt-2">
              {json.senses.map((x) => {
                return <li className="pt-2">{sense(x)}</li>;
              })}
            </ol>
            <CarouselImage slides={json.images} />
          </div>
        </div>
      ) : flag === 1 ? (
        <div className="w-full max-w-4xl mx-auto mt-4">
          <div className="relative text-center text-6xl">
            <code className="font-bold text-blue-600">{props.word}</code> is not
            found!
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl mx-auto mt-4">
          <div className="relative">{loading()}</div>
        </div>
      )}
    </>
  );
}
