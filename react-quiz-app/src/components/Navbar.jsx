import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#eee" }}>
      <Link to="/">Accueil</Link> |{" "}
      <Link to="/quiz">Quiz</Link> |{" "}
      <Link to="/result">Résultat</Link>
    </nav>
  );
}

export default Navbar;
