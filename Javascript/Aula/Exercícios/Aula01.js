//declaração e cálculo do IMC do Mark
const pesoMark = parseFloat(prompt("Qual o peso de Mark?"));
const alturaMark = parseFloat(prompt("Qual a altura de Mark?"));
const imcMark = pesoMark/Math.pow(alturaMark, 2);
//declaração e cálculo do IMC do John
const pesoJohn = parseFloat(prompt("Qual o peso de John?"));
const alturaJohn = parseFloat(prompt("Qual a altura de John?"));
const imcJohn = pesoJohn/Math.pow(alturaJohn, 2);
//declaração da variável booleana
let markMaiorIMC = Boolean

//Indicação dos valores calculados para os imcs
console.log(imcMark)
console.log(imcJohn)

//comparação dos IMCs
if (imcMark > imcJohn) {
    markMaiorIMC = true;
    console.log(markMaiorIMC);
    console.log("IMC de Mark é maior!");
} else {
    markMaiorIMC = false;
    console.log(markMaiorIMC);
    console.log("IMC de John é maior!");
}


