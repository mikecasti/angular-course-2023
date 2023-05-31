import { Component } from '@angular/core';
import { IPerson } from './person/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'course-rsoft';

    // public person : IPerson = {
  //   name:'',
  //   lastName:'',
  //   age: 0
  // };

  public person! : IPerson;


  public student: string = 'Axel Castillo Villca';

  public varA = 0;
  public varB = 0;

  constructor() {
    console.log('constructor');
  }

  getName(name: string): string {
    return 'constructor ' + name;
  }

  getPrint(event: IPerson) {
    console.log('data', event);
    this.person = event;
  }

  public getLastName(event: any) : void {
    console.log('Last Name:', event);
    
  }

  empleadoLista:string="";


  public printName(name: any) : void {
    console.log('Print Name', name);
    
  }

  //función Flecha
  // const getName1 = (name:string) => 'Hi ' + name;

  // (a: number, b: number) => a + b + 100;

  // let imprime = (mensaje) => {log}

  // const ddd = (msg: string) => {msg};
}
