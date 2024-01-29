import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output()
    addTaskEmitter = new EventEmitter<Task>();


    text:string;
    day:string;
    reminder:boolean =false;


    onSubmit(){
      if(!this.text){
        alert('please add a task');
        return ;
      }
      const newTask ={
        text:this.text,
        day:this.day,
        reminder:this.reminder
      }
      //emit event  
      this.addTaskEmitter.emit(newTask)

    this.text ='';
    this.day ='';
    this.reminder=false;
    }


    

}
