import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ITask, TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent implements OnInit {

  task$:Observable<ITask[]>

    @Input() task:ITask
    @Output() onDeleteTask:EventEmitter<Task>= new EventEmitter();
    @Output() onToggleTask:EventEmitter<Task> = new EventEmitter();
    faTimes= faTimes;

    onDelete(task){
      this.onDeleteTask.emit(task);
    }

    OnToggle(task){
      this.onToggleTask.emit(task);
    }

    constructor(
      private taskService:TaskService
    ){}

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.task$= this.taskService.getTasks()
    }
}
