import { useSelector } from "react-redux";
import { koGameCalc } from "../../../../../../../store";
import Correct_Team_Cont from "./Correct_Team_Cont";

const Champ_Game_L = ({ user }) => {
  const teams = useSelector((state) => state.teams);

  const gameInfo = koGameCalc(user, "Champ", teams);

  const gameIsFinished = gameInfo.teamThatAdvanced ?? false;

  return (
    <div className="white-text CL">
      <div className={`${gameInfo.usersPickClass}-box`}>
        <div className="team-ko-img-cont">
          {gameInfo.usersPick?.name && (
            <img
              className={`team-flag-ko-champ ${gameInfo.usersPickClass}-flag`}
              src={gameInfo.usersPick?.flag}
            />
          )}

          {gameIsFinished && gameInfo.usersPickClass === "wrong" && (
            <Correct_Team_Cont gameInfo={gameInfo} champ={true} />
          )}

          <p className={`team-name-ko-champ ${gameInfo.usersPickClass}-text`}>
            {gameInfo.usersPick?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Champ_Game_L;
