import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UserComponent } from './user/user.component';
import { materialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent,
    UserComponent

   
    
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    materialModule,
    ReactiveFormsModule

    
  ],

})
export class AccountModule { }
