import { Component, Input } from '@angular/core';
import { DUMMY_Tasks } from '../dummy_tasks';
import { TaskComponent } from "./task/task.component";
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true})userId!:string
  @Input({required:true}) name!:string
  tasks=DUMMY_Tasks;

  get selectedUserTasks(){
    return this.tasks.filter((task)=>task.userId===this.userId)
  }
  onCompleteTask(taskId:string){
    this.tasks=this.tasks.filter((task)=>task.id!==taskId)
  }



}
