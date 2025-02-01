import { useEffect,useState } from "react";
import { fetchQuestions } from "../api/Quizapi";

const ResultPage = () => {
    const [score,setScore] =useState(0);

    useEffect(()=>{
        const storedAnswers =JSON.parse(localStorage.getItem("quizAnswers")) || {};
        fetchQuestions().then((questions) => {
            let correct =0;
            questions.forEach((q) => {
                if(storedAnswers[q.id] === q.correctAnswer) correct++;
            })
            setScore(correct);
            });
        },[]);

        return(
            <div>
                <h2>QuiZ Results</h2>
                <p>Your Score:{score}</p>
            </div>
        )
    
}
export default ResultPage;