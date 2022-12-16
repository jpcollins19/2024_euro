import Single_Cont from "./Single_Cont";
import "./Group_Details.css";

const Group_Details_Page = () => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
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
