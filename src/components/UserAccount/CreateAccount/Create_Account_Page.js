import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  addUser,
  formatEmail,
  validateEmail,
  getUserNames,
} from "../../../store";
import toast, { Toaster } from "react-hot-toast";
import Input_Field from "../Input_Field";
import Sign_In_Options from "../Sign_In_Options";
import Button from "../../Misc/Button";

const Create_Account_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [showPW, setShowPW] = useState(false);

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  const showError = (text) => {
    toast(text, { duration: 50000 });
  };

  const inputs = [
    { label: "Email Address", name: "Email", marginLeft: "31%", type: "" },
    { label: "Name", name: "Name", marginLeft: "40%", type: "" },
    {
      label: "Password",
      name: "Password",
      marginLeft: "35%",
      type: showPW ? "text" : "password",
    },
    {
      label: "Confirm Password",
      name: "Password1",
      marginLeft: "30%",
      type: showPW ? "text" : "password",
    },
  ];

  const options = [
    { route: "/sign_in", text: "Sign In here" },
    { route: "/", text: "Cancel" },
  ];

  const users = useSelector((state) => state.users);

  const userEmails = users.map((user) => user.email);

  const userNames = getUserNames(users);

  const onChange = (ev) => {
    toast.dismiss();

    const set = eval(`set${ev.target.name}`);

    ev.target.name === "Email"
      ? set(formatEmail(ev.target.value))
      : set(ev.target.value);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    try {
      if (
        !validateEmail(email) ||
        userEmails.includes(email) ||
        userNames.includes(formatEmail(name)) ||
        password !== password1
      ) {
        return showError(
          !validateEmail(email)
            ? "Error: Invalid Email Address"
            : userEmails.includes(email)
            ? "Error: Email already in use"
            : userNames.includes(formatEmail(name))
            ? "Error: Name already in use"
            : "Error: Password is not identical"
        );
      }

      const user = {
        email,
        name,
        password,
      };

      dispatch(addUser(user, history));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="create-account-page">
      <Toaster
        toastOptions={{
          className: "toaster-error-create-account",
        }}
      />
      <div className="create-account-cont-outside">
        <div className="create-account-cont-inside">
          <h1> Create Account</h1>
          <form
            onSubmit={onSubmit}
            className="create-account-form"
            id="create-account"
          >
            {inputs.map((input, idx) => (
              <Input_Field key={idx} input={input} onChange={onChange} />
            ))}

            <div className="view-pw" onClick={() => showPwClick()}>
              View Password
            </div>

            <Button
              text="Create Account"
              disabled={!email || !name || !password || !password1}
              form="create-account"
            />

            {options.map((option, idx) => (
              <Sign_In_Options key={idx} option={option} />
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create_Account_Page;
