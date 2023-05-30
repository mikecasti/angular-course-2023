import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.scss'],
})
export class OperadoresComponent implements OnInit {

  sumaREST(...numeros: number[]) {
    let total:number =0;
    numeros.forEach(n=> total+=n);
    return total;
  }

  printREST(...params: any[]) {
    console.log('REST: ', params);    
  }


  constructor() {
    console.log('constructor');  
    console.log([1,2,3,4,5,6].filter(x=>x%2 === 0).map(x=>x*2));



    const datos = {
      0 : {
        id: 1,
        name: 'Mike',
        age: 24,
      },
      1 : {
        id: 0,
        name: 'Faby',
        age: 10,
      }
    }

    //convertir a un array y obtener la suma de las edades
    const resp = Object.values(datos).reduce((prev, valor) => prev + valor.age, 0)
    console.log('resp:', resp);    

    //Convertir a un array y filtrar a las personas mayores de 10 años y mostrar los Ids como array
    const resp2 = Object.values(datos).filter(x=>x.age>10).map(x=>x.id);
    console.log('resp2:', resp2);

    //OPERADOR DE JAVA SCRIPT
    // DESESTRUCTURACION
    console.log('DESESTRUCTURACION');
        
    const auxPerson = {
      id: 1,
      name: 'Mike',
      lastName: 'Casti',
      color: 'Green',
      country: {
        idCountry: 591,
        name: 'Bolivia',
        city:[{
          codigo: 'LP',
          name: 'La Paz',
        },
        {
          codigo: 'PT',
          name: 'Potosi',
        },
        {
          codigo: 'SC',
          name: 'Santa Cruz',
        },
      ]}
    };

    console.log('El JSON es: ', auxPerson);
    const {country, id} = auxPerson;
    console.log('El Country del JSON es: ', country, id);
    const {city} = country;
    console.log('El City del Country del JSON es: ', city);

    // console.log('Otro ejemplo');
    // console.log(this.sumaREST(25,5,2,2,3,5,2,4,1,5,1,1,5,5,12,78));
    
    console.log('');


    // REST OPERATOR
    console.log('REST OPERATOR');
        
    console.log(this.printREST('Mike','Casti',40,178.5,true,false));
    console.log('Otro ejemplo');
    console.log(this.sumaREST(25,5,2,2,3,5,2,4,1,5,1,1,5,5,12,78));
    
    console.log('');

    // OPERADOR SPREAD OPERATOR
    console.log('SPREAD OPERATOR');

    const auxSpread = [3, 5, 7, 11];
    const auxSpreadCopia = auxSpread;
    console.log('Operador: const auxSpreadCopia = auxSpread');
    console.log('Lista auxSpread', auxSpread);
    console.log('Lista auxSpreadCopia', auxSpreadCopia);
    console.log('Se asigna el valor 666 a la posición 0 en la lista: auxSpread');
    auxSpread[0]=666;
    console.log('Lista auxSpread', auxSpread);
    console.log('Lista auxSpreadCopia', auxSpreadCopia);
    console.log('La asignación afecta a ambas listas, porque no se realizó una copia, ambas apuntan a la misma lista.');
    console.log('');
    console.log('Para solucionar esto, se debe utilizar Spread Operator');
    const auxSpread2 = [3, 5, 7, 11];
    const auxSpreadCopia2 = [...auxSpread2];
    console.log('Lista auxSpread2', auxSpread2);
    console.log('Lista auxSpreadCopia2', auxSpreadCopia2);
    console.log('Se asigna el valor 666 a la posición 0 en la lista: auxSpread2');
    auxSpread2[0]=666;
    console.log('Lista auxSpread2', auxSpread2);
    console.log('Lista auxSpreadCopia2', auxSpreadCopia2);
    console.log('');
    const auxSpread3 = [3, 5, 7, 11];
    const auxSpreadCopia3 = [...auxSpread3,13,17,19,23,29];
    console.log('Operador: const auxSpreadCopia3 = [...auxSpread3,13,17,19,23,29]');
    console.log('Lista auxSpread3', auxSpread3);
    console.log('Lista auxSpreadCopia3', auxSpreadCopia3);

    // const auxSpread2 = auxSpread.reduce((previousValue, currentValue, index) =>{
    //   console.log({previousValue, currentValue, index}, "Acumulado = ", previousValue + currentValue);
    //   return previousValue + currentValue
    // });
    // console.log('auxSpread2 = ', auxSpread2);
    
    
    console.log('');

    // OPERADOR JSON
    console.log('OPERADOR JSON');

    const auxJSON = {
      id: 1,
      name: 'Mike',
      lastName: 'Casti',
      color: 'Green'
    };
    console.log('Estructura del JSON:', auxJSON);

    const auxEntries = Object.entries(auxJSON);
    console.log('Obtenemos los ENTRIES:', auxEntries);

    const auxKeys = Object.keys(auxJSON);
    console.log('Obtenemos los KEYS:', auxKeys);

    const auxValues = Object.values(auxJSON);
    console.log('Obtenemos los VALUES:', auxValues);
  

    console.log('');
    // OPERADOR REDUCE
    console.log('OPERADOR REDUCE');

    const auxReduce = [5, 6, 7, 8, 9];
    console.log('Array Original', auxReduce);
    const auxReduce2 = auxReduce.reduce((previousValue, currentValue, index) =>{
      console.log({previousValue, currentValue, index}, "Acumulado = ", previousValue + currentValue);
      return previousValue + currentValue
    });
    console.log('auxReduce2 = ', auxReduce2);
    

    console.log('');
    // OPERADOR SPLICE
    console.log('OPERADOR SPLICE');
    
    const auxSpliceMeses = ['Enero','Febrero','Marzo','Lunes','Martes','Miercoles'];
    console.log('Array Original', auxSpliceMeses);
    const auxSpliceDias = auxSpliceMeses.splice(3,3);
    console.log('Operador: const auxSpliceDias = auxSpliceMeses.splice(3,3)');
    console.log('Array Resultado ', auxSpliceMeses);
    console.log('Array Resultado ', auxSpliceDias);

    const auxSpliceMeses2 = ['Enero','Febrero','Marzo','Lunes','Martes','Miercoles'];
    console.log('Array Original', auxSpliceMeses2);
    const auxSpliceDias2 = auxSpliceMeses2.splice(3,3,'Abril','Mayo','Junio');
    console.log('Operador: auxSpliceDias2 = auxSpliceMeses2.splice(3,3,"Abril","Mayo","Junio");');
    console.log('Array Resultado ', auxSpliceMeses2);
    console.log('Array Resultado ', auxSpliceDias2);
    
    console.log('');

    // OPERADOR Split
    console.log('OPERADOR SPLIT');
    
    const auxSplit = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nihil.";
    console.log('Array Original', auxSplit);
    const auxSplit2 = auxSplit.split(' ');
    console.log('Operador: const auxSplit2 = auxSplit.join("-")');
    console.log('Array Resultado ', auxSplit2);
    
    console.log('');

    // OPERADOR Join
    console.log('OPERADOR JOIN');
    
    const auxJoin = [5, 6, 7, 8, 9];
    console.log('Array Original', auxJoin);
    const auxJoin2 = auxJoin.join('-');
    console.log('Operador: const auxJoin2 = auxJoin.join("-")');
    console.log('Array Resultado ', auxJoin2);
    
    console.log('');
    
    // OPERADOR Filter
    console.log('OPERADOR FILTER');
    
    const auxFilter = [5, 6, 7, 8, 9];
    console.log('Array Original', auxFilter);
    const auxFilter2 = auxFilter.filter(x=>x % 2 === 0);
    console.log('Operador: const auxFilter2 = auxFilter.filter(x=>x % 2 === 0)');
    console.log('Array Resultado ', auxFilter2);
    
    console.log('');


    // OPERADOR IndexOf
    console.log('OPERADOR IndexOf');

    const auxIndexOf = [5, 6, 7, 8, 9];
    console.log('Array Original', auxIndexOf);
    const auxIndexOf2 = auxIndexOf.indexOf(7);
    console.log('Operador: const auxIndexOf2 = auxIndexOf.indexOf(7)');
    console.log('Array Resultado ', auxIndexOf2);
    const auxIndexOf3 = "Hola Mundo Test";
    console.log('Array Original', auxIndexOf3);
    const auxIndexOf4 = auxIndexOf3.indexOf("M");
    console.log('Operador: const auxIndexOf4 = auxIndexOf3.indexOf("M")');
    console.log('Array Resultado', auxIndexOf4);
    const auxIndexOf5 = auxIndexOf3.indexOf("Test");
    console.log('Operador: const auxIndexOf5 = auxIndexOf3.indexOf("Test")');
    console.log('Array Resultado', auxIndexOf5);
    const auxIndexOf6 = auxIndexOf3.indexOf("Text");
    console.log('Operador: const auxIndexOf6 = auxIndexOf3.indexOf("Text")');
    console.log('Array Resultado', auxIndexOf6);

    console.log('');

    // OPERADOR FindIndex
    console.log('OPERADOR FindIndex');

    const auxFindIndex = [5, 6, 7, 8, 9];
    console.log('Array Original', auxFindIndex);
    const auxFindIndex2 = auxFindIndex.findIndex(x => x === 7);
    console.log('Operador: const auxFindIndex2 = auxFindIndex.findIndex(x => x === 7)');
    console.log('Array Resultado', auxFindIndex2);
    const auxFindIndex3 = auxFindIndex.findIndex(x => x > 8);
    console.log('Operador: const auxFindIndex3 = auxFindIndex.findIndex(x => x > 8)');
    console.log('Array Resultado', auxFindIndex3);
    const auxFindIndex4 = auxFindIndex.findIndex(x => x > 80);
    console.log('Operador: const auxFindIndex4 = auxFindIndex.findIndex(x => x > 80)');
    console.log('Array Resultado', auxFindIndex4);

    console.log('');
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
