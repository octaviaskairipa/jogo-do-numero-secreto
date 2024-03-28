let altura = parseInt(prompt('Digite a altura: '));
let largura = parseInt(prompt('Digite a largura')); 

function areaPerimetro (a,l){
    area = a * l;
    perimetro = 2 * (a + l);
    return `A área é ${area} e o perímetro é ${perimetro}.`
}

alert (areaPerimetro(altura,largura))