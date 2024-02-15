import KO_Box_Edit_C from "./KO_Box_Edit_C";

const Game_Cont_Edit_C = ( {
    side,
    results,
    region,
    gameNum,
    adjustResults,
} ) => {
    const teamMapper = {
        left: {1: {1: "R16_1", 2: "R16_2"}, 2: {1: "R16_3", 2: "R16_4"}},
        right: {3: {1: "R16_5", 2: "R16_6"}, 4: {1: "R16_7", 2: "R16_8"}},
    };

    const game = teamMapper[side][region][gameNum];

    const teamsPlayingInMatch = results[game];

    return (
        <div>
            {teamsPlayingInMatch.map(( team, idx ) => (
                <KO_Box_Edit_C
                    key={idx}
                    side={side}
                    team={team}
                    teamPos={idx + 1}
                    adjustResults={adjustResults}
                    game={game}
                    round="R16"
                />
            ))}
        </div>
    );
};

export default Game_Cont_Edit_C;
