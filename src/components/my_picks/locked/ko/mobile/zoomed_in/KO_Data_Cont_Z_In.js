import Left_Arrow_Cont from "./arrows/Left_Arrow_Cont";
import Right_Arrow_Cont from "./arrows/Right_Arrow_Cont";
import Arrow_Cont_Placeholder from "./arrows/Arrow_Cont_Placeholder";
import Region_Left_Z_In from "./region/Region_Left_Z_In";
import Region_Right_Z_In from "./region/Region_Right_Z_In";
import Final_Four_Cont_Z_In from "./final_four/Final_Four_Cont_Z_In";

const KO_Data_Cont = ({user, zoomData}) => {
    const validRegions_left = [3, 4];
    const validRegions_right = [1, 2];

    const showArrow_left = validRegions_left.includes(zoomData.zoomedInRegion);
    const showArrow_right = validRegions_right.includes(
        zoomData.zoomedInRegion);

    const region = zoomData.zoomedInRegion;

    return (
        <div className="ko-data-cont-middle-z-in">
            {showArrow_left ? (
                <Left_Arrow_Cont zoomData={zoomData}/>
            ) : (
                <Arrow_Cont_Placeholder/>
            )}

            <div className="ko-data-cont-inside-z-in">
                {region <= 2 && <Region_Left_Z_In region={region} user={user}/>}

                {region > 2 && region < 5 && (
                    <Region_Right_Z_In region={region} user={user}/>
                )}

                {region === 5 && <Final_Four_Cont_Z_In region={region}
                                                       user={user}/>}
            </div>

            {showArrow_right ? (
                <Right_Arrow_Cont zoomData={zoomData}/>
            ) : (
                <Arrow_Cont_Placeholder/>
            )}
        </div>
    );
};

export default KO_Data_Cont;
