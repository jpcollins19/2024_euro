import { colorDescriptionTableNeeded } from "../../store";
import Color_Description_Table from "./Color_Description_Table";
import Input_Field from "./Input_Field";

const Leaderboard_Cont = ({ joe, rankInfo }) => {
  const inputs = ["rank", "name", "total"];

  return (
    <div className="table-cont">
      {joe?.tourneyStage > 1 && colorDescriptionTableNeeded(rankInfo) && (
        <Color_Description_Table rankInfo={rankInfo} />
      )}
      <div className="rankInfo">
        {inputs.map((input, idx) => (
          <Input_Field key={idx} input={input} rankInfo={rankInfo} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard_Cont;
