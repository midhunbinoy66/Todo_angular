import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { ITask, TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  tasks:ITask[]=[];
  
  constructor(private taskService:TaskService){};


  ngOnInit():void{
    this.taskService.getTasks().subscribe((tasks)=>{
      this.tasks =tasks
    });
  }

  deleteTask(taskId:ITask){ 
    console.log(taskId)
    this.taskService.deleteTask(taskId);
   
  }

  toggleTask(task){
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task)
  }

  onAddTask(task){
    console.log(task);
    this.taskService.addTask(task)
  }

}
