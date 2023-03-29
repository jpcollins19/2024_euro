import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
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
import Checkbox_Cont from "./Checkbox_Cont";
import Group_Cont_Admin from "./group/Group_Cont_Admin";
import Knockout_Cont_Unlocked_Admin from "./ko/Knockout_Cont_Unlocked_Admin";

const Single_User_Cont = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { pathname } = useLocation();

  const userId = pathname.split("/admin/users/")[1];

  const user = useSelector((state) => state.users).find(
    (user) => user.id === userId
  );

  const joe = findJoe(useSelector((state) => state.users));

  const [name, setName] = useState(user?.name);
  const [password, setPassword] = useState(user?.password);
  const [paid, setPaid] = useState(user?.paid);
  const [onlyUpdateTopSection, setOnlyUpdateTopSection] = useState(false);
  const [tourneyStage, setTourneyStage] = useState(user?.tourneyStage);
  const [deleteUserNeeded, setDeleteUserNeeded] = useState(false);
  const [deleteUserConfirmed, setDeleteUserConfirmed] = useState(false);

  //
  // const [selectionObj, setSelectionObj] = useState({
  //   A: {
  //     1: null,
  //     2: null,
  //     3: null,
  //     4: null,
  //   },
  //   B: {
  //     1: null,
  //     2: null,
  //     3: null,
  //     4: null,
  //   },
  //   C: {
  //     1: null,
  //     2: null,
  //     3: null,
  //     4: null,
  //   },
  //   D: {
  //     1: null,
  //     2: null,
  //     3: null,
  //     4: null,
  //   },
  //   E: {
  //     1: null,
  //     2: null,
  //     3: null,
  //     4: null,
  //   },
  //   F: {
  //     1: null,
  //     2: null,
  //     3: null,
  //     4: null,
  //   },
  //   G: {
  //     1: null,
  //     2: null,
  //     3: null,
  //     4: null,
  //   },
  //   H: {
  //     1: null,
  //     2: null,
  //     3: null,
  //     4: null,
  //   },
  // });
  //
  // const [tiebreaker, setTiebreaker] = useState(null);
  // const [tiebreakerError, setTiebreakerError] = useState(false);
  // const [groupAError, setGroupAError] = useState(false);
  // const [groupBError, setGroupBError] = useState(false);
  // const [groupCError, setGroupCError] = useState(false);
  // const [groupDError, setGroupDError] = useState(false);
  // const [groupEError, setGroupEError] = useState(false);
  // const [groupFError, setGroupFError] = useState(false);
  // const [groupGError, setGroupGError] = useState(false);
  // const [groupHError, setGroupHError] = useState(false);
  //
  // const [koError, setKoError] = useState(false);
  // const [Q1, setQ1] = useState("");
  // const [Q2, setQ2] = useState("");
  // const [Q3, setQ3] = useState("");
  // const [Q4, setQ4] = useState("");
  // const [Q5, setQ5] = useState("");
  // const [Q6, setQ6] = useState("");
  // const [Q7, setQ7] = useState("");
  // const [Q8, setQ8] = useState("");
  // const [S1, setS1] = useState("");
  // const [S2, setS2] = useState("");
  // const [S3, setS3] = useState("");
  // const [S4, setS4] = useState("");
  // const [F1, setF1] = useState("");
  // const [F2, setF2] = useState("");
  // const [champ, setChamp] = useState("");

  // const groupErrorObj = {
  //   groupAError: groupAError,
  //   groupBError: groupBError,
  //   groupCError: groupCError,
  //   groupDError: groupDError,
  //   groupEError: groupEError,
  //   groupFError: groupFError,
  //   groupGError: groupGError,
  //   groupHError: groupHError,
  //   setGroupAError: setGroupAError,
  //   setGroupBError: setGroupBError,
  //   setGroupCError: setGroupCError,
  //   setGroupDError: setGroupDError,
  //   setGroupEError: setGroupEError,
  //   setGroupFError: setGroupFError,
  //   setGroupGError: setGroupGError,
  //   setGroupHError: setGroupHError,
  // };

  // const groupLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  // const koLetters = ["Q", "S", "F", "champ"];
  // const Qs = [1, 2, 3, 4, 5, 6, 7, 8];
  // const Ss = [1, 2, 3, 4];
  // const Fs = [1, 2];

  useEffect(() => {
    dispatch(loadUsers());

    // setTiebreaker(
    //   selectedUser.tiebreaker === undefined
    //     ? null
    //     : selectedUser.tiebreaker.toString()
    // );
    // groupLetters.forEach((letter) => {
    //   const nums = [1, 2, 3, 4];
    //   nums.forEach((num) => {
    //     const team = selectedUser[`group${letter}${num}`];
    //     selectionObj[letter][num] = team?.name;
    //   });
    // });
    // joe.tourneyStage >= 4 &&
    //   Object.keys(selectedUser).length > 0 &&
    //   selectedUser?.knockQ1 &&
    //   koLetters.forEach((letter) => {
    //     switch (letter) {
    //       case "Q":
    //         Qs.forEach((num) => {
    //           const setTeam = eval(`set${letter}${num}`);
    //           setTeam(selectedUser[`knock${letter}${num}`].name);
    //         });
    //         break;
    //       case "S":
    //         Ss.forEach((num) => {
    //           const setTeam = eval(`set${letter}${num}`);
    //           setTeam(selectedUser[`knock${letter}${num}`].name);
    //         });
    //         break;
    //       case "F":
    //         Fs.forEach((num) => {
    //           const setTeam = eval(`set${letter}${num}`);
    //           setTeam(selectedUser[`knock${letter}${num}`].name);
    //         });
    //         break;
    //       case "champ":
    //         setChamp(selectedUser.knockChamp.name);
    //         break;
    //       default:
    //         break;
    //     }
    //   });
  }, []);

  const togglePaid = () => setPaid((value) => !value);

  const toggleOnlyUpdateTopSection = () => {
    setOnlyUpdateTopSection((value) => !value);
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
        id: user?.id,
        name,
        password,
        paid,
        tourneyStage,
      };

      if (deleteUserConfirmed) {
        return dispatch(deleteUser(userObj, history));
      }

      if (onlyUpdateTopSection) {
        return dispatch(updateUser(userObj, history, "admin"));
      }

      // const validTiebreaker = Number(tiebreaker) % 1 === 0;
      // const tiebreakerAsArray = tiebreaker?.split("");

      // if (
      //   !validTiebreaker ||
      //   tiebreaker === "" ||
      //   tiebreakerAsArray?.includes(" ") ||
      //   tiebreaker === "0" ||
      //   tiebreaker === null
      // ) {
      //   return setTiebreakerError(true);
      // }

      // userObj.tiebreaker = tiebreaker;

      // groupLetters.forEach((letter) => {
      //   const groupObj = selectionObj[letter];
      //   const teams = Object.values(groupObj);
      //   const setError = eval(`setGroup${letter}Error`);

      //   if (teams.includes(null) || !dupeValInArr(teams)) {
      //     setError(true);
      //     errorAudit.push(1);
      //   }
      // });

      // groupLetters.forEach((letter) => {
      //   const nums = [1, 2, 3, 4];

      //   nums.forEach((num) => {
      //     userObj[`group${letter}${num}`] = selectionObj[letter][num];
      //   });
      // });

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

  const checkboxes = [
    { title: "Paid?", defaultValue: paid, onChange: togglePaid },
    {
      title: "Only Update This Section's Info",
      defaultValue: onlyUpdateTopSection,
      onChange: toggleOnlyUpdateTopSection,
    },
  ];

  return (
    <form id="admin-update-user" onSubmit={onSubmit}>
      <div className="admin-user-top">
        <Button text="Submit" form="admin-update-user" />
        {user?.name && (
          <div className="user-details-cont">
            {inputs.map((input) => (
              <Input_Cont
                key={input}
                selectedUser={user}
                name={input}
                set={eval(`set${capFirstLetter(input)}`)}
              />
            ))}

            <div className="paid-cont">
              {checkboxes.map((checkbox, idx) => (
                <Checkbox_Cont key={idx} checkboxInfo={checkbox} />
              ))}
            </div>
          </div>
        )}
      </div>
      {user?.id && (
        <div className="admin-user-bottom">
          {/* {joe?.tourneyStage >= 4 && Object.keys(selectedUser).length ? (
          <div className="user-admin">
            <div className="error-cont-placeholder">
              {koError && <Error error="Incomplete Picks Below" />}
            </div>

            <Knockout_Cont_Unlocked_Admin
              setTeam={setTeam}
              setKoError={setKoError}
              Q1={Q1}
              Q2={Q2}
              Q3={Q3}
              Q4={Q4}
              Q5={Q5}
              Q6={Q6}
              Q7={Q7}
              Q8={Q8}
              setQ1={setQ1}
              setQ2={setQ2}
              setQ3={setQ3}
              setQ4={setQ4}
              setQ5={setQ5}
              setQ6={setQ6}
              setQ7={setQ7}
              setQ8={setQ8}
              S1={S1}
              S2={S2}
              S3={S3}
              S4={S4}
              setS1={setS1}
              setS2={setS2}
              setS3={setS3}
              setS4={setS4}
              F1={F1}
              F2={F2}
              setF1={setF1}
              setF2={setF2}
              champ={champ}
              setChamp={setChamp}
            />
          </div>
        ) : (
          ""
        )} */}

          {/* <div className="tiebreaker-cont-edit-picks white-text">
            <h3>Tiebreaker - total number of goals scored:</h3>

            <input
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
          /> */}
        </div>
      )}

      {user?.id && !deleteUserNeeded && (
        <Button text="Delete User" onClick={() => setDeleteUserNeeded(true)} />
      )}

      {user?.id && deleteUserNeeded && (
        <Button
          text="Confirm & Delete User"
          form="admin-update-user"
          onClick={() => setDeleteUserConfirmed(true)}
        />
      )}
    </form>
  );
};

export default Single_User_Cont;
