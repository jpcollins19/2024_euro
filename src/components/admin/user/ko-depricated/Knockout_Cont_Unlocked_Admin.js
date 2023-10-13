import R16_UL_A from "./R16_UL_A";
import Q_UL_A from "./Q_UL_A";
import S_UL_A from "./S_UL_A";
import F_UL_A from "./F_UL_A";
import Champ_UL_A from "./Champ_UL_A";

const Knockout_Cont_Unlocked_Admin = ({
  setTeam,
  resetMasterError,
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
  setQ1,
  setQ2,
  setQ3,
  setQ4,
  setQ5,
  setQ6,
  setQ7,
  setQ8,
  S1,
  S2,
  S3,
  S4,
  setS1,
  setS2,
  setS3,
  setS4,
  F1,
  F2,
  setF1,
  setF2,
  champ,
  setChamp,
}) => {
  return (
    <div className="knockout-cont-edit white-text">
      <div>
        <R16_UL_A
          side={"left"}
          setTeam={setTeam}
          resetMasterError={resetMasterError}
          setQ1={setQ1}
          setQ2={setQ2}
          setQ3={setQ3}
          setQ4={setQ4}
        />
        <Q_UL_A
          side={"left"}
          setTeam={setTeam}
          resetMasterError={resetMasterError}
          Q1={Q1}
          Q2={Q2}
          Q3={Q3}
          Q4={Q4}
          setS1={setS1}
          setS2={setS2}
        />
        <S_UL_A
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
        <F_UL_A
          side={"left"}
          setTeam={setTeam}
          resetMasterError={resetMasterError}
          S1={S1}
          S2={S2}
          F1={F1}
          setF1={setF1}
          setChamp={setChamp}
        />
        <Champ_UL_A champ={champ} setChamp={setChamp} F1={F1} F2={F2} />
        <F_UL_A
          side={"right"}
          setTeam={setTeam}
          resetMasterError={resetMasterError}
          S3={S3}
          S4={S4}
          F2={F2}
          setF2={setF2}
          setChamp={setChamp}
        />
        <S_UL_A
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
        />
        <Q_UL_A
          side={"right"}
          setTeam={setTeam}
          resetMasterError={resetMasterError}
          Q5={Q5}
          Q6={Q6}
          Q7={Q7}
          Q8={Q8}
          setS3={setS3}
          setS4={setS4}
        />
        <R16_UL_A
          side={"right"}
          setTeam={setTeam}
          resetMasterError={resetMasterError}
          setQ5={setQ5}
          setQ6={setQ6}
          setQ7={setQ7}
          setQ8={setQ8}
        />
      </div>
    </div>
  );
};

export default Knockout_Cont_Unlocked_Admin;
