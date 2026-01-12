import { ErrorMessage } from "@hookform/error-message";
import { RowWrapper } from "./DivWrapper";
import { error } from "node:console";




export function ErrorMessageComponent({name, errors}:{name: string, errors: object}){



    return(<RowWrapper>
<ErrorMessage  render={({message})=>(<a style={{color:"red"}}>{message}</a>)} name={name} errors={errors}/>
    </RowWrapper>);
}