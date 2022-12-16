import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { me } from "../../../../store";
import Loading from "../../../Misc/Loading";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import toast, { Toaster } from "react-hot-toast";

const User_Profile_Page = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.auth);

  if (!user) return null;

  const pwUpdated = () => {
    toast("Your password has been updated", { duration: 5000 });
  };

  useEffect(() => {
    dispatch(me());
  }, []);

  setTimeout(() => {
    setLoading(false);

    const month =
      user &&
      user.passwordUpdated &&
      Number(user.passwordUpdated.split(" ")[0]);
    const date =
      user &&
      user.passwordUpdated &&
      Number(user.passwordUpdated.split(" ")[1]);
    const time =
      user &&
      user.passwordUpdated &&
      Number(user.passwordUpdated.split(" ")[2]);

    const monthNow = new Date().getMonth() + 1;
    const dateNow = new Date().getDate();
    const timeNow = new Date().getTime();

    if (month === monthNow && date === dateNow) {
      if (timeNow - time < 2000) pwUpdated();
    }
  }, 1000);

  const options = [
    { route: "/edit_profile_name", text: "Edit Name" },
    { route: "/edit_profile_password", text: "Change Password" },
  ];

  const inputs = [
    { text: "My Profile:", component: "h1" },
    { text: user && user.name, component: "h2" },
  ];

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
      <Toaster
        toastOptions={{
          className: "toaster-submit-confirmation",
        }}
      />
      {loading ? (
        <Loading />
      ) : (
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
                {inputs.map((input) => (
                  <Typography
                    key={input.text}
                    className="white-text"
                    component={input.component}
                    variant="h"
                    sx={{
                      color: "white",
                      margin: "1rem",
                    }}
                  >
                    {input.text}
                  </Typography>
                ))}
                <div className="user-profile-options">
                  {options.map((option) => (
                    <Link
                      key={option.route}
                      to={option.route}
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {option.text}
                    </Link>
                  ))}
                </div>
              </Box>
            </Container>
          </div>
        </div>
      )}
    </Box>
  );
};

export default User_Profile_Page;
