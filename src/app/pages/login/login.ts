import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../services/master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  masterService = Inject(Master)
loginObj :any = {
  userName : '' ,
  password :''
}


onLogin() {
  if(this.loginObj.userName == 'Admin' && this.loginObj.password == '112233') {
    this.router.navigateByUrl('/databinding');
    localStorage.setItem('angular20user' , 'Admin');
     this.masterService.onLogin.next(true);
  }else {
    alert('wrong credentials');
  }
}
router = inject(Router)
}
