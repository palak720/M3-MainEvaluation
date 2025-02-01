const QuizItem =({question,onAnswerSelect}) => {
    <div>
        <h3>{question.question}</h3>
        {question.options.map((option,index)=>(
             <label key ={index}>
                <input type="radio"
                name={question.id}
                value={option}
                onChange={()=>
                    onAnswerSelect(question.id,option)}/>
                    {option}
                
             </label>
        ))}
    </div>
};
export default QuizItem;