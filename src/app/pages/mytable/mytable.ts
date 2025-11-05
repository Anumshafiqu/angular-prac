import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-mytable',
  imports: [],
  templateUrl: './mytable.html',
  styleUrl: './mytable.css'
})
export class Mytable {
@Input() colArray : string[] = [];
@Input() gridData : any[] = [];
@Input()  neddActionBtn : boolean = false;
@Output() onEdit = new EventEmitter<any>();
@Output() onDelete = new EventEmitter<any>();
editRecord(data:any) {
  this.onEdit.emit(data)
}
deleteRecord(data:any) {
  this.onDelete.emit(data)
}

}
