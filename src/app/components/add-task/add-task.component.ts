import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';
import { ITask } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output()
    addTaskEmitter = new EventEmitter<ITask>();


    name:string;
    time:string;
    reminder:boolean =false;


    onSubmit(){
      if(!this.name){
        alert('please add a task');
        return ;
      }
      const newTask ={
        name:this.name,
        time:this.time,
        status:'pending'
      }
      //emit event  
      this.addTaskEmitter.emit(newTask)

    this.name ='';
    this.time ='';
    this.reminder=false;
    }


    

}
