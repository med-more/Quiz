import { Link } from "react-router-dom"
const Home = () => {
  return (
    <div style={{textAlign: "center", marginTop: "40px"}}>
      <h1>Quiz App</h1>
      <p>Teste tes connaissances en développement web !</p>

      <Link to="/quiz">
        <button style={{padding: "10px 20px", marginTop: "20px"}}>
          Commencer le quiz
        </button>
      </Link>
    </div>
  )
}

export default Home