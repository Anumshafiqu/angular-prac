import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contol-flow',
  imports: [FormsModule , CommonModule],
  templateUrl: './contol-flow.html',
  styleUrl: './contol-flow.css'
})
export class ContolFlow {
iParaVisible : boolean = true;
isMonthVisible : string = "feb";

cityList : string[] = ['lahore' , 'okara' , 'punjab'];
studentList : any[ ] = [
  {name : 'AAA' , city :' Lahore' , isactive : false},
  {name : 'BB' , city :' OKara' , isactive : true},
  {name : 'CCC' , city :'Punjab' , isactive : false},
]
show() {
  this.iParaVisible = true

}
Hide() {
  this.iParaVisible = false

}
}
