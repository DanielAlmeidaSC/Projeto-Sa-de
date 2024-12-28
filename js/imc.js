function Calcular() {
    // Obtenção dos valores de peso e altura
    let peso = parseFloat(document.querySelector(".input_peso").value);
    let altura = parseFloat(document.querySelector(".input_altura").value);

    // Verificação se os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.querySelector("h3").innerHTML = `Por favor, insira valores válidos para peso e altura.`;
        document.querySelector('.resultado').innerHTML = ``; // Limpa a classificação
        return;
    }

    // Cálculo do IMC
    let resultado = peso / (altura * altura);

    // Exibição do IMC
    document.querySelector('.resultado_number').innerHTML = `O seu IMC é de ${resultado.toFixed(2)}`;

    // Classificação do IMC
    if (resultado < 16) {
        document.querySelector('.resultado').innerHTML = `Magreza Severa`;
    } else if (resultado >= 16 && resultado <= 16.9) {
        document.querySelector('.resultado').innerHTML = `Magreza Moderada`;
    } else if (resultado >= 17 && resultado <= 18.4) {
        document.querySelector('.resultado').innerHTML = `Magreza Leve`;
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        document.querySelector('.resultado').innerHTML = `Peso normal (saudável)`;
    } else if (resultado >= 25 && resultado <= 29.9) {
        document.querySelector('.resultado').innerHTML = `Sobrepeso`;
    } else if (resultado >= 30 && resultado <= 34.9) {
        document.querySelector('.resultado').innerHTML = `Obesidade Grau I`;
    } else if (resultado >= 35 && resultado <= 39.9) {
        document.querySelector('.resultado').innerHTML = `Obesidade Grau II`;
    } else if (resultado >= 40) {
        document.querySelector('.resultado').innerHTML = `Obesidade Grau III (mórbida)`;
    }
}
