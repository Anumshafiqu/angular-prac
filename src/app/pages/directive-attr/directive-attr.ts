import { DatePipe, JsonPipe, LowerCasePipe, NgClass, NgStyle, SlicePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-directive-attr',
  imports: [NgClass , NgStyle ,  UpperCasePipe , LowerCasePipe , SlicePipe ,
    JsonPipe , DatePipe
  ],
  templateUrl: './directive-attr.html',
  styleUrl: './directive-attr.css'
})
export class DirectiveAttr implements OnInit , AfterViewInit , AfterViewChecked ,
AfterContentInit , AfterContentChecked , OnDestroy{
  constructor ( ) {
    console.log('constructor')
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
  FirstName : string = 'Angular';
  courseName : string = 'angular 20 tutorial';
  StudentRollNo = [12, 13, 14 ,15 , 16 , 1, 18];
  studentObg :any = {
    name :'angular' , 
    city : 'okara' ,
    rollNo : '2'
  }
  currentDate : Date = new Date()
  div1ClassName= signal<string>('');
  div2green :boolean = true;
  setBgDiv(classname:string) {
    this.div1ClassName.set(classname)
  }
togglebutton() {
  this.div2green = ! this.div2green;

}
}
