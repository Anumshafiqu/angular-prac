import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Master } from '../services/master';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  imports: [HttpClientModule, FormsModule , CommonModule  , ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
  standalone : true,
})
export class User implements OnInit {
  ngOnInit(): void {
    this.getUsers();
    const result  = this.masterService.getSum(12,50);
    const appData = this.masterService.appName;

  }
  http = inject(HttpClient);
  masterService = inject(Master);
  userList: any[] = [];
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }
  getUsers() {
    this.masterService.getUsers().subscribe({
      next: (res: any) => {
        console.log('✅ Users loaded:', res);
        this.userList = res;
      },
      error: (err) => {
        console.error('❌ Error fetching users:', err);
      }
    });
  }
  // onDelete(item: number) {
  //   const isDelete = confirm("are you sure you want to delete");
  //   if(isDelete){
  //   this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=").subscribe({
  //     next: () => {
  //       this.getuser();
  //       alert("user success created")
  //     },
  //     error: (error) => {
  //       alert("wrong credentilas")
  //     }
  //   })
  //   }

  // }
    onDelete(userId: number) {
    const confirmDelete = confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      this.http.delete(
        `https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=${userId}`
      ).subscribe({
        next: () => {
          alert('User deleted successfully');
          this.getUsers();
        },
        error: () => {
          alert('Error deleting user');
        }
      })
    }
  }
  onResetUser() {
    this.userObj = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }
  }
  onsaveUser() {
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({
      next: (Result) => {
        this.getUsers();
        alert("user success created")
      },
      error: (error) => {
        alert("wrong credentilas")
      }
    })
  }
  onedit(item: any) {
    this.userObj = item;
  }
  onUpdateUser() {
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userObj.userId, this.userObj).subscribe({
      next: () => {
        this.getUsers();
        alert("user success created")

      },
      error: (error) => {
        alert("wrong credentilas")
      }
    })
  }

}
