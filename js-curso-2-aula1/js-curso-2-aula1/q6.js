let n1 = prompt('Informe um número: ');

function tabuada(numero) {
    for(let i = 1; i <= 10; i++) {
        let t = numero * i;
        alert(t);
  }
}


let mostrarTabuada = tabuada(n1);

// function mostrarTabuada(numero) {
//     for (let i = 1; i <= 10; i++) {
//       let resultado = numero * i;
//       alert(`${numero} x ${i} = ${resultado}`);
//     }
//   }
  
//   // Exemplo de uso
//   let numero = 7;
//   mostrarTabuada(numero);