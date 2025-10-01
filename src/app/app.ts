import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet , FormsModule , MenubarModule , ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css' ,
  standalone : true,
})
export class App {
  protected readonly title = signal('angular');
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
      { label: 'Products', icon: 'pi pi-shopping-cart', routerLink: '/products' },
      { label: 'About', icon: 'pi pi-info-circle', routerLink: '/about' },
      { label: 'Contact', icon: 'pi pi-envelope', routerLink: '/contact' }
    ];
  }
}
