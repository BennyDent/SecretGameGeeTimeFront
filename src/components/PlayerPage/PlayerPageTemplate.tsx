import {getmethod} from "./../utils/fetchmethods";
import { useSearch } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {DivWrapper} from "./../utils/DivWrapper";
import { PlayerWinrate } from "./PlayerWinrate";
import {type  PlayerData } from "./../utils/PlayerData";
import {PlayerName} from "./PlayerName";


function PlayerPageTemplate(){
    const player_name = useSearch({from:""});
    const {data,status} = useQuery({queryKey:[], queryFn:async ()=>(getmethod([])),});
    if(status=="error"){
  return <div></div>
    }
    
    if(status=="pending"){

        return <div></div>
    }
    
    return(
        <DivWrapper style={{flexDirection:"column"}}>
<DivWrapper style={{flexDirection:"row"}}>
    <PlayerName Name={data.data.Name}/>
</DivWrapper>

<DivWrapper style={{flexDirection: "row"}}>
    <PlayerWinrate type="blue" winrate={data.data.blue_winrate}/>
    <PlayerWinrate type="red" winrate={data.data.red_winrate}/>
    <PlayerWinrate type="secret" winrate={data.data.secret_winrate}/>
</DivWrapper>

</DivWrapper>
    );
}


