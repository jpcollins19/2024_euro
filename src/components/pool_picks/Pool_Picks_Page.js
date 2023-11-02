import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  formatSelectedUser,
  loadUsers,
  loadTeams,
  findJoe,
  me,
  groupLetters,
} from "../../store";
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

  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [zoomedOut, setZoomedOut] = useState(true);
  const [zoomedInRegoin, setZoomedInRegoin] = useState(1);

  const zoomData = {
    zoomedOut: zoomedOut,
    setZoomedOut: setZoomedOut,
    zoomedInRegoin: zoomedInRegoin,
    setZoomedInRegoin: setZoomedInRegoin,
  };

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

  const loadPage = () => {
    dispatch(loadUsers());
    dispatch(loadTeams());
    dispatch(me());

    const userId = pathname.split("/pool_picks/")[1];

    const currentUserProfileNeeded = users.find(
      (user) => user?.value?.id === userId
    );

    setSelectedUser(currentUserProfileNeeded);
  };

  useEffect(() => {
    loadPage();
  }, []);

  useEffect(() => {
    loadPage();
  }, [pathname]);

  const user = useSelector((state) => state.auth);

  const joe = findJoe(useSelector((state) => state.users));

  const onChange = (userId) => {
    setLoading(true);

    window.location = `#/pool_picks/${userId}`;

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="pool-picks-page">
      {joe?.tourneyStage === 1 ? (
        <h1 className="white-text">
          Pool Picks will not be viewable until the tournament commences on
          11/20/22
        </h1>
      ) : zoomedOut ? (
        user?.tiebreaker && (
          <div className="pool-picks-container">
            <div className="pool-picks-header">
              <h1 className="white-text">Picks for:</h1>
              <Dropdown
                options={users}
                width="15"
                defaultValue={selectedUser}
                set={(value) => onChange(value.value.id)}
              />
            </div>

            <Total_Points_Cont selectedUser={selectedUser?.value} />

            {joe?.tourneyStage === 5 && (
              <div className="box">
                <div className="ko-predictions-cont">
                  <Knockout_Cont
                    selectedUser={selectedUser?.value}
                    zoomData={zoomData}
                  />
                </div>
              </div>
            )}

            <div className="pool-picks-points-cont">
              <Point_System_Cont tourneyStage={joe?.tourneyStage} />
            </div>

            <div className="box">
              <div
                className={`group-predictions-cont ${
                  joe?.tourneyStage <= 2 ? "gpc-2" : ""
                }`}
              >
                {groupLetters.map((letter) => (
                  <Single_Group_Cont
                    key={letter}
                    group={letter}
                    selectedUser={selectedUser?.value}
                  />
                ))}
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="ko-predictions-cont">
          <Knockout_Cont
            selectedUser={selectedUser?.value}
            zoomData={zoomData}
          />
        </div>
      )}
    </div>
  );
};

export default Pool_Picks_Page;
