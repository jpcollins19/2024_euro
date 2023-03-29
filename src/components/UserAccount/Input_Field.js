import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles((theme) => ({
  textField: {
    border: "solid 2px black",
    borderRadius: "9px",
    background: "rgb(237, 239, 245)",
  },
}));

const Input_Field = ({ input, onChange }) => {
  const classes = useStyles();

  // const isMobile = getScreenWidth("max", 65);

  return (
    <TextField
      onChange={onChange}
      sx={{
        margin: 1,
        marginLeft: 0,
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
          // fontWeight: !isMobile ? "bold" : "",
          // fontSize: isMobile ? "2rem" : "1rem",
          // height: isMobile ? "4rem" : "1.5rem",
          fontSize: "1rem",
          height: "1.5rem",
        },
      }}
      InputLabelProps={{
        style: {
          textAlign: "center",
          color: "black",
          marginLeft: input.marginLeft,
          // fontSize: isMobile ? "2rem" : "1rem",
          fontSize: "1rem",
        },
        shrink: true,
      }}
      className={classes.textField}
      type={input.type}
    />
  );
};

export default Input_Field;
