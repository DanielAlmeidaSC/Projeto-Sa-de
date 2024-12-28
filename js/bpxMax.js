function VerificaMasculino(){
    let idade = document.querySelector('.input_age').value;

    let bpmMasc = 220;

    let resultado = bpmMasc - idade;

    document.querySelector('h3').innerHTML = `Seus batimentos devem atingir no máximo ${resultado} ao fazer atividades físicas!`;
}

function VerificarFeminino(){
    let idade = document.querySelector('.input_age').value;

    let bpmFem = 226;

    let resultado = bpmFem - idade;

    document.querySelector('h3').innerHTML = `Seus batimentos devem atingir no máximo ${resultado} ao fazer atividades físicas!`;
}