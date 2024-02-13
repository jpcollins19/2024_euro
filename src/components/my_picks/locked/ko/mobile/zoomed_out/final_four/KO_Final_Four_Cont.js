import Final_Four from "./Final_Four";
import Finals from "./Finals";
import Champ from "./Champ";

const KO_Final_Four_Cont = ({user, region, zoomData}) => {
    return (
        <div
            onClick={() => zoomData.setZoomedInRegion(region)}
            className="final-four-cont"
        >
            <Final_Four user={user} side="left"/>
            <Finals user={user} side="left"/>
            <Champ user={user}/>
            <Finals user={user} side="right"/>
            <Final_Four user={user} side="right"/>
        </div>
    );
};

export default KO_Final_Four_Cont;
