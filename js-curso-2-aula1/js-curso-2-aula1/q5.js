let raio = prompt('Informe o raio');

function areaPerimetro(r) {
    let area = 3.14 * r**2;
    let perimetro = 2 * 3.14 * r;  
    return `A área é ${area.toFixed(2)} e o perímetro é ${perimetro.toFixed(2)}.`
}

alert(areaPerimetro(raio));

// se declarar normalmente, tipo tamanho = 4, não precisa de parseint, porém, se perguntar ao usuário (prompt), precisa!!!
// toFixed() ajusta a qtd de casas decimais