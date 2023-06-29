import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers, updateUser } from "../../../store";
import Button from "../../Misc/Button";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "../../Misc/Alert";
import Input_Field from "../Input_Field";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: "solid 2px black",
    borderRadius: "9px",
  },
}));

const Reset_PW_Page = () => {
  const dispatch = useDispatch();
  let { pathname } = useLocation();

  const [user, seUser] = useState({});
  const [tempPW, setTempPW] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [showPW, setShowPW] = useState(false);
  const [error, setError] = useState(null);

  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  setTimeout(() => {
    seUser(
      users.find((user) => user.pwResetURL === pathname.split("/reset_pw/")[1])
    );
  }, 100);

  const classes = useStyles();

  const onChange = (ev) => {
    setError(null);
    const set = eval(`set${ev.target.name}`);
    set(ev.target.value);
  };

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  const inputs = [
    {
      label: "Temporary Password",
      name: "TempPW",
      marginLeft: "28%",
      type: "",
    },
    {
      label: "New Password",
      name: "Password",
      marginLeft: "33%",
      type: showPW ? "text" : "password",
    },
    {
      label: "Confirm New Password",
      name: "Password1",
      marginLeft: "26%",
      type: showPW ? "text" : "password",
    },
  ];

  const onSubmit = async (ev) => {
    ev.preventDefault();

    try {
      if (tempPW !== user.tempPW)
        return setError("Temporary password is not correct");

      if (password !== password1)
        return setError("New Password does not match");

      const obj = {
        id: user.id,
        password,
      };

      dispatch(updateUser(obj, "dont update"));
      location.hash = "#/pw_reset_confirmation";
    } catch (err) {
      console.log(err);
      setError(err.response);
    }
  };

  return (
    <div className="user-profile-page">
      <div className="reset-pw-outside">
        <div className="reset-pw-inside">
          <h1>Reset Password</h1>
          <div className="error-cont-login">
            {error ? (
              <Alert message={error} />
            ) : (
              <div className="white-text">
                Enter the temporary password that was provided in the email, and
                enter your new desired password below
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} id="reset-pw">
            {inputs.map((input, idx) => (
              <Input_Field key={idx} input={input} onChange={onChange} />
            ))}

            <div className="view-pw white-text" onClick={() => showPwClick()}>
              View Password
            </div>
            <Button
              text={"Submit"}
              disabled={!tempPW || !password || !password1}
              form={"reset-pw"}
            />
            <Link
              to="/sign_in"
              style={{ textDecoration: "none", color: "white" }}
              className="back-to-sign-in"
            >
              <h4>Back to sign in</h4>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset_PW_Page;
