import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';
import { CommonModule, DatePipe} from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FiltertaskPipe } from './filtertask.pipe';
import { UserAddComponent } from './UserComponent/user-add/user-add.component';
import { UserListComponent } from './UserComponent/user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FilteruserPipe } from './filteruser.pipe';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
   TaskAddComponent,
    TaskEditComponent,
    FiltertaskPipe,
    UserAddComponent,
    UserListComponent,
    FilteruserPipe,
    RegisterComponent,
    LoginComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    RouterLink,
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule,
    DatePipe,
    BrowserAnimationsModule,
    BsDatepickerModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
