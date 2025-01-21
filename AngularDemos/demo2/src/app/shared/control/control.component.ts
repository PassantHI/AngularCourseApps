import { AfterContentChecked, AfterContentInit, Component, contentChild, ContentChild, ElementRef, input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
    class:'control',
    '(click)':'onClick()'
  }
})
export class ControlComponent  {
  label=input.required<string>();

  @ContentChild('input') private control?:ElementRef<HTMLInputElement|HTMLTextAreaElement>
// private control=contentChild<ElementRef<HTMLInputElement|HTMLTextAreaElement>>('input')

 /*ngOnInit(): void {
  console.log("oninit")
   console.log(this.control)
 }
 ngAfterContentInit(): void {
  console.log("AfterContentInit")

  console.log(this.control)
 }*/
  onClick(){
   // console.log (this.control())
  
  }
}
