import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  updateUser,
  dupeValInArr,
  findJoe,
  loadTeams,
  determineR16Seeding,
  updateTeam,
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
// import Group_Cont_Unlocked from "./group/Group_Cont_Unlocked";
// import Knockout_Cont_Teams_A from "./ko/Knockout_Cont_Teams_A";
import R16_Column_A from "./columns/R16_Column_A";
import Q_Column_A from "./columns/Q_Column_A";
import "./Teams_Admin.css";

const My_Picks_Unlocked_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadTeams());
  }, []);

  const [loading, setLoading] = useState(true);
  const [teamAdjusted, setTeamAdjusted] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const teams = useSelector((state) => state.teams);

  const seedMatchups = determineR16Seeding(teams);

  const results = Object.entries(seedMatchups).reduce((a, entry) => {
    const game = entry[0];

    const teamData = entry[1].map((knockoutPosition) => {
      const team = teams.find(
        (team) => team?.knockoutPosition === knockoutPosition
      );

      return team;
    });

    a[game] = teamData;

    return a;
  }, {});

  console.log("results", results);

  // const results = Object.entries(seedMatchups).reduce((a, entry) => {
  //   const game = entry[0];

  //   const teamData = entry[1].map((knockoutPosition) => {
  //     const team = teams.find(
  //       (team) => team?.knockoutPosition === knockoutPosition
  //     );

  //     return team;
  //   });

  //   a[game] = teamData;

  //   return a;
  // }, {});

  // console.log("results", results);

  // for (let i = 1; i <= 8; i++) {
  //   const game = `Q${i}`;

  //   const knockoutPosition1 = results[game][0];
  //   const knockoutPosition2 = results[game][1];

  // const team1 = teams.find(
  //   (team) => team?.knockoutPosition === knockoutPosition1
  // );

  // const team2 = teams.find(
  //   (team) => team?.knockoutPosition === knockoutPosition2
  // );

  //   results[game][0] = team1;
  //   results[game][1] = team2;
  // }

  // Ss.forEach((num) => (results[`S${num}`] = [null, null]));

  //const [editKOData, setEditKOData] = useState(false);

  const adjustResults = (game, round) => {
    if (round.round === "R16") {
      switch (round.teamPos) {
        case 1:
          results[game][0].advanceToQ = true;
          results[game][0].outOfTourney = false;

          results[game][1].advanceToQ = false;
          results[game][1].outOfTourney = true;
          break;
        case 2:
          results[game][1].advanceToQ = true;
          results[game][1].outOfTourney = false;

          results[game][0].advanceToQ = false;
          results[game][0].outOfTourney = true;
          break;
      }
    }

    if (round.round === "Q") {
      const teamsWhoArePlaying = [];

      console.log("game", round.game);
    }

    setTeamAdjusted(!teamAdjusted);

    console.log("results", results);
  };

  // const errorAudit = [];

  // const clearArr = (arr) => {
  //   while (arr.length) {
  //     arr.pop();
  //     return clearArr(arr);
  //   }
  // };

  // const setTeam = (setTeam, name) => {
  //   setTeam(name);
  // };

  // const resetMasterError = () => {
  //   setMasterError(false);
  //   setMasterErrorText(null);
  // };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      Object.values(results).forEach((teams) => {
        teams.forEach((team) => {
          dispatch(updateTeam(team, history, "my_picks"));
        });
      });
    } catch (err) {
      console.log("reeeed error", err);
    }
  };

  return (
    <div className="teams-admin-page">
      {loading ? (
        <Loading />
      ) : (
        <form
          onSubmit={onSubmit}
          id="update-ko-teams"
          className="teams-admin-ko-cont"
        >
          <Button text="Save" form="update-ko-teams" />

          <div className="teams-admin-ko-bracket">
            <div>
              <R16_Column_A
                side={"left"}
                results={results}
                adjustResults={adjustResults}
                // setTeam={setTeam}
                // resetMasterError={resetMasterError}
                // setQ1={setQ1}
                // setQ2={setQ2}
                // setQ3={setQ3}
                // setQ4={setQ4}
              />
              <Q_Column_A
                side={"left"}
                results={results}
                adjustResults={adjustResults}
                teamAdjusted={teamAdjusted}
                // setTeam={setTeam}
                // resetMasterError={resetMasterError}
                // Q1={Q1}
                // Q2={Q2}
                // Q3={Q3}
                // Q4={Q4}
                // setS1={setS1}
                // setS2={setS2}
              />
              {/* <S_Teams_A
                side={"left"}
                setTeam={setTeam}
                resetMasterError={resetMasterError}
                Q1={Q1}
                Q2={Q2}
                Q3={Q3}
                Q4={Q4}
                S1={S1}
                S2={S2}
                setS1={setS1}
                setS2={setS2}
                setF1={setF1}
              />
              <F_Teams_A
                side={"left"}
                setTeam={setTeam}
                resetMasterError={resetMasterError}
                S1={S1}
                S2={S2}
                F1={F1}
                setF1={setF1}
                setChamp={setChamp}
              />
              <Champ_Teams_A
                champ={champ}
                setChamp={setChamp}
                F1={F1}
                F2={F2}
              />
              <F_Teams_A
                side={"right"}
                setTeam={setTeam}
                resetMasterError={resetMasterError}
                S3={S3}
                S4={S4}
                F2={F2}
                setF2={setF2}
                setChamp={setChamp}
              />
              <S_Teams_A
                side={"right"}
                setTeam={setTeam}
                resetMasterError={resetMasterError}
                Q5={Q5}
                Q6={Q6}
                Q7={Q7}
                Q8={Q8}
                S3={S3}
                S4={S4}
                setS3={setS3}
                setS4={setS4}
                setF2={setF2}
              /> */}
              <Q_Column_A
                side={"right"}
                results={results}
                adjustResults={adjustResults}
                teamAdjusted={teamAdjusted}
                // setTeam={setTeam}
                // resetMasterError={resetMasterError}
                // Q5={Q5}
                // Q6={Q6}
                // Q7={Q7}
                // Q8={Q8}
                // setS3={setS3}
                // setS4={setS4}
              />
              <R16_Column_A
                side={"right"}
                results={results}
                adjustResults={adjustResults}
                // setTeam={setTeam}
                // resetMasterError={resetMasterError}
                // setQ5={setQ5}
                // setQ6={setQ6}
                // setQ7={setQ7}
                // setQ8={setQ8}
              />
            </div>

            {/* {joe?.tourneyStage === 1 && (
              <Group_Cont_Unlocked
                onChangeSelectionObj={onChangeSelectionObj}
                groupErrorObj={groupErrorObj}
                selectionObj={selectionObj}
                resetMasterError={resetMasterError}
              />
            )} */}

            {/* <Knockout_Cont_Teams_A
            // setTeam={setTeam}
            // resetMasterError={resetMasterError}
            // Q1={Q1}
            // Q2={Q2}
            // Q3={Q3}
            // Q4={Q4}
            // Q5={Q5}
            // Q6={Q6}
            // Q7={Q7}
            // Q8={Q8}
            // setQ1={setQ1}
            // setQ2={setQ2}
            // setQ3={setQ3}
            // setQ4={setQ4}
            // setQ5={setQ5}
            // setQ6={setQ6}
            // setQ7={setQ7}
            // setQ8={setQ8}
            // S1={S1}
            // S2={S2}
            // S3={S3}
            // S4={S4}
            // setS1={setS1}
            // setS2={setS2}
            // setS3={setS3}
            // setS4={setS4}
            // F1={F1}
            // F2={F2}
            // setF1={setF1}
            // setF2={setF2}
            // champ={champ}
            // setChamp={setChamp}
            /> */}
          </div>
        </form>
      )}
    </div>
  );
};

export default My_Picks_Unlocked_Page;
