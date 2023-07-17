////RULES ADJUSTMENTS stage 5 -- START

///admin - teams
//come up with new format for relaying teams that advanced using ko bracket

/////manual leaderboard testing:
//adjust to make diff teams advancing in the KOs at each round (Q, S, F & champ) and audit leaderboard calc
//test each scenario for tiebreakers - scenarios are listed in excel doc

////RULES ADJUSTMENTS stage 5 -- END

////F1
//make the last updated text look prettier

////F2
//setup auto email notifications everytime the site is updated like you did for masters

////G1 - guardrails
//Should not be able to submit Joe tourney stage to 4 unless all matches are complete

////F3
//leaderboard & test specs: add a "max pts available" once KO stage starts

//Once tourney is close to starting:

/////adjust the date info on the following pages:
//rules
//leaderboard
//pool picks

//////tablet and mobile compatibility --- START
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
//stage 2
//dont need to do any more stages as 2-5 === same setup

//admin - users

//admin - groups

//admin - teams

//////tablet and mobile compatibility --- END

/////when website is live and is in testing ----START

////mobile view ---START

//audit every page and stage with the mobile view

////mobile view ---END

///verify that the forgot pw lifecycle is working

/////when website is live and is in testing ----END

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
