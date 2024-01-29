import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

    @Input() task:Task;
    @Output() onDeleteTask:EventEmitter<Task>= new EventEmitter();
    @Output() onToggleTask:EventEmitter<Task> = new EventEmitter();
    faTimes= faTimes;

    onDelete(task){
      this.onDeleteTask.emit(task);
    }

    OnToggle(task){
      this.onToggleTask.emit(task);
    }
}
