import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialModule} from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './views/account/user/user.component';
import { LoginComponent } from './views/account/login/login.component';
import { AccountModule } from './views/account/account.module';





@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    // UserComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    
    AccountModule,
    AppRoutingModule,

    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
