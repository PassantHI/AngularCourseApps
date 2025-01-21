import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { DUMMY_USERS } from './dummy-users';
import { UsersComponent } from "./users/users.component";
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UsersComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users=DUMMY_USERS;
  selectedUserId?:string;

  get selectedUser(){
    return this.users.find((usr)=>usr.id===this.selectedUserId)
  }


  onselectuser(id:string){
    this.selectedUserId=id
  }

}
