import {RowWrapper,ColumnWrapper} from "../utils/DivWrapper"
import { BestPlayerComponent } from "./BestPlayerComponent";



export function MainPageTemplate(){


    return(

        <ColumnWrapper>
        <RowWrapper>
            
        </RowWrapper>
        <RowWrapper>
            <ColumnWrapper>
            <BestPlayerComponent role="blue"/>
            <BestPlayerComponent role="red"/>
            <BestPlayerComponent role="secret"/>
            </ColumnWrapper>
        </RowWrapper></ColumnWrapper>
    );
}



