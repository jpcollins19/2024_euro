import { useState } from "react";
import Loading from "../Misc/Loading";
import Single_Cont from "./Single_Cont";
import "./Group_Details.css";

const Group_Details_Page = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return loading ? (
    <Loading />
  ) : (
    <main className="group-details-page">
      <div className="group-details-container">
        <div className="group-details-full-table-container">
          {letters.map((letter) => (
            <Single_Cont key={letter} group={letter} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Group_Details_Page;
