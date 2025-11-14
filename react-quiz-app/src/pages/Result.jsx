import { useLocation, useNavigate } from "react-router-dom"
const Result = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const score = location.state?.score || 0;
  const total = location.state?.total || 0;
  return (
    <div style={{textAlign: "center", marginTop: "40px"}}>
      <h1>Result</h1>
      <h2>{score} / {total}</h2>

      <button
        onClick={() => navigate("/quiz")}
        style={{marginTop: "20px", padding:"10px 20px"}}
      >Rejouer</button>
    </div>
  );
}

export default Result