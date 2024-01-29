function exibeHelloWorld() {
    console.log('Hello World!');
}

exibeHelloWorld();

function recebeNome(nome) {
    console.log(`Hello ${nome}!!`);
}

recebeNome('Guilherme');

function recebeNumero(numero) {
    console.log(`O dobro de ${numero} é ${numero * 2}`);
}

recebeNumero(3);

/*function recebeTresNumeros(numero1, numero2, numero3) {
    media = (numero1 + numero2 + numero3) / 3;
    console.log(`${numero1} + ${numero2} + ${numero3} / 3 = ${media}`)
}

recebeTresNumeros(10, 5, 6);

function exibeNumeroMaior(numero1, numero2) {
    if(numero1 > numero2) {
        console.log(`O número ${numero1} é o maior`);
    } else {
        console.log(`O número ${numero2} é o maior`);
    }
}

exibeNumeroMaior(4, 2);*/

function multiplicaNumeroEleMesmo(numero1) {
    potencia = numero1 * numero1;
    console.log(`O resultado da potência é ${potencia}`);
}

multiplicaNumeroEleMesmo(7);