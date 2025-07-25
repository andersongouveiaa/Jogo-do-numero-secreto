let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();



function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate: 1.2});

}


function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}
exibirMensagemInicial();
function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto ?'Acertou':'Errou');

    if (chute == numeroSecreto){
        palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        mensagemTentativas = (`Você descobriu o número secreto com apenas ${tentativas} ${palavraTentativa}`)
        exibirTextoNaTela('h1','Acertou');
        exibirTextoNaTela('p', mensagemTentativas);
        document.querySelector('#reiniciar').disabled = false;
    }else{
        
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        }else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparInput();
    }
}
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite+1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosDaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparInput(){
    chute = document.querySelector('input').value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparInput();
    exibirMensagemInicial();
    tentativas = 1;
    document.querySelector('#reiniciar').disabled = true;
}
