import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import {
  getUserNames,
  formatEmail,
  updateUser,
  loadUsers,
} from "../../../../store";
import Loading from "../../../Misc/Loading";
import Error from "../../../Misc/Error";
import Button from "../../../Misc/Button";
import Cancel from "../../../Misc/Cancel";
import Input_Cont from "./Input_Cont";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const User_Profile_Page = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const page = pathname
    .split("/edit_profile_")[1]
    .split("")
    .map((letter, idx) => {
      if (idx === 0) {
        letter = letter.toUpperCase();
      }
      return letter;
    })
    .join("");

  if (!user) return null;

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState(null);
  const [nameChanged, setNameChanged] = useState(false);
  const [password, setPassword] = useState(null);
  const [password1, setPassword1] = useState(null);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [error, setError] = useState(null);
  const [showPW, setShowPW] = useState(false);

  const showPwClick = () => {
    setShowPW(!showPW);
  };

  setTimeout(() => {
    name === null && setName(user.name);
    password === null && setPassword(user.password);
    password1 === null && setPassword1(user.password);
    setLoading(false);
  }, 1000);

  const userNames = getUserNames(useSelector((state) => state.users));

  const onChange = (ev) => {
    setError(null);

    if (ev.target.name === "Name") {
      setName(ev.target.value);
      setNameChanged(true);
    } else {
      setPasswordChanged(true);
      ev.target.name === "Password"
        ? setPassword(ev.target.value)
        : setPassword1(ev.target.value);
    }
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    try {
      const userObj = {
        id: user.id,
      };

      if (nameChanged) {
        if (userNames.includes(formatEmail(name)))
          return setError("Name is already in use");

        userObj.name = name;
      }

      if (passwordChanged) {
        if (password !== password1) return setError("Passwords do not match");

        const month = new Date().getMonth() + 1;
        const date = new Date().getDate();
        const time = new Date().getTime();

        const dateInfo = `${month} ${date} ${time}`;

        userObj.passwordUpdated = dateInfo;
        userObj.password = password;
      }

      dispatch(updateUser(userObj, history, "my_profile"));
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
      className="user-profile-page"
    >
      {loading ? (
        <Loading />
      ) : (
        <form
          onSubmit={onSubmit}
          id="update-profile"
          className="user-profile-page"
        >
          <div className="user-profile-outside">
            <div className="user-profile-inside">
              <Container component="main" maxWidth="xs">
                <Box
                  sx={{
                    marginTop: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className="white-text"
                    component="h1"
                    variant="h"
                    sx={{
                      color: "white",
                    }}
                  >
                    Edit {page && page}
                  </Typography>

                  {error ? (
                    <Error error={error} />
                  ) : (
                    <Button text={"Submit"} form={"update-profile"} />
                  )}

                  <Input_Cont
                    onChange={onChange}
                    name={"Name"}
                    showPW={showPW}
                  />
                  {page && page === "Password" && (
                    <div
                      className="view-pw white-text"
                      onClick={() => showPwClick()}
                    >
                      View Password
                    </div>
                  )}

                  <Cancel link="/my_profile" />
                </Box>
              </Container>
            </div>
          </div>
        </form>
      )}
    </Box>
  );
};

export default User_Profile_Page;
