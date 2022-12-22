import { Link } from "react-router-dom";

const Cancel = ({ link, color, bold }) => {
  return (
    <div className="cancel-cont">
      <Link
        to={link && link}
        className={`cancel-color-${color} ${bold ? "bold" : ""}`}
      >
        Cancel
      </Link>
    </div>
  );
};

export default Cancel;
