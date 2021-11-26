import {InputCode} from "./InputCode";
import {Compiler} from "./Compiler";
import {LexemeJava, LexemeJS, LexemePHP, LexemePython, Lexemes} from "./Lexeme";


export const enum Languages {
    JS="JavaScript",
    Java = "Java",
    PHP = "PHP",
    Python = "Python"
}


export class Translator {
    private code: InputCode
    readonly language: Languages
    protected lexeme : Lexemes | undefined
    protected indicators : Object
    protected triad : Object
    private _objectCode: Object

    constructor(code: InputCode, language: Languages) {
        this.code = code
        this.language = language
        this.getLexeme()
        this._objectCode = {}
        this.triad = {}
        this.indicators = {}
    }
    getLexeme () {
        switch(this.language) {
            case Languages.PHP:
                this.lexeme = new LexemePHP()
                break;
            case Languages.Python:
                this.lexeme = new LexemePython()
                break;
            case Languages.JS: {
                this.lexeme = new LexemeJS()
                break;
            }
            case Languages.Java: {
                this.lexeme = new LexemeJava()
                break;
            }
        }
    }

    translate(){
        this._objectCode = { code : `oh, there should be a ${this.language} code here ` }
    }

    getIndicators() {
        // calculate indicators
        this.indicators = {}
    }

    optimize(){
        return {dsr : "dsr"}
    }

    compileObjectCode(){
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
}
