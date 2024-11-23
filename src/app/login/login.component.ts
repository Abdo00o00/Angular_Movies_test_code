import { Component , OnInit} from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  LoginForm: FormGroup = new FormGroup({
    email: new FormControl(null ,[Validators.email ,Validators.required]),
    password: new FormControl(null ,[Validators.minLength(7) , Validators.maxLength(19),Validators.pattern(/^[A-Z]/),Validators.required]),
    // confirmpassword: new FormControl('')
  });

  // {
  //   "email": "moe@example.com",
  //   "password": "12345"
  // }
  
  formItems = [
    {label: 'First name: ', name: 'firstName', type: 'text'  ,   inputStyle:{'color':'black','outline':'none'}, style:{'width':'auto','margin':'1rem auto'}},
    {label: 'Last name: ' , name: 'lastName' , type: 'text'  ,   inputStyle:{'color':'black','outline':'none'}, style:{'width':'auto','margin':'1rem auto'}},
    {label: 'Email: '     , name: 'email'     , type: 'email'  ,  inputStyle:{'color':'black','outline':'none'}, style:{'width':'auto','margin':'1rem auto'}},
    {label: 'Password: '  , name: 'password'  , type: 'password', inputStyle:{'color':'black','outline':'none'}, style:{'width':'auto','margin':'1rem auto'}},
    {label: 'Age: '       , name: 'age'       , type: 'number',   inputStyle:{'color':'black','outline':'none'}, style:{'width':'auto','margin':'1rem auto'}},
  ]
  
  constructor( private _AuthService: AuthService , private _Router: Router) { }
  error: string = '';
  isloading:boolean = false;

  submitLoginForm(LoginForm:FormGroup) {
    this.isloading = true;
    // console.log(LoginForm.value);
    this._AuthService.signin(LoginForm.value).subscribe({
      next: (response) => {
        this.isloading = false;
        if (response.message === 'Login successful.') {
          // localStorage.setItem('userToken',response.token);
          localStorage.setItem('userToken', response.token);

          this._AuthService.saveUserData();
          this._Router.navigate(['/home']);
          console.log(response.token);
        } else {
          this.error = response.message;
          
          // console.log(response.message);
          // console.log("this is next");
          console.log(response);
        }
      },
      error: (err) => {this.error = err.error.message
        console.log("this is err");
        console.log(err.status);
      },

      complete: () => {console.log('complete');}
    })

  }
  OnInit(): void {
    // console.log(this.LoginForm);
  }
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() != null) {
          this._Router.navigate(['/home']);
        } 
  
      }
  
    })
    
    console.log(this.LoginForm);
  }

  
}
