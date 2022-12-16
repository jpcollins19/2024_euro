import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendForgotPW, updateUser } from "../../../store";
import Button from "../../Misc/Button";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: "solid 2px black",
    borderRadius: "9px",
  },
}));

const Forgot_PW_Page = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const history = useHistory();

  const users = useSelector((state) => state.users);
  const userEmails = users && users.map((user) => user.email);

  const classes = useStyles();

  const onChange = (ev) => {
    setError(false);
    setEmail(ev.target.value);
  };

  useEffect(() => {
    const findUser = users.find((user) => user.email === email);
    findUser && setId(findUser.id);
    findUser && setName(findUser.name);
  }, [email]);

  const newGUID = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    try {
      if (!userEmails.includes(email)) return setError(true);

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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="84vh"
      className="user-profile-page"
    >
      <div className="forgot-pw-outside">
        <div className="forgot-pw-inside">
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
              <Typography
                component="h1"
                variant="h"
                sx={{
                  color: "white",
                  margin: "1rem",
                }}
              >
                Forgot Password
              </Typography>
              <div className="error-cont-login">
                {error ? (
                  <Alert severity="error">Email Address not on file</Alert>
                ) : (
                  <div className="white-text">
                    To reset your password, enter your email address below and
                    reset instructions will be emailed out.
                  </div>
                )}
              </div>
              <Box
                component="form"
                onSubmit={onSubmit}
                sx={{ mt: 1 }}
                id="forgot-pw"
              >
                <TextField
                  onChange={onChange}
                  sx={{
                    margin: 1,
                    padding: 0,
                    width: 275,
                  }}
                  margin="normal"
                  required
                  label="Email Address"
                  variant="filled"
                  name="email"
                  InputProps={{ disableUnderline: true }}
                  inputProps={{
                    style: {
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      textAlign: "center",
                      color: "white",
                      marginLeft: "25%",
                    },
                  }}
                  className={classes.textField}
                />
                <Button
                  text={"Continue"}
                  disabled={!email}
                  form={"forgot-pw"}
                />
                <Link
                  to="/sign_in"
                  style={{ textDecoration: "none", color: "white" }}
                  className="back-to-sign-in"
                >
                  <h4>Back to sign in</h4>
                </Link>
              </Box>
            </Box>
          </Container>
        </div>
      </div>
    </Box>
  );
};

export default Forgot_PW_Page;
