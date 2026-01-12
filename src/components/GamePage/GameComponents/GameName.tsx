
import { Link } from "@tanstack/react-router";

export function GameName({Name, Id}:{Name:string, Id: string}){
return(<div >
    <Link  to={"/"+Id}>{Name}</Link>
</div>);
}