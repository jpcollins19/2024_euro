import Region_Left from "./region/Region_Left";
import Region_Right from "./region/Region_Right";
import KO_Final_Four_Cont from "./final_four/KO_Final_Four_Cont";

const KO_Main_Cont_Out = ({user, zoomData, resetMasterError}) => {
    return (
        <div
            onClick={() => zoomData.setZoomedOut(false)}
            className="ko-cont-unlocked-main-m"
        >
            <div className="ko-cont-half-unlocked-m">
                <Region_Left
                    region={1}
                    zoomData={zoomData}
                    user={user}
                    resetMasterError={resetMasterError}
                />
                <Region_Right
                    region={3}
                    zoomData={zoomData}
                    user={user}
                    resetMasterError={resetMasterError}
                />
            </div>
            <KO_Final_Four_Cont
                region={5}
                zoomData={zoomData}
                user={user}
                resetMasterError={resetMasterError}
            />
            <div className="ko-cont-half-unlocked-m">
                <Region_Left
                    region={2}
                    zoomData={zoomData}
                    user={user}
                    resetMasterError={resetMasterError}
                />
                <Region_Right
                    region={4}
                    zoomData={zoomData}
                    user={user}
                    resetMasterError={resetMasterError}
                />
            </div>
        </div>
    );
};

export default KO_Main_Cont_Out;
