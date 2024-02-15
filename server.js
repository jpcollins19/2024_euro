//adjust all URLS to have dashes instead of underscores ---START

////test all features for all stages ---START
//find all usages of updateTeam in the teams_store and verify each dispatch updates and routes correctly
//find all usages of updateUser in the users_store and verify each dispatch updates and routes correctly

////test all features for all stages ---END

//adjust all URLS to have dashes instead of underscores ---END

///add feature for updating email preferences - email is sent when this preference is adjusted - see masters app

////////once the site is live on byah-masters-byah ----START

//change the sendgrid email template URLs to byah-masters-byah

///verify that the forgot pw lifecycle is working

//verify that the "opt into receive email notifications" setting is working as expected

//////tablet and mobile compatibility --- byah-masters-byah - START
//sign in

//create account

//forgot pw

//all 3 action confirmation pages
//1
//2
//3

//rules

////stage 1 --- START
//my profile
//group details
//my picks - locked
//my picks - unlocked
//pool picks
//leaderboard
//admin - users
//admin - groups
//admin - teams

////stage 1 --- END

////stage 2 --- START
//group details
//my picks - locked
//pool picks
//leaderboard
//admin - users
//admin - groups
//admin - teams

////stage 2 --- END

////stage 3 --- START
//group details
//my picks - locked
//pool picks
//leaderboard
//admin - users
//admin - groups
//admin - teams

////stage 3 --- END

////stage 4 --- START
//group details
//my picks - locked
//my picks - unlocked
//pool picks
//leaderboard
//admin - users
//admin - groups
//admin - teams

////stage 4 --- END

////stage 5 --- START
//group details
//my picks - locked
//pool picks
//leaderboard
//admin - users
//admin - groups
//admin - teams

////stage 5 --- END

//////tablet and mobile compatibility --- byah-masters-byah - END

////////once the site is live on byah-masters-byah ----END

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
const {BugReportSharp} = require("@mui/icons-material");

app.use(express.json());

app.use("/dist", express.static(path.join(__dirname, "dist")));

app.use("/", require("./server/api/sendWebsiteUpdatedEmail"));
app.use("/", require("./server/api/sendForgotPW"));
app.use("/", require("./server/api/updated"));
app.use("/", require("./server/api/users"));
app.use("/", require("./server/api/auth"));
app.use("/", require("./server/api/teams"));
app.use("/", ( req, res, next ) =>
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
