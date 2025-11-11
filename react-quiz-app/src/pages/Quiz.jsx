import questions from "../data/questions"
import { useState } from "react"

const Quiz = () => {

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const current = questions[index];
  return (
    <div>Quiz</div>
  )
}

export default Quiz