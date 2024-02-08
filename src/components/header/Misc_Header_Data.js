import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeUpdated,
  loadUpdated,
  loadUsersWhoNeedWebsiteUpdatedEmails,
  findJoe,
  shouldPayoutShow,
  getScreenWidth,
} from "../../store";
import Last_Updated from "./Last_Updated";
import Email_Updates from "./Email_Updates";
import Payout from "../leaderboard/Payout";
import Payout_Cont_M from "./mobile/Payout_Cont_M";

const Misc_Header_Data = ({ user }) => {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(null);

  const joe = findJoe(useSelector((state) => state.users));

  const lastUpdated = useSelector((state) => state.updated)[0];

  const showData = shouldPayoutShow(joe, user);

  const isAdmin = user?.admin;

  const classData = user?.id ? "misc-header-data" : "misc-header-data-NU";

  const isMobile = getScreenWidth("max", 65);

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
        // dispatch(loadUsersWhoNeedWebsiteUpdatedEmails());
      }
    } catch (err) {
      console.log(err);
    }
  };

  return showData ? (
    <form onSubmit={onSubmit} id="submit-last-updated" className={classData}>
      {isMobile && <Payout_Cont_M />}

      <Last_Updated text={text} />

      {!isAdmin && <Email_Updates />}

      {isAdmin && edit && (
        <div>
          <input
            defaultValue={text}
            onChange={(ev) => onChange(ev.target.value)}
          />
        </div>
      )}

      {isAdmin && !edit ? (
        <button onClick={() => setEdit(true)}>Edit</button>
      ) : isAdmin && edit ? (
        <button onClick={() => setEdit(false)}>Save</button>
      ) : null}
    </form>
  ) : null;
};

export default Misc_Header_Data;
