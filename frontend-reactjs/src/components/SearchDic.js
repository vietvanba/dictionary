import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchDictionary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/search/" + searchTerm);
    }
  };
  return (
    <div className="w-full px-3">
      <div className="relative">
        <input
          type="text"
          className="w-full py-2 pl-10 pr-4 h-14 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={handleEnter}
        />
        <div className="absolute top-0 left-0 flex items-center h-full ml-3">
          {loading ? (
            <span className="animate-spin h-5 w-5 text-gray-600">&#9696;</span>
          ) : (
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
export default SearchDictionary;
