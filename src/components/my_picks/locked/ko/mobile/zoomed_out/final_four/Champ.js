import { useSelector } from "react-redux";
import { koGameCalc } from "../../../../../../../store";
import KO_Box from "../KO_Box";

const Champ = ({ user }) => {
  const teams = useSelector((state) => state.teams);

  const userPick = user.knockChamp;

  const userHasKOPicks = userPick ? true : false;

  const gameInfo = userHasKOPicks ? koGameCalc(user, "Champ", teams) : null;

  let result = userHasKOPicks ? gameInfo.usersPickClass : null;

  return (
    <div className="champ-mobile-z-out">
      <KO_Box size="large" result={result} />
    </div>
  );
};

export default Champ;
