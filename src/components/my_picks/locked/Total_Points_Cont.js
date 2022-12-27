import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  capFirstLetter,
  groupTotalCalc,
  // knockoutRoundCalc,
  // totalScoreCalc,
  loadUsers,
} from "../../../store";

const Total_Points_Cont = ({ selectedUser }) => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);
  const userToUse = pathname === "/pool_picks" ? selectedUser : user;

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
                {capFirstLetter(input)}
              </div>
            ))}
          </div>
          <div className="total-points-points-cont">
            <h4>Points</h4>
            <div>{groupTotalCalc(userToUse)}</div>
            <div>
              BYAH2
              {/* {
                Object.values(
                  knockoutRoundCalc(
                    "quarters",
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams
                  )
                )[0]
              } */}
            </div>
            <div>
              BYAH3
              {/* {
                Object.values(
                  knockoutRoundCalc(
                    "semis",
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams
                  )
                )[0]
              } */}
            </div>
            <div>
              BYAH4
              {/* {
                Object.values(
                  knockoutRoundCalc(
                    "finals",
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams
                  )
                )[0]
              } */}
            </div>
            <div>
              BYAH5
              {/* {
                Object.values(
                  knockoutRoundCalc(
                    "champ",
                    pathname === "/pool_picks" ? selectedUser : user,
                    teams
                  )
                )[0]
              } */}
            </div>
            <div className="bold">
              {/* {totalScoreCalc(
                singleGroupCalc(
                  pathname === "/pool_picks" ? selectedUser : user,
                  teams,
                  "A"
                ),
                singleGroupCalc(
                  pathname === "/pool_picks" ? selectedUser : user,
                  teams,
                  "B"
                ),
                singleGroupCalc(
                  pathname === "/pool_picks" ? selectedUser : user,
                  teams,
                  "C"
                ),
                singleGroupCalc(
                  pathname === "/pool_picks" ? selectedUser : user,
                  teams,
                  "D"
                ),
                singleGroupCalc(
                  pathname === "/pool_picks" ? selectedUser : user,
                  teams,
                  "E"
                ),
                singleGroupCalc(
                  pathname === "/pool_picks" ? selectedUser : user,
                  teams,
                  "F"
                ),
                singleGroupCalc(
                  pathname === "/pool_picks" ? selectedUser : user,
                  teams,
                  "G"
                ),
                singleGroupCalc(
                  pathname === "/pool_picks" ? selectedUser : user,
                  teams,
                  "H"
                ),
                knockoutRoundCalc(
                  "quarters",
                  pathname === "/pool_picks" ? selectedUser : user,
                  teams
                ),
                knockoutRoundCalc(
                  "semis",
                  pathname === "/pool_picks" ? selectedUser : user,
                  teams
                ),
                knockoutRoundCalc(
                  "finals",
                  pathname === "/pool_picks" ? selectedUser : user,
                  teams
                ),
                knockoutRoundCalc(
                  "champ",
                  pathname === "/pool_picks" ? selectedUser : user,
                  teams
                )
              )} */}
              BYAH6
            </div>
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
