import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeUpdated,
  loadUpdated,
  loadUsersWhoNeedWebsiteUpdatedEmails,
} from "../../../store";
import Text from "./Text";
import Admin_Text from "./Admin_Text";

const LastUpdated = ({ user, tourneyStarted, userSubmittedPicks }) => {
  const dispatch = useDispatch();

  const userHasNoPicksAndTourneyHasStarted =
    !userSubmittedPicks && tourneyStarted;

  const lastUpdated = useSelector((state) => state.updated)[0];

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(null);

  useEffect(() => {
    dispatch(loadUpdated());
  }, []);

  useEffect(() => {
    setText(lastUpdated?.answer);
  }, [lastUpdated]);

  const onChange = (value) => {
    setText(value);
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    try {
      if (!edit) {
        const obj = {
          id: lastUpdated.id,
          answer: text,
        };

        dispatch(changeUpdated(obj));
        setEdit(false);
        dispatch(loadUsersWhoNeedWebsiteUpdatedEmails());
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      id="submit-last-updated"
      className={user?.id ? "last-updated-cont" : "last-updated-cont-NU"}
    >
      {!user?.admin && !userHasNoPicksAndTourneyHasStarted && (
        <Text text={text} />
      )}

      {user?.admin && (
        <Admin_Text onChange={onChange} text={text} edit={edit} />
      )}

      {user?.admin && !edit ? (
        <button onClick={() => setEdit(true)}>Edit</button>
      ) : user?.admin && edit ? (
        <button onClick={() => setEdit(false)}>Save</button>
      ) : null}
    </form>
  );
};

export default LastUpdated;
