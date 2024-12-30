function CalculaAgua() {
    let peso = document.querySelector('input').value;

    let calculaAgua = peso * 35;

    let calculaFinal = calculaAgua/1000;
    document.querySelector('h3').innerHTML = `Você deve ingerir ${calculaFinal} litros de água por dia!`;

}