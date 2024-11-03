import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User, UserService } from '../../user.service';
import { Router } from '@angular/router';
import { task } from '../../components/tasklist/tasklist.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  Registerfrom:FormGroup

constructor(private fb:FormBuilder,private toster:ToastrService,private UserService:UserService,private Router:Router){
  this.Registerfrom=this.fb.group({
    Fullname:[''],
    Email:[''],
    Password:[''],
    Role:['']
  })
}

onsubmit() {
let task:any = this.Registerfrom.value
task.Role = parseInt ( this.Registerfrom.value.Role)
console.log(task.Role)
this.UserService.userregister(task).subscribe(data=>{
this.toster.success("Register Complete SuccessFully")
  this.Router.navigate(['login'])
})
}

}
