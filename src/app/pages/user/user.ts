import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [HttpClientModule, FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {
  ngOnInit(): void {
    this.getuser()
  }
  http = inject(HttpClient);
  userList: any[] = [];
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }
  getuser() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
      this.userList = res;
    })
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
          this.getuser();
        },
        error: () => {
          alert('Error deleting user');
        }
      });
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
        this.getuser();
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
        this.getuser();
        alert("user success created")

      },
      error: (error) => {
        alert("wrong credentilas")
      }
    })
  }

}
