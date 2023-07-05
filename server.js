////RULES ADJUSTMENTS stage 1 -- START

///My Picks - unlocked
//error handling on submitting a 3rd place to advance
//-thirdPlace finishers count must === 4

///admin - users

////RULES ADJUSTMENTS stage 1 -- START

////RULES ADJUSTMENTS stage 2 -- START

//My Picks - locked
///My Picks - unlocked
///Leaderboard
///Pool Picks
//audit to verify that the third place to advance * is working when you select a user that is not you

////RULES ADJUSTMENTS stage 2 -- END

////RULES ADJUSTMENTS stage 3 -- START

//My Picks - locked
//start on total points funcs - do a retro calc for stage 1 & 2
//fix css for third place to advance from group containers when it is in this stage

///admin - groups
///My Picks - unlocked
///Leaderboard
///Pool Picks

////RULES ADJUSTMENTS stage 3 -- END

////RULES ADJUSTMENTS stage 4 -- START

//My Picks - locked
///My Picks - unlocked
///Leaderboard
///Pool Picks

////RULES ADJUSTMENTS stage 4 -- END

////RULES ADJUSTMENTS stage 5 -- START

///admin - teams
//My Picks - locked
///My Picks - unlocked
///Leaderboard
///Pool Picks

////RULES ADJUSTMENTS stage 5 -- END

//setup auto email notifications everytime the site is updated like you did for masters

////////////A1:
//create a table for matches (Match) - Match should have the following instances: {matchNumber(determines the 1st, 2nd, 3rd etc game of each group - eg: 'A1', 'B5' etc), group, matchUniqueId ('AustraliaFrance'), homeTeamId, homeTeamName, homeTeamFlag, homeTeamGoalsScored, awayTeamId, awayTeamName, awayTeamFlag, awayTeamGoalsScored, matchComplete}
//seed.js file - after teams are created, create an list of matches (Match)
//create api for that lists each match (api/match)
//top of seed.js file - create an obj (matchOrder) that is a concat of each team alphabetized (AustraliaFrance) as a key, and the value = the match # of the tourney
//in syncAndSeed - take the MatchUniqueId and assign the val from the matchOrder variable
//create an api (api/matches) that holds an array of obj groups ({A: [arr of obj Match for group A], B: [arr of obj Match for group B]}) - inside each group obj is each completed match
//admin > group > duplicate this file, label old one 'OLD' - label new one 'matches'
//on client side: group-OLD - change this page to a hidden route
//admin > matches > adjust code so it lists each match when you choose a group
//write code to submit the match info - this will update the (api/match) info
//once the match is updated, it will need to roll through the entire 'api/matches' process to determine the rank info
//^^starts with an obj ----{A:[{teamName, teamRank, flag, etc}, B:[{teamName, teamRank, flag, etc}]}
//^^func to determine each teams total MP, W, L, D, GA, GF, pts..
//add an 'overrideRank' to the team obj - auto default to false - can only update this via the 'group-OLD' route
//after a match has been updated, update the team obj to note their rank data, only if overrideRank === false
//team obj doesnt need (MP, W, L, D, GA, GF, pts) anymore?
//figure out a tiebreaker func for groups tab for when 2+ teams are tied on pts - use game info from 2022 world cup - any group that had ties - group H is the group that went down to a tiebreaker of yellowcards
//on client side: match-OLD page in app - test to make sure you can still udpate the team info manually (really just the groupFinishingPosition)
//admin > matches --- Auto save group is finished if all matches in group are complete
//css work on new admin > group matches page

////group details (only if you do A1 work above)
//once the page starts loading, it calls the 'api/matches' and does the work that code has already been written for.

////////////F3 - guardrails
//Should not be able to submit Joe tourney stage to 4 unless all matches are complete

////////////F4
//admin > team > duplicate this file, label old one 'OLD-team' - label new one 'admin > KO'
//on client side: team-OLD - change this page to a hidden route
//admin > KO > admin can update the ko bracket to show the team that advanced

////////////F5
//leaderboard & test specs: add a "max pts available" once KO stage starts

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
