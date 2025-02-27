const fs = require('fs')

const input = fs.readFileSync('./input2.txt', 'utf8')

const splitedCode = splitCode(input)

const simbleTable = []
const tokens = []

for (value of splitedCode) {
    const token = createToken(value)

    const formattedValue = {
        id: simbleTable.length + 1,
        lexema: value,
        token,
        valor: token === "NUMBER" ? value : null
    }

    /* if (token === "NUMBER") {
        formattedValue.valor = value
    } */

    lexemaAlreadyExists = simbleTable.some(simbleTable => simbleTable.lexema === value)
    
    if (!lexemaAlreadyExists) {
        simbleTable.push(formattedValue)
        tokens.push(`${value} -> <${token}, ${simbleTable.length}>`)
    }else{
        const data = simbleTable.filter(simbleTable => simbleTable.lexema === value)
        tokens.push(`${value} -> <${token}, ${data[0].id}>`)
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
        '==': 'EQUALS',
        '===': 'STRICTLY_EQUALS',
        '!=': 'DIFERENT',
        '!==': 'STRICTLY_DIFERENT',
        '"': 'DOUBLE_QUOTES',
        '%': 'PERCENT',
        '.': 'DOT',
        "'": 'SINGLE_QUOTES'
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
    const regexIsCaractere = /[^\w\s]+/

    if (value.match(regexIsNumber)) {
        return 'NUMERO'
    } else if (value.match(regexIsCaractere)) {
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
console.table(simbleTable)

console.log('\n--> Código Tokenizado')
console.log(tokens.join('\n'))

