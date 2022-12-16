import { useState } from "react";
import Loading from "../Misc/Loading";
import Box from "@mui/material/Box";
import "./PreSignIn.css";

const Pre_Sign_In_Page = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="84vh"
      className="pre-login-page"
    >
      {loading ? <Loading /> : ""}
    </Box>
  );
};

export default Pre_Sign_In_Page;
