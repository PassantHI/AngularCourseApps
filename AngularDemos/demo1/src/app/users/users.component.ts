import { Component, EventEmitter, Input, Output } from '@angular/core';
interface User{
  id:string,
  name:string,
  avatar:string
}
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})


export class UsersComponent {
  @Input({required:true}) user!:User
  @Input({required:true}) selected!:boolean
  @Output() select=new EventEmitter<string>();

  onSelectUser(){
    this.select.emit(this.user.id)
  }

}
