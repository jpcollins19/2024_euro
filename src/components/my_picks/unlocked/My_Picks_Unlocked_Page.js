import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  updateUser,
  dupeValInArr,
  findJoe,
  loadUsers,
  auditThirdPlaceToAdvancePicks,
  groupLetters,
  koLetters,
  Qs,
  Ss,
  Fs,
} from "../../../store";
import Loading from "../../Misc/Loading";
import Button from "../../Misc/Button";
import Cancel from "../../Misc/Cancel";
import Error from "../../Misc/Error";
import Group_Cont_Unlocked from "./group/Group_Cont_Unlocked";
import Knockout_Cont_Unlocked from "./ko/Knockout_Cont_Unlocked";
import "./My_Picks_Unlocked.css";

const My_Picks_Unlocked_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const user = useSelector((state) => state.auth);

  const joe = findJoe(useSelector((state) => state.users));

  const [tiebreaker, setTiebreaker] = useState(
    user?.tiebreaker ? user.tiebreaker.toString() : null
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
  //
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

  const [selectionObj, setSelectionObj] = useState({
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

  const onChangeSelectionObj = (group, key, answer) => {
    if (key === "thirdPlaceAdvanceToKO") {
      selectionObj[group][key] = !selectionObj[group][key];
    } else {
      selectionObj[group][key] = answer;
    }
  };

  const errorAudit = [];

  const clearArr = (arr) => {
    while (arr.length) {
      arr.pop();
      return clearArr(arr);
    }
  };

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
        id: user.id,
      };

      if (joe?.tourneyStage === 1) {
        clearArr(errorAudit);

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

        groupLetters.forEach((letter) => {
          const groupObj = selectionObj[letter];
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
          setMasterErrorText("Invalid Group Pick(s) - see below");

          return;
        }

        const thirdPlaceToAdvanceObj = groupLetters.reduce((a, letter) => {
          a[letter] = selectionObj[letter].thirdPlaceAdvanceToKO ?? null;

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

          let errorText;

          if (outcome === "-") {
            const selection = number > 1 ? "selections" : "selection";
            errorText = `Need four 3rd place teams to advance, missing ${number} ${selection}`;
          } else {
            errorText = `Error: ${number} too many 3rd place teams advancing`;
          }

          setMasterErrorText(errorText);

          return;
        }

        groupLetters.forEach((letter) => {
          const nums = [1, 2, 3, 4];

          nums.forEach((num) => {
            userObj[`group${letter}${num}`] = selectionObj[letter][num];

            if (num === 3) {
              const key = `thirdPlaceAdvanceToKO_Pick_${letter}`;
              const value = selectionObj[letter].thirdPlaceAdvanceToKO
                ? selectionObj[letter][num]
                : null;
              userObj[key] = value;
            }
          });
        });
      }

      if (joe?.tourneyStage === 4) {
        clearArr(errorAudit);

        const koAudit = (team, letter, num) => {
          if (!team) {
            setMasterError(true);
            setMasterErrorText("Incomplete Picks Below");
            errorAudit.push(1);
          } else {
            userObj[`knock${letter}${num}`] = team;
          }
        };

        koLetters.forEach((letter) => {
          switch (letter) {
            case "Q":
              Qs.forEach((num) => {
                const team = eval(`${letter}${num}`);

                koAudit(team, letter, num);
              });
              break;
            case "S":
              Ss.forEach((num) => {
                const team = eval(`${letter}${num}`);

                koAudit(team, letter, num);
              });
              break;
            case "F":
              Fs.forEach((num) => {
                const team = eval(`${letter}${num}`);

                koAudit(team, letter, num);
              });
              break;
            case "Champ":
              if (champ.length === 0) {
                setMasterError(true);
                setMasterErrorText("Incomplete Picks Below");
                errorAudit.push(1);
              } else {
                userObj.knockChamp = champ;
              }
              break;
            default:
              break;
          }
        });
      }

      !masterError &&
        !errorAudit.length &&
        dispatch(updateUser(userObj, history, "my_picks"));
    } catch (err) {
      console.log("reeeed error", err);
    }
  };

  return (
    <div className="my-picks-unlocked-page">
      {loading ? (
        <Loading />
      ) : (
        <form
          onSubmit={onSubmit}
          id="update-user"
          className="my-picks-container-ul"
        >
          <div className="my-picks-ul-top">
            <h3 className="black-text">
              {joe?.tourneyStage === 1 &&
                "Select a country from the dropdowns to rank where you think they will finish in their group. \n If you think the 3rd place team will advance from the group, check the box."}
              {joe?.tourneyStage === 4 &&
                "Select the country you think will win each game"}
            </h3>

            {joe?.tourneyStage === 1 && (
              <h4 className="black-text">
                (must select four 3rd place teams to advance).
              </h4>
            )}

            <Button text="Submit Picks" form="update-user" />

            <Cancel link="my_picks" color="black" bold={true} />

            <div className="master-error-cont-edit-picks">
              {masterError && <Error error={masterErrorText} />}
            </div>

            {joe?.tourneyStage === 1 && (
              <div className="tiebreaker-cont-edit-picks black-text">
                <h3>Tiebreaker - total number of goals scored:</h3>

                <input
                  defaultValue={tiebreaker}
                  onChange={(ev) => {
                    setTiebreaker(ev.target.value);
                    resetMasterError();
                  }}
                ></input>
              </div>
            )}
          </div>

          <div className="edit-group-picks">
            {joe?.tourneyStage === 1 && (
              <Group_Cont_Unlocked
                onChangeSelectionObj={onChangeSelectionObj}
                groupErrorObj={groupErrorObj}
                selectionObj={selectionObj}
                resetMasterError={resetMasterError}
              />
            )}

            {joe?.tourneyStage === 4 && user?.tiebreaker && (
              <Knockout_Cont_Unlocked
                setTeam={setTeam}
                resetMasterError={resetMasterError}
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
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default My_Picks_Unlocked_Page;
