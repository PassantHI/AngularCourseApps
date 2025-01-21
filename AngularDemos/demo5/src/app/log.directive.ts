import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host:{
    '(click)':'onClick()'
  }
})
export class LogDirective {

  private hostElementRef=inject(ElementRef);
  constructor() {}
  onClick(){
    console.log("click");
    console.log(this.hostElementRef.nativeElement);
  }



}
