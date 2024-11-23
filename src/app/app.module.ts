import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { PeopleComponent } from './people/people.component';
import { AboutComponent } from './about/about.component';
import { NetworksComponent } from './networks/networks.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';

//for primeng
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { MediaItemComponent } from './media-item/media-item.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { WatchPipe } from './watch.pipe';
import { MoviePricePipe } from './movie-price.pipe';
import { SeeMorePipe } from './see-more.pipe';
import { SearchPipe } from './search.pipe';
import { ApikeyInterceptor } from './apikey.interceptor';
import { TokenhhInterceptor } from './tokenhh.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent,
    MoviesComponent,
    TvshowComponent,
    PeopleComponent,
    AboutComponent,
    NetworksComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegesterComponent,
    MediaItemComponent,
    MoviedetailsComponent,
    WatchPipe,
    MoviePricePipe,
    SeeMorePipe,
    SearchPipe
  ],
  imports: [
    ButtonModule,
    MenubarModule,
    BrowserAnimationsModule,
    CheckboxModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApikeyInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenhhInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
