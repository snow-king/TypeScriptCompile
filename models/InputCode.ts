import { Request } from "express";

export class InputCode {
    protected code : string[]

    constructor(value: Request) {
        this.code = this.parsing(value)
    }

    parsing( value:Request){
        return []
    }
}

