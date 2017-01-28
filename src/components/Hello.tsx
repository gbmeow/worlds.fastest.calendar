import * as React from "react";
import * as GRX from "grx";

export const Hello = () => {
    let results:Array<any> = [];
    GRX.fromArray([100,200,300]).subscribe( (res: any) => {
        results.push( res );
    });
    return markdown( results );
}

const markdown = (list: Array<any>) => {
    let joined = list.join(', ');
    return <h1>Hello from { joined }</h1>
}
    