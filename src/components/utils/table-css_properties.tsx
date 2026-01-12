import{ type CSSProperties } from "react";


export const css_properties:(bottom: boolean, right: boolean)=>CSSProperties = (bottom: boolean, right: boolean)=>({ borderLeft:"3px solid black", borderTop: "3px solid black", borderRight:(right ? "3px solid black": "0"),  borderBottom: (bottom ?   "3px solid black": "0"), });