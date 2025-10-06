import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
  standalone: true,
})
export class GetApi {
  http = inject(HttpClient);
  todoList: any[] = [];
  userlist: any[] = [];
  busUserList :any = [];
  constructor() {
    this.userApi();
    this.getTodoApi();
    this.busBookingApi()
  }
  userApi() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res: any) => {
      this.userlist = res
    })

  }
  getTodoApi() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((result: any) => {
      this.todoList = result;
    })
  }
  busBookingApi () {
    this.http.get('https://api.freeprojectapi.com/api/BusBooking/GetAllUsers').subscribe((response: any)=>{
      this.busUserList = response.data;
    })
  }

}
