import { Component,DoCheck, OnInit } from '@angular/core';
import { Item } from '../item';
import { style } from '@angular/animations';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit, DoCheck  {
  constructor( private _AuthService: AuthService){  }
  islogin:boolean = false;
  
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() != null) {
          this.islogin = true
          console.log('with if'+this.islogin);
        } else {
          this.islogin = false
          console.log('with else'+this.islogin);
          
        }

      }

    })
    
  }
  
  ngDoCheck(): void {
    this.updateItems();
  }

  // updateItems() {
  //   this.items.forEach(item => item.bool = this.islogin);
  // }
  updateItems() {
    this.items.forEach((item, index) => {
      item.bool = index === 0 ? true : this.islogin;
    });
  }

  logout(){
    this._AuthService.signout()
  }
  
  
  items:any[] =[
    {bool:true         ,label: 'Noxe',    routerLink: 'home'     ,style:{'color':'red', 'font-weight':'bold', 'font-size':'30px','margin': 'auto 0px', 'cursor': 'pointer'},},
    {bool:this.islogin ,label: 'Home',    routerLink: 'home'     ,style:{'background-color':'var(--main-bg)' , 'color':'white' ,'font-family': 'var(--mian-font)' ,'margin': 'auto 10px', 'cursor': 'pointer'},},
    {bool:this.islogin ,label: 'Movies',  routerLink: 'movies'   ,style:{'background-color':'var(--main-bg)' , 'color':'white' ,'font-family': 'var(--mian-font)' ,'margin': 'auto 10px', 'cursor': 'pointer'},},
    {bool:this.islogin ,label: 'TV',      routerLink: 'tvshow'   ,style:{'background-color':'var(--main-bg)' , 'color':'white' ,'font-family': 'var(--mian-font)' ,'margin': 'auto 10px', 'cursor': 'pointer'},},
    {bool:this.islogin ,label: 'People',  routerLink: 'people'   ,style:{'background-color':'var(--main-bg)' , 'color':'white' ,'font-family': 'var(--mian-font)' ,'margin': 'auto 10px', 'cursor': 'pointer'},},
    {bool:this.islogin ,label: 'About',   routerLink: 'about'    ,style:{'background-color':'var(--main-bg)' , 'color':'white' ,'font-family': 'var(--mian-font)' ,'margin': 'auto 10px', 'cursor': 'pointer'},},
    {bool:this.islogin ,label: 'Networks',routerLink: 'networks' ,style:{'background-color':'var(--main-bg)' , 'color':'white' ,'font-family': 'var(--mian-font)' ,'margin': 'auto 10px', 'cursor': 'pointer'},},
  ]
  
  items2:any[] =[
    {label: 'cc', url:'#',  routerLink: 'settings' ,style:{ 'color':'var(--main-bg)', 'font-size':'18px' , 'font-weight':'600' , 'cursor':'pointer'}},
    {label: 'xx', url:'#',    routerLink: 'login'    ,style:{ 'color':'var(--main-bg)', 'font-size':'18px' , 'font-weight':'600' , 'cursor':'pointer'}},
  ]
  
  iconsList:any[] =[
    {label: 'facebook',  routerLink: 'home' ,style:{ 'color':'var(--main-bg)', 'font-size':'20px'} , href:'https://www.facebook.com/'},
    {label: 'twitter',   routerLink: 'home' ,style:{ 'color':'var(--main-bg)', 'font-size':'20px'} , href:'https://x.com/'},
    {label: 'google',    routerLink: 'home' ,style:{ 'color':'var(--main-bg)', 'font-size':'20px'} , href:'https://www.google.com/'},
    {label: 'linkedin',  routerLink: 'home' ,style:{ 'color':'var(--main-bg)', 'font-size':'20px'} , href:'https://www.linkedin.com/'},
    {label: 'instagram', routerLink: 'home' ,style:{ 'color':'var(--main-bg)', 'font-size':'20px'} , href:'https://www.instagram.com/'},
    {label: 'github',    routerLink: 'home' ,style:{ 'color':'var(--main-bg)', 'font-size':'20px'} , href:'https://github.com/'},
    {label: 'telegram',  routerLink: 'home' ,style:{ 'color':'var(--main-bg)', 'font-size':'20px'} , href:'https://web.telegram.org/'},
  ]
  
  authentications:any[]=[
    {prilog:this.islogin, label: 'Login',    routerLink: 'login'    ,style:{'cursor':'pointer','color':'var(--main-bg)', 'font-size':'18px' , 'font-weight':'600'}},
    {prilog:!this.islogin, label: 'logout'    ,style:{'cursor':'pointer','color':'var(--main-bg)', 'font-size':'18px' , 'font-weight':'600'}},
    {prilog:!this.islogin, label: 'Setting',    routerLink: 'setting'    ,style:{'cursor':'pointer','color':'var(--main-bg)', 'font-size':'18px' , 'font-weight':'600'}},
    {prilog:this.islogin, label: 'Regester', routerLink: 'regester' ,style:{'cursor':'pointer','color':'var(--main-bg)', 'font-size':'18px' , 'font-weight':'600'}},
  ]

}
