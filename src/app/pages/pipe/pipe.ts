import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../pipes/na-pipe';

@Component({
  selector: 'app-pipe',
  imports: [UpperCasePipe , LowerCasePipe , TitleCasePipe , DatePipe , JsonPipe,
    SlicePipe ,   NaPipe
  ],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css'
})
export class Pipe {
CourseName: string = 'angular';
couseDuration : string = "Duration is 15 vidoes"
currentDate:Date = new Date();
studentArray : any = [112,113,114,115,115,116,11]
studentObj :any ={
  name : 'AAA',
  mobiuleNo : '938492',
  Address : {
    city : 'okara',
    State : 'MH'

  }
 

}
}
