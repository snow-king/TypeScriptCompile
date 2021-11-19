import {InputCode} from "./InputCode";
import {Compiler} from "./Compiler";

export const enum Languages {
    JS="JavaScript",
    Java = "Java",
    PHP = "PHP",
    Python = "Python"
}
export class Translator {
    private code: InputCode
    readonly language:Languages
    protected lexeme : Object
    protected indicators : Object
    protected triad : Object
    private _objectCode: Object

    constructor(code: InputCode, language: Languages) {
        this.code = code
        this.language = language
        this.lexeme = this.readLexeme()
        this._objectCode = {}
        this.triad = {}
        this.indicators = {}
    }
    readLexeme(){
        // JSON.parse(`../locals/${this.language}.json`)
        return {lexeme: "lexeme"}
    }
    translate(){
        this._objectCode = { code : `oh, there should be a ${this.language}code here ` }
    }
    getIndicators() {
        // calculate indicators
        this.indicators = {}
    }
    optimize(){
        return {dsr : "dsr"}
    }
    compileObjectCode(){
        this.readLexeme()
        this.getIndicators()
        this.translate()
        this.optimize()
    }
    getResult(){
        this.compileObjectCode()
        let result = new Compiler(this._objectCode)
        result.run()
        return {
            "lexeme": this.lexeme,
            "Indicators": this.indicators,
            "triads": this.triad,
            "ObjectCode": this._objectCode,
            "Result_of_work" : result.run()
        }
    }
    get objectCode(): Object {
        return this._objectCode;
    }
}
