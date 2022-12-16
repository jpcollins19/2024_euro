import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { me, loadUsers, findJoe } from "../../../store";
import Loading from "../../Misc/Loading";
import Button from "../../Misc/Button";
import Point_System_Cont from "./Point_System_Cont";
import Single_Group_Cont_Locked from "./group/Single_Group_Cont_Locked";
import Total_Points_Cont from "./Total_Points_Cont";
import Knockout_Cont_Locked from "./ko/Knockout_Cont_Locked";
import Box from "@mui/material/Box";
import "./My_Picks_Locked.css";

const My_Picks_Locked_Page = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(me());
    dispatch(loadUsers());
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const user = useSelector((state) => state.auth);

  const joe = findJoe(useSelector((state) => state.users));

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="84vh"
      className="my-picks-page"
    >
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="name-cont">
            <h1 className="white-text">{user && user.name}</h1>
          </div>

          {joe?.tourneyStage === 3 && user && user.tiebreaker && (
            <Point_System_Cont />
          )}

          {joe?.tourneyStage === 1 && (
            <Link
              to="/my_picks_edit_group"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button text="Select / Adjust Group Picks" />
            </Link>
          )}

          {joe?.tourneyStage === 4 && user && user.tiebreaker && (
            <Link
              to="/my_picks_edit_ko"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button text="Select / Adjust Knockout Picks" />
            </Link>
          )}

          {joe?.tourneyStage >= 4 && user && user.tiebreaker && (
            <div className="top box">
              <div className="box left">
                <div className="predictions-cont">
                  <Knockout_Cont_Locked />
                </div>
              </div>
              <div className="box right">
                <Total_Points_Cont />
              </div>
            </div>
          )}

          {user && user.tiebreaker && (
            <div className="top box">
              <div className="box left">
                {joe?.tourneyStage >= 4 && <Point_System_Cont />}
                <div className="predictions-cont">
                  {letters.map((letter) => (
                    <Single_Group_Cont_Locked key={letter} group={letter} />
                  ))}
                </div>
              </div>
              {joe?.tourneyStage <= 3 && (
                <div className="box right">
                  <Total_Points_Cont />
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </Box>
  );
};

export default My_Picks_Locked_Page;
