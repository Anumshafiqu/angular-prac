import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Master } from '../services/master';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet , RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {
  items: MenuItem[] = [];
  router = inject(Router)

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
      { label: 'Products', icon: 'pi pi-shopping-cart', routerLink: '/products' },
      { label: 'About', icon: 'pi pi-info-circle', routerLink: '/about' },
      { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' },
    ]
  }
//   loggedUserName = '' ;
//   constructor(private masterService : Master) {
//     this.readLoggedData();
//     this.masterService.onLogin.subscribe(res =>{
//       this.readLoggedData();

//     })
    

//   }
// readLoggedData() {
//   const loggedData = localStorage.getItem('angular20use');
//   if (loggedData !== null) {
//     this.loggedUserName = loggedData;
//   } else {
//     this.loggedUserName = ''; // or any default value
//   }
// }
logoff() {
  localStorage.removeItem('angular20use')
  // this.readLoggedData();
  this.router.navigateByUrl('/loginpage')
}
}
