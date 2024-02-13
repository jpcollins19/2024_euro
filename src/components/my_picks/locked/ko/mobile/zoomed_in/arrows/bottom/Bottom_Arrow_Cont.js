import Bottom_Arrow from "./Bottom_Arrow";
import Arrow_Cont_Placeholder from "../Arrow_Cont_Placeholder";

const Bottom_Arrow_Cont = ({zoomData}) => {
    const validRegions_1 = [3, 5];
    const validRegions_2 = [1, 3];
    const validRegions_3 = [1, 5];

    const showArrow_1 = validRegions_1.includes(zoomData.zoomedInRegion);
    const showArrow_2 = validRegions_2.includes(zoomData.zoomedInRegion);
    const showArrow_3 = validRegions_3.includes(zoomData.zoomedInRegion);

    const regionToAssign_1 = zoomData.zoomedInRegion === 3 ? 5 : 2;
    const regionToAssign_2 = zoomData.zoomedInRegion === 1 ? 2 : 4;
    const regionToAssign_3 = zoomData.zoomedInRegion === 1 ? 5 : 4;

    return (
        <div className="arrow-up-down-cont">
            {showArrow_1 ? (
                <Bottom_Arrow
                    zoomData={zoomData}
                    prop="rotate-45"
                    regionToAssign={regionToAssign_1}
                />
            ) : (
                <Arrow_Cont_Placeholder/>
            )}

            {showArrow_2 ? (
                <Bottom_Arrow
                    zoomData={zoomData}
                    prop="normal"
                    regionToAssign={regionToAssign_2}
                />
            ) : (
                <Arrow_Cont_Placeholder/>
            )}

            {showArrow_3 ? (
                <Bottom_Arrow
                    zoomData={zoomData}
                    prop="rotate-315"
                    regionToAssign={regionToAssign_3}
                />
            ) : (
                <Arrow_Cont_Placeholder/>
            )}
        </div>
    );
};

export default Bottom_Arrow_Cont;
