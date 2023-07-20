import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  loadTeams,
  determineR16Seeding,
  updateTeam,
  semiMatchups,
  finalMatchups,
} from "../../../store";
import Loading from "../../Misc/Loading";
import Button from "../../Misc/Button";
import R16_Column_A from "./columns/R16_Column_A";
import Q_Column_A from "./columns/Q_Column_A";
import S_Column_A from "./columns/S_Column_A";
import F_Column_A from "./columns/F_Column_A";
import Champ_Column_A from "./columns/Champ_Column_A";
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

  const adjustResults = (a) => {
    if (a.round === "R16") {
      switch (a.teamPos) {
        case 1:
          results[a.game][0].advanceToQ = true;
          results[a.game][0].outOfTourney = false;

          results[a.game][1].advanceToQ = false;
          results[a.game][1].advanceToS = false;
          results[a.game][1].advanceToF = false;
          results[a.game][1].advanceToChamp = false;
          results[a.game][1].outOfTourney = true;
          break;
        case 2:
          results[a.game][1].advanceToQ = true;
          results[a.game][1].outOfTourney = false;

          results[a.game][0].advanceToQ = false;
          results[a.game][0].advanceToS = false;
          results[a.game][0].advanceToF = false;
          results[a.game][0].advanceToChamp = false;
          results[a.game][0].outOfTourney = true;
          break;
      }
    }

    if (a.round === "Q") {
      const teamThatAdvanced = results[a.game].find((team) => team.advanceToQ);

      const otherTeamGame =
        a.gameNum % 2 === 0 ? `Q${a.gameNum - 1}` : `Q${a.gameNum + 1}`;

      const teamThatGotKnockedOut = results[otherTeamGame].find(
        (team) => team.advanceToQ
      );

      teamThatAdvanced.advanceToS = true;
      teamThatAdvanced.outOfTourney = false;

      teamThatGotKnockedOut.advanceToS = false;
      teamThatGotKnockedOut.advanceToF = false;
      teamThatGotKnockedOut.advanceToChamp = false;
      teamThatGotKnockedOut.outOfTourney = true;
    }

    if (a.round === "S") {
      let teamThatAdvanced, teamThatGotKnockedOut;

      semiMatchups[a.game].forEach((game) => {
        const targetTeam = results[game].find((team) => team.advanceToS);

        if (targetTeam) teamThatAdvanced = targetTeam;
      });

      const otherTeamGame =
        a.gameNum % 2 === 0 ? `S${a.gameNum - 1}` : `S${a.gameNum + 1}`;

      semiMatchups[otherTeamGame].forEach((game) => {
        const targetTeam = results[game].find((team) => team.advanceToS);

        if (targetTeam) teamThatGotKnockedOut = targetTeam;
      });

      if (teamThatAdvanced) {
        teamThatAdvanced.advanceToF = true;
        teamThatAdvanced.outOfTourney = false;
      }

      if (teamThatGotKnockedOut) {
        teamThatGotKnockedOut.advanceToF = false;
        teamThatGotKnockedOut.advanceToChamp = false;
        teamThatGotKnockedOut.outOfTourney = true;
      }
    }

    if (a.round === "F") {
      let teamThatAdvanced, teamThatGotKnockedOut;

      finalMatchups[a.game].forEach((game) => {
        const targetTeam = results[game].find((team) => team.advanceToF);

        if (targetTeam) teamThatAdvanced = targetTeam;
      });

      const otherTeamGame = a.game === "F1" ? "F2" : "F1";

      finalMatchups[otherTeamGame].forEach((game) => {
        const targetTeam = results[game].find((team) => team.advanceToF);

        if (targetTeam) teamThatGotKnockedOut = targetTeam;
      });

      if (teamThatAdvanced) {
        teamThatAdvanced.advanceToChamp = true;
        teamThatAdvanced.outOfTourney = false;
      }

      if (teamThatGotKnockedOut) {
        teamThatGotKnockedOut.advanceToChamp = false;
        teamThatGotKnockedOut.outOfTourney = true;
      }
    }

    setTeamAdjusted(!teamAdjusted);
  };

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
              />
              <Q_Column_A
                side={"left"}
                results={results}
                adjustResults={adjustResults}
                teamAdjusted={teamAdjusted}
              />
              <S_Column_A
                side={"left"}
                results={results}
                adjustResults={adjustResults}
                teamAdjusted={teamAdjusted}
              />
              <F_Column_A
                side={"left"}
                results={results}
                adjustResults={adjustResults}
                teamAdjusted={teamAdjusted}
              />
              <Champ_Column_A results={results} teamAdjusted={teamAdjusted} />
              <F_Column_A
                side={"right"}
                results={results}
                adjustResults={adjustResults}
                teamAdjusted={teamAdjusted}
              />
              <S_Column_A
                side={"right"}
                results={results}
                adjustResults={adjustResults}
                teamAdjusted={teamAdjusted}
              />
              <Q_Column_A
                side={"right"}
                results={results}
                adjustResults={adjustResults}
                teamAdjusted={teamAdjusted}
              />
              <R16_Column_A
                side={"right"}
                results={results}
                adjustResults={adjustResults}
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default My_Picks_Unlocked_Page;
