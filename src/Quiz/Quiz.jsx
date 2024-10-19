import React from "react";
import { useState, useEffect } from "react";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [inputText, setInputText] = useState("");

  const INPUT_CLASS =
    "w-full max-w-2xl indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    
  };

  return (
    <div className="container mx-auto px-4">
      <h3 className="text-2xl font-bold text-center mt-4 font-mono">
        What can I quiz you on today?
      </h3>
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
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
