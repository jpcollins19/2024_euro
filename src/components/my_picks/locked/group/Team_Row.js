import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Team_Row = ({ number, group, selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);

  const teams = useSelector((state) => state.teams);

  const teamName =
    pathname === "/pool_picks"
      ? selectedUser[`group${group}${number}`]
      : user[`group${group}${number}`];

  const team = teams.find((team) => team.name === teamName);

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
