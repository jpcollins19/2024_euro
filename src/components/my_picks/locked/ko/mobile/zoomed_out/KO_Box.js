import Wrong from "@mui/icons-material/Close";
import Correct from "@mui/icons-material/Check";

const KO_Box = ({ size, result }) => {
  const fontSize = size === "large" ? size : "medium";

  const correct = (
    <Correct sx={{ color: "rgb(5, 248, 5)" }} fontSize={fontSize} />
  );
  const wrong = <Wrong sx={{ color: "red" }} fontSize={fontSize} />;

  if (result === "unknown") result = "";

  const gameResult = eval(result);

  return <div className={`ko-box-${size}`}>{gameResult}</div>;
};

export default KO_Box;
