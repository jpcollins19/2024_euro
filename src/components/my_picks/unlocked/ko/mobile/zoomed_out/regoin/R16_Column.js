import { koGameMapper_EditUserPicks_R16 } from "../../../../../../../store/variables";
import KO_Box from "../KO_Box";

const R16_Column = ({ regoin, user }) => {
  const game1 = koGameMapper_EditUserPicks_R16[regoin][1];
  const game2 = koGameMapper_EditUserPicks_R16[regoin][2];

  const userHasSelection_game1 = user[game1];
  const userHasSelection_game2 = user[game2];

  return (
    <div>
      <KO_Box size="small-m" userHasSelection={userHasSelection_game1} />
      <KO_Box size="small-m" userHasSelection={userHasSelection_game2} />
    </div>
  );
};

export default R16_Column;
