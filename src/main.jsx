import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Quiz from './Quiz/Quiz.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)