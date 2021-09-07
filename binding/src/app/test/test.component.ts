import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{name}}</h2>
  <!-- <h2 class="text-succes">Coder</h2>
  <h2 [class]="successClass">Coder</h2>
  <h2 [class.text-danger]="hasError">Coder</h2>
  <h2 [ngClass]="messageClasses"]>Coder</h2> -->
  <!-- <h2 [style.color]="hasError ? 'red' : 'green' 
   ">Style Binding</h2>
   <h2 [style.color]="highLightColor">Style binding 2</h2>
   <h2 [ngStyle]="titleStyle">Style binding 3</h2> -->
   <!-- <button type="submit" (click)="onClick($event)">Greet</button>
   <button type="submit" (click)="greeting='Welcome'">Greet</button> -->
   <!-- <input #myInput type="text">
   <button (click)="logMessage(myInput.value)">Log</button>
   {{greeting}} -->
   <input [(ngModel)]="name" type="text">
   {{name}}
   `,
  styles: [`
    .text-succes {
      color: green;
    }
      .text-danger {
        color: red;
      }
        .text-special {
          font-style: italic;
        }
    
  `]
})
export class TestComponent implements OnInit {
  public name = "";
  //public name="Ashi";
  // public myId= "testId";
  // public greeting="";
  // public successClass="text-succes";
  // public hasError=false;
  // public isSpecial=true;
  // public highLightColor="orange";
  // public titleStyle={
  //   color: "blue",
  //   fontStyle: "italic"
  // }
  // public messageClasses={
  //   "text-succes": !this.hasError,
  //   "text-danger": this.hasError,
  //   "text-special": this.isSpecial
  // }

  constructor() { }

  ngOnInit(): void {
  }

  // greetUser() {
  //   return "Hello " + this.name;
  }
  // onClick(event: any) {
  //   console.log(event.type);
  //   this.greeting='Welcome to Codevolution';
  // }

  // logMessage(value: any) {
  //   console.log(value);
  // }

