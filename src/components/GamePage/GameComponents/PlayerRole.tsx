import {role_array} from "../../utils/RoleArray";


export function PlayerRole({role}:{role: number}){


    return(
        <div>
            <a> {role_array[role]}</a>
        </div>
    );
}