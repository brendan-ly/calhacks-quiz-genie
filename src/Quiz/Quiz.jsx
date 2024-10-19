import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");

// boilerplate flask
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload on form submit
    try {
      const res = await axios.post('http://localhost:5000/api/send-text', { text });
      setResponse(res.data.message);  // Set response from Flask API
    } catch (error) {
      console.error("There was an error!", error);
    }
  };

  const INPUT_CLASS = 'w-full max-w-2xl indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleInputSubmit = (e) => {
    // TODO
    return console.log("submit");
  }

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
    </div>
  );
}
