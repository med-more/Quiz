import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav style={{padding: "15px", background: "#eee"}}>
        <Link to="/">Accueil</Link> || {" "}
        <Link to="/quiz">Quiz</Link> || {" "}
        <Link to="/result">Resultat</Link> || {" "}
     </nav>
  )
}

export default Navbar