// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;

  constructor(public formBuilder: FormBuilder, public http: HttpClient,public router:Router) { }

  
  signupForm: any = FormGroup;

  
  erroremail = false;
  errorpass = ' email is not found';

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }


  // getErrorMessage() {

  //     return  'The username and password were not recognized'

  // }           

  onSumbit() {

    

    const payload = {

      email: this.signupForm.value.email,

      password: this.signupForm.value.password

    }


    console.log(this.signupForm.value)

    this.http.post<any>(`http://localhost:4200/api/login/login`, payload).subscribe((res: any) => {

      localStorage.setItem("loginStatus",res.value)



      console.log(res.value)

      if (res.value === 'success' ){

        this.router.navigate(["user"]);


      } else if (res.value == 'error'){
      
        this.erroremail = true;
        this.errorpass = ' email is not found';

        
      }

    

    })

  }
}
