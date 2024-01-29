function calculoIMC(peso, altura) {
    let imc = peso / (altura * altura);
    console.log(`O seu IMC é ${imc}`);

    return imc.toFixed(2);
}

calculoIMC(70, 1.75);

function valorEmDolar(dolar) {
    real = dolar * 4.80;
    console.log(`Este valor em dólar está ${real}`);

    return real.toFixed(2);
}

valorEmDolar(26.89);

function calculoAreaPerimetroRetangulo(alturaRetangulo, larguraRetangulo) {
    perimetroRetangulo = 2 * (alturaRetangulo + larguraRetangulo);
    areaRetangulo = alturaRetangulo * larguraRetangulo;

    console.log(`Área = ${areaRetangulo}; Perimetro = ${perimetroRetangulo}`);
}

calculoAreaPerimetroRetangulo(2, 12);

function calculoAreaPerimetroCirculo(raioCirculo) {
    pi = 3.14;
    perimetroCirculo = 2 * pi * raioCirculo;
    areaCirculo = pi * (raioCirculo * raioCirculo);

    console.log(`Área = ${areaCirculo}; Perimetro = ${perimetroCirculo}`);
}

calculoAreaPerimetroCirculo(2);

function tabuadaNumero(numero) {
    for(var i = 0; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

tabuadaNumero(9);