import {ColumnWrapper, PageWrapper} from "../utils/DivWrapper";
import {useForm} from "react-hook-form";
import {type AxiosResponse} from "axios";
import { ErrorMessageComponent } from "../utils/ErrorComponent";
import { postmethod } from "../utils/fetchmethods";
interface CreatePlayer{
    Name: string,
    
}


function CreatePlayer(){

const {register, handleSubmit, setError, formState:{errors, }} = useForm({defaultValues:{Name:""}});



 function handleSub(data:CreatePlayer){

try{
postmethod(["","",""],data).then((resp:AxiosResponse)=>{if(resp.status==409){
    throw "409"
} if(resp.status==400){throw "400";}});

}catch(error:any)
{
if(error.message=="409"){
    setError("Name",{message:"Игрок с таким именем уже существует!"})
}
if(error.message=="400"){
    setError("root",{message:"Простите, что-то пошло не так"})
}
}

}

    return(<PageWrapper>
        <form  onSubmit={(handleSubmit(handleSub))}>
        <ColumnWrapper>
        <input {...register("Name", {required:"У игрока обязательно должно быть имя"})}/>
        <ErrorMessageComponent errors={errors} name={"Name"}/>
        <button type="submit"/>
         <ErrorMessageComponent errors={errors} name={"root"}/>
        </ColumnWrapper>
</form>

    </PageWrapper>)
}