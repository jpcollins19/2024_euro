//////mobile compatibility --- LOCAL - START

////my picks - unlocked - stage 1
//on adjusting the single group containers
//^^ need to incorporate single cont group error notification too

////my picks - locked - stage 2
////my picks - unlocked - stage 2
////my picks - locked - stage 3
////my picks - unlocked - stage 3
////my picks - locked - stage 4
////my picks - unlocked - stage 4
////my picks - locked - stage 5
////my picks - unlocked - stage 5

////my picks - locked - remove all uncommented code from css file
////my picks - unlocked - remove all uncommented code from css file

////404 noMatch Page

////pool picks - all 5 stages
//change everything to % as you minimize the page before it gets to tablet mode
///stage 1
///stage 2
///stage 3
///stage 4
///stage 5

////rules
//change everything to % as you minimize the page before it gets to tablet mode

////group details
//change everything to % as you minimize the page before it gets to tablet mode

////leaderboard
//change everything to % as you minimize the page before it gets to tablet mode
///stage 1
///stage 2-3 - make it so when you click on someone's name, they are sent to that persons pool picks page
///stage 4-5

////my profile
//add admin routes to menu_chevron when logged in

///admin - users
//change everything to % as you minimize the page before it gets to tablet mode

////admin - groups
//change everything to % as you minimize the page before it gets to tablet mode

////admin - teams
//change everything to % as you minimize the page before it gets to tablet mode

//////mobile compatibility --- LOCAL - END

//Once tourney is close to starting:

/////adjust the date info on the following pages:
//rules
//leaderboard
//pool picks

//change the sendgrid email template URLs to byah-masters-byah

//////tablet and mobile compatibility --- byah-masters-byah - START
//sign in

//create account

//forgot pw

//all 3 action confirmation pages
//1
//2
//3

//rules

//group details

//my picks - locked - all 5 stages
//stage 1
//stage 2
//stage 3
//stage 4
//stage 5

//my picks - unlocked - all 5 stages
//stage 1
//stage 2
//stage 3
//stage 4
//stage 5

//pool picks - all 5 stages
//stage 1
//stage 2
//stage 3
//stage 4
//stage 5

//leaderboard
//stage 1
//stage 2-3
//stage 4-5

//admin - users

//admin - groups

//admin - teams

///verify that the forgot pw lifecycle is working

//////tablet and mobile compatibility --- byah-masters-byah - END

/////////////////////////////////
// Tourney Stage Info //

// 1 = pre tourney
// 2 = tourney commenced
// 3 = group stages are finishing
// 4 = pre-ko
// 5 = ko commenced
/////////////////////////////////

const express = require("express");
const app = express();
const syncAndSeed = require("./server/script/seed");
const path = require("path");
const { BugReportSharp } = require("@mui/icons-material");

app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "dist")));

app.use("/", require("./server/api/sendWebsiteUpdatedEmail"));
app.use("/", require("./server/api/sendForgotPW"));
app.use("/", require("./server/api/updated"));
app.use("/", require("./server/api/users"));
app.use("/", require("./server/api/auth"));
app.use("/", require("./server/api/teams"));
app.use("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "html/main.html"))
);

const init = async () => {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 1919;
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

init();
