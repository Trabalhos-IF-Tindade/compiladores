const fs = require('fs')

const input = fs.readFileSync('./input2.txt', 'utf8')

const simbleTable = []
const tokens = []

const splitedCode = splitCode(input)

for (value of splitedCode) {
    const token = createToken(value)

    const formattedValue = {
        id: simbleTable.length + 1,
        lexema: value,
        token,
        valor: token === "NUMBER" ? value : null
    }

<<<<<<< HEAD
    const lexemaAlreadyExists = simbleTable.some(simbleTable => simbleTable.lexema === value)
=======
    /* if (token === "NUMBER") {
        formattedValue.valor = value
    } */

    lexemaAlreadyExists = simbleTable.some(simbleTable => simbleTable.lexema === value)
>>>>>>> 654c320c255a05099784ffc53d0bdd951c066897
    
    if (!lexemaAlreadyExists) {
        simbleTable.push(formattedValue)
        tokens.push(`<${token}, ${simbleTable.length}>`)
    }else{
        const data = simbleTable.filter(simbleTable => simbleTable.lexema === value)
        tokens.push(`<${token}, ${data[0].id}>`)
    }
}

function splitCode(input) {
    const regex = /\w+|(!*[<->])+|[^\w\s]/g

    const matches = input.match(regex)
    return matches
}

function createToken(value) {

    const type = findType(value)

    simbles = {
        '=': 'GET',
        '+': 'PLUS',
        '-': 'MINUS',
        '*': 'TIMES',
        '/': 'DIVIDE',
        '{': 'KEY_OPEN',
        '}': 'KEY_CLOSE',
        '(': 'PAR_OPENING',
        ')': 'PAR_CLOSE',
        ';': 'SEMICOLON',
        ',': 'COMA',
        '>': 'GREATER',
        '<': 'LESS',
        '!': 'NOT',
        '&': 'AND',
        '|': 'OR',
        "'": 'SINGLE_QUOTES',
        '==': 'EQUALS',
        '===': 'STRICTLY_EQUALS',
        '!=': 'DIFERENT',
        '!==': 'STRICTLY_DIFERENT',
        '"': 'DOUBLE_QUOTES',
        '%': 'PERCENT',
        '.': 'DOT', 
        "'": 'QUOTES'
    }

    switch (type) {
        case 'NUMERO':
            return 'NUMBER'
        case 'CARACTERE ESPECIAL':
            return 'SYMBOL_' + simbles[value]
        case 'VARIAVEL':
            return 'ID'
        case 'PALAVRA RESERVADA':
            return 'KW_' + value.toUpperCase()
        default:
            return
    }
}

function findType(value) {

    const regexIsNumber = /\d/
    const regexIsSpecialCaractere = /[^\w\s]+/

    if (value.match(regexIsNumber)) {
        return 'NUMERO'
    } else if (value.match(regexIsSpecialCaractere)) {
        return 'CARACTERE ESPECIAL'
    }
    else {
        const isReservedWord = checkIfIsReservedWord(value)
        if (isReservedWord) {
            return 'PALAVRA RESERVADA'
        }
        return 'VARIAVEL'
    }
}

function checkIfIsReservedWord(word) {
    const reservedWords = [
        'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const',
        'continue', 'default', 'do', 'double', 'else', 'enum', 'extends', 'final', 'finally', 'float',
        'for', 'if', 'goto', 'implements', 'import', 'instanceof', 'int', 'interface', 'long', 'native',
        'new', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp',
        'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'try', 'void', 'volatile', 'while',
        'System', 'out', 'println', 'args', 'String'
    ]

    return reservedWords.includes(word)
}

console.log('--> Lexemas')
console.log(splitedCode.join(' | '))

console.log('\n--> Tabela de símbolos')
console.log(simbleTable)

console.log('\n--> Código Tokenizado')
console.log(tokens.join(''))

