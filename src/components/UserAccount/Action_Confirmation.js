import { Link, useLocation } from "react-router-dom";
import "./UserAccount.css";

const Action_Confirmation = () => {
  const { pathname } = useLocation();

  const pageVerbiage =
    pathname === "/account_created"
      ? "Account Succesfully Created!"
      : pathname === "/pw_reset_confirmation"
      ? "Password Succesfully Reset!"
      : "We have successfully sent instructions for resetting your password to the email address you provided. Please follow the email instructions to reset your password. It may take a few minutes to receive the email.";

  return (
    <div className="action-confirm-page">
      <div className="soccer-field-outside">
        <div className="soccer-field-inside">
          {pathname === "/forgot_pw_confirmation" ? (
            <h4 className="white-text">{pageVerbiage}</h4>
          ) : (
            <h1 className="white-text">{pageVerbiage}</h1>
          )}

          {pathname === "/forgot_pw_confirmation" && (
            <div className="email-instructions">
              If you don't receive the email, check your junk mail folder. Or
              re-send the email by clicking <Link to="forgot_pw">here</Link>.
            </div>
          )}

          <div className="click-to-sign-in">
            <Link to="/sign_in">Click here to sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Action_Confirmation;
