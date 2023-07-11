import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadTeams } from "../../store";
import Loading from "../Misc/Loading";
import Single_Cont from "./Single_Cont";
import "./Group_Details.css";
import Asterisk_Cont from "./Asterisk_Cont";

const Group_Details_Page = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(loadTeams());
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const finishedGroups = useSelector((state) => state.teams).filter(
    (team) => team?.groupIsFinished
  );

  const letters = ["A", "B", "C", "D", "E", "F"];

  return loading ? (
    <Loading />
  ) : (
    <div className="group-details-page">
      {finishedGroups.length && <Asterisk_Cont />}
      <div className="group-details-container">
        {letters.map((letter) => (
          <Single_Cont key={letter} group={letter} />
        ))}
      </div>
    </div>
  );
};

export default Group_Details_Page;
