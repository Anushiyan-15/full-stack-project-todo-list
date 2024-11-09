import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  
  User: User[] = [];
  searchuser:string='';

  constructor(private UserService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.loadUser();
  }

  onDelete(userid:number) {
    if(confirm('Do you want to delete?')) {
      this.UserService.deleteUser(userid).subscribe(data => {
   
        this.loadUser();
      });
    }
  }
  onEdit(userid:number) {
  this.router.navigate(['/admin/useredit/',userid])
  }

  loadUser() {
    this.UserService.getusers().subscribe((data) => {
      this.User = data;
      console.log(this.User)
    });
  }
}
