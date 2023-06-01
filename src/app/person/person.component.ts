import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements  OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('Entró al Constructor');    
  }

  
  ngAfterContentInit(): void {
    // console.log('Entró al ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    // console.log('Entró al ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    // console.log('Entró al ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    // console.log('Entró al ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('Entró al ngOnDestroy');
  }

  @Input() name!: any;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Entró al ngOnChanges', changes);   
    
    // console.log('previousValue', changes['name'].previousValue);
  }

  ngOnInit(): void {
    // console.log('Entró al ngOnInit');
  }

  ngDoCheck(): void {
    // console.log('Entró al ngDoCheck');
  }
}
