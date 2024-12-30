function VerificaMasculino(){
    let idade = document.querySelector('.input_age').value;

    let bpmMasc = 220;

    let resultado = bpmMasc - idade;

    if(resultado < 0){
        document.querySelector('h3').innerHTML = `Batimentos não podem ser negativos!`;
    }else{
        document.querySelector('h3').innerHTML = `Seus batimentos devem atingir no máximo ${resultado} ao fazer atividades físicas!`;
    }

}

function VerificarFeminino(){
    let idade = document.querySelector('.input_age').value;

    let bpmFem = 226;

    let resultado = bpmFem - idade;
    
    if(resultado < 0){
        document.querySelector('h3').innerHTML = `Batimentos não podem ser negativos!`;
    }else{
        document.querySelector('h3').innerHTML = `Seus batimentos devem atingir no máximo ${resultado} ao fazer atividades físicas!`;
    }

}