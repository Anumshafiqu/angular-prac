import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { Master } from './pages/services/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FormsModule , MenubarModule , ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css' ,
  standalone : true,
})
export class App {
  protected readonly title = signal('angular');
//   items: MenuItem[] = [];
//   router = inject(Router)

//   ngOnInit() {
//     this.items = [
//       { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
//       { label: 'Products', icon: 'pi pi-shopping-cart', routerLink: '/products' },
//       { label: 'About', icon: 'pi pi-info-circle', routerLink: '/about' },
//       { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' },
//     ]
//   }
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
// logoff() {
//   localStorage.removeItem('angular20use')
//   this.readLoggedData();
//   this.router.navigateByUrl('/login')
// }

}
