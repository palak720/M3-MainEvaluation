import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePage from "./components/Home";
import QuizPage from "./components/Quiz";
import ResultPage from "./components/Result";
import { AuthProvider } from "./context/AuthContext";
import { fetchQuestions } from "./api/Quizapi";


function App () {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element ={<HomePage />} />
          <Route path ="/quiz" element={<QuizPage />} />
          <Route path ="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
export default App;