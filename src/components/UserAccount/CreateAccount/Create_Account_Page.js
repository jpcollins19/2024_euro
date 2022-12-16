import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  addUser,
  formatEmail,
  validateEmail,
  getUserNames,
} from "../../../store";
import toast, { Toaster } from "react-hot-toast";
import Button from "../../Misc/Button";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: "solid 2px black",
    borderRadius: "9px",
  },
}));

const Create_Account_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [showPW, setShowPW] = useState(false);

  const classes = useStyles();

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  const showError = (text) => {
    toast(text, { duration: 50000 });
  };

  const inputs = [
    { label: "Email Address", name: "Email", marginLeft: "25%", type: "" },
    { label: "Name", name: "Name", marginLeft: "35%", type: "" },
    {
      label: "Password",
      name: "Password",
      marginLeft: "30%",
      type: showPW ? "text" : "password",
    },
    {
      label: "Confirm Password",
      name: "Password1",
      marginLeft: "20%",
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="84vh"
      className="create-account-page"
    >
      <Toaster
        toastOptions={{
          className: "toaster-error",
          style: {
            background: "#f0c5c5",
            color: "red",
          },
        }}
      />
      <main className="create-account-cont-outside">
        <div className="create-account-cont-inside">
          <div>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h">
                  Create Account
                </Typography>
                <Box
                  component="form"
                  onSubmit={onSubmit}
                  sx={{ mt: 1 }}
                  display="flex"
                  flexDirection="column"
                  id="create-account"
                >
                  {inputs.map((input, idx) => (
                    <TextField
                      key={input.name}
                      onChange={onChange}
                      sx={{
                        margin: 1,
                        padding: 0,
                      }}
                      margin="normal"
                      required
                      label={input.label}
                      variant="filled"
                      name={input.name}
                      InputProps={{ disableUnderline: true }}
                      inputProps={{
                        style: {
                          textAlign: "center",
                          color: "black",
                          fontWeight: "bold",
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          textAlign: "center",
                          color: "black",
                          marginLeft: input.marginLeft,
                        },
                      }}
                      className={classes.textField}
                      type={input.type}
                    />
                  ))}

                  <div className="view-pw" onClick={() => showPwClick()}>
                    View Password
                  </div>
                  <Button
                    text="Create Account"
                    disabled={!email || !name || !password || !password1}
                    form="create-account"
                  />
                  {options.map((option) => (
                    <div
                      key={option.text}
                      className="option-cont-create-account"
                    >
                      {option.route === "/sign_in" && (
                        <div>Already have an account?</div>
                      )}
                      <Link
                        to={option.route}
                        style={{ textDecoration: "none", color: "blue" }}
                      >
                        <h4>{option.text}</h4>
                      </Link>
                    </div>
                  ))}
                </Box>
              </Box>
            </Container>
          </div>
        </div>
      </main>
    </Box>
  );
};

export default Create_Account_Page;
