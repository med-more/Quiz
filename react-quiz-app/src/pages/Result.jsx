import { useLocation, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const total = location.state?.total || 0;

  let message = "";
  let messageColor = "#FFE7D0";

  if (score < 5) {
    message = "Peut mieux faire";
    messageColor = "#F44336";
  } else if(score >= 5 && score <= 8) {
    message = "Bravo";
    messageColor = "#FC6E20";
  } else if(score > 8) {
    message = "Excellent";
    messageColor = "#4CAF50";
  }

  return (
    <div className="quiz-container">
      <h1 style={{color: "#FC6E20"}}>Result</h1>
      
      <div style={{
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        backgroundColor: "#181B1B",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto 2rem",
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#FC6E20",
        border: "5px solid #FC6E20"
      }}>
        {score} / {total}
      </div>

      <h3 style={{color: messageColor, marginTop: "20px"}}>{message}</h3>

      <button
        onClick={() => navigate("/quiz")}
        className="replay-btn"
      >
        Rejouer
      </button>
    </div>
  );
}

export default Result