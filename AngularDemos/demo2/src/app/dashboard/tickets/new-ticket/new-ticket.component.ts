import { afterNextRender, afterRender, AfterViewChecked, AfterViewInit, Component, ElementRef, output, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent ,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent  {
  @ViewChild('form') form?:ElementRef<HTMLFormElement>
  add=output<{title:string ; text:string}>()
  //pass a templet variable name

  //private form=viewChild<ElementRef<HTMLFormElement>>('form');

  /*ngOnInit(): void {           //->undifined
    console.log("oninit")
    console.log(this.form?.nativeElement)
  }
 
  ngAfterViewInit(): void {
    console.log("AfterViewInit")
    console.log(this.form?.nativeElement)
  }*/

    constructor(){
     /* afterNextRender(()=>{console.log("after next render")})
      afterRender(()=>{console.log("after render")})*/
    }
  onSubmit(title:string ,tickettext:string){
    console.log(title)
    this.add.emit({title:title,text:tickettext})
  }

}
