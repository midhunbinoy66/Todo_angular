import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'; 
import { Task } from '../Task';
import {BehaviorSubject, Observable,of} from 'rxjs'

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
      name:'first Task',
      time:'10:25',
      status:'pending'
    },
    {
      name:'Second Task',
      time:'11:25',
      status:'pending'
    },
    {
      name:'Third Task',
      time:'12:40',
      status:'pending'
    }
  ]
 
  taskSubject = new BehaviorSubject<ITask[]>(this.sampleTasks)


  private apiUrl = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) { }

  getTasks():Observable<ITask[]>{
    return this.taskSubject.asObservable()
  }

  deleteTask(taskId:ITask){
      this.sampleTasks = this.sampleTasks.filter(task=>task.name !== taskId.name);

      console.log(this.sampleTasks);
  }

  updateTaskReminder(task:Task):Observable<Task>{
    const url =`${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions);
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
