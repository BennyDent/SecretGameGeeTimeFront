import {type GameData, type PlayerWon} from "../../utils/GameData";
import { RowWrapper } from "../../utils/DivWrapper";
import { GameName } from "./GameName";
import { PlayerRole } from "./PlayerRole";
import { GameIsWon } from "./GameIsWon";
export function PlayerGameTemplate({game:{Id, Name, player_win},playerName }:{game: GameData,playerName: string }){

var player = player_win.filter((a)=>(a.PlayerName==playerName))[0];

    return(<RowWrapper>
        <GameName Name={Name} Id={Id}/>
        <GameIsWon is_won={player.is_won}/>
        <PlayerRole  role={player.role}/>
    </RowWrapper>);
}