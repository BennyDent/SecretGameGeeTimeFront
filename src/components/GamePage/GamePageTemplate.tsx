import { ColumnWrapper, RowWrapper, PageWrapper } from "../utils/DivWrapper";
import {useSearch} from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { querygetmethod } from "../utils/fetchmethods";
import {type GameData, type PlayerWon} from "../utils/GameData";
import * as dayjs from "dayjs";
import { GameTable } from "./GameTable";
function GamePage(){
const game_id = useSearch({from:""});
var date = dayjs();
const {data, status} = useQuery({queryKey:[""], queryFn: querygetmethod,});

if(status=="error"){
    return(<div>

    </div>)
}



if(status=="pending"){
    return(
<h3 style={{ display:"grid" ,
  placeItems:"center",  /* Centers content both horizontally and vertically */
  height: "100vh",
  width: "100wh"
    }}>
        ....Loading
    </h3>
    )
}
return(<PageWrapper >

<h3>{data.Name}</h3>
<h3> {dayjs(data.date).format("DD.MM.YYYY")}</h3>
<a>{(data.is_won ? "синие":"красные")+"выиграли"}</a>
<GameTable players={data.player_won}/>
</PageWrapper>)
}



