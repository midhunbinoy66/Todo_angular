import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 
import { Task } from '../Task';
import {BehaviorSubject, Observable,isEmpty,of} from 'rxjs'

export interface ITask{
  name:string,
  time:string
  status:string
}

const httpOptions ={
  headers : new HttpHeaders({
    'Content-Type':'Application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  sampleTasks:ITask[] =[
    {
      name:'Wash The Car',
      time:'10:25',
      status:'completed'
    },
    {
      name:'Walk the Dog',
      time:'11:25',
      status:'pending'
    },
  ]
 
  taskSubject = new BehaviorSubject<ITask[]>(this.sampleTasks)


  private apiUrl = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) { }

  getTasks():Observable<ITask[]>{
    return this.taskSubject.asObservable()
  }

  deleteTask(taskId:ITask){
      this.sampleTasks = this.sampleTasks.filter(task=>task.name !== taskId.name);
      this.taskSubject.next(this.sampleTasks);
      console.log(this.sampleTasks);
  }

  updateTaskReminder(task:ITask){
    console.log(task);
    this.sampleTasks.forEach(item=>{
      if(item.name === task.name){
        item.status = item.status === 'pending' ? 'completed' : 'pending';
      }
    })

    this.taskSubject.next(this.sampleTasks)
  }

  addTask(task:ITask){
    const NewTask:ITask ={
      name:task.name,
      time:task.time,
      status:'pending'
    }
    this.sampleTasks.push(task)
  }
}
