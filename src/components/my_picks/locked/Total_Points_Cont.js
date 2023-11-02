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
  findJoe,
} from "../../../store";

const Total_Points_Cont = ({ selectedUser }) => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const joe = findJoe(useSelector((state) => state.users));

  const user = useSelector((state) => state.auth);

  const poolPicksPage = isPoolPicksPage(pathname);

  const userToUse = poolPicksPage ? selectedUser : user;

  const teams = useSelector((state) => state.teams);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const inputs = ["group", "R16", "quarters", "semis", "final", "total"];

  return (
    <div
      className={`total-points-cont ${
        joe?.tourneyStage >= 3 ? "tpc-mobile-3" : "tpc-mobile"
      }`}
    >
      <div>
        <div className="total-points-text-cont">
          <h4 className="white-text">Stage</h4>
          {inputs.map((input) => (
            <div key={input} className={input === "total" ? "bold" : ""}>
              {cap1stLetter(input)}
            </div>
          ))}
        </div>
        <div className="total-points-points-cont">
          <h4 className="white-text">Pts</h4>
          <div>{groupTotalCalc(userToUse)}</div>

          <div>{koRoundCalc(userToUse, "R16", teams)}</div>
          <div>{koRoundCalc(userToUse, "quarters", teams)}</div>
          <div>{koRoundCalc(userToUse, "semis", teams)}</div>
          <div>{koRoundCalc(userToUse, "champion", teams)}</div>

          <div className="bold">{userTotalPoints(userToUse, teams)}</div>
        </div>
      </div>

      <h3 className="white-text">
        Tiebreaker: {selectedUser?.tiebreaker ?? user?.tiebreaker} goals
      </h3>
    </div>
  );
};

export default Total_Points_Cont;
