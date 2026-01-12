import { type PropsWithChildren, type CSSProperties } from "react";




export function DivWrapper({children, style}:PropsWithChildren<{style?: CSSProperties}>){

return(<div style={{...style,display: "flex", }}>
    {children}
</div>);
}



export function RowWrapper({children, style}:PropsWithChildren<{style?: CSSProperties}>){
    return(<DivWrapper style={{...style, flexDirection:"row"}}>
{children}

    </DivWrapper>)
}

export function ColumnWrapper({children, style}:PropsWithChildren<{style?: CSSProperties}>){
    return(<DivWrapper style={{...style, flexDirection:"column"}}>
{children}

    </DivWrapper>)
}


export function PageWrapper({children, style}:PropsWithChildren<{style?: CSSProperties}>){


    return(
        <ColumnWrapper
        style={{width:"100vw",  height:"100vh"}}
        >

{children}

        </ColumnWrapper>
    );
}