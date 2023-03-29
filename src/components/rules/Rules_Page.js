import { Link } from "react-router-dom";
import "./Rules.css";

const Rules_Page = () => {
  return (
    <div className="rules-page">
      <h2>There are 2 stages:</h2>
      <ul>
        <li>
          Stage 1 - Rank where you think each country will finish in their
          respective group. Due date for your stage 1 picks is
        </li>
        <li className="to-do"> 11/19/22.</li>
        <li className="margin-top">
          Stage 2 - Complete a round of 16 bracket. We won't know every team
          that is advancing to the round of 16 until the afternoon of
        </li>
        <li className="to-do">12/2/22.</li>
        <li>
          I'll be sending out an email that afternoon for you to complete your
          Knockout picks. The Knockout Stage commences the very next day
        </li>
        <li className="to-do">
          (12/3/22) so there will be a tight turnaround with this stage.
        </li>
        <li>so there will be a tight turnaround with this stage.</li>
        <li className="important">
          ** If you do not make your Knockout picks by the time the first
          Knockout game starts on
        </li>
        <li className="to-do">12/3/22,</li>
        <li className="important">
          your Knockout picks will be null, and you will not recieve any points
          for this stage. **
        </li>
      </ul>

      <h2>Stage 1 scoring:</h2>
      <ul>
        <li>3 pts for predicting the correct country to win the group.</li>
        <li>
          2 pts for predicting the correct country to take 2nd in the group.
        </li>
        <li>
          1 pt for predicting a country to advance out of the group, but you did
          not rank them in the correct 1/2 spot.
        </li>
        <li>
          1 pt for predicting the correct 3rd place finisher of the group.
        </li>
        <li>
          1 pt for predicting the correct 4th place finisher of the group.
        </li>
      </ul>

      <h2>Stage 2 scoring:</h2>
      <ul>
        <li>
          2 pts for each team you choose correctly to advance to the quarter
          finals.
        </li>
        <li>
          4 pts for each team you choose correctly to advance to the semi
          finals.
        </li>
        <li>
          6 pts for each team you choose correctly to advance to the final.
        </li>
        <li>10 pts if you pick the correct World Cup winner.</li>
      </ul>

      <h2>Tiebreaker:</h2>
      <ul>
        <li>Total number of goals in the tourney - Price is Right rules.</li>
        <li>
          If tiebreaker comes into play and all tiebreakers are over the total
          goals scored, closest tiebreaker to the total goals scored will win.
        </li>
      </ul>

      <h2>Getting Started:</h2>
      <ul>
        <li>
          <Link to="create_account" style={{ color: "blue" }}>
            Create an Account
          </Link>
          , then sign in.
        </li>
        <li>Once signed in, navigate to the My Picks tab.</li>
      </ul>

      <h2>Payments/Payout:</h2>
      <ul>
        <li>$20 entry fee.</li>
        <li>Venmo: Joe-Collins-12</li>
        <li className="to-do">
          I have to pay the 3rd party who deploys the application to run the
          site now, so $20 in juice is going to be taken out of the pot. That
          said, 3rd place no longer gets their $ back.
        </li>
        <li>Winner gets 75% of remaining $.</li>
        <li>2nd gets 25% of remaining $.</li>
      </ul>
      <div>&nbsp;</div>
    </div>
  );
};

export default Rules_Page;
