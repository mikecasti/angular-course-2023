import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.scss'],
})
export class OperadoresComponent implements OnInit {
  constructor() {
    console.log('constructor');

    //OPERADOR DE JAVA SCRIPT
    // OPERADOR FIND
    console.log('OPERADOR FIND');

    const auxFind = [1, 2, 3, 4, 5];
    console.log('Array Original', auxFind);
    const auxFind2 = auxFind.find(x => x === 3);
    console.log('Operador: const auxFind2 = auxFind.find(x => x === 3)');
    console.log('Array Resultado', auxFind2);
    const auxFind3 = auxFind.find(x => x > 10);
    console.log('Operador: const auxFind3 = auxFind.find(x => x > 10)');
    console.log('Array Resultado', auxFind3);

    console.log('');
    // OPERADOR FOREACH
    console.log('OPERADOR FOREACH');

    const auxForEach = [1, 2, 3, 4, 5];
    console.log('Array Original', auxForEach);
    const auxForEach2 = auxForEach.forEach((x) => x * 2);
    console.log('Operador: const auxForEach2 = auxForEach.forEach(x => x * 2)');
    console.log('Array Resultado', auxForEach2);
    console.log('Este operador sólo recorre el Array, no lo genera.');
    auxForEach.forEach((item, index, arr) => {
      console.log('El item en la posición [' + index + '] es ' + item );
    });

    console.log('');
    // OPERADOR MAP
    console.log('OPERADOR MAP');

    const auxMap = [1, 2, 3, 4, 5];
    console.log('Array Original', auxMap);
    const auxMap2 = auxMap.map((x) => x * 2);
    console.log('Operador: const auxMap2 = auxMap.map(x=> x*2);');
    console.log('Array Resultado', auxMap2);
  }

  ngOnInit(): void {}
}
