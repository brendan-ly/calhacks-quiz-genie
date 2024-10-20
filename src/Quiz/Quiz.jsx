import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "/src/img/logo-v2-transparent.png";
import QuizButton from "./QuizButton"

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  const [questionNumber, setQuestionsNumber] = useState("");

  const startQuiz = () => {
    setQuizStarted(true)
    setQuizFinished(false)
    setCurrentQuestionIndex(0)
    setScore(0)
  }

  const buttonColor = {
    'right': 'green',
    'wrong': 'red',
    'unclicked': "text-left py-3 px-4 h-auto whitespace-normal bg-newpurple-500 text-white rounded-md hover:bg-blue-600 max-w-96"
  }

  const handleQuizButtonClick = (e) => {
    return 
  }
  const handleNumberChange = (e) => {
    setQuestionsNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(null);
    try {
      // Set response from Flask API
      const res = await axios.post("http://localhost:5000/send-text", {
        inputText, questionNumber
      });
      console.log(res.data);
      setResponse(res.data);
      setLoading(false)

    } catch (error) {
      console.error("There was an error!", error);
      setLoading(false)
    }
  };

  const INPUT_CLASS = "w-full max-w-2xl indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newpurple-500 sm:text-sm sm:leading-6";

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex">
        <div className="w-1/4 bg-newpurple-500 p-8 rounded-none shadow-md flex flex-col items-center">
          <h4 className="text-xl font-semibold text-primary-foreground mb-4 flex flex-col items-center">
            <img src={logo} alt="Logo" width={80} />
            Menu
          </h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={handleButtonClick}
                className="w-full text-left p-2 text-white hover:bg-newpurple-700"
              >
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center mt-4 space-y-4"
          >
            <input
              type="text"
              placeholder="Enter your notes, or a subject!"
              className={INPUT_CLASS}
              value={inputText}
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="Number of questions"
              className={"w-full max-w-96 indent-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newpurple-500 sm:text-sm sm:leading-6"}
              value={questionNumber}
              onChange={handleNumberChange}
              max={10}
              min={1}
            /> 
            <button
              className="bg-newpurple-500 hover:bg-newpurple-700 text-white px-4 py-2 rounded-md"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>

            {response && (
              <>

                <div className="mt-4">
                  {response.questions.map((question, index) => (
                    <div key={index} className="mb-4">
                      <p className="center-align font-bold mb-3">
                        {index + 1}. {question.question}
                      </p>

                      <div className="flex flex-col space-y-2">
                        {question.answer.map((option, idx) => (
                          // <li key={idx}>{option}</li>
                          <QuizButton key={idx} id = {idx} isCorrect={option === question.key}
                          text={option} />
                        ))}
                      </div>
                      <p className="text-green-500">Answer: {question.key}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

        </div>
      </div>
    </div>
  );
}
