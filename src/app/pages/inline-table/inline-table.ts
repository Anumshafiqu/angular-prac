import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inline-table',
  imports: [FormsModule],
  templateUrl: './inline-table.html',
  styleUrl: './inline-table.css'
})
export class InlineTable implements OnInit {
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.getAllPosts();
  }
  postsList: any[] = [];
  getAllPosts() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res: any) => {
      this.postsList = res
    })
  }
  onedit(record: any) {
    this.isEditablerow();
    record.isEditable = true;

  }
  addNew() {
    this.isEditablerow();
    const newObj = {
      "userId": "",
      "id": "",
      "title": "",
      "body": "",
      isEditable: true,
    }

    this.postsList.unshift(newObj)
  }
  saveRow(item: any) {
    if (item.id == ''|| item.title == '' || item.body == '') {
      alert("plz fill all the fields")
    } else {
      console.log(item)
    }

  }
  isEditablerow() {
    this.postsList.forEach(element => {
      element.isEditable = false;
    })
  }
  cancelrow(item: any) {
    if (item.id == 0) {
      this.postsList.splice(0, 1);
    }
    item.isEditable = false
  }
}
