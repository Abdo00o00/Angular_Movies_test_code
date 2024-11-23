import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { Observable , BehaviorSubject} from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient: HttpClient , private _Router: Router) { 
    if (localStorage.getItem('userToken')) {
      this.saveUserData();
    }
  }
  userData:any = new BehaviorSubject(null);

  saveUserData() {
    let encodedToken = JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken:object = jwtDecode(encodedToken);
    this.userData.next(decodedToken); // this.userData = decodedToken;
    console.log('this is the decoded token'+ this.userData);
  }
  // saveUserData() {
  //   let encodedToken = localStorage.getItem('userToken');
  //   if (encodedToken) {
  //     let decodedToken: object = jwtDecode(encodedToken);
  //     this.userData.next(decodedToken);
  //   }
  // }
  signout() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);

  }

  signup(userData: object):Observable<any> {
    return this._HttpClient.post('http://localhost:3000/signup/', userData );
  }

  signin(userData: object):Observable<any> {
    return this._HttpClient.post('http://localhost:3000/login/', userData );
  }
  // login(email: string, password: string): Observable<any> {
  //   return this._HttpClient.post('https://reqres.in/api/login', { email, password });
  // }
}
