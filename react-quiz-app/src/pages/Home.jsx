import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="quiz-container">
      <h1 style={{color: "#FC6E20"}}>TechEdu Learning Center</h1>
      <p>Test Your Knowledge</p>

      <Link to="/quiz">
        <button className="start-btn">
          Start Quiz
        </button>
      </Link>
    </div>
  )
}

export default Home