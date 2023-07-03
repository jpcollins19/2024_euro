import { useState } from "react";
import Loading from "../Misc/Loading";
import Single_Cont from "./Single_Cont";
import "./Group_Details.css";

const Group_Details_Page = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const letters = ["A", "B", "C", "D", "E", "F"];

  return loading ? (
    <Loading />
  ) : (
    <div className="group-details-page">
      <div className="group-details-container">
        {letters.map((letter) => (
          <Single_Cont key={letter} group={letter} />
        ))}
      </div>
    </div>
  );
};

export default Group_Details_Page;
