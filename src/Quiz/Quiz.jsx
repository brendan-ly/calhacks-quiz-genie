import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";
import logo from '/src/img/logo-v2-transparent.png';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [inputText, setInputText] = useState("");

  const INPUT_CLASS = 'w-full max-w-2xl indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newpurple-500 sm:text-sm sm:leading-6';

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/')
  }

  const Menus = [
    { title: "Home", action: handleButtonClick },
    {
      title: "Quizzes",
      submenu: true,
      submenuItems: [
        { title: "Quiz 1" },
        { title: "Quiz 2" },
        { title: "Quiz 3" },
      ],
    }
  ];

  return (
    <div className="flex">
      <div className="bg-newpurple-700 h-screen p-5 pt-8 w-72 text-newgrey">
        <div className="inline-flex">
          <img src={logo} width={50} alt="Logo" />
          <h1 className="text-white origin-left text-3xl">Quiz Genie</h1>
        </div>
        
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <li key={index}>
              <button
                onClick={menu.action}
                className="w-full text-left p-2 text-white hover:bg-newpurple-500"
              >
                {menu.title}
              </button>

              {menu.submenu && (
                <ul className="pl-4">
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <li key={subIndex}>
                      <button className="w-full text-left p-2 text-white hover:bg-newpurple-500">
                        {submenuItem.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8">
          <h1 className="text-xl text-center mt-4 font-mono">
            What can I quiz you on today?
          </h1>
          
         <button className="mt-4 px-6 py-2 bg-newpurple-700 text-white font-semibold rounded-lg shadow-md hover:bg-newpurple-500 focus:outline-none focus:ring-2 focus:ring-opacity-75">Submit</button>

         <div className="inline-flex justify-center mt-4">
         <input
            name="input"
            placeholder="Enter your notes, or a subject!"
            type="text"
            className="w-full indent-2 rounded-md border-0 py-1.5 text-newgrey-900 shadow-sm ring-1 ring-inset ring-newpurple-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newpurple-500 sm:text-sm sm:leading-6"
          />
          <textarea class="resize-both rounded-md"></textarea>
         </div>
         
       </div>
      </div>
  );
}