import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios';
import logo from '/src/img/logo-v2-transparent.png';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState("");

// boilerplate flask
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload on form submit
    try { // Set response from Flask API
      const res = await axios.post('http://localhost:5000/send-text',  { inputText })
    } 
    catch (error) {
      console.error("There was an error!", error);
    }
  };
  const INPUT_CLASS = 'w-full max-w-2xl indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newpurple-500 sm:text-sm sm:leading-6';


  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/')
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-1/4 bg-newpurple-500 p-8 rounded-none shadow-md">
          <h4 className="text-xl font-semibold text-white mb-4"><img src={logo} alt="Logo" width={50}/>Menu</h4>
          <ul className="space-y-2">
          <li>
              <button onClick = {handleButtonClick} className="w-full text-left p-2 text-white hover:bg-newpurple-700">
                Home
              </button>
            </li>
            
            <li>
              <button className="w-full text-left p-2 text-white hover:bg-newpurple-700">
                Quiz 1
              </button>
            </li>
            <li>
              <button className="w-full text-left p-2 text-white hover:bg-newpurple-700">
                Quiz 2
              </button>
            </li>
            <li>
              <button className="w-full text-left p-2 text-white hover:bg-newpurple-700">
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
              placeholder="Enter your notes, or a subject!"
              className={INPUT_CLASS}
              value={inputText}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex justify-center mt-4">
            <input // set to output later
              type="text"
              placeholder="Assistant feedback"
              className="absolute bottom-2 w-full max-w-2xl indent-2 pt-10 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newpurple-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}