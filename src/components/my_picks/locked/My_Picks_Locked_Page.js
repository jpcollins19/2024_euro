import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { me, loadUsers, findJoe, loadTeams } from "../../../store";
import Loading from "../../Misc/Loading";
import Button from "../../Misc/Button";
import Point_System_Cont from "./Point_System_Cont";
import Single_Group_Cont_Locked from "./group/Single_Group_Cont_Locked";
import Total_Points_Cont from "./Total_Points_Cont";
import Knockout_Cont_Locked from "./ko/Knockout_Cont_Locked";
import "./My_Picks_Locked.css";

const My_Picks_Locked_Page = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(me());
    dispatch(loadUsers());
    dispatch(loadTeams());
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const user = useSelector((state) => state.auth);

  const joe = findJoe(useSelector((state) => state.users));

  const letters = ["A", "B", "C", "D", "E", "F"];

  return loading ? (
    <Loading />
  ) : (
    <div className="my-picks-page">
      <div className="name-cont">
        <h1 className="white-text">{user?.name}</h1>
      </div>

      {joe?.tourneyStage <= 3 && user?.tiebreaker && (
        <Point_System_Cont tourneyStage={joe?.tourneyStage} />
      )}

      {joe?.tourneyStage === 1 && (
        <Link
          to="/my_picks_edit_group"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button
            text={`${user?.tiebreaker ? "Adjust" : "Select"} Group Picks`}
          />
        </Link>
      )}

      {joe?.tourneyStage === 4 && user?.tiebreaker && (
        <Link
          to="/my_picks_edit_ko"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button
            text={`${user?.knockQ1 ? "Adjust" : "Select"} Knockout Picks`}
          />
        </Link>
      )}

      {joe?.tourneyStage >= 4 && user?.tiebreaker && (
        <div className="top box">
          <div className="box left">
            <div className="predictions-cont">
              <Knockout_Cont_Locked user={user} />
            </div>
          </div>
          <div className="box right">
            <Total_Points_Cont />
          </div>
        </div>
      )}

      {user?.tiebreaker && (
        <div className="top box">
          <div className="box left">
            {joe?.tourneyStage >= 4 && (
              <Point_System_Cont tourneyStage={joe?.tourneyStage} />
            )}
            <div className="predictions-cont">
              {letters.map((letter) => (
                <Single_Group_Cont_Locked key={letter} group={letter} />
              ))}
            </div>
          </div>
          {joe?.tourneyStage <= 3 && (
            // <div className="box right">
            <Total_Points_Cont />
            // </div>
          )}
        </div>
      )}
    </div>
  );
};

export default My_Picks_Locked_Page;
