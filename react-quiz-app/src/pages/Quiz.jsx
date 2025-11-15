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
      setScore(score + 1);
    }

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      navigate("/result", {state: {score, total: questions.length}});
    }
  }

  return (
    <div className="quiz-container">
      <h1 style={{color: "#FC6E20"}}>Quiz</h1>
      <h2>Question {index + 1} / {questions.length}</h2>
      <p style={{
        backgroundColor: "#181B1B", 
        padding: "1rem", 
        borderRadius: "5px"
      }}>
        {current.question}
      </p>

      {current.options.map((opt, i) => (
        <button 
          key={i}
          onClick={() => handleAnswer(opt)}
          className="quiz-option"
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

export default Quiz