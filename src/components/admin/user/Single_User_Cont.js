import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  updateUser,
  deleteUser,
  dupeValInArr,
  loadUsers,
  cap1stLetter,
  findJoe,
  groupLetters,
  auditThirdPlaceToAdvancePicks,
  koLetters,
  Qs,
  Ss,
  Fs,
} from "../../../store";
import Button from "../../Misc/Button";
import Error from "../../Misc/Error";
import Input_Cont from "./Input_Cont";
import Checkbox_Cont from "./Checkbox_Cont";
import Group_Cont_Admin from "./group/Group_Cont_Admin";
import Knockout_Cont_Unlocked_Admin from "./ko/Knockout_Cont_Unlocked_Admin";

const Single_User_Cont = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const userId = pathname.split("/admin/users/")[1];

  const user = useSelector((state) => state.users).find(
    (user) => user.id === userId
  );

  // console.log(user);

  const joe = findJoe(useSelector((state) => state.users));

  const [name, setName] = useState(user?.name);
  const [password, setPassword] = useState(user?.password);
  const [paid, setPaid] = useState(user?.paid);
  const [onlyUpdateTopSection, setOnlyUpdateTopSection] = useState(false);
  const [tourneyStage, setTourneyStage] = useState(user?.tourneyStage);
  const [deleteUserNeeded, setDeleteUserNeeded] = useState(false);
  const [deleteUserConfirmed, setDeleteUserConfirmed] = useState(false);

  const [groupSelections, setGroupSelections] = useState({
    A: {
      1: user?.groupA1?.name ?? null,
      2: user?.groupA2?.name ?? null,
      3: user?.groupA3?.name ?? null,
      4: user?.groupA4?.name ?? null,
      thirdPlaceAdvanceToKO: user?.thirdPlaceAdvanceToKO_Pick_A ?? false,
    },
    B: {
      1: user?.groupB1?.name ?? null,
      2: user?.groupB2?.name ?? null,
      3: user?.groupB3?.name ?? null,
      4: user?.groupB4?.name ?? null,
      thirdPlaceAdvanceToKO: user?.thirdPlaceAdvanceToKO_Pick_B ?? false,
    },
    C: {
      1: user?.groupC1?.name ?? null,
      2: user?.groupC2?.name ?? null,
      3: user?.groupC3?.name ?? null,
      4: user?.groupC4?.name ?? null,
      thirdPlaceAdvanceToKO: user?.thirdPlaceAdvanceToKO_Pick_C ?? false,
    },
    D: {
      1: user?.groupD1?.name ?? null,
      2: user?.groupD2?.name ?? null,
      3: user?.groupD3?.name ?? null,
      4: user?.groupD4?.name ?? null,
      thirdPlaceAdvanceToKO: user?.thirdPlaceAdvanceToKO_Pick_D ?? false,
    },
    E: {
      1: user?.groupE1?.name ?? null,
      2: user?.groupE2?.name ?? null,
      3: user?.groupE3?.name ?? null,
      4: user?.groupE4?.name ?? null,
      thirdPlaceAdvanceToKO: user?.thirdPlaceAdvanceToKO_Pick_E ?? false,
    },
    F: {
      1: user?.groupF1?.name ?? null,
      2: user?.groupF2?.name ?? null,
      3: user?.groupF3?.name ?? null,
      4: user?.groupF4?.name ?? null,
      thirdPlaceAdvanceToKO: user?.thirdPlaceAdvanceToKO_Pick_F ?? false,
    },
  });

  const [tiebreaker, setTiebreaker] = useState(
    user?.tiebreaker ? user?.tiebreaker.toString() : null
  );
  const [masterError, setMasterError] = useState(false);
  const [masterErrorText, setMasterErrorText] = useState(null);
  const [groupAError, setGroupAError] = useState(false);
  const [groupBError, setGroupBError] = useState(false);
  const [groupCError, setGroupCError] = useState(false);
  const [groupDError, setGroupDError] = useState(false);
  const [groupEError, setGroupEError] = useState(false);
  const [groupFError, setGroupFError] = useState(false);
  const [groupGError, setGroupGError] = useState(false);
  const [groupHError, setGroupHError] = useState(false);

  // const [koError, setKoError] = useState(false);
  const [Q1, setQ1] = useState(user?.knockQ1?.name ?? null);
  const [Q2, setQ2] = useState(user?.knockQ2?.name ?? null);
  const [Q3, setQ3] = useState(user?.knockQ3?.name ?? null);
  const [Q4, setQ4] = useState(user?.knockQ4?.name ?? null);
  const [Q5, setQ5] = useState(user?.knockQ5?.name ?? null);
  const [Q6, setQ6] = useState(user?.knockQ6?.name ?? null);
  const [Q7, setQ7] = useState(user?.knockQ7?.name ?? null);
  const [Q8, setQ8] = useState(user?.knockQ8?.name ?? null);
  const [S1, setS1] = useState(user?.knockS1?.name ?? null);
  const [S2, setS2] = useState(user?.knockS2?.name ?? null);
  const [S3, setS3] = useState(user?.knockS3?.name ?? null);
  const [S4, setS4] = useState(user?.knockS4?.name ?? null);
  const [F1, setF1] = useState(user?.knockF1?.name ?? null);
  const [F2, setF2] = useState(user?.knockF2?.name ?? null);
  const [champ, setChamp] = useState(user?.knockChamp?.name ?? null);

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

  const togglePaid = () => setPaid((value) => !value);

  const toggleOnlyUpdateTopSection = () => {
    setOnlyUpdateTopSection((value) => !value);
  };

  const onChangeGroupSelections = (group, key, answer) => {
    if (key === "thirdPlaceAdvanceToKO") {
      groupSelections[group][key] = !groupSelections[group][key];
    } else {
      groupSelections[group][key] = answer;
    }
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

  const resetMasterError = () => {
    setMasterError(false);
    setMasterErrorText(null);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const userObj = {
        id: user?.id,
        name,
        password,
        paid,
        tourneyStage,
      };

      if (deleteUserConfirmed) {
        return dispatch(deleteUser(userObj, history, joe?.id));
      }

      if (onlyUpdateTopSection) {
        return dispatch(updateUser(userObj, history, "admin"));
      }

      groupLetters.forEach((letter) => {
        const setError = eval(`setGroup${letter}Error`);

        setError(false);
      });

      const validTiebreaker = Number(tiebreaker) % 1 === 0;
      const tiebreakerAsArray = tiebreaker?.split("");

      if (
        !validTiebreaker ||
        tiebreaker === "" ||
        tiebreakerAsArray?.includes(" ") ||
        tiebreaker === "0" ||
        tiebreaker === null
      ) {
        setMasterError(true);
        setMasterErrorText("Invalid Tiebreaker Below");

        return;
      }

      userObj.tiebreaker = tiebreaker;

      clearArr(errorAudit);

      groupLetters.forEach((letter) => {
        const groupObj = groupSelections[letter];
        const answers = Object.values(groupObj);
        const setError = eval(`setGroup${letter}Error`);

        if (
          answers.includes(null) ||
          answers.includes("not-valid") ||
          !dupeValInArr(answers)
        ) {
          setError(true);
          errorAudit.push(1);
        }
      });

      if (errorAudit.length) {
        setMasterError(true);
        setMasterErrorText("Invalid Dropdown Picks in the Group(s) below:");

        return;
      }

      const thirdPlaceToAdvanceObj = groupLetters.reduce((a, letter) => {
        a[letter] = groupSelections[letter].thirdPlaceAdvanceToKO ?? null;

        return a;
      }, {});

      const thirdPlaceToAdvanceAudit = auditThirdPlaceToAdvancePicks(
        thirdPlaceToAdvanceObj
      );

      thirdPlaceToAdvanceAudit.groupErrors.forEach((letter) => {
        const setError = eval(`setGroup${letter}Error`);

        errorAudit.push(1);
        setError(true);
      });

      if (errorAudit.length) {
        setMasterError(true);

        const outcome = thirdPlaceToAdvanceAudit?.outcome[0];
        const number = thirdPlaceToAdvanceAudit?.outcome[1];
        const selectText = outcome === "-" ? "select" : "un-select";
        const more = outcome === "-" ? "more" : "";
        const team = number === "1" ? "team" : "teams";
        const advancing = outcome === "-" ? "to advance" : "from advancing";
        const outFrom = outcome === "-" ? "out" : `from ${number}`;

        let errorText = `3rd Place To Advance Error: need to ${selectText} ${number} ${more} ${team} ${advancing} ${outFrom} of the groups below:`;

        setMasterErrorText(errorText);

        return;
      }

      groupLetters.forEach((letter) => {
        const nums = [1, 2, 3, 4];

        nums.forEach((num) => {
          userObj[`group${letter}${num}`] = groupSelections[letter][num];

          if (num === 3) {
            const key = `thirdPlaceAdvanceToKO_Pick_${letter}`;
            const value = groupSelections[letter].thirdPlaceAdvanceToKO
              ? groupSelections[letter][num]
              : null;

            userObj[key] = value;
          }
        });
      });

      const koAudit = (team, letter, num) => {
        if (!team) {
          setKoError(true);
          errorAudit.push(1);
        } else {
          userObj[`knock${letter}${num}`] = team;
        }
      };

      // if (joe?.tourneyStage >= 4) {
      //   koLetters.forEach((letter) => {
      //     switch (letter) {
      //       case "Q":
      //         Qs.forEach((num) => {
      //           const team = eval(`${letter}${num}`);

      //           koAudit(team, letter, num);
      //         });
      //         break;
      //       case "S":
      //         Ss.forEach((num) => {
      //           const team = eval(`${letter}${num}`);

      //           koAudit(team, letter, num);
      //         });
      //         break;
      //       case "F":
      //         Fs.forEach((num) => {
      //           const team = eval(`${letter}${num}`);

      //           koAudit(team, letter, num);
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

      !masterError &&
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

  // console.log("groupSelections", groupSelections);

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
                set={eval(`set${cap1stLetter(input)}`)}
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
          <div className="master-error-cont-edit-picks">
            {masterError && <Error error={masterErrorText} />}
          </div>

          {/* {joe?.tourneyStage >= 4 && (
            <div className="ko-picks-user-admin">
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
          )} */}

          <div className="tiebreaker-cont-edit-picks">
            <h3>Tiebreaker - total number of goals scored:</h3>

            <input
              defaultValue={tiebreaker}
              onChange={(ev) => {
                setTiebreaker(ev.target.value);
                resetMasterError();
              }}
            ></input>
          </div>

          <Group_Cont_Admin
            onChangeGroupSelections={onChangeGroupSelections}
            groupErrorObj={groupErrorObj}
            user={user}
            selectionObj={groupSelections}
            resetMasterError={resetMasterError}
          />
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
