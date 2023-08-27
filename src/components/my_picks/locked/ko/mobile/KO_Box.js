import Wrong from "@mui/icons-material/Close";
import Correct from "@mui/icons-material/Check";

const KO_Box = ({ size }) => {
  const flagClassName = size !== "small" ? "ko-box-undefined" : "";

  return (
    <div className={`ko-box-${size} ${flagClassName}`}>
      <Wrong sx={{ color: "red" }} fontSize="large" />
      {/* <Correct sx={{ color: "rgb(5, 248, 5)" }} fontSize="large" /> */}
    </div>
  );
};

export default KO_Box;
