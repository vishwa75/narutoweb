import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    
  
    AuthComponent,
            LoginComponent,
            ForgetComponent,
            RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class AuthModule { }
