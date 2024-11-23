import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NetworksComponent } from './networks/networks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  
  {path:'home', canActivate:[AuthGuard], component:HomeComponent},
  {path:'movies',canActivate:[AuthGuard], component:MoviesComponent},
  {path:'tvshow',canActivate:[AuthGuard], component:TvshowComponent},
  {path:'people',canActivate:[AuthGuard], component:PeopleComponent},
  {path:'settings',canActivate:[AuthGuard],loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)},
  {path:'moviedetails/:id/:media_type',canActivate:[AuthGuard], component:MoviedetailsComponent},
  {path:'about',canActivate:[AuthGuard], component:AboutComponent},
  {path:'networks',canActivate:[AuthGuard], component:NetworksComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},

  {path:'login', component:LoginComponent},
  {path:'regester', component:RegesterComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
