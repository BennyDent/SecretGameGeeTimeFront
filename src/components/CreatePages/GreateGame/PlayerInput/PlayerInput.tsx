import {ColumnWrapper, DivWrapper} from "../../../utils/DivWrapper";
import {getmethod} from "../../../utils/fetchmethods";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, {useState, useEffect} from "react";
export function PlayerInput({}:{}){
const [search, setSearch] = useState<string>("");
const queryClient = useQueryClient();



useEffect(()=>{
const func = async()=>{
    await queryClient.invalidateQueries({}).then(e=>{queryClient.refetchQueries()});
}



},[search]);

    return(<ColumnWrapper>
<InputField search={search} setSearch={(value: string)=>{setSearch(value)}}/>    
    
    
    </ColumnWrapper>)
}




function InputField({search, setSearch}:{search: string, setSearch: React.Dispatch<React.SetStateAction<string>> }){


    return(<div>
        <input value={search} onChange={(event)=>(setSearch(event.target.value))} />
    </div>);
}