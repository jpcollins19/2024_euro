import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { capFirstLetter, updateTeam, findEntry } from "../../../store";
import Button from "../../Misc/Button";
import Input_Cont from "./Input_Cont";

const Team_Cont = ({ team }) => {
  const dispatch = useDispatch();
  let history = useHistory();

  history.location.pathname = "/teams";

  const [id, setId] = useState(null);
  const [advanceToQ, setAdvanceToQ] = useState(null);
  const [advanceToS, setAdvanceToS] = useState(null);
  const [advanceToF, setAdvanceToF] = useState(null);
  const [advanceToChamp, setAdvanceToChamp] = useState(null);
  const [outOfTourney, setOutOfTourney] = useState(null);

  const entries = [
    "id",
    "advanceToQ",
    "advanceToS",
    "advanceToF",
    "advanceToChamp",
    "outOfTourney",
  ];

  useEffect(() => {
    entries.forEach((entry) => {
      const set = eval(`set${capFirstLetter(entry)}`);
      set(team[entry]);
    });
  }, [team]);

  const toggleQ = () => setAdvanceToQ((value) => !value);
  const toggleS = () => setAdvanceToS((value) => !value);
  const toggleF = () => setAdvanceToF((value) => !value);
  const toggleChamp = () => setAdvanceToChamp((value) => !value);
  const toggleOutOfTourney = () => setOutOfTourney((value) => !value);

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const obj = entries.reduce((a, entry) => {
        const answer = eval(entry);
        a[entry] = answer;

        return a;
      }, {});

      console.log("obj", obj);

      dispatch(updateTeam(obj, history, "pool_picks"));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmit} id="submit-team">
      <div className="single-team-cont-edit">
        <h3 className="team-header"> {team.name}</h3>
        {entries.map((entry) => {
          if (entry !== "id") {
            const answer = eval(entry);
            const toggle =
              entry === "outOfTourney"
                ? toggleOutOfTourney
                : eval(`toggle${findEntry(entry)}`);

            return (
              <Input_Cont
                key={entry}
                entry={entry}
                answer={answer}
                toggle={toggle}
              />
            );
          }
        })}
      </div>
      <Button text="Submit" form="submit-team" />
    </form>
  );
};

export default Team_Cont;
