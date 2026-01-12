


export function GameIsWon({is_won}:{is_won: boolean}){
    return(<div>
        <a>{is_won? "победа": "поражение"}</a>
    </div>);
}