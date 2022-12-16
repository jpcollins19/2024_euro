import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { updateUser, dupeValInArr, findJoe } from "../../../store";
import Loading from "../../Misc/Loading";
import Button from "../../Misc/Button";
import Cancel from "../../Misc/Cancel";
import Error from "../../Misc/Error";
import Group_Cont_Unlocked from "./group/Group_Cont_Unlocked";
import Knockout_Cont_Unlocked from "./ko/Knockout_Cont_Unlocked";
import Box from "@mui/material/Box";
import "./My_Picks_Unlocked.css";

const My_Picks_Unlocked_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const user = useSelector((state) => state.auth);

  const joe = findJoe(useSelector((state) => state.users));

  const [tiebreaker, setTiebreaker] = useState(
    user && user.tiebreaker ? user.tiebreaker : null
  );
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

  const [selectionObj, setSelectionObj] = useState({
    A: {
      1: user && user.groupA1 ? user.groupA1 : null,
      2: user && user.groupA2 ? user.groupA2 : null,
      3: user && user.groupA3 ? user.groupA3 : null,
      4: user && user.groupA4 ? user.groupA4 : null,
    },
    B: {
      1: user && user.groupB1 ? user.groupB1 : null,
      2: user && user.groupB2 ? user.groupB2 : null,
      3: user && user.groupB3 ? user.groupB3 : null,
      4: user && user.groupB4 ? user.groupB4 : null,
    },
    C: {
      1: user && user.groupC1 ? user.groupC1 : null,
      2: user && user.groupC2 ? user.groupC2 : null,
      3: user && user.groupC3 ? user.groupC3 : null,
      4: user && user.groupC4 ? user.groupC4 : null,
    },
    D: {
      1: user && user.groupD1 ? user.groupD1 : null,
      2: user && user.groupD2 ? user.groupD2 : null,
      3: user && user.groupD3 ? user.groupD3 : null,
      4: user && user.groupD4 ? user.groupD4 : null,
    },
    E: {
      1: user && user.groupE1 ? user.groupE1 : null,
      2: user && user.groupE2 ? user.groupE2 : null,
      3: user && user.groupE3 ? user.groupE3 : null,
      4: user && user.groupE4 ? user.groupE4 : null,
    },
    F: {
      1: user && user.groupF1 ? user.groupF1 : null,
      2: user && user.groupF2 ? user.groupF2 : null,
      3: user && user.groupF3 ? user.groupF3 : null,
      4: user && user.groupF4 ? user.groupF4 : null,
    },
    G: {
      1: user && user.groupG1 ? user.groupG1 : null,
      2: user && user.groupG2 ? user.groupG2 : null,
      3: user && user.groupG3 ? user.groupG3 : null,
      4: user && user.groupG4 ? user.groupG4 : null,
    },
    H: {
      1: user && user.groupH1 ? user.groupH1 : null,
      2: user && user.groupH2 ? user.groupH2 : null,
      3: user && user.groupH3 ? user.groupH3 : null,
      4: user && user.groupH4 ? user.groupH4 : null,
    },
  });

  const onChangeSelectionObj = (group, rank, team) => {
    selectionObj[group][rank] = team;
  };

  const groupLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const koLetters = ["Q", "S", "F", "champ"];

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

  const setChanged = (set) => {
    setTimeout(() => {
      set(true);
    }, 100);
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
          const groupObj = selectionObj[letter];
          const teams = Object.values(groupObj);
          const setError = eval(`setGroup${letter}Error`);

          if (
            teams.includes(null) ||
            teams.includes("not-valid") ||
            !dupeValInArr(teams)
          ) {
            setError(true);
            errorAudit.push(1);
          }
        });

        const validTiebreaker = Number(tiebreaker) % 1 === 0;
        const tiebreakerAsArray = tiebreaker.split("");

        if (
          !validTiebreaker ||
          tiebreaker === "" ||
          tiebreakerAsArray.includes(" ") ||
          tiebreaker === "0"
        ) {
          return setTiebreakerError(true);
        }

        userObj.tiebreaker = tiebreaker;

        groupLetters.forEach((letter) => {
          const nums = [1, 2, 3, 4];

          nums.forEach((num) => {
            userObj[`group${letter}${num}`] = selectionObj[letter][num];
          });
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

        koLetters.forEach((letter) => {
          switch (letter) {
            case "Q":
              Qs.forEach((num) => {
                const team = eval(`${letter}${num}`);

                if (team.length === 0) {
                  setKoError(true);
                  errorAudit.push(1);
                } else {
                  userObj[`knock${letter}${num}`] = team;
                }
              });
              break;
            case "S":
              Ss.forEach((num) => {
                const team = eval(`${letter}${num}`);

                if (team.length === 0) {
                  setKoError(true);
                  errorAudit.push(1);
                } else {
                  userObj[`knock${letter}${num}`] = team;
                }
              });
              break;
            case "F":
              Fs.forEach((num) => {
                const team = eval(`${letter}${num}`);

                if (team.length === 0) {
                  setKoError(true);
                  errorAudit.push(1);
                } else {
                  userObj[`knock${letter}${num}`] = team;
                }
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="84vh"
      className="my-picks-unlocked-page"
    >
      {loading ? (
        <Loading />
      ) : (
        <form
          onSubmit={onSubmit}
          id="update-user"
          className="my-picks-container-ul"
        >
          <h3 className="white-text">
            {joe?.tourneyStage === 1 &&
              "Select a country from the dropdowns to rank where you think they will finish in their group"}
            {joe?.tourneyStage === 4 &&
              "Click on the country you think will win each game"}
          </h3>

          <Button text="Submit Picks" form="update-user" />

          <Cancel link="my_picks" />

          {joe?.tourneyStage === 1 && (
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
          )}

          <div className="error-cont-placeholder">
            {tiebreakerError && <Error error="Invalid Tiebreaker Above" />}
            {koError && <Error error="Incomplete Picks Below" />}
          </div>

          <div className="edit-group-picks">
            {joe?.tourneyStage === 1 && (
              <Group_Cont_Unlocked
                onChangeSelectionObj={onChangeSelectionObj}
                groupErrorObj={groupErrorObj}
              />
            )}

            {joe?.tourneyStage === 4 && user.tiebreaker && (
              <Knockout_Cont_Unlocked
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
            )}
          </div>
        </form>
      )}
    </Box>
  );
};

export default My_Picks_Unlocked_Page;
