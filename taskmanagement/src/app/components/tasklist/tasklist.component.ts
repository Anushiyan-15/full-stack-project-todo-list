import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../../taskservice.service';
import { Router } from '@angular/router';
import { User } from '../../user.service';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit{


    tasks:task[]=[]
    
    searchText:string='';
  

    constructor(private taskservice :TaskserviceService,private router:Router){

    }
  ngOnInit(): void {
   this.loadinglist()
  }

    delete(taskid:number){
      this.taskservice.deletetask(taskid).subscribe(data=>{
        this.loadinglist()
      })
    }

loadinglist(){
  this.taskservice.gettasks().subscribe(data=>{
    this.tasks=data       
    console.log(this.tasks)                                          
  })
}

onedit(taskid:number){
 this.router.navigate(['edit',taskid])
}


}



export interface task{
  id:number;
  title:string;
  description:string;
  dueDate:string;
  priority:string;
  assignee?:User
}

