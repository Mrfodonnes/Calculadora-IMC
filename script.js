const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const botao = document.getElementById("botao")
const resultadoIMC = document.getElementById("resultado-imc")
const resultadoTexto = document.getElementById("mensagem")
const containerResultado = document.getElementById("container-resultado")

function calcularIMC() {

    const imc = peso.value / (altura.value * altura.value)

    resultadoIMC.textContent = imc.toFixed(2)

    let texto = ""
    
    if (imc < 18.5) {
        texto = "Você está abaixo do peso!"
    } 
    
    if (imc >= 18.5 && imc < 25) {
        texto = "Você está no peso ideal!"
    } 
    
    if (imc >= 25 && imc < 30) {
        texto = "Você está sobrepeso!"
    }
    
    if (imc >= 30) {
        texto = "Voce está com obesidade!"
    }

    resultadoTexto.textContent = texto

    containerResultado.classList.remove("hidden")
}

botao.addEventListener("click", calcularIMC)