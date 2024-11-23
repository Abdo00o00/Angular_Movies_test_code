// import { style } from '@angular/animations';
import { Component , OnInit} from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent implements OnInit {
  regesterForm: FormGroup = new FormGroup({
    firstName: new FormControl(null ,[Validators.minLength(3) , Validators.maxLength(18) ,Validators.required]),
    lastName: new FormControl(null ,[Validators.minLength(3) , Validators.maxLength(18),Validators.required]),
    email: new FormControl(null ,[Validators.email ,Validators.required]),
    password: new FormControl(null ,[Validators.minLength(7) , Validators.maxLength(19),Validators.pattern(/^[A-Z]/),Validators.required]),
    age: new FormControl(null,[Validators.min(16) , Validators.max(90),Validators.required]),
    // idd: new FormControl(null,[Validators.minLength(6) , Validators.maxLength(20),Validators.required]),
    // confirmpassword: new FormControl('')
  });



  // {
  //   "firstName": "Moe",
  //   "lastName": "Smith",
  //   "email": "moe@example.com",
  //   "age": 25,
  //   "password": "12345"
  // }
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
  submitRregesterForm(regesterForm:FormGroup) {
    this.isloading = true;
    console.log(regesterForm.value);
    this._AuthService.signup(regesterForm.value).subscribe({
      next: (response) => {
        this.isloading = false;
        if (response.message === 'User registered successfully.') {
          this._Router.navigate(['/home']);
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
    console.log(this.regesterForm);
  }
  ngOnInit(): void {
    
    console.log(this.regesterForm);
  }

  
}
