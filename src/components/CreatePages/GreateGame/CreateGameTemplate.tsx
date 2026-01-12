import { postmethod } from "@/components/utils/fetchmethods";
import {PageWrapper} from "../../utils/DivWrapper";
import {useForm, Controller} from "react-hook-form";
import type { PlayerWon } from "@/components/utils/GameData";
import {DatePicker} from "@mui/x-date-pickers";
import * as dayjs from "dayjs"; 
interface GameInput{
    Name: string,
    date: dayjs.Dayjs,
    players_win: Array<PlayerWon>
    is_liberal: boolean,
}


export function CreateGameTemplate(){
    const {register, control,} = useForm<GameInput>({defaultValues:{Name:"", date: dayjs()}});



    return(<PageWrapper>
<form>
<input {...register("Name",{required:"Имя для игры обязательно!"})} />
<input {...register("is_liberal", {required:"Обязательно нужно отметить кто выиграл!"})}/>
<Controller control={control} name="date"  render={({field:{onChange, value}})=>(<DatePicker value={value} onChange={(newValue:dayjs.Dayjs)=>(onChange(newValue))}/>)}/>

</form>
    </PageWrapper>);
}