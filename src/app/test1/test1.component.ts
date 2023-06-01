import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit, OnChanges, DoCheck {

  constructor() {
    console.log('Entró al Constructor');    
  }
  

  @Input() name!:string;
  @Input() lastName:string="Perez";

  public middleName:string="";
  public generalData:string="";

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Entró al ngOnChanges', changes);   
    
    console.log('previousValue', changes['name'].previousValue);
  }

  ngOnInit(): void {
    console.log('Entró al ngOnInit');
  }

  ngDoCheck(): void {
    console.log('Entró al ngDoCheck');
    this.generalData = this.name + " " + this.lastName + " " + this.middleName;
  }



}
