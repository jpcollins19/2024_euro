import Top_Arrow from "./Top_Arrow";
import Arrow_Cont_Placeholder from "../Arrow_Cont_Placeholder";

const Top_Arrow_Cont = ({user, zoomData}) => {
    const validRegions_1 = [4, 5];
    const validRegions_2 = [2, 4];
    const validRegions_3 = [2, 5];

    const showArrow_1 = validRegions_1.includes(zoomData.zoomedInRegion);
    const showArrow_2 = validRegions_2.includes(zoomData.zoomedInRegion);
    const showArrow_3 = validRegions_3.includes(zoomData.zoomedInRegion);

    const regionToAssign_1 = zoomData.zoomedInRegion === 4 ? 5 : 1;
    const regionToAssign_2 = zoomData.zoomedInRegion === 2 ? 1 : 3;
    const regionToAssign_3 = zoomData.zoomedInRegion === 2 ? 5 : 3;

    return (
        <div className="arrow-up-down-cont">
            {showArrow_1 ? (
                <Top_Arrow
                    zoomData={zoomData}
                    prop="rotate-315"
                    regionToAssign={regionToAssign_1}
                    user={user}
                />
            ) : (
                <Arrow_Cont_Placeholder/>
            )}

            {showArrow_2 ? (
                <Top_Arrow
                    zoomData={zoomData}
                    prop="normal"
                    regionToAssign={regionToAssign_2}
                    user={user}
                />
            ) : (
                <Arrow_Cont_Placeholder/>
            )}

            {showArrow_3 ? (
                <Top_Arrow
                    zoomData={zoomData}
                    prop="rotate-45"
                    regionToAssign={regionToAssign_3}
                    user={user}
                />
            ) : (
                <Arrow_Cont_Placeholder/>
            )}
        </div>
    );
};

export default Top_Arrow_Cont;
