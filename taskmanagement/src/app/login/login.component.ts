import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  
onsubmit() {
throw new Error('Method not implemented.');
}
loginform:FormGroup;

constructor(private fb:FormBuilder ){
this.loginform= fb.group({

})
}
}
