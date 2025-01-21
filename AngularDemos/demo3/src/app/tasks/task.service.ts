import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable({
     providedIn:'root'
 })
export class TaskService{

    private tasks=signal<Task[]>([]);

    allTask=this.tasks.asReadonly()

    addTask(taskData:{title:string,description:string}){

        const newTask:Task={
            ...taskData,
            id:Math.random().toString(),
            status:'OPEN'

        }
        this.tasks.update((oldTask)=>[...oldTask,newTask])

    }

    onChangeStatus(taskId:string,newStatus:TaskStatus){
        this.tasks.update((oldtasks)=>
            oldtasks.map((oldtask)=>oldtask.id===taskId?{...oldtask,status:newStatus}:oldtask));

    }



}