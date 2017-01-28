import * as React from "react";
import * as GRX from "grx";

export interface Source {
    stream: GRX.Stream<number>;
}

export const Calendar = (props: Source) => {
    let results:Array<any> = [];
    
    props.stream.subscribe( (res: any) => {
        results.push( res );
    });
    
    return markdown( results );
}

const markdown = (list: Array<any>) => {
    let joined = list.join(', ');
    return <h1>Hello from { joined }</h1>
}
    