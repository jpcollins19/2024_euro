import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Route, Redirect } from "react-router-dom";
import { formatSelectedUser, loadUsers, findJoe, me } from "../../store";
import Loading from "../Misc/Loading";
import Dropdown from "../Misc/Dropdown";
import Point_System_Cont from "../my_picks/locked/Point_System_Cont";
import Single_Group_Cont from "../my_picks/locked/group/Single_Group_Cont_Locked";
import Total_Points_Cont from "../my_picks/locked/Total_Points_Cont";
import Knockout_Cont from "../my_picks/locked/ko/Knockout_Cont_Locked";
import "./Pool_Picks.css";

const Pool_Picks_Page = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // const [selectedUser, setSelectedUser] = useState(
  //   formatSelectedUser(useSelector((state) => state.auth))
  // );

  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const users = useSelector((state) => state.users)
    .filter((user) => user.tiebreaker)
    .sort((a, b) => {
      const fa = a.name.toLowerCase();
      const fb = b.name.toLowerCase();

      if (fa < fb) return -1;
      if (fa > fb) return 1;

      return 0;
    })
    .map((user) => {
      return formatSelectedUser(user);
    });

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(me());

    const userId = pathname.split("/pool_picks/")[1];

    const currentUserProfileNeeded = users.find(
      (user) => user?.value?.id === userId
    );

    setSelectedUser(currentUserProfileNeeded);
  }, []);

  const user = useSelector((state) => state.auth);

  const joe = findJoe(useSelector((state) => state.users));

  const onChange = (userId) => {
    console.log("byah", userId);

    // <Redirect to={`/pool_picks/${userId}`} />;

    <Redirect to={`/pool_picks/joe`} />;

    // const newUser = users.find((user) => user.value.id === userId);
    // setSelectedUser(newUser);
  };

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return loading ? (
    <Loading />
  ) : (
    <div className="pool-picks-page">
      {joe?.tourneyStage === 1 ? (
        <h1 className="white-text">
          Pool Picks will not be viewable until the tournament commences on
          11/20/22
        </h1>
      ) : (
        <div className="pool-picks-container">
          {user?.tiebreaker && (
            <div className="pool-picks-header">
              <h1 className="white-text">Picks for:</h1>
              <Dropdown
                options={users}
                width="15rem"
                defaultValue={selectedUser}
                set={(value) => onChange(value.value.id)}
              />
            </div>
          )}

          {(joe?.tourneyStage === 3 || joe?.tourneyStage === 4) &&
            user?.tiebreaker && <Point_System_Cont />}

          {joe?.tourneyStage === 5 && user?.tiebreaker && (
            <div className="top box">
              <div className="box left">
                <div className="predictions-cont">
                  <Knockout_Cont selectedUser={selectedUser?.value} />
                </div>
              </div>
              <div className="box right">
                <Total_Points_Cont selectedUser={selectedUser?.value} />
              </div>
            </div>
          )}

          <div className="top box">
            <div className="box left">
              {joe?.tourneyStage === 5 && user?.tiebreaker && (
                <Point_System_Cont />
              )}
              <div className="predictions-cont">
                {letters.map((letter) => (
                  <Single_Group_Cont
                    key={letter}
                    group={letter}
                    selectedUser={selectedUser?.value}
                  />
                ))}
              </div>
            </div>
            <div className="box right">
              {joe?.tourneyStage < 5 && user?.tiebreaker && (
                <Total_Points_Cont selectedUser={selectedUser?.value} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pool_Picks_Page;
