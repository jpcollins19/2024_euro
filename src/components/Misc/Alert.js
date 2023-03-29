// import { getScreenWidth } from "../../store";
import AlertIcon from "@mui/material/Alert";
import { makeStyles } from "@material-ui/core/styles";

const Alert = ({ message }) => {
  // const isMobile = getScreenWidth("max", 65);

  const useStyles = makeStyles({
    alert: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .MuiAlert-icon": {
        // fontSize: isMobile ? 40 : 20,
        fontSize: 20,
      },
    },
  });

  const c = useStyles();

  return (
    <AlertIcon severity="error" className={c.alert}>
      {message}
    </AlertIcon>
  );
};

export default Alert;
