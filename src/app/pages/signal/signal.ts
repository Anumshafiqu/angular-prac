import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {
  // ✅ Normal property (not reactive)
FirstName : string = 'cheetan';
// ✅ Signals (reactive variables)
CourseName = signal<string>("angular");
CourseDuration = signal("15 Videos");
  // ✅ Computed signal (depends on other signals)
  // Whenever CourseName or CourseDuration changes → this recalculates

courseDetails = computed(() => this.CourseName()  +  " - "  +  this.CourseDuration())
constructor() {
   // Show values in console
  this.FirstName = "rahul" ;
  console.log(this.FirstName);
  console.log(this.CourseName());
  // Simulate change after 5 seconds
  setTimeout(() => {
    this.CourseName.set("React");
  }, 5000);
  
  console.log(this.CourseName())
}
}
