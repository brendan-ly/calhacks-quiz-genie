import React from "react";
import { useState, useEffect } from "react";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [inputText, setInputText] = useState("");

  const INPUT_CLASS = 'w-full max-w-2xl indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newpurple-500 sm:text-sm sm:leading-6';

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4">Menu</h4>
          <ul className="space-y-2">
            <li>
              <button className="w-full text-left p-2 bg-newpurple-500 text-white rounded-md hover:bg-newpurple-700">
                Quiz 1
              </button>
            </li>
            <li>
              <button className="w-full text-left p-2 bg-newpurple-500 text-white rounded-md hover:bg-newpurple-700">
                Quiz 2
              </button>
            </li>
            <li>
              <button className="w-full text-left p-2 bg-newpurple-500 text-white rounded-md hover:bg-newpurple-700">
                Quiz 3
              </button>
            </li>
          </ul>
        </div>

        <div className="w-3/4 pl-8">
          <h1 className="text-2xl font-bold text-center mt-4 font-mono">
            What can I quiz you on today?
          </h1>
          <div className="flex justify-center mt-4">
            <input
              type="text"
              placeholder="Enter your notes, or a subject"
              className={INPUT_CLASS}
              value={inputText}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-center mt-4">
            <input // set to output later
              type="text"
              placeholder="Assistant feedback"
              className="absolute bottom-0 w-full max-w-2xl indent-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newpurple-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}