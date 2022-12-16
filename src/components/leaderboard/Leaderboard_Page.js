import { useState } from "react";
import { useSelector } from "react-redux";
import { findJoe } from "../../store";
import Sign_In_Page_Leaderboard from "./Sign_In_Page_Leaderboard";
import Leaderboard_Cont from "./Leaderboard_Cont";
import Loading from "../Misc/Loading";
import Box from "@mui/material/Box";
import "./Leaderboard.css";

const Leaderboard_Page = () => {
  const [loading, setLoading] = useState(true);

  const joe = findJoe(useSelector((state) => state.users));

  const user = useSelector((state) => state.auth);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="84vh"
      className="leaderboard-page"
    >
      {loading ? (
        <Loading />
      ) : user && user.name ? (
        <div>
          <div className="table-cont">
            {joe?.tourneyStage === 1 ? (
              <div>
                <h1 className="pre-tourney-header">
                  Leaderboard will not be viewable until the tournament
                  commences on 11/20/22
                </h1>
              </div>
            ) : (
              <Leaderboard_Cont />
            )}
          </div>
        </div>
      ) : (
        <Sign_In_Page_Leaderboard />
      )}
    </Box>
  );
};

export default Leaderboard_Page;
