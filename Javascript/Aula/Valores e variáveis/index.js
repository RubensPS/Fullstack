let javascript = "Javascript é top";
if (javascript ==="Javascript é top") alert("Javascript é Show!");
console.log(40+8+23-10)

//Valores e Variárveis

let primeiroNome = "Rubens"
console.log(primeiroNome)

// 01 - Não se pode iniciar variável com número

// 02 - Para nomes de variáveis, utiliza-se o cammelCase

// 03 - Não se pode utilizar nenhuma variável com palavras 
//reservadas

// 04 - Convenção: não se deve iniciar variáveis com letra 
//maiúscula

// 05 - Convenção: constantes são criadas com todas as letras
//maiúsculas

// 06 - Clean code: evitar criar variáveis que não sejam 
//claras. Devem ser bem descritivas.

//Javascript possúi tipagem dinâmica

//-----------------------------------------------//

//TIPOS DE DADOS

//number: decimais e inteiros
//string: sequência de caracteres. utilizada para texto
//boolean: tipo lógico. true/false. utilizado para tomar decisões
//undefined: atribúi-se a uma variável ainda não definida. Como se fosse um valor vazio.
//null: também é um valor vazio. é utilizado em situações diferentes do undefined

//LET - deixa o valor da variável ser modificada
//CONST - não permite que o valor da variável seja modificado

//VAR - assim como o let, deixa o valor da variável ser modificado.
//A diferença é que o VAR deixa a variável ser manipulada em qualquer lugar do código,
//não se restringe ao bloco dentro do qual foi criado

//Boas práticas: tente utilizar CONST sempre que puder. Caso não seja possível
//utilize o LET. Jamais utilize o VAR, pois ele pode ser modificado
//fora do escopo para o qual foi criado, gerando problemas
//no código de difícil detecção.

//------------------------------------------------//

//OPERADORES

//Matemáticos
const idadeRubens = 2021 - 1984;
console.log(idadeRubens);

const x = 2 ** 3;
console.log(x);

const lastName = "Souza";
const fisrtName = "Rubens";
console.log(fisrtName + lastName);

let y = 10+5;

//Biblioteca Math
y = 121
let z = Math.sqrt(y)
console.log(z)
