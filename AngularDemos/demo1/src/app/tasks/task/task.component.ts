import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Task{
  id: string,
    userId: string,
    title: string;
    summary: string,
    dueDate: string
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input()task!:Task;
  @Output()isComplete=new EventEmitter<string>();

  onCompleted(){
    this.isComplete.emit(this.task.id)
  }

}
