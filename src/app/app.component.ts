import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'course-rsoft';
  public name: string = "Axel";
  public lastName: string = "Castillo";
  public level:number = 1;
  public enablePerson: boolean = true;

  constructor() {
    // console.log('constructor');
  }

  getName(name: string): string {
    return 'constructor ' + name;
  }

  changeName(): void {
    this.name = 'Ana María Ocampo Galarza';
    this.lastName = 'Castillo Villca'
  }

  //función Flecha
  // const getName1 = (name:string) => 'Hi ' + name;

  // (a: number, b: number) => a + b + 100;

  // let imprime = (mensaje) => {log}

  // const ddd = (msg: string) => {msg};
}
