import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, formatEmail, findJoe } from "../../../store";
import Input_Field from "../Input_Field";
import Sign_In_Options from "../Sign_In_Options";
import Button from "../../Misc/Button";

const Sign_In_Page = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPW, setShowPW] = useState(false);

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  const joe = findJoe(useSelector((state) => state.users));

  const inputs = [
    { label: "Email Address", name: "Email", marginLeft: "30%", type: "" },
    {
      label: "Password",
      name: "Password",
      marginLeft: "35%",
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
      location.hash = "#/leaderboard";
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="login-page">
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
