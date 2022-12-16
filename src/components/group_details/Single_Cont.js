import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTeams, capFirstLetter } from "../../store";
import Input_Cont from "./Input_Cont";

const Single_Cont = ({ group }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeams());
  }, []);

  let groupTeams = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition);

  const entries = [
    "flag",
    "team",
    "name",
    "MP",
    "W",
    "D",
    "L",
    "GF",
    "GA",
    "GD",
    "pts",
  ];

  return (
    <div>
      <div className="single-group-cont">
        <h3 className="group-header">Group {group}</h3>
        <div className="text-cont">
          <div className="text-header">
            {entries
              .filter((entry) => entry !== "flag" && entry !== "name")
              .map((entry) => (
                <div key={entry} className={entry === "team" ? entry : ""}>
                  {capFirstLetter(entry)}
                </div>
              ))}
          </div>

          {groupTeams &&
            groupTeams
              .filter((team) => team.group === group)
              .map((team) => (
                <div key={team.id} className="team-row-cont">
                  <div className="single-group-cont-text">
                    {entries
                      .filter((entry) => entry !== "team")
                      .map((entry) => (
                        <Input_Cont key={entry} team={team} entry={entry} />
                      ))}
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Single_Cont;
