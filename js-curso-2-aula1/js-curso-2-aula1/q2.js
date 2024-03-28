let n1 = prompt('Informe o número: ');
let total = 1;

function fatorial(numero) {
    if (numero == 0 || numero == 1){
        return 1
    }
    // while (numero >= 1) {
    //     total = numero * total;
    //     numero--;
    // }
    // return total;

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial*=i;
    }
    return fatorial
}

alert(fatorial(n1));