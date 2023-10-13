import KO_Main_Cont_Out from "./zoomed_out/KO_Main_Cont_Out";
import KO_Main_Cont_Z_In from "./zoomed_in/KO_Main_Cont_Z_In";

const KO_Unlocked_M = ({ user, resetMasterError, zoomData }) => {
  return zoomData.zoomedOut ? (
    <KO_Main_Cont_Out user={user} zoomData={zoomData} />
  ) : (
    <KO_Main_Cont_Z_In
      user={user}
      zoomData={zoomData}
      resetMasterError={resetMasterError}
    />
  );
};

export default KO_Unlocked_M;
