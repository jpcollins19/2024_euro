import { useEffect, useState } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { me } from "./store";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./components/Misc/Loading";
import Pre_Sign_In_Page from "./components/PreSignIn/Pre_Sign_In_Page";
import Sign_In_Page from "./components/UserAccount/SignIn/Sign_In_Page";
import Create_Account_Page from "./components/UserAccount/CreateAccount/Create_Account_Page";
import Action_Confirmation from "./components/UserAccount/Action_Confirmation";
import Forgot_PW_Page from "./components/UserAccount/ForgotPW/Forgot_PW_Page";
import Reset_PW_Page from "./components/UserAccount/ForgotPW/Reset_PW_Page";
import Leaderboard_Page from "./components/leaderboard/Leaderboard_Page";
import Group_Details_Page from "./components/group_details/Group_Details_Page";
import Rules_Page from "./components/rules/Rules_Page";
import My_Picks_Locked_Page from "./components/my_picks/locked/My_Picks_Locked_Page";
import My_Picks_Unlocked_Page from "./components/my_picks/unlocked/My_Picks_Unlocked_Page";
import Pool_Picks_Page from "./components/pool_picks/Pool_Picks_Page";
import User_Profile_Page_L from "./components/UserAccount/UserProfile/Locked/User_Profile_Page_L";
import User_Profile_Page_UL from "./components/UserAccount/UserProfile/UnLocked/User_Profile_Page_UL";
import User_Admin_Page from "./components/admin/user/User_Admin_Page";
import Group_Admin_Page from "./components/admin/group/Group_Admin_Page";
import Team_Admin_Page from "./components/admin/team/Team_Admin_Page";
import NoMatch from "./components/Misc/No_Match";

const Routes = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const joe = useSelector((state) => state.users).find(
    (user) => user.email === "joe@gmail.com"
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(me());
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const nonUserRoutes = [
    { path: "/", component: Pre_Sign_In_Page },
    { path: "/sign_in", component: Sign_In_Page },
    { path: "/create_account", component: Create_Account_Page },
    {
      path: "/account_created",
      component: Action_Confirmation,
    },
    {
      path: "/pw_reset_confirmation",
      component: Action_Confirmation,
    },
    {
      path: "/forgot_pw_confirmation",
      component: Action_Confirmation,
    },
    { path: "/rules", component: Rules_Page },
    { path: "/forgot_pw", component: Forgot_PW_Page },
    { path: "/reset_pw/:id", component: Reset_PW_Page },
  ];

  return loading ? (
    <Loading />
  ) : (
    <Switch>
      {!user?.id && joe && joe.tourneyStage > 1
        ? nonUserRoutes
            .filter(
              (route) =>
                route.path !== "/create_account" &&
                route.path !== "/account_created"
            )
            .map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                exact
                component={route.component}
              />
            ))
        : !user?.id && joe && joe.tourneyStage === 1
        ? nonUserRoutes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact
              component={route.component}
            />
          ))
        : ""}

      <Route path="/rules" exact component={Rules_Page} />

      {user?.id && (
        <Route exact path="/">
          <Redirect to="/leaderboard" />
        </Route>
      )}

      {user?.admin && (
        <Route path="/admin/users">
          {!user?.id ? <Redirect to="/" /> : <User_Admin_Page />}
        </Route>
      )}

      {user?.admin && (
        <Route path="/admin/groups">
          {!user?.id ? <Redirect to="/" /> : <Group_Admin_Page />}
        </Route>
      )}

      {user?.admin && (
        <Route path="/admin/teams">
          {!user?.id ? <Redirect to="/" /> : <Team_Admin_Page />}
        </Route>
      )}

      {joe?.tourneyStage === 1 && user?.id && (
        <Route path="/my_picks_edit_group">
          {!user?.id ? <Redirect to="/" /> : <My_Picks_Unlocked_Page />}
        </Route>
      )}

      {joe?.tourneyStage === 4 && user?.id && (
        <Route path="/my_picks_edit_ko">
          {!user?.id ? <Redirect to="/" /> : <My_Picks_Unlocked_Page />}
        </Route>
      )}

      <Route path="/leaderboard">
        {!user?.id ? <Redirect to="/" /> : <Leaderboard_Page />}
      </Route>

      <Route path="/my_picks">
        {!user?.id ? <Redirect to="/" /> : <My_Picks_Locked_Page />}
      </Route>

      <Route path="/pool_picks/:id">
        {!user?.id ? <Redirect to="/" /> : <Pool_Picks_Page />}
      </Route>

      <Route path="/group_details">
        {!user?.id ? <Redirect to="/" /> : <Group_Details_Page />}
      </Route>

      <Route path="/my_profile">
        {!user?.id ? <Redirect to="/" /> : <User_Profile_Page_L />}
      </Route>

      <Route path="/edit_profile_name">
        {!user?.id ? <Redirect to="/" /> : <User_Profile_Page_UL />}
      </Route>

      <Route path="/edit_profile_password">
        {!user?.id ? <Redirect to="/" /> : <User_Profile_Page_UL />}
      </Route>

      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );

  //   <Switch>
  //     {joe && joe.tourneyStage !== 1
  //       ? routeObjs[1]
  //           .filter((route) => route.path !== "/create_account")
  //           .map((route) => (
  //             <Route
  //               key={route.path}
  //               exact
  //               path={route.path}
  //               component={route.component}
  //             />
  //           ))
  //       : routeObjs[1].map((route) => (
  //           <Route
  //             key={route.path}
  //             exact
  //             path={route.path}
  //             component={route.component}
  //           />
  //         ))}
  //   </Switch>
  // );
};

export default withRouter(Routes);
