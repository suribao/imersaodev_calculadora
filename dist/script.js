var primeiroValor = parseFloat(prompt("Digite o primeiro valor"))
var segundoValor = parseFloat(prompt("Digite o segundo valor"))


var operacao = prompt("Digite 1 para divisao, 2 para multiplicação, 3 para soma e 4 para subtração")

if (operacao == 1) { 
    var resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado  + "</h2>")
} else if (operacao == 2) {
    var resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado  + "</h2>")
} else if (operacao == 3) {
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado  + "</h2>")
} else if (operacao == 4) {
    var resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado  + "</h2>")
} else {
    document.write("<h2>"+"Opcao invalida"+"</h2>") 
}

//alert("Opção invalida")
//escrecendo na tela - document.write()
//concatenação(juntar variaveis) - ("palavra"+variavel)
// == - comparação é diferente do = que usamos para fazer atribuição
//if = se
//else if = senao se
//else = senao