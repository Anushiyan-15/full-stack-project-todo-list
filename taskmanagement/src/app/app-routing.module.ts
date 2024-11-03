import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { UserListComponent } from './UserComponent/user-list/user-list.component';
import { UserAddComponent } from './UserComponent/user-add/user-add.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

const routes: Routes = [
  {path:'tasks',component:TasklistComponent},
  {path:'users',component:UserListComponent},
  //{path:'',component:TasklistComponent},
  {path:'',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'login',component:LoginComponent},


  {path:'useradd',component:UserAddComponent},
  {path:'addform',component:TaskAddComponent},

  {path:'useredit/:id',component:UserAddComponent},
  {path:'edit/:id',component:TaskEditComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
