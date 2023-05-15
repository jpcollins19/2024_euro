import { Link } from "react-router-dom";
import "./Misc.css";

const No_Match = () => {
  return (
    <div className="no-match-page">
      <h1>404 Error, page not found</h1>
      <h2>Lost your way? </h2>
      <h2>Let's take you home.</h2>
      <Link to="/leaderboard" style={{ textDecoration: "none" }}>
        <h4>Go Home</h4>
      </Link>
    </div>
  );
};

export default No_Match;
