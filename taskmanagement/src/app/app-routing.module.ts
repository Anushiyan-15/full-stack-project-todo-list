import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { UserListComponent } from './UserComponent/user-list/user-list.component';
import { UserAddComponent } from './UserComponent/user-add/user-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BlanklayoutComponent } from './Layouts/blanklayout/blanklayout.component';
import { AdminlayoutComponent } from './Layouts/adminlayout/adminlayout.component';

const routes: Routes = [


{
  path:'admin',
  component:AdminlayoutComponent,
  children:[{
    path:'useradd',
    component:UserAddComponent
  },
  {path:'tasks',component:TasklistComponent},
  {path:'users',component:UserListComponent},
  {
    path:'addform',
    component:TaskAddComponent
  },
  {
    path:'useredit/:id',
    component:UserAddComponent
  },
  {
    path:'edit/:id',
    component:TaskEditComponent
  }]
},
{path:'',
component:BlanklayoutComponent,
children:[{
  path:'login',
  component:LoginComponent
},
{
path:'register',
component:RegisterComponent
},
  {path:'**',redirectTo:'login', pathMatch:'full'}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
