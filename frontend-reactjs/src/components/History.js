import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkLogin, getCookie } from "./Cookie";
import React from "react";
import { get, getWithToken, postWithToken } from "../API";
import TimeAgo from "../container/TimeAgo";
import Greeting from "../container/Greeting";
function History(props) {
  const hisPort = "2096";
  const [listHistory, setListHistory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (checkLogin()) {
      if (props.word !== undefined) {
        postWithToken(
          "/api/v1/history?word=" + props.word,
          hisPort,
          null,
          JSON.parse(getCookie("user")).access_token
        );
      }
      getWithToken(
        "/api/v1/history",
        hisPort,
        JSON.parse(getCookie("user")).access_token
      ).then((res) => {
        if (res.status === 200) {
          setListHistory(res.data);
          console.log(JSON.parse(getCookie("user")).access_token);
        }
      });
    }
  }, [props.word]);
  return (
    <div>
      <div className="text-center text-xl font-bold text-xl mb-2">
        Search history
      </div>
      {checkLogin() ? (
        <div className="overflow-y-auto " style={{ "max-height": "80vh" }}>
          <ul role="list" className="divide-y divide-gray-100">
            {listHistory.map((history) => (
              <li
                key={history.id}
                className="flex justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="mt-1 truncate text-xs leading-3 text-gray-500">
                      {history.word}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end pr-2">
                  <p className="mt-1 text-xs leading-3 text-gray-500">
                    <time dateTime={history.searchTime}>
                      <TimeAgo datetime={history.searchTime} />
                    </time>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div style={{ height: "60vh" }}>
          <div className="text-center text-xl h-full flex flex-col justify-center items-center">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gradient-to-r from-cyan-200 to-blue-300">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <Greeting />
                </div>
                <p className="text-gray-700 text-base">
                  Please login to save your search history
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <button
                  className="inline-block bg-blue-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default History;
