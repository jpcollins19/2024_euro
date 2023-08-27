import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  loadTeams,
  updateTeam,
  areAllGroupsAreFinished,
  getKOResults,
} from "../../../store";
import Loading from "../../Misc/Loading";
import Button from "../../Misc/Button";
import KO_Cont_Edit from "./KO_Cont_Edit";
import "./KO_Admin.css";

const KO_Admin_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadTeams());
  }, []);

  const [loading, setLoading] = useState(true);
  const [userClick, setUserClick] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const teams = useSelector((state) => state.teams);

  const results = getKOResults(teams);

  const allGroupsFinished = areAllGroupsAreFinished(teams);

  const findRound16Game = (game) => {
    const arr = game.split("");
    return Number(arr[arr.length - 1]);
  };

  const findGamesToAudit = (gameNum, invert = false) => {
    const side = gameNum <= 4 ? "left" : "right";

    const sideMapper = {
      left: [1, 2, 3, 4],
      right: [5, 6, 7, 8],
    };

    const sideMapper_inverted = {
      left: [5, 6, 7, 8],
      right: [1, 2, 3, 4],
    };

    return invert ? sideMapper_inverted[side] : sideMapper[side];
  };

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
      const teamToAdvance = results[a.game].find((team) => team.advanceToQ);

      const round16Game = findRound16Game(a.game);

      const otherGame = a.teamPos % 2 === 0 ? round16Game - 1 : round16Game + 1;

      const losingTeam = results[`R16_${otherGame}`].find(
        (team) => team.advanceToQ
      );

      teamToAdvance.advanceToS = true;
      teamToAdvance.outOfTourney = false;

      losingTeam.advanceToS = false;
      losingTeam.advanceToF = false;
      losingTeam.advanceToChamp = false;
      losingTeam.outOfTourney = true;
    }

    if (a.round === "S") {
      const teamToAdvance = results[a.game].find((team) => team.advanceToS);

      const round16Game = findRound16Game(a.game);

      const gamesToAudit = findGamesToAudit(round16Game);

      let losingTeam;

      gamesToAudit.forEach((gameNum) => {
        if (gameNum !== round16Game) {
          const game = `R16_${gameNum}`;

          const targetTeam = results[game].find((team) => team.advanceToS);

          if (targetTeam) losingTeam = targetTeam;
        }
      });

      if (teamToAdvance) {
        teamToAdvance.advanceToF = true;
        teamToAdvance.outOfTourney = false;
      }

      if (losingTeam) {
        losingTeam.advanceToF = false;
        losingTeam.advanceToChamp = false;
        losingTeam.outOfTourney = true;
      }
    }

    if (a.round === "F") {
      const teamToAdvance = results[a.game].find((team) => team.advanceToS);

      const round16Game = findRound16Game(a.game);

      const gamesToAudit = findGamesToAudit(round16Game, true);

      let losingTeam;

      gamesToAudit.forEach((gameNum) => {
        if (gameNum !== round16Game) {
          const game = `R16_${gameNum}`;

          const targetTeam = results[game].find((team) => team.advanceToChamp);

          if (targetTeam) losingTeam = targetTeam;
        }
      });

      if (teamToAdvance) {
        teamToAdvance.advanceToChamp = true;
        teamToAdvance.outOfTourney = false;
      }

      if (losingTeam) {
        losingTeam.advanceToChamp = false;
        losingTeam.outOfTourney = true;
      }
    }

    setUserClick(!userClick);
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
    <div className="ko-admin-page">
      {loading ? (
        <Loading />
      ) : (
        <form
          onSubmit={onSubmit}
          id="update-ko-teams"
          className="admin-ko-cont"
        >
          <Button text="Save" form="update-ko-teams" />

          {allGroupsFinished && (
            <KO_Cont_Edit
              results={results}
              adjustResults={adjustResults}
              userClick={userClick}
            />
          )}
        </form>
      )}
    </div>
  );
};

export default KO_Admin_Page;
