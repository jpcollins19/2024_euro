import R16_Column_A from "./columns/R16_Column_A";
import Q_Column_A from "./columns/Q_Column_A";
import S_Column_A from "./columns/S_Column_A";
import F_Column_A from "./columns/F_Column_A";
import Champ_Column_A from "./columns/Champ_Column_A";

const KO_Cont_Edit = ({ results, adjustResults, teamAdjusted }) => {
  return (
    <div className="ko-admin-ko-bracket">
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
  );
};

export default KO_Cont_Edit;
