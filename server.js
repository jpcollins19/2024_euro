//roll through each file and remove mui ---START

///admin - users --START

//need to resume work on inputting user pick data once a user is selected from the dropdown - next step === add ko stage info
//test updates for each stage:
//stage 1: user has no group picks, making group picks for user for the first time
//stage 1: user has group picks, need to adjust users group picks
//stage 2: adjusting users group picks
//stage 3: user has no KO picks, adjusting users group picks
//stage 3: user has no KO picks, making KO picks for user for the first time
//stage 3: user has KO picks, need to adjust users KO picks

///////bugz
//once you update joes picks in admin, it should take you to the pool picks page, check to see if the update you made to the joe's picks is showing right away

///admin - users --END

///admin - groups
///admin - teams

//roll through each file and remove mui ---END

//find better pics for: ---START
// preSignIn
// leaderboard
// groupDetails?

//find better pics for: ---END

//sign_in - add guard rails to know if there is a token in window.localStorage like you did for masters, then there is no need for the sign_in_scorecard page
//^^steps for above - 1. add setTimeout to Sign_in onSubmit ----- 2. auth_store: add if statement to the authenticate method  ----- 3. User model: add if/then statement to User.authenticate method

/////roll through each file and remove commented-out code

////sendgrid
//change the password reset verbiage from "world cup" to "euro"

///test specs - write specs for the 'Calcs leaderboard' describe block --- round 2
//when tourney is NOT over
//when only 2 groups are complete
//when only group stages are complete, before ko stage starts
//with ko round in diff stages

//double check euro group/KO setup before you do the below admin work
//adjust rules page accordingly based on rules that you have learned?

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

////group details
//once the page starts loading, it calls the 'api/matches' and does the work that code has already been written for.

////////////F3
//Should not be able to submit Joe tourney stage to 4 unless all matches are complete

////////////F4
//admin > team > duplicate this file, label old one 'OLD-team' - label new one 'admin > KO'
//on client side: team-OLD - change this page to a hidden route
//admin > KO > admin can update the score to each game and that adjusts the teams instance. Has an option for advancing ok pks if the score is submitted a tie

////////////F5
//leaderboard & test specs: add a "max pts available" once KO stage starts

////////////F6 -- new rules/scoring to add - when making group picks - you have to pick the winner before the tournament starts for like 10 points.
//Then you can double down when the knockout part comes out or hedge.  And if you’re winner doesn’t get out of groups, tough shit.
//To add to that you also could do name the 4 semi finalists before hand too and give pts for that

/////adjust the date info on the following pages:
//rules
//leaderboard
//pool picks

/////////F7
//ability to opt into receiving email updates each time the site is updated with fresh scores

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
