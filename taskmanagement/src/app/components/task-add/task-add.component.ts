import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskserviceService } from '../../taskservice.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.css',
})
export class TaskAddComponent {
  Taskform: FormGroup;
  constructor(private Fb: FormBuilder,private taskservice:TaskserviceService, private router:Router) {
    this.Taskform = this.Fb.group({
      Title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      duedate: ['', [Validators.required]],
      priority: [''],
    });
  }

onsubmit(){
  let task = this.Taskform.value
  this.taskservice.createtask(task).subscribe(data=>{
  alert("task is created succesfully")
})
  this.router.navigate(['/'])
}

cancel(){
this.router.navigate(['/'])
}
}
