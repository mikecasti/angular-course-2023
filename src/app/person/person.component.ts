import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerson } from './person.model';

@Component({
  selector: 'app-person',
  // templateUrl: './person.component.html',
  template : `
    <div>
      person works!
  
      <p>Name: {{ name }}</p>
      <p>LastName: {{ lastName }}</p>
      <p>Age: {{ age }}</p>
  
      <button (click)="onPrint()">Print</button>
  </div>
  `,
  // styleUrls: ['./person.component.scss']
  styles: [
    `
      div {
        border: 3px dotted green;
      }
    `
  ],
})
export class PersonComponent implements OnInit {

  constructor() { }

  @Input() name: string = "";
  @Input() lastName: string = "";
  @Input() age: number = 0;

  @Output() print = new EventEmitter<IPerson>();

  ngOnInit(): void {
  }

  public onPrint(): void {
    this.print.emit({
      name: this.name,
      lastName: this.lastName,
      age: this.age
    });
  }

}
