import KO_Box_UP_Edit from "../KO_Box_UP_Edit";

const Champ_UP_Edit = ({ userPicks }) => {
  const team = userPicks.champ;

  return <KO_Box_UP_Edit champ={true} team={team} />;
};

export default Champ_UP_Edit;
