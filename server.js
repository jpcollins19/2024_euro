////////////Test specs section notes////////////
//---DONE --- write test specs for joe's ko quarters picks for each round's game - func = 'koGameCalc'
//---DONE ---incorporate a func to calc the total for the quarters for joe - func = 'koRoundCalc'
//---DONE ---once above is complete, write test specs for for the quarters round as if it hasnt finished yet
//---DONE ---write specs for the semis, final and champ too
//once 'koGameCalc' work is complete, write test specs for all other users
//once 'koGameCalc' work is complete, update the Q_Game_L file, and all other files too?

//once all koRoundTotal stuff above is complete, update the Total_Points_Cont file accordingly

////pause here and take a break from test specs////

//write test specs for joe's overallTotal - func = 'userTotalPoints'
//in test specs, make it so the ko round is halfway through quarters, semis, final, etc
//write code for 'userTotalPoints'
//once the 'userTotalPoints' func is written, write test specs for every users overallTotal
//once all overallTotal stuff above is complete, update the Total_Points_Cont file accordingly

////////////Test specs section notes////////////

////roll through every file through stage 4 and adjust everything needed:////

///////*****/////////**//** */ */ *////////*****/////////**//** */ */ *////**//** */ */ */
//////stage 4
//step// go through lifecycle for a user with no picks
//unlock the other files in the Knockout_Cont_Locked file - mimic the format in the Q_Game_L file

//step// go through lifecycle for a user with completed picks
//need to make more notes here as you go through it

////My_Picks_Unlocked_Page - unhide all things that deal with tourneyStage >= 4
//finish off the work from BYAHBYAH!! below, then:
//step// go through lifecycle for a user with no picks
//step// go through lifecycle for a user with completed picks

////Pool_Picks_Page - unhide all things that deal with tourneyStage === 4
//step// go through lifecycle for a user with no picks
//step// go through lifecycle for a user with completed picks

/////admin - users - do full audit
/////admin - groups - verify this still works
/////admin - teams - do full audit

////roll through every file through stage 4 and adjust everything needed:////

////////////F1 - add flags next to the teams name

///stage 4 ---- BYAHBYAH!!
//my_picks_ko - add correct team on hover over the wrong teams ko cont
//fix css so the ko cont has a min/max height - the css is off when teams start to advance from each round
//my_picks_edit_ko - ON THIS ONE NEXT
//check how everything flows if the user had no KO picks - then adjust the picks and re-submit again
///stage 4 ---- BYAHBYAH!!

///stage 5
//my_picks_ko & group
//pool_picks_ko & group

////////////F1 - add flags next to the teams name ------END

////roll through every file through stage 5 and adjust everything needed:////

////stage 5
//fix all admin pages through stage 5 - might not be needed, but do a full audit
//Pool_Picks_Page - unhide all things that deal with tourneyStage === 5
//My_Picks_Locked_Page - Total_Points_Cont - roll through this and make adjustments as needed for group stage scoring
////////write test specs for all things needed as this stage goes on////////
////test specs - 'Joe's Knockout Scores' in the 'Calcs everyone's overall scores' describe block - write a 'koCalc' func
////test specs - calcs className info in the 'Calcs everyone's overall correct/wrong className info in KO stage' describe block

///test specs - write specs for the 'Calcs leaderboard' describe block.  add diff phases for diff 'it' blocks - 2 groups complete, 6 others are still active, ko round in diff stages, etc

/////////do work on Leaderboard_Cont for all 5 stages/////////

///////bugz
//once you update joes picks in admin, it should take you to the pool picks page, check to see if the update you made to the joe's picks is showing right away

///////css
//fix spacing on ko containers - the left side Quarters row is closer to the R16 than the right side Quarters row

//add toaster to the leaderboard not signed in page instead of the default error message - if you like this, add it to masters

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
//once the page starts loading, it calls the 'api/matches' and does the work that code has already ben written for.

////////////F2 - group Details page
//adjust the headers to it is "+/-" instead of GF & GA - look at below first - game plan all of this at the same time
//adjust the format so the info pulls in via columns vs. current setup which is rows - this will take some planning
//needs to handle the "+/-" column being up to 5 symbols (12-11)"
//needs to handle the "GD" column being up to 2 digits"

////////////F3
//Can’t submit Joe tourney stage to 4 unless all matches are compete

////////////F4
//admin > team > duplicate this file, label old one 'OLD-team' - label new one 'admin > KO'
//on client side: team-OLD - change this page to a hidden route
//admin > KO > admin can update the score to each game and that adjusts the teams instance. Has an option for advancing ok pks if the score is submitted a tie

////////////F5
//add a "max pts available" once KO stage starts

////////////F6 -- new rules/scoring to add - when making group picks - you have to pick the winner before the tournament starts for like 10 points.
//Then you can double down when the knockout part comes out or hedge.  And if you’re winner doesn’t get out of groups, tough shit.
//To add to that you also could do name the 4 semi finalists before hand too and give pts for that

/////adjust the date info for when the picks will show on the:
//leaderboard page
//pool picks page

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
