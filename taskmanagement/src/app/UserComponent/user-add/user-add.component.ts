import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserService, address } from '../../user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css',
})
export class UserAddComponent {
  userForm: FormGroup;

  isEditMode = false;
  userId: number;
  user! : User;

  constructor(
    private fb: FormBuilder,
    private Route: ActivatedRoute,
    private UserService: UserService,
    private Router: Router
  ) {
    const uid = this.Route.snapshot.paramMap.get('id');
    this.userId = Number(uid);

    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: [''],
      password: [''],
      phoneNumber: ['',[Validators.required]],
      address:this.fb.group({
        addressline1:[''],
        addressline2:[''],
        city:['']
      })
    });

    if (uid) {
      this.isEditMode = true;
    } else {
      this.isEditMode = false;
    }
  }

  ngOnInit(): void {
    if (this.isEditMode == true) {
      this.UserService.getUser(this.userId).subscribe((res:any) => {
        this.user = res;
        this.userForm.patchValue(res)
      }, error => {
        // this.toastr.error("User is not found");
      });
    }
  }
  

  onSubmit() {
    let user = this.userForm.value;
   
    console.log(user)

    if (this.isEditMode == true && this.user) {
      user.id = this.userId;
      user.address.id = this.user?.address?.id
      console.log(this.userId);
      this.UserService.updateUser(user,this.userId).subscribe(data=>{
        this.Router.navigate(['/users'])
      })
    }else{
      this.UserService.createuser(user).subscribe(data=>{
        console.log(user)
        alert("User Create Success Fully")
        this.Router.navigate(['/users'])
      })
    }
  }
  cancel() {
    this.userForm.reset();
    this.Router.navigate(['/']);
  }
}
