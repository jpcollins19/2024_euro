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
  getKOResults,
  games_Q,
  games_S,
  games_F,
} from "../../../store";
import Loading from "../../Misc/Loading";
import Button from "../../Misc/Button";
import Cancel from "../../Misc/Cancel";
import Error from "../../Misc/Error";
import Group_Cont_Unlocked from "./group/Group_Cont_Unlocked";
import KO_Cont_UP_Edit from "./ko/KO_Cont_UP_Edit";
import "./My_Picks_Unlocked.css";

const My_Picks_Unlocked_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);
  const joe = findJoe(useSelector((state) => state.users));

  const [userClick, setUserClick] = useState(false);

  const [zoomedOut, setZoomedOut] = useState(true);
  const [zoomedInRegion, setZoomedInRegion] = useState(1);

  const zoomData = {
    zoomedOut: zoomedOut,
    setZoomedOut: setZoomedOut,
    zoomedInRegion: zoomedInRegion,
    setZoomedInRegion: setZoomedInRegion,
  };

  const toggleUserClick = () => setUserClick(!userClick);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

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

  const [Q1, setQ1] = useState(user?.knockQ1 ?? null);
  const [Q2, setQ2] = useState(user?.knockQ2 ?? null);
  const [Q3, setQ3] = useState(user?.knockQ3 ?? null);
  const [Q4, setQ4] = useState(user?.knockQ4 ?? null);
  const [Q5, setQ5] = useState(user?.knockQ5 ?? null);
  const [Q6, setQ6] = useState(user?.knockQ6 ?? null);
  const [Q7, setQ7] = useState(user?.knockQ7 ?? null);
  const [Q8, setQ8] = useState(user?.knockQ8 ?? null);
  const [S1, setS1] = useState(user?.knockS1 ?? null);
  const [S2, setS2] = useState(user?.knockS2 ?? null);
  const [S3, setS3] = useState(user?.knockS3 ?? null);
  const [S4, setS4] = useState(user?.knockS4 ?? null);
  const [F1, setF1] = useState(user?.knockF1 ?? null);
  const [F2, setF2] = useState(user?.knockF2 ?? null);
  const [champ, setChamp] = useState(user?.knockChamp ?? null);

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

  const userPicks = getKOResults(teams);

  const addToUserPicks = (game) => {
    const value = eval(game);

    const key_set = `set${game}`;
    const value_set = eval(key_set);

    userPicks[game] = value;
    userPicks[key_set] = value_set;
  };

  games_Q.forEach((game) => {
    addToUserPicks(game);
  });

  games_S.forEach((game) => {
    addToUserPicks(game);
  });

  games_F.forEach((game) => {
    addToUserPicks(game);
  });

  userPicks.champ = champ;
  userPicks.setChamp = setChamp;

  const findTeam = (game) => {
    const team = eval(game);
    return team?.name ?? null;
  };

  useEffect(() => {
    const teams_R16 = Object.values(getKOResults(teams)).reduce(
      (a, matchup) => {
        matchup.forEach((team) => {
          a.push(team?.name);
        });

        return a;
      },
      []
    );

    const teams_quarters = games_Q.map((game) => {
      return findTeam(game);
    });

    const teams_semis = games_S.map((game) => {
      return findTeam(game);
    });

    const finals = games_F.map((game) => {
      return findTeam(game);
    });

    const champion = champ?.name;

    teams_quarters.forEach((team, idx) => {
      if (!teams_R16.includes(team)) {
        const set = eval(`setQ${idx + 1}`);
        set(null);
      }
    });

    teams_semis.forEach((team, idx) => {
      if (!teams_quarters.includes(team)) {
        const set = eval(`setS${idx + 1}`);
        set(null);
      }
    });

    finals.forEach((team, idx) => {
      if (!teams_semis.includes(team)) {
        const set = eval(`setF${idx + 1}`);
        set(null);
      }
    });

    if (!finals.includes(champion)) {
      setChamp(null);
    }
  }, [userPicks]);

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
        setLoading(true);
        clearArr(errorAudit);

        setTimeout(() => {
          setZoomedOut(true);
          setLoading(false);
        }, 100);

        const koAudit = (team, game) => {
          if (!team) {
            setMasterError(true);
            setMasterErrorText("Incomplete Picks Below");
            errorAudit.push(1);
          } else {
            userObj[`knock${game}`] = team;
          }
        };

        games_Q.forEach((game) => {
          const team = eval(game);

          koAudit(team?.name, game);
        });

        games_S.forEach((game) => {
          const team = eval(game);

          koAudit(team?.name, game);
        });

        games_F.forEach((game) => {
          const team = eval(game);

          koAudit(team?.name, game);
        });

        koAudit(champ?.name, "Champ");
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
            <h3 className="black-text ">
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
              <KO_Cont_UP_Edit
                userPicks={userPicks}
                resetMasterError={resetMasterError}
                zoomData={zoomData}
              />
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default My_Picks_Unlocked_Page;
