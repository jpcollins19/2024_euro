import { Link } from "react-router-dom";

const Cancel = ({ link }) => {
  return (
    <div className="cancel-cont">
      <Link to={link && link}>Cancel</Link>
    </div>
  );
};

export default Cancel;
