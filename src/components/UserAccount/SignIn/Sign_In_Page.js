import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, formatEmail, findJoe } from "../../../store";
import Input_Field from "../Input_Field";
import Sign_In_Options from "../Sign_In_Options";
import Button from "../../Misc/Button";
import toast, { Toaster } from "react-hot-toast";
import Error from "@mui/icons-material/ErrorOutline";

const Sign_In_Page = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPW, setShowPW] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  // const isMobileView = getScreenWidth("max", 65);

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  useEffect(() => {
    setInvalidCredentials(false);
    toast.dismiss();
  }, []);

  useEffect(() => {
    if (invalidCredentials) {
      toast(
        <div>
          <Error
            color="red"
            // fontSize={`${isMobileView ? "large" : "medium"}`}
            fontSize="medium"
          />
          <div className="invalid-credentials-text">
            Invalid Email Address and/or Password
          </div>
        </div>,
        {
          duration: 5000,
        }
      );

      setTimeout(() => {
        setInvalidCredentials(false);
        toast.dismiss();
      }, 5500);
    }
  }, [invalidCredentials]);

  const joe = findJoe(useSelector((state) => state.users));

  const inputs = [
    { label: "Email Address", name: "Email", marginLeft: "26%", type: "" },
    {
      label: "Password",
      name: "Password",
      marginLeft: "32%",
      type: showPW ? "text" : "password",
    },
  ];

  const options = [
    { route: "/forgot_pw", text: "Forgot Password" },
    { route: "/create_account", text: "Create Account" },
    { route: "/", text: "Cancel" },
  ];

  const onChange = (ev) => {
    const set = eval(`set${ev.target.name}`);

    ev.target.name === "Email"
      ? set(formatEmail(ev.target.value))
      : set(ev.target.value);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      dispatch(authenticate(email, password));

      setTimeout(() => {
        if (window.localStorage.token) {
          location.hash = "#/leaderboard";
        } else {
          setInvalidCredentials(true);
        }
      }, 200);
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="login-page">
      {invalidCredentials && (
        <Toaster
          toastOptions={{
            className: "toaster-invalid-credentials",
          }}
        />
      )}

      <div className="login-cont-outside">
        <div className="login-cont-inside">
          <h1>Sign In</h1>
          <form onSubmit={onSubmit} className="login-form" id="sign-in">
            {inputs.map((input, idx) => (
              <Input_Field key={idx} input={input} onChange={onChange} />
            ))}

            <div className="view-pw" onClick={() => showPwClick()}>
              View Password
            </div>

            <Button
              text="Sign In"
              disabled={!email || !password}
              form="sign-in"
            />

            {joe?.tourneyStage > 1
              ? options
                  .filter((option) => option.text !== "Create Account")
                  .map((option, idx) => (
                    <Sign_In_Options key={idx} option={option} />
                  ))
              : options.map((option, idx) => (
                  <Sign_In_Options key={idx} option={option} />
                ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sign_In_Page;
