import {
    koGameMapper_EditUserPicks_R16
} from "../../../../../../../store";
import KO_Box from "../KO_Box";

const R16_Column = ({region, user}) => {
    const game1 = koGameMapper_EditUserPicks_R16[region][1];
    const game2 = koGameMapper_EditUserPicks_R16[region][2];

    const userHasSelection_game1 = user[game1];
    const userHasSelection_game2 = user[game2];

    return (
        <div>
            <KO_Box size="small-m" userHasSelection={userHasSelection_game1}/>
            <KO_Box size="small-m" userHasSelection={userHasSelection_game2}/>
        </div>
    );
};

export default R16_Column;
