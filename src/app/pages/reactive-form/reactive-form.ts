import { NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [FormsModule , ReactiveFormsModule , HttpClientModule ],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
  standalone: true,
})
export class ReactiveForm {
  ngOnInit(): void {
    this.getuser()
  }
  http = inject(HttpClient);
  userList: any[] = [];
  getuser() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
      this.userList = res;
    })
  }
userForm : FormGroup = new FormGroup({
  userId: new FormControl(0),
  emailId: new FormControl("" , [Validators.required , Validators.minLength(5) , Validators.email]),
  password: new FormControl("", [Validators.required]),
  fullName: new FormControl(""),
  mobileNo: new FormControl(""),
})
onsaveUser() {
  if (this.userForm.invalid) {
    alert("Please fill all required fields correctly");
    return;
  }

  const value = this.userForm.value; // ✅ only values, not the form group

  this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", value).subscribe({
    next: (res) => {
      this.getuser();
      alert("User successfully created!");
      this.userForm.reset();
    },
    error: (err) => {
      console.error(err);
      alert("Error: wrong credentials or API issue");
    }
  });
}



}
