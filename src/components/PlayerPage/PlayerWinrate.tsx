import { DivWrapper } from "../utils/DivWrapper";


const winrate_dictionary = {"blue": "либералом","red":"красным", "secret":"секретной ролью"};

export function PlayerWinrate({type, winrate}:{type:"blue"|"red"|"secret", winrate: number}){


return <DivWrapper style={{flexDirection:"column"}}>
<DivWrapper style={{flexDirection: "row"}}>{"количество побед"+winrate_dictionary[type]}</DivWrapper>
<DivWrapper style={{flexDirection: "row"}}>{winrate}</DivWrapper>
</DivWrapper>

}