let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!';

function verificaBotao() {
    console.log('O botão foi clicado');
}

function mensagemAlert() {
    alert('Eu amo JS');
}

function perguntaCidade() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function botaoSoma() {
    let numero1 = parseInt(prompt('Digite o primeiro número:'));
    let numero2 = parseInt(prompt('Digite o segundo número:'));
    let resultado = numero1 + numero2;

    alert(`${numero1} + ${numero2} = ${resultado}`);
}