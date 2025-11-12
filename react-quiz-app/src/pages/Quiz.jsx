import { useNavigate } from "react-router-dom";
import questions from "../data/questions"
import { useState } from "react"
const navigate = useNavigate();

const Quiz = () => {

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const current = questions[index];

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
    <div>Quiz</div>
  )
}

export default Quiz