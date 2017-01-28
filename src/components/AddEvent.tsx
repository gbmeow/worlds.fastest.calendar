import * as React from "react";
import * as GRX from "grx";

//onChange: (input: EventTarget)=> void

export const AddEvent = ( props: {add: (val:any) => void}) => {
    const update = (event: any) => {
        props.add( event.target.value );
    }
    return <input onChange={ update } />
}
   