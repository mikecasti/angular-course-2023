import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'course-rsoft';

  constructor() {
    console.log('constructor');
  }

  getName(name: string): string {
    return 'constructor ' + name;
  }

  //función Flecha
  // const getName1 = (name:string) => 'Hi ' + name;

  // (a: number, b: number) => a + b + 100;

  // let imprime = (mensaje) => {log}

  // const ddd = (msg: string) => {msg};
}
