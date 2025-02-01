import { useEffect,useState } from "react";
import { fetchQuestions } from "../api/Quizapi";
import QuizItem from "../components/QuizItem";

const QuizPage = () => {
    const [questions,setQuestions] =useState([]);
    const [answers,setAnswers] =useState({});

    useEffect(() => {
        fetchQuestions().then(setQuestions);
    },[])

    const handleAnswerSelect =(questionId,answer) => {
        setAnswers({...answers,[questionId]:answer})
    };
    const handleSubmit = () => {
        localStorage.setItem("quizAnswers",JSON.stringify(answers));
        window.location.href ="/result";
    };

    return(
        <div>
            <h2>Quiz</h2>
            {questions.map((q)=>(
                <QuizItem key ={q.id} question={q} onAnswerSelect={handleAnswerSelect}/>
            ))}
            <button onClick={handleSubmit}>Submit Quiz</button>
        </div>
    )
}
export default QuizPage;