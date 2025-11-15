import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="quiz-nav">
      <div className="nav-container">
        <div className="nav-logo">TechEdu</div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/quiz" className="nav-link">Quiz</Link>
          <Link to="/result" className="nav-link">Resultat</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation