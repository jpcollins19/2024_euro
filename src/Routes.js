import { useEffect, useState } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { me, findJoe, routes } from "./store";
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
import KO_Admin_Page from "./components/admin/ko/KO_Admin_Page";
import Team_Admin_Page_D from "./components/admin/team-deprecated/Team_Admin_Page_D";
import NoMatch from "./components/Misc/No_Match";

const Routes = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);

  const userIsLoggedIn = user?.id ?? false;

  const joe = findJoe(useSelector((state) => state.users));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(me());
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  let nonUserRoutes = [
    { path: routes.home, component: Pre_Sign_In_Page },
    { path: routes.signIn, component: Sign_In_Page },
    { path: routes.createAccount, component: Create_Account_Page },
    {
      path: routes.accountCreated,
      component: Action_Confirmation,
    },
    {
      path: routes.pwResetConfirmation,
      component: Action_Confirmation,
    },
    {
      path: routes.forgotPwConfirmation,
      component: Action_Confirmation,
    },
    { path: routes.rules, component: Rules_Page },
    { path: routes.forgotPw, component: Forgot_PW_Page },
    { path: routes.resetPw, component: Reset_PW_Page },
  ];

  if (joe?.tourneyStage > 1) {
    nonUserRoutes = nonUserRoutes.filter(
      (route) =>
        route.path !== routes.createAccount &&
        route.path !== routes.accountCreated
    );
  }

  const redirectHome = <Redirect to={routes.home} />;

  return loading ? (
    <Loading />
  ) : (
    <Switch>
      {!userIsLoggedIn &&
        nonUserRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            exact
            component={route.component}
          />
        ))}

      <Route path={routes.rules} exact component={Rules_Page} />

      {userIsLoggedIn && (
        <Route exact path={routes.home}>
          <Redirect to={routes.leaderboard} />
        </Route>
      )}

      {user?.admin && (
        <Route path={routes.adminUsers}>
          {!userIsLoggedIn ? redirectHome : <User_Admin_Page />}
        </Route>
      )}

      {user?.admin && (
        <Route path={routes.adminGroups}>
          {!userIsLoggedIn ? redirectHome : <Group_Admin_Page />}
        </Route>
      )}

      {user?.admin && (
        <Route path={routes.adminKo}>
          {!userIsLoggedIn ? redirectHome : <KO_Admin_Page />}
        </Route>
      )}

      {user?.admin && (
        <Route path={routes.adminKoDeprecated}>
          {!userIsLoggedIn ? redirectHome : <Team_Admin_Page_D />}
        </Route>
      )}

      {joe?.tourneyStage === 1 && userIsLoggedIn && (
        <Route path={routes.myPicksEditGroup}>
          {!userIsLoggedIn ? redirectHome : <My_Picks_Unlocked_Page />}
        </Route>
      )}

      {joe?.tourneyStage === 4 && userIsLoggedIn && (
        <Route path={routes.myPicksEditKo}>
          {!userIsLoggedIn ? redirectHome : <My_Picks_Unlocked_Page />}
        </Route>
      )}

      <Route path={routes.leaderboard}>
        {!userIsLoggedIn ? redirectHome : <Leaderboard_Page />}
      </Route>

      <Route path={routes.myPicks}>
        {!userIsLoggedIn ? redirectHome : <My_Picks_Locked_Page />}
      </Route>

      <Route path={routes.poolPicksUserId}>
        {!userIsLoggedIn ? redirectHome : <Pool_Picks_Page />}
      </Route>

      <Route path={routes.groupDetails}>
        {!userIsLoggedIn ? redirectHome : <Group_Details_Page />}
      </Route>

      <Route path={routes.myProfile}>
        {!userIsLoggedIn ? redirectHome : <User_Profile_Page_L />}
      </Route>

      <Route path={routes.editProfileName}>
        {!userIsLoggedIn ? redirectHome : <User_Profile_Page_UL />}
      </Route>

      <Route path={routes.editProfilePw}>
        {!userIsLoggedIn ? redirectHome : <User_Profile_Page_UL />}
      </Route>

      <Route path={routes.editProfileEmailNotifications}>
        {!userIsLoggedIn ? redirectHome : <User_Profile_Page_UL />}
      </Route>

      <Route path={routes.noMatch}>
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default withRouter(Routes);
