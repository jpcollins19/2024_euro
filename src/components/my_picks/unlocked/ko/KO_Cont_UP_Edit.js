import { getScreenWidth } from "../../../../store";
import KO_Unlocked_Comp from "./comp/KO_Unlocked_Comp";
import KO_Unlocked_M from "./mobile/KO_Unlocked_M";

const KO_Cont_UP_Edit = ({ userPicks, resetMasterError, zoomData }) => {
  const mobileViewNeeded = getScreenWidth("max", 65);

  return mobileViewNeeded ? (
    <KO_Unlocked_M
      user={userPicks}
      resetMasterError={resetMasterError}
      zoomData={zoomData}
    />
  ) : (
    <KO_Unlocked_Comp
      userPicks={userPicks}
      resetMasterError={resetMasterError}
    />
  );
};

export default KO_Cont_UP_Edit;
