import { useNavigate } from "react-router-dom";
import questions from "../data/questions"
import { useState } from "react"


const Quiz = () => {

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const current = questions[index];
  const navigate = useNavigate();

  function handleAnswer(option){
    if (option === current.answer) {
      setScore(score+1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1)
    } else{
      navigate("/result", {state : {score, total: questions.length}})
    }
  }
  return (
    <div style={{padding: "20px"}}>
      <h2>Question {index+1}/ {questions.length}</h2>
      <p>{current.question}</p>

      {current.options.map((opt, i)=>(
        <button 
          key={i}
          onClick={()=>handleAnswer(opt)}
          style={{ display: "block", margin: "10px 0", padding: "10px" }}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

export default Quiz