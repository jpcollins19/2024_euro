import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  updateUser,
  deleteUser,
  dupeValInArr,
  loadUsers,
  capFirstLetter,
  findJoe,
} from "../../../store";
import Button from "../../Misc/Button";
import Dropdown from "../../Misc/Dropdown";
import Error from "../../Misc/Error";
import Input_Cont from "./Input_Cont";
import Group_Cont_Admin from "./group/Group_Cont_Admin";
import Knockout_Cont_Unlocked from "./ko/Knockout_Cont_Unlocked";
import Box from "@mui/material/Box";
import "./User_Admin.css";

const User_Admin_Page = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const joe = findJoe(useSelector((state) => state.users));

  const users = useSelector((state) => state.users)
    .map((user, idx) => {
      user.value = user;

      const koStageCommenced = joe?.tourneyStage >= 4 ? true : false;

      const userPickAudit =
        user.tiebreaker === null
          ? "RED: Group - "
          : koStageCommenced && user.knockChamp === null
          ? "RED: KO - "
          : "";

      user.label = `${userPickAudit}${user.name}: ${user.email}`;

      user.rank = user.admin
        ? -1
        : user.tiebreaker === null
        ? idx + 1000
        : koStageCommenced && user.knockChamp === null
        ? idx + 500
        : idx;

      return user;
    })
    .sort((a, b) => a.rank - b.rank);

  const [deleteUserNeeded, setDeleteUserNeeded] = useState(false);
  const [deleteUserConfirmed, setDeleteUserConfirmed] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [paid, setPaid] = useState(false);
  const [onlyUpdatePaidStatus, setOnlyUpdatePaidStatus] = useState(false);
  const [tourneyStage, setTourneyStage] = useState("");

  //
  const [selectionObj, setSelectionObj] = useState({
    A: {
      1: null,
      2: null,
      3: null,
      4: null,
    },
    B: {
      1: null,
      2: null,
      3: null,
      4: null,
    },
    C: {
      1: null,
      2: null,
      3: null,
      4: null,
    },
    D: {
      1: null,
      2: null,
      3: null,
      4: null,
    },
    E: {
      1: null,
      2: null,
      3: null,
      4: null,
    },
    F: {
      1: null,
      2: null,
      3: null,
      4: null,
    },
    G: {
      1: null,
      2: null,
      3: null,
      4: null,
    },
    H: {
      1: null,
      2: null,
      3: null,
      4: null,
    },
  });
  const [tiebreaker, setTiebreaker] = useState(null);
  const [tiebreakerError, setTiebreakerError] = useState(false);
  const [groupAError, setGroupAError] = useState(false);
  const [groupBError, setGroupBError] = useState(false);
  const [groupCError, setGroupCError] = useState(false);
  const [groupDError, setGroupDError] = useState(false);
  const [groupEError, setGroupEError] = useState(false);
  const [groupFError, setGroupFError] = useState(false);
  const [groupGError, setGroupGError] = useState(false);
  const [groupHError, setGroupHError] = useState(false);
  //
  const [koError, setKoError] = useState(false);
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [Q4, setQ4] = useState("");
  const [Q5, setQ5] = useState("");
  const [Q6, setQ6] = useState("");
  const [Q7, setQ7] = useState("");
  const [Q8, setQ8] = useState("");
  const [S1, setS1] = useState("");
  const [S1Changed, setS1Changed] = useState(false);
  const [S2, setS2] = useState("");
  const [S2Changed, setS2Changed] = useState(false);
  const [S3, setS3] = useState("");
  const [S3Changed, setS3Changed] = useState(false);
  const [S4, setS4] = useState("");
  const [S4Changed, setS4Changed] = useState(false);
  const [F1, setF1] = useState("");
  const [F1Changed, setF1Changed] = useState(false);
  const [F2, setF2] = useState("");
  const [F2Changed, setF2Changed] = useState(false);
  const [champ, setChamp] = useState("");
  const [champChanged, setChampChanged] = useState(false);

  const groupErrorObj = {
    groupAError: groupAError,
    groupBError: groupBError,
    groupCError: groupCError,
    groupDError: groupDError,
    groupEError: groupEError,
    groupFError: groupFError,
    groupGError: groupGError,
    groupHError: groupHError,
    setGroupAError: setGroupAError,
    setGroupBError: setGroupBError,
    setGroupCError: setGroupCError,
    setGroupDError: setGroupDError,
    setGroupEError: setGroupEError,
    setGroupFError: setGroupFError,
    setGroupGError: setGroupGError,
    setGroupHError: setGroupHError,
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const groupLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const koLetters = ["Q", "S", "F", "champ"];

  useEffect(() => {
    setName(selectedUser.name);
    setPassword(selectedUser.password);
    setPaid(selectedUser.paid);
    setTourneyStage(selectedUser.tourneyStage);

    setTiebreaker(
      selectedUser.tiebreaker === undefined
        ? null
        : selectedUser.tiebreaker.toString()
    );

    groupLetters.forEach((letter) => {
      const nums = [1, 2, 3, 4];

      nums.forEach((num) => {
        const team = selectedUser[`group${letter}${num}`];
        selectionObj[letter][num] = team?.name;
      });
    });

    // koLetters.forEach((letter) => {
    //   const Qs = [1, 2, 3, 4, 5, 6, 7, 8];
    //   const Ss = [1, 2, 3, 4];
    //   const Fs = [1, 2];

    //   switch (letter) {
    //     case "Q":
    //       Qs.forEach((num) => {
    //         const setTeam = eval(`set${letter}${num}`);
    //         setTeam(selectedUser[`knock${letter}${num}`]);
    //       });
    //       break;
    //     case "S":
    //       Ss.forEach((num) => {
    //         const setTeam = eval(`set${letter}${num}`);
    //         setTeam(selectedUser[`knock${letter}${num}`]);
    //       });
    //       break;
    //     case "F":
    //       Fs.forEach((num) => {
    //         const setTeam = eval(`set${letter}${num}`);
    //         setTeam(selectedUser[`knock${letter}${num}`]);
    //       });
    //       break;
    //     case "champ":
    //       setChamp(selectedUser.knockChamp);
    //       break;
    //     default:
    //       break;
    //   }
    // });
  }, [selectedUser]);

  const togglePaid = () => setPaid((value) => !value);

  const toggleOnlyUpdatePaidStatus = () => {
    setOnlyUpdatePaidStatus((value) => !value);
  };

  const onChangeSelectionObj = (group, rank, team) => {
    selectionObj[group][rank] = team;
  };

  const errorAudit = [];

  const clearArr = (arr) => {
    while (arr.length) {
      arr.pop();
      return clearArr(arr);
    }
  };

  const setTeam = (setTeam, name) => {
    setTeam(name);
  };

  const setChanged = (set) => {
    setTimeout(() => {
      set(true);
    }, 100);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();
    try {
      clearArr(errorAudit);

      const userObj = {
        id: selectedUser.id,
      };

      if (deleteUserConfirmed) {
        return dispatch(deleteUser(userObj, history));
      }

      if (onlyUpdatePaidStatus) {
        userObj.paid = paid;

        return dispatch(updateUser(userObj, history, "admin"));
      }

      userObj.name = name;
      userObj.password = password;
      userObj.paid = paid;
      userObj.tourneyStage = tourneyStage;

      const validTiebreaker = Number(tiebreaker) % 1 === 0;
      const tiebreakerAsArray = tiebreaker?.split("");

      if (
        !validTiebreaker ||
        tiebreaker === "" ||
        tiebreakerAsArray?.includes(" ") ||
        tiebreaker === "0" ||
        tiebreaker === null
      ) {
        return setTiebreakerError(true);
      }

      userObj.tiebreaker = tiebreaker;

      groupLetters.forEach((letter) => {
        const groupObj = selectionObj[letter];
        const teams = Object.values(groupObj);
        const setError = eval(`setGroup${letter}Error`);

        if (teams.includes(null) || !dupeValInArr(teams)) {
          setError(true);
          errorAudit.push(1);
        }
      });

      groupLetters.forEach((letter) => {
        const nums = [1, 2, 3, 4];

        nums.forEach((num) => {
          userObj[`group${letter}${num}`] = selectionObj[letter][num];
        });
      });

      const Qs = [1, 2, 3, 4, 5, 6, 7, 8];
      const Ss = [1, 2, 3, 4];
      const Fs = [1, 2];

      // if (joe?.tourneyStage >= 4) {
      //   koLetters.forEach((letter) => {
      //     switch (letter) {
      //       case "Q":
      //         Qs.forEach((num) => {
      //           const team = eval(`${letter}${num}`);

      //           if (team.length === 0) {
      //             setKoError(true);
      //             errorAudit.push(1);
      //           } else {
      //             userObj[`knock${letter}${num}`] = team;
      //           }
      //         });
      //         break;
      //       case "S":
      //         Ss.forEach((num) => {
      //           const team = eval(`${letter}${num}`);

      //           if (team.length === 0) {
      //             setKoError(true);
      //             errorAudit.push(1);
      //           } else {
      //             userObj[`knock${letter}${num}`] = team;
      //           }
      //         });
      //         break;
      //       case "F":
      //         Fs.forEach((num) => {
      //           const team = eval(`${letter}${num}`);

      //           if (team.length === 0) {
      //             setKoError(true);
      //             errorAudit.push(1);
      //           } else {
      //             userObj[`knock${letter}${num}`] = team;
      //           }
      //         });
      //         break;
      //       case "champ":
      //         if (champ.length === 0) {
      //           setKoError(true);
      //           errorAudit.push(1);
      //         } else {
      //           userObj.knockChamp = champ;
      //         }
      //         break;
      //       default:
      //         break;
      //     }
      //   });
      // }

      !tiebreakerError &&
        !errorAudit.length &&
        dispatch(updateUser(userObj, history, "admin"));
    } catch (err) {
      console.log("reeeed error", err);
    }
  };

  const inputs = ["name", "password", "tourneyStage"];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="84vh"
      className="admin-page"
    >
      <form
        id="admin-update-user"
        className="admin-container"
        onSubmit={onSubmit}
      >
        <div className="admin-header">
          <Dropdown
            placeholder="Select User"
            options={users}
            width="40rem"
            set={(option) => setSelectedUser(option.value)}
          />

          {Object.keys(selectedUser).length ? (
            <div className="user-details-cont">
              {inputs.map((input) => (
                <Input_Cont
                  key={input}
                  selectedUser={selectedUser}
                  name={input}
                  set={eval(`set${capFirstLetter(input)}`)}
                />
              ))}

              <div className="paid-cont">
                <div className="input-cont-admin-user">
                  <div>Paid?</div>
                  <input
                    className="checkbox-cont"
                    type="checkbox"
                    defaultValue={paid}
                    onChange={togglePaid}
                    checked={paid ? paid : !!paid}
                  ></input>
                </div>

                <div className="input-cont-admin-user">
                  <div>Only Update Paid Status</div>
                  <input
                    className="checkbox-cont"
                    type="checkbox"
                    defaultValue={onlyUpdatePaidStatus}
                    onChange={toggleOnlyUpdatePaidStatus}
                    checked={
                      onlyUpdatePaidStatus
                        ? onlyUpdatePaidStatus
                        : !!onlyUpdatePaidStatus
                    }
                  ></input>
                </div>
              </div>

              <Button text="Submit" form="admin-update-user" />
            </div>
          ) : (
            ""
          )}
        </div>

        {/* {joe?.tourneyStage >= 4 && Object.keys(selectedUser).length ? (
          <div className="user-admin">
            <div className="error-cont-placeholder">
              {koError && <Error error="Incomplete Picks Below" />}
            </div>
            <Knockout_Cont_Unlocked
              selectedUser={selectedUser}
              setTeam={setTeam}
              setChanged={setChanged}
              setKoError={setKoError}
              Q1={Q1}
              setQ1={setQ1}
              Q2={Q2}
              setQ2={setQ2}
              Q3={Q3}
              setQ3={setQ3}
              Q4={Q4}
              setQ4={setQ4}
              Q5={Q5}
              setQ5={setQ5}
              Q6={Q6}
              setQ6={setQ6}
              Q7={Q7}
              setQ7={setQ7}
              Q8={Q8}
              setQ8={setQ8}
              S1={S1}
              setS1={setS1}
              S1Changed={S1Changed}
              setS1Changed={setS1Changed}
              S2={S2}
              setS2={setS2}
              S2Changed={S2Changed}
              setS2Changed={setS2Changed}
              S3={S3}
              setS3={setS3}
              S3Changed={S3Changed}
              setS3Changed={setS3Changed}
              S4={S4}
              setS4={setS4}
              S4Changed={S4Changed}
              setS4Changed={setS4Changed}
              F1={F1}
              setF1={setF1}
              F1Changed={F1Changed}
              setF1Changed={setF1Changed}
              F2={F2}
              setF2={setF2}
              F2Changed={F2Changed}
              setF2Changed={setF2Changed}
              champ={champ}
              setChamp={setChamp}
              champChanged={champChanged}
              setChampChanged={setChampChanged}
            />
          </div>
        ) : (
          ""
        )} */}

        {Object.values(selectedUser).length > 0 && (
          <div className="user-admin">
            <div className="tiebreaker-cont-edit-picks white-text">
              <h3>Tiebreaker - total number of goals scored:</h3>

              <input
                className="white-text"
                defaultValue={tiebreaker}
                onChange={(ev) => {
                  setTiebreaker(ev.target.value);
                  setTiebreakerError(false);
                }}
              ></input>
            </div>

            <div className="error-cont-placeholder">
              {tiebreakerError && <Error error="Invalid Tiebreaker Above" />}
            </div>

            <Group_Cont_Admin
              onChangeSelectionObj={onChangeSelectionObj}
              groupErrorObj={groupErrorObj}
            />
          </div>
        )}

        {Object.keys(selectedUser).length && !deleteUserNeeded ? (
          <Button
            text="Delete User"
            onClick={() => setDeleteUserNeeded(true)}
          />
        ) : (
          ""
        )}

        {Object.keys(selectedUser).length && deleteUserNeeded ? (
          <Button
            text="Confirm & Delete User"
            form="admin-update-user"
            onClick={() => setDeleteUserConfirmed(true)}
          />
        ) : (
          ""
        )}
      </form>
    </Box>
  );
};

export default User_Admin_Page;
