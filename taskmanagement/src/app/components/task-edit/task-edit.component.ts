import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskserviceService } from '../../taskservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserService } from '../../user.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {
  Editform: FormGroup ;
  taskid: number;


  constructor(private Fb: FormBuilder,private taskservice:TaskserviceService, private router:Router,private route:ActivatedRoute,private UserService:UserService){
    const id = this.route.snapshot.paramMap.get('id')
    this.taskid = Number(id)
    this.Editform = this.Fb.group({
      id:[''],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      dueDate: ['', [Validators.required]],
      priority: ['', [Validators.required]],
    });

  }
  ngOnInit(): void {
    
      this.taskservice.gettask(this.taskid).subscribe(data=>{
        console.log(data)
      this.Editform.patchValue(data);
      this.Editform.get('dueDate')?.patchValue(new Date(data.dueDate).toISOString().slice(0,10))
})
  }

  onsubmit(){
    const task = this.Editform.value;
    this.taskservice.updatetask(task,this.taskid).subscribe(data=>{
      this.router.navigate(['/'])
    })
  }
cancel(){
this.router.navigate(['/'])
}
}
