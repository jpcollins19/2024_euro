import Alert from "@mui/material/Alert";

const Error = ({ error }) => {
  return (
    <div className="error-cont">
      {error && error && (
        <Alert
          style={{
            margin: "1rem",
            display: "flex",
            justifyContent: "center",
          }}
          severity="error"
        >
          {error}
        </Alert>
      )}
    </div>
  );
};

export default Error;
