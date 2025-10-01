import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
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
}
