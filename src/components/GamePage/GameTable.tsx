import { RowWrapper,ColumnWrapper } from "../utils/DivWrapper";
import type { PlayerWon } from "../utils/GameData";
import { type CSSProperties } from "react";
import {role_array} from "../utils/RoleArray"
import { css_properties } from "../utils/table-css_properties";

export function GameTable({players}:{players: Array<PlayerWon>}){


return(<ColumnWrapper>

{players.map((object:PlayerWon, key: number)=>(<GameTableRow player={object} bottom={key==players.length ? true: false}/>))}


</ColumnWrapper>);
}





function GameTableRow({player:{PlayerName,role, is_won}, bottom }:{player: PlayerWon, bottom: boolean}){




    return(<RowWrapper >
        <div style={css_properties(bottom, false)}>{PlayerName}</div>
        <div style={css_properties(bottom, false)}>{role_array[role]}</div>
        <div style={css_properties(bottom, true)}>{(is_won ? "победа":"поражение" )}</div>
    </RowWrapper>);
}



