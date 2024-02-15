import {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {sendForgotPW, updateUser, routes} from "../../../store";
import Input_Field from "../Input_Field";
import Button from "../../Misc/Button";
import Alert from "../../Misc/Alert";

const Forgot_PW_Page = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    const users = useSelector(( state ) => state.users);
    const userEmails = users && users.map(( user ) => user.email);

    const onChange = ( ev ) => {
        setError(false);
        setEmail(ev.target.value);
    };

    useEffect(() => {
        const findUser = users.find(( user ) => user.email === email);
        findUser && setId(findUser.id);
        findUser && setName(findUser.name);
    }, [email]);

    const newGUID = () => {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, ( c ) =>
            (
                c ^
                (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
            ).toString(16)
        );
    };

    const forgotPW = {
        label: "Email Address",
        name: "email",
        marginLeft: "30%",
        type: "",
    };

    const onSubmit = async ( ev ) => {
        ev.preventDefault();

        try {
            if (!userEmails.includes(email)) {
                return setError(true);
            }

            const obj = {
                id,
                email,
                name,
                tempPW: newGUID(),
                pwResetURL: newGUID(),
            };

            dispatch(updateUser(obj));
            dispatch(sendForgotPW(obj, history));
        } catch (err) {
            console.log(err.response);
            setError(err.response);
        }
    };

    return (
        <div className="user-profile-page">
            <div className="forgot-pw-outside">
                <div className="forgot-pw-inside">
                    <div className="forgot-pw-text-cont">
                        <h1 className="white-text">Forgot Password</h1>
                        <div className="error-cont-forgot-pw">
                            {error ? (
                                <Alert message="Email Address not on file"/>
                            ) : (
                                <div className="white-text">
                                    Instructions on how to reset your password
                                    will be sent to the
                                    email address entered below.
                                </div>
                            )}
                        </div>

                        <form onSubmit={onSubmit} id="forgot-pw">
                            <Input_Field input={forgotPW} onChange={onChange}/>

                            <div className="forgot-pw-button">
                                <Button
                                    text="Continue"
                                    disabled={!email}
                                    form="forgot-pw"
                                />
                            </div>

                            <Link to={routes.signIn}
                                  className="back-to-sign-in">
                                <h4>Back to sign in</h4>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgot_PW_Page;
