import { getmethod } from "../utils/fetchmethods";
import { DivWrapper, RowWrapper } from "../utils/DivWrapper";
import InfiniteScroll from "react-infinite-scroll-component";
import {useState, useEffect} from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {useSearch} from "@tanstack/react-router";
import {type GameData, type PlayerWon} from "../utils/GameData";
import {PlayerGameTemplate} from "../GamePage/GameComponents/PlayerGameTemplate";


interface GamePage{
page: Array<GameData>,
date_coursor: string,


}


export function PLayerLastgames(){
const player_name = useSearch({from:""});
const queryClient = useQueryClient();
const [hasMore, sethasMore] = useState<boolean>(false);
const [coursor, setCoursor]= useState<string>("");
    const {data,
         status} = useQuery({queryKey:["get", "last","game", "players", player_name, coursor], queryFn: async ({queryKey})=>await (getmethod([...queryKey]))
         .then(async (data)=>{ setCoursor(data.data_coursor);return data.page})});
if(status=="error"){
    return <div></div>
}



if(status=="pending"){
    return <div></div>
}

function next(){

queryClient.invalidateQueries({queryKey:["get", "last","game", "players", player_name, coursor],exact: true}).then(a=>(queryClient.refetchQueries({queryKey:["get", "last","game", "players", player_name, coursor], exact: true})));
}

    return(<DivWrapper style={{flexDirection:"column"}}>




<InfiniteScroll dataLength={data.Length}
next={()=>{next()}}  hasMore={hasMore}  loader={<h3>Loading....</h3>}>
    {data.map((object:GameData, key:number)=>(<PlayerGameTemplate playerName={player_name} key={key} game={object} />))}
</InfiniteScroll>

    </DivWrapper>)
}




