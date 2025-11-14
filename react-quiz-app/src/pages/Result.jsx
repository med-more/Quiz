import { useLocation, useNavigate } from "react-router-dom"
const Result = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const total = location.state?.total || 0;

  let message = "";

  if (score < 5) {
    message = "Peut mieux faire"
  } else if(score >=5 && score<=8) {
    message = "Bravo"
  } else if(score > 8){
    message = "Excellent"
  }
  return (
    <div style={{textAlign: "center", marginTop: "40px"}}>
      <h1>Result</h1>
      <h2>{score} / {total}</h2>

      <h3 style={{marginTop: "20px"}}>{message}</h3>

      <button
        onClick={() => navigate("/quiz")}
        style={{marginTop: "20px", padding:"10px 20px"}}
      >Rejouer</button>
    </div>
  );
}

export default Result