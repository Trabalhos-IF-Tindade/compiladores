# Lexical Analyzer (Analisador Léxico)

Este projeto é um simples analisador léxico (lexer) escrito em JavaScript. Ele lê um arquivo de entrada (`input.txt`), processa o código fonte e gera uma tabela de símbolos, além de tokenizar o código. O analisador léxico é uma parte fundamental de compiladores e interpretadores, responsável por identificar e classificar os lexemas (unidades léxicas) do código fonte.

## Funcionalidades

- **Leitura do Código Fonte**: O código fonte é lido a partir de um arquivo de texto (`input.txt`).
- **Divisão do Código**: O código é dividido em lexemas usando expressões regulares.
- **Classificação de Tokens**: Cada lexema é classificado como um token específico (por exemplo, número, palavra reservada, símbolo, etc.).
- **Tabela de Símbolos**: Uma tabela de símbolos é criada para armazenar informações sobre os lexemas encontrados.
- **Tokenização**: O código é tokenizado, gerando uma lista de tokens que podem ser usados em etapas posteriores de compilação ou interpretação.

## Como Usar

1. **Preparação do Ambiente**:
   - Certifique-se de ter o Node.js instalado em sua máquina.
   - Clone este repositório ou copie o código para o seu ambiente local.

2. **Configuração do Arquivo de Entrada**:
   - Crie um arquivo chamado `input.txt` no mesmo diretório do script.
   - Insira o código fonte que deseja analisar no arquivo `input.txt`.

3. **Execução do Analisador Léxico**:
   - No terminal, navegue até o diretório onde o script está localizado.
   - Execute o script usando o Node.js:
     ```bash
     node nome_do_arquivo.js
     ```
   - Substitua `nome_do_arquivo.js` pelo nome do arquivo que contém o código do analisador léxico.

4. **Saída**:
   - O script exibirá três seções de saída:
     - **Lexemas**: Lista de lexemas encontrados no código.
     - **Tabela de Símbolos**: Tabela contendo informações sobre os lexemas, como ID, lexema, token e valor (se aplicável).
     - **Código Tokenizado**: Lista de tokens gerados a partir dos lexemas.

## Exemplo de Saída

### Lexemas
```
var|+|10|;|if|(|a|>|b|)|{|return|true|;}
```

### Tabela de Símbolos
| id | lexema   | token        | valor |
|----|----------|--------------|-------|
| 1  | var      | KW_VAR       | null  |
| 2  | +        | SYMBOL_PLUS  | null  |
| 3  | 10       | NUMBER       | 10    |
| 4  | ;        | SYMBOL_SEMICOLON | null  |
| 5  | if       | KW_IF        | null  |
| 6  | (        | SYMBOL_PAR_OPENING | null  |
| 7  | a        | ID           | null  |
| 8  | >        | SYMBOL_GREATER | null  |
| 9  | b        | ID           | null  |
| 10 | )        | SYMBOL_PAR_CLOSE | null  |
| 11 | {        | SYMBOL_KEY_OPEN | null  |
| 12 | return   | KW_RETURN    | null  |
| 13 | true     | KW_TRUE      | null  |
| 14 | }        | SYMBOL_KEY_CLOSE | null  |

### Código Tokenizado
```
var -> <KW_VAR, 1>
+ -> <SYMBOL_PLUS, 2>
10 -> <NUMBER, 3>
; -> <SYMBOL_SEMICOLON, 4>
if -> <KW_IF, 5>
( -> <SYMBOL_PAR_OPENING, 6>
a -> <ID, 7>
> -> <SYMBOL_GREATER, 8>
b -> <ID, 9>
) -> <SYMBOL_PAR_CLOSE, 10>
{ -> <SYMBOL_KEY_OPEN, 11>
return -> <KW_RETURN, 12>
true -> <KW_TRUE, 13>
} -> <SYMBOL_KEY_CLOSE, 14>
```

## Estrutura do Código

- **`splitCode(input)`**: Divide o código fonte em lexemas usando uma expressão regular.
- **`createToken(value)`**: Classifica o lexema e retorna o token correspondente.
- **`findType(value)`**: Determina o tipo do lexema (número, caractere especial, palavra reservada, etc.).
- **`checkIfIsReservedWord(word)`**: Verifica se o lexema é uma palavra reservada.
- **Tabela de Símbolos**: Armazena informações sobre os lexemas encontrados.
- **Tokenização**: Gera a lista de tokens a partir dos lexemas.

## Palavras Reservadas

O analisador reconhece uma lista de palavras reservadas comuns em linguagens de programação, como `if`, `else`, `return`, `class`, `void`, entre outras.

## Considerações Finais

Este projeto é um exemplo básico de um analisador léxico e pode ser expandido para incluir mais funcionalidades, como suporte a mais tipos de tokens, tratamento de erros, e integração com outras fases de um compilador ou interpretador.

Sinta-se à vontade para contribuir, reportar problemas ou sugerir melhorias!
