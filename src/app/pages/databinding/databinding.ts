import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding implements OnInit{
  title = 'Angular 20 Data Binding Example';

  // Property Binding example
placeholder = 'Enter your name'
  // Event Binding example
  count = 0;
  increment() {
    this.count++;
  }

  // Two-way Binding example
  username = '';
ngOnInit(): void {
  this.getUsers();
}

  http = inject(HttpClient);
// getUsers() {
//   this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers")
//     .subscribe({
//       next: (response: any) => {
//         console.log("Users:", response);
//       },
//       error: (error: any) => {
//         console.error("Error fetching users:", error);
//       }
//     });
// }
// getUsers() {
//   this.http.get("https://jsonplaceholder.typicode.com/users")
//     .subscribe({
//       next: (response) => {
//         console.log("Users from JSONPlaceholder:", response);
//         // you can assign it to a component variable, e.g. this.users = response
//       },
//       error: (error) => {
//         console.error("Error fetching users:", error);
//       }
//     });
// }
getUsers() {
  this.http.get('https://httpbin.org/get').subscribe({
    next: (response) => {
      console.log('Response:', response);
    },
    error: (error) => {
      console.error('Error fetching:', error);
    },
  });
}
}
