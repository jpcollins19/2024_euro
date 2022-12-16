import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticate, formatEmail, findJoe } from "../../store";
import { Link } from "react-router-dom";
import Button from "../Misc/Button";
import Error from "../Misc/Error";
import Loading from "../Misc/Loading";
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

const Sign_In_Page = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPW, setShowPW] = useState(false);
  const [error, setError] = useState(true);

  const [loading, setLoading] = useState(true);

  const runLoading = () => {
    setLoading(true);
    setError(true);
  };

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const classes = useStyles();

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  const joe = findJoe(useSelector((state) => state.users));

  const inputs = [
    { label: "Email Address", name: "Email", marginLeft: "20%", type: "" },
    {
      label: "Password",
      name: "Password",
      marginLeft: "28%",
      type: showPW ? "text" : "password",
    },
  ];

  const options = [
    { route: "/forgot_pw", text: "Forgot Password" },
    { route: "/create_account", text: "Create Account" },
    { route: "/", text: "Cancel" },
  ];

  const onChange = (ev) => {
    setError(false);
    const set = eval(`set${ev.target.name}`);

    ev.target.name === "Email"
      ? set(formatEmail(ev.target.value))
      : set(ev.target.value);
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    runLoading();
    try {
      dispatch(authenticate(email, password));
      location.hash = "#/leaderboard";
    } catch (err) {
      console.log(err.response);
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
      className="login-page-leaderboard"
    >
      {loading ? (
        <Loading />
      ) : (
        <div className="login-cont-outside-leaderboard">
          <div className="login-cont-inside-leaderboard">
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
                    Sign in
                  </Typography>

                  <div className="error-cont-placeholder">
                    {error && <Error error="Invalid Email and/or Password" />}
                  </div>

                  <Box
                    component="form"
                    onSubmit={onSubmit}
                    sx={{ mt: 1 }}
                    display="flex"
                    flexDirection="column"
                    id="sign-in"
                  >
                    {inputs.map((input) => (
                      <TextField
                        key={input.name}
                        onChange={onChange}
                        sx={{
                          margin: 1,
                          padding: 0,
                        }}
                        margin="normal"
                        required
                        fullWidth
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
                      text="Sign In"
                      disabled={!email || !password}
                      form="sign-in"
                    />
                    {joe?.tourneyStage > 1
                      ? options
                          .filter((option) => option.text !== "Create Account")
                          .map((option) => (
                            <div key={option.text} className="option-cont">
                              <Link
                                to={option.route}
                                style={{
                                  textDecoration: "none",
                                  color: "blue",
                                }}
                              >
                                <h4>{option.text}</h4>
                              </Link>
                            </div>
                          ))
                      : options.map((option) => (
                          <div key={option.text} className="option-cont">
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
        </div>
      )}
    </Box>
  );
};

export default Sign_In_Page;
