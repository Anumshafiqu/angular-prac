import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports: [ReactiveFormsModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css'
})
export class Loginpage {
  router = inject(Router)
  loginPage: FormGroup = new FormGroup({
    EmailId: new FormControl(),
    Password: new FormControl(),
  })
  http = inject(HttpClient);
onLogin() {
  const formValue = this.loginPage.value;

  this.http.post("https://freeapi.miniprojectideas.com/api/User/Login", formValue)
    .subscribe({
      next: (response: any) => {
          localStorage.setItem('angular20token', response.data.token);
          alert("Login success");
          this.router.navigateByUrl("/databinding");

      },
      error: (err: any) => {
        console.error("Login error:", err);
        alert("Login failed");
      }
    });
}


}
