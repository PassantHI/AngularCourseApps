import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  data=input.required<Ticket>();
  dataVisibal=signal(false);
  close=output();

  onToggleVisibale(){
    this.dataVisibal.update((wasVisibal)=>!wasVisibal)
  }

  onClose(){
    this.close.emit();
  }

}
