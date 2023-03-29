import { Link } from "react-router-dom";

const Sign_In_Options = ({ option }) => {
  return (
    <div className="option-cont">
      {option.route === "/sign_in" && (
        <h4 className="create-account-sign-in">Already have an account? </h4>
      )}
      <Link to={option.route}>
        <h4>{option.text}</h4>
      </Link>
    </div>
  );
};

export default Sign_In_Options;
