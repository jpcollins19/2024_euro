import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeUpdated } from "../../../store";
import Text from "./Text";
import EditText from "./EditText";

const LastUpdated = ({ user, tourneyStarted, userSubmittedPicks }) => {
  const dispatch = useDispatch();

  const userHasNoPicksAndTourneyHasStarted =
    !userSubmittedPicks && tourneyStarted;

  const numOfSubmittedPicks = useSelector((state) => state.users).filter(
    (user) => user.tiebreaker !== null
  );
  const lastUpdated = useSelector((state) => state.updated)[0];
  const lastUpdatedAnswer = lastUpdated?.answer;
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setEdit(false);
  }, []);

  const onChange = (value) => {
    setText(value);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const obj = {
        id: lastUpdated.id,
        answer: text,
      };

      dispatch(changeUpdated(obj));
      setEdit(false);
      setText("");
    } catch (err) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      id="submit-last-updated"
      className={user?.id ? "last-updated-cont" : "last-updated-cont-NU"}
    >
      {user?.id && !userHasNoPicksAndTourneyHasStarted && !edit && (
        <Text
          setEdit={setEdit}
          user={user}
          lastUpdatedAnswer={lastUpdatedAnswer}
        />
      )}
      {user?.admin && edit && (
        <EditText
          text={text}
          setEdit={setEdit}
          onChange={onChange}
          lastUpdatedAnswer={lastUpdatedAnswer}
        />
      )}
      {user?.id && !userHasNoPicksAndTourneyHasStarted && (
        <div className="submitted-picks">
          # of submitted picks: {numOfSubmittedPicks.length}
        </div>
      )}
    </form>
  );
};

export default LastUpdated;
