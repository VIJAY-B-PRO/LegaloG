import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/account/login/login.component';
import { UserComponent } from './views/account/user/user.component';

const routes: Routes = [
  {path:'logmm',component:LoginComponent},
  {path:'',redirectTo:'/log',pathMatch:'full'},
  {path:'user',component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
