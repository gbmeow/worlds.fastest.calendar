import * as GRX from "grx";


export class Service {

    constructor() {
        
    }

    stream():GRX.Stream<number> {
        return GRX.fromArray([100,200,300]);
    }

    add( input: any ) {
        console.log( input );
    }

}