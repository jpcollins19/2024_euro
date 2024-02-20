import {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadUsers, updateUser, getScreenWidth, routes} from "../../../store";
import Button from "../../Misc/Button";
import Alert from "../../Misc/Alert";
import Input_Field from "../Input_Field";

const Reset_PW_Page = () => {
    const dispatch = useDispatch();
    let {pathname} = useLocation();

    const [user, setUser] = useState({});
    const [tempPW, setTempPW] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [showPW, setShowPW] = useState(false);
    const [error, setError] = useState(null);

    const users = useSelector(( state ) => state.users);

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    setTimeout(() => {
        console.log('pathname', pathname)
        const pwResetURL = pathname.split(`${routes.resetPw}/`)[1];

        console.log('pwResetURL', pwResetURL)

        setUser(users.find(( user ) => user.pwResetURL === pwResetURL));
    }, 100);

    const onChange = ( ev ) => {
        setError(null);
        const set = eval(`set${ev.target.name}`);
        set(ev.target.value);
    };

    const showPwClick = () => {
        setShowPW(!showPW);
    };

    const isMobile = getScreenWidth("max", 65);

    const inputs = [
        {
            label: "Temporary Password",
            name: "TempPW",
            marginLeft: isMobile ? "27%" : "24%",
            type: "",
        },
        {
            label: "New Password",
            name: "Password",
            marginLeft: isMobile ? "32%" : "30%",
            type: showPW ? "text" : "password",
        },
        {
            label: "Confirm New Password",
            name: "Password1",
            marginLeft: isMobile ? "24%" : "22%",
            type: showPW ? "text" : "password",
        },
    ];

    const onSubmit = async ( ev ) => {
        ev.preventDefault();

        try {
            if (tempPW !== user.tempPW) {
                return setError("Temporary password is not correct");
            }

            if (password !== password1) {
                return setError("New Password does not match");
            }

            const obj = {
                id: user.id,
                password,
            };

            dispatch(updateUser(obj, "dont update"));
            location.hash = routes.pwResetConfirmation;
        } catch (err) {
            console.log(err);
            setError(err.response);
        }
    };

    return (
        <div className="user-profile-page">
            <div className="reset-pw-outside">
                <div className="reset-pw-inside">
                    <div className="reset-pw-text-cont">
                        <h1>Reset Password</h1>
                        <div className="error-cont-reset-pw">
                            {error ? (
                                <Alert message={error}/>
                            ) : (
                                <div className="white-text">
                                    Enter the temporary password that was
                                    provided in the email,
                                    and enter your new desired password below
                                </div>
                            )}
                        </div>

                        <form onSubmit={onSubmit} id="reset-pw">
                            {inputs.map(( input, idx ) => (
                                <Input_Field key={idx} input={input}
                                             onChange={onChange}/>
                            ))}

                            <div className="view-pw white-text"
                                 onClick={() => showPwClick()}>
                                View Password
                            </div>
                            <div className="reset-pw-button">
                                <Button
                                    text={"Submit"}
                                    disabled={!tempPW || !password
                                        || !password1}
                                    form={"reset-pw"}
                                />
                            </div>
                            <Link
                                to={routes.signIn}
                                style={{textDecoration: "none", color: "white"}}
                                className="back-to-sign-in"
                            >
                                <h4>Back to sign in</h4>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reset_PW_Page;
