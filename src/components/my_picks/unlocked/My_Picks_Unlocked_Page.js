import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  updateUser,
  dupeValInArr,
  findJoe,
  loadUsers,
  auditThirdPlaceToAdvancePicks,
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

  const [tiebreakerError, setTiebreakerError] = useState(false);
  const [groupAError_R, setGroupAError_R] = useState(false);
  const [groupBError_R, setGroupBError_R] = useState(false);
  const [groupCError_R, setGroupCError_R] = useState(false);
  const [groupDError_R, setGroupDError_R] = useState(false);
  const [groupEError_R, setGroupEError_R] = useState(false);
  const [groupFError_R, setGroupFError_R] = useState(false);
  const [groupGError_R, setGroupGError_R] = useState(false);
  const [groupHError_R, setGroupHError_R] = useState(false);
  //
  const [koError, setKoError] = useState(false);
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

  console.log(["user", user]);

  const [selectionObj, setSelectionObj] = useState({
    A: {
      1: user?.groupA1?.name ?? null,
      2: user?.groupA2?.name ?? null,
      3: user?.groupA3?.name ?? null,
      4: user?.groupA4?.name ?? null,
      thirdPlaceAdvanceToKO: user?.groupA3?.thirdPlaceAdvanceToKO_User,
    },
    B: {
      1: user?.groupB1?.name ?? null,
      2: user?.groupB2?.name ?? null,
      3: user?.groupB3?.name ?? null,
      4: user?.groupB4?.name ?? null,
      thirdPlaceAdvanceToKO: user?.groupB3?.thirdPlaceAdvanceToKO_User,
    },
    C: {
      1: user?.groupC1?.name ?? null,
      2: user?.groupC2?.name ?? null,
      3: user?.groupC3?.name ?? null,
      4: user?.groupC4?.name ?? null,
      thirdPlaceAdvanceToKO: user?.groupC3?.thirdPlaceAdvanceToKO_User,
    },
    D: {
      1: user?.groupD1?.name ?? null,
      2: user?.groupD2?.name ?? null,
      3: user?.groupD3?.name ?? null,
      4: user?.groupD4?.name ?? null,
      thirdPlaceAdvanceToKO: user?.groupD3?.thirdPlaceAdvanceToKO_User,
    },
    E: {
      1: user?.groupE1?.name ?? null,
      2: user?.groupE2?.name ?? null,
      3: user?.groupE3?.name ?? null,
      4: user?.groupE4?.name ?? null,
      thirdPlaceAdvanceToKO: user?.groupE3?.thirdPlaceAdvanceToKO_User,
    },
    F: {
      1: user?.groupF1?.name ?? null,
      2: user?.groupF2?.name ?? null,
      3: user?.groupF3?.name ?? null,
      4: user?.groupF4?.name ?? null,
      thirdPlaceAdvanceToKO: user?.groupF3?.thirdPlaceAdvanceToKO_User,
    },
  });

  // console.log("selectionObj", selectionObj);

  const onChangeSelectionObj = (group, key, answer) => {
    if (key === "thirdPlaceAdvanceToKO") {
      selectionObj[group][key] = !selectionObj[group][key];
    } else {
      selectionObj[group][key] = answer;
    }

    console.log("byah", selectionObj);
  };

  const groupLetters = ["A", "B", "C", "D", "E", "F"];
  const koLetters = ["Q", "S", "F", "champ"];

  const errorAudit = [];

  const clearArr = (arr) => {
    while (arr.length) {
      arr.pop();
      return clearArr(arr);
    }
  };

  const groupErrorObj = {
    groupAError_R: groupAError_R,
    groupBError_R: groupBError_R,
    groupCError_R: groupCError_R,
    groupDError_R: groupDError_R,
    groupEError_R: groupEError_R,
    groupFError_R: groupFError_R,
    groupGError_R: groupGError_R,
    groupHError_R: groupHError_R,
    setGroupAError_R: setGroupAError_R,
    setGroupBError_R: setGroupBError_R,
    setGroupCError_R: setGroupCError_R,
    setGroupDError_R: setGroupDError_R,
    setGroupEError_R: setGroupEError_R,
    setGroupFError_R: setGroupFError_R,
    setGroupGError_R: setGroupGError_R,
    setGroupHError_R: setGroupHError_R,
  };

  const setTeam = (setTeam, name) => {
    setTeam(name);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const userObj = {
        id: user.id,
      };

      if (joe?.tourneyStage === 1) {
        clearArr(errorAudit);

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
          const answers = Object.values(groupObj);
          const setError = eval(`setGroup${letter}Error_R`);

          if (
            answers.includes(null) ||
            answers.includes("not-valid") ||
            !dupeValInArr(answers)
          ) {
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

        const thirdPlaceToAdvanceObj = groupLetters.reduce((a, letter) => {
          a[letter] = selectionObj[letter].thirdPlaceAdvanceToKO;

          return a;
        }, {});

        const thirdPlaceToAdvanceAudit = auditThirdPlaceToAdvancePicks(
          thirdPlaceToAdvanceObj
        );

        thirdPlaceToAdvanceAudit.groupErrors.forEach((letter) => {
          errorAudit.push(1);
        });

        !tiebreakerError &&
          !errorAudit.length &&
          dispatch(updateUser(userObj, history, "my_picks"));
      }

      if (joe?.tourneyStage === 4) {
        clearArr(errorAudit);

        const Qs = [1, 2, 3, 4, 5, 6, 7, 8];
        const Ss = [1, 2, 3, 4];
        const Fs = [1, 2];

        const koAudit = (team, letter, num) => {
          if (!team) {
            setKoError(true);
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
            case "champ":
              if (champ.length === 0) {
                setKoError(true);
                errorAudit.push(1);
              } else {
                userObj.knockChamp = champ;
              }
              break;
            default:
              break;
          }
        });

        !errorAudit.length &&
          dispatch(updateUser(userObj, history, "my_picks"));
      }
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
          <h3 className="black-text">
            {joe?.tourneyStage === 1 &&
              "Select a country from the dropdowns to rank where you think they will finish in their group. \n Check the box next to the third place team if you think they will advance from the group as well."}
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

          {joe?.tourneyStage === 1 && (
            <div className="tiebreaker-cont-edit-picks black-text">
              <h3>Tiebreaker - total number of goals scored:</h3>

              <input
                defaultValue={tiebreaker}
                onChange={(ev) => {
                  setTiebreaker(ev.target.value);
                  setTiebreakerError(false);
                }}
              ></input>
            </div>
          )}

          {/* {joe?.tourneyStage === 4 && (
            <div className="error-cont-placeholder">
              {koError && <Error error="Incomplete Picks Below" />}
            </div>
          )} */}

          {joe?.tourneyStage === 1 && (
            <div className="error-cont-placeholder-tiebreaker">
              {tiebreakerError && <Error error="Invalid Tiebreaker Above" />}
            </div>
          )}

          <div className="edit-group-picks">
            {joe?.tourneyStage === 1 && (
              <Group_Cont_Unlocked
                onChangeSelectionObj={onChangeSelectionObj}
                groupErrorObj={groupErrorObj}
                selectionObj={selectionObj}
              />
            )}

            {/* {joe?.tourneyStage === 4 && user?.tiebreaker && (
              <Knockout_Cont_Unlocked
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
            )} */}
          </div>
        </form>
      )}
    </div>
  );
};

export default My_Picks_Unlocked_Page;
