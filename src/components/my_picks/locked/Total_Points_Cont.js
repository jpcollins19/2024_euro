import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  cap1stLetter,
  groupTotalCalc,
  koRoundCalc,
  userTotalPoints,
  loadUsers,
  isPoolPicksPage,
} from "../../../store";

const Total_Points_Cont = ({ selectedUser }) => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);

  const poolPicksPage = isPoolPicksPage(pathname);

  const userToUse = poolPicksPage ? selectedUser : user;

  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const inputs = ["group", "quarters", "semis", "final", "champion", "total"];

  return (
    <div>
      <h2 className="white-text">Points</h2>
      <div className="total-points-cont">
        <div>
          <div className="total-points-text-cont">
            <h4>Stage</h4>
            {inputs.map((input) => (
              <div key={input} className={input === "Total" ? "bold" : ""}>
                {cap1stLetter(input)}
              </div>
            ))}
          </div>
          <div className="total-points-points-cont">
            <h4>Points</h4>
            <div>{groupTotalCalc(userToUse)}</div>
            <div>{koRoundCalc(userToUse, "quarters", teams)}</div>
            <div>{koRoundCalc(userToUse, "semis", teams)}</div>
            <div>{koRoundCalc(userToUse, "final", teams)}</div>
            <div>{koRoundCalc(userToUse, "champion", teams)}</div>

            <div className="bold">{userTotalPoints(userToUse)}</div>
          </div>
        </div>
        {
          <h3>
            Tiebreaker:{" "}
            {selectedUser ? selectedUser?.tiebreaker : user?.tiebreaker} goals
          </h3>
        }
      </div>
    </div>
  );
};

export default Total_Points_Cont;
