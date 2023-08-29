import Finals_UP_Edit from "./Finals_UP_Edit";
import Champ_UP_Edit from "./Champ_UP_Edit";

const Finalist_Cont_UP_Edit = ({ userPicks, resetMasterError }) => {
  return (
    <div className="ko-finalist-cont">
      <Finals_UP_Edit
        side="left"
        userPicks={userPicks}
        resetMasterError={resetMasterError}
      />
      <Champ_UP_Edit userPicks={userPicks} />
      <Finals_UP_Edit
        side="right"
        userPicks={userPicks}
        resetMasterError={resetMasterError}
      />
    </div>
  );
};

export default Finalist_Cont_UP_Edit;
