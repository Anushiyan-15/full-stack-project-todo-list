import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { task } from './components/tasklist/tasklist.component';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor(private http :HttpClient) { } 

  gettasks(){
    return this.http.get<task[]>('http://localhost:5276/api/TaskItems')
  }

  createtask(task:task){
    return this.http.post('http://localhost:5276/api/TaskItems',task)
  }

  deletetask(taskid:number){
    return this.http.delete('http://localhost:5276/api/TaskItems/'+taskid)
  }

  gettask(taskid:number){
    return this.http.get<task>('http://localhost:5276/api/TaskItems/'+taskid)
  }

  updatetask(task:task,taskid:number){
    return this.http.put('http://localhost:5276/api/TaskItems/'+taskid,task)
  }
}
