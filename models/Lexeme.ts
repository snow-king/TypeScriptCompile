export interface Lexemes{
    lexeme : object
    readLexeme() : Object
}

export class LexemePHP implements Lexemes {
    lexeme: object;
    constructor() {
        this.lexeme = this.readLexeme()
    }
    readLexeme(): Object {
        // JSON.parse(`../locals/${this.language}.json`)
        return {lexeme: "lexeme"};
    }
}

export class LexemeJS implements Lexemes {
    lexeme: object;
    constructor() {
        this.lexeme = this.readLexeme()
    }
    readLexeme(): Object {
        // JSON.parse(`../locals/${this.language}.json`)
        return {lexeme: "lexeme"};
    }
}

export class LexemePython implements Lexemes {
    lexeme: object;

    constructor() {
        this.lexeme = this.readLexeme()
    }

    readLexeme(): Object {
        // JSON.parse(`../locals/${this.language}.json`)
        return {lexeme: "lexeme"};
    }
}

export class LexemeJava implements Lexemes {
    lexeme: object;
    constructor() {
        this.lexeme = this.readLexeme()
    }
    readLexeme(): Object {
        // JSON.parse(`../locals/${this.language}.json`)
        return {lexeme: "lexeme"};
    }
}
