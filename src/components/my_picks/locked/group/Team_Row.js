import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { isPoolPicksPage } from "../../../../store/funcs";

const Team_Row = ({ number, group, selectedUser }) => {
  console.log(selectedUser);
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);

  const poolPicksPage = isPoolPicksPage(pathname);

  const team = poolPicksPage
    ? selectedUser[`group${group}${number}`]
    : user[`group${group}${number}`];

  return (
    <div>
      <div className="pred-locked-flag">
        <img src={team.flag}></img>
      </div>

      <div>{team.name}</div>
    </div>
  );
};

export default Team_Row;
