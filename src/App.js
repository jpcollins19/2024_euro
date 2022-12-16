import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import { loadUsers, loadTeams, loadUpdated } from "./store";
import Header from "./components/header/Header";
import Routes from "./Routes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
    dispatch(loadTeams());
    dispatch(loadUpdated());
  }, []);

  return (
    <Router>
      <Header />
      <div className="body-cont">
        <Routes />
      </div>
    </Router>
  );
};

export default App;
