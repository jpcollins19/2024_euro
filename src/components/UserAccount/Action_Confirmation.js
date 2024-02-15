import {Link, useLocation} from "react-router-dom";
import {getActionConfirmationText, routes} from '../../store'
import "./UserAccount.css";

const Action_Confirmation = () => {
    const {pathname} = useLocation();

    const pageVerbiage = getActionConfirmationText(pathname)
    return (
        <div className="action-confirm-page">
            <div className="soccer-field-outside">
                <div className="soccer-field-inside">
                    {pathname === routes.forgotPwConfirmation ? (
                        <h4 className="white-text">{pageVerbiage}</h4>
                    ) : (
                        <h1 className="white-text">{pageVerbiage}</h1>
                    )}

                    {pathname === routes.forgotPwConfirmation && (
                        <div className="email-instructions">
                            If you don't receive the email, check your junk mail
                            folder. Or
                            re-send the email by clicking <Link
                            to={routes.forgotPassword}>here</Link>.
                        </div>
                    )}

                    <div className="click-to-sign-in">
                        <Link to={routes.signIn}>Click here to sign in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Action_Confirmation;
