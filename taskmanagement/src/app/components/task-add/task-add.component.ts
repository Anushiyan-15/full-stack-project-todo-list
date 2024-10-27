import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskserviceService } from '../../taskservice.service';
import { User, UserService } from '../../user.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css',
})
export class TaskAddComponent implements OnInit {
  Taskform: FormGroup;
  Users:User[]=[]

  constructor(private Fb: FormBuilder,private taskservice:TaskserviceService, private router:Router,private UserService:UserService) {
    this.Taskform = this.Fb.group({
      Title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      duedate: ['', [Validators.required]],
      priority: [''],
      assigneeId:['']
    });
  }
  ngOnInit(): void {
    this.UserService.getusers().subscribe(user=>{
      this.Users=user
    })
  }

onsubmit(){
  let task = this.Taskform.value
  console.log(task)
  this.taskservice.createtask(task).subscribe(data=>{
  alert("task is created succesfully")
  this.router.navigate(['/'])
})
 
}

cancel(){
this.router.navigate(['/'])
}
}
