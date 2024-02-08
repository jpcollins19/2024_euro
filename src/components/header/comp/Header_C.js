import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Top_Row from "./top_row/Top_Row";
import Bottom_Row from "./bottom_row/Bottom_Row";

const Header_C = () => {
  return (
    <div className="navbar-cont-comp">
      <CssBaseline />
      <AppBar position="sticky" color="default">
        <Top_Row />

        <Bottom_Row />
      </AppBar>
    </div>
  );
};

export default Header_C;
