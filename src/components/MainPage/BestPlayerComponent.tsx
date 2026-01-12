import {useQuery} from "@tanstack/react-query";
import { RowWrapper, ColumnWrapper } from "../utils/DivWrapper";
import { getmethod } from "../utils/fetchmethods";
import { css_properties } from "../utils/table-css_properties";


export function BestPlayerComponent({role}:{role:"blue"|"red"|"secret"}){
const {data, status} = useQuery({queryKey:[], queryFn: async ()=>(await getmethod(["","","",role]))});

if(status=="error"){
    return (<div></div>)}

if(status=="pending"){
    return(<div></div>)
}



return(<ColumnWrapper style={{border:"3px solid black", padding:"5px"}}>

{data.page.map((object:{Name:string, wins: number}, key:number)=>(<PlayerComponent key={key} playerName={object.Name} wins={object.wins} index={key} bottom={(key==data.page.length-1 ? true: false)}/>))}

</ColumnWrapper>);

}





function PlayerComponent({playerName, wins, index, bottom}:{playerName:string, wins:number,index: number, bottom:boolean}){


    return(<RowWrapper>
       <div style={css_properties(bottom, false)}>
            {index.toString()}
       </div>
            <div style={css_properties(bottom, false)}>{playerName}</div>
            <div style={css_properties(bottom, true)}>{wins}</div>

    </RowWrapper>)
}


