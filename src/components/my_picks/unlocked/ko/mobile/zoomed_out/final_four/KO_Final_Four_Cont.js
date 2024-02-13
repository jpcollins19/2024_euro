import Final_Four from "./Final_Four";
import Finals from "./Finals";
import Champ from "./Champ";

const KO_Final_Four_Cont = ({region, zoomData, user, resetMasterError}) => {
    return (
        <div
            onClick={() => {
                resetMasterError();
                zoomData.setZoomedInRegion(region);
            }}
            className="final-four-cont-unlocked-m"
        >
            <Final_Four user={user} side="left"/>
            <Finals user={user} game={1}/>
            <Champ user={user}/>
            <Finals user={user} game={2}/>
            <Final_Four user={user} side="right"/>
        </div>
    );
};

export default KO_Final_Four_Cont;
