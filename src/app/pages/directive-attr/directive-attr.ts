import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-directive-attr',
  imports: [NgClass , NgStyle],
  templateUrl: './directive-attr.html',
  styleUrl: './directive-attr.css'
})
export class DirectiveAttr {
  div1ClassName  = signal<string>("")
  div2green :boolean = true;
setBgDiv(className :string) {
  this.div1ClassName.set(className)
}
togglebutton() {
  this.div2green = ! this.div2green;

}
}
