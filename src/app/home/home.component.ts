import { Component , OnInit} from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _MoviesService: MoviesService) { }

  search:string='';
  trendingMovies:any[]=[];
  trendingTv:any[]=[];
  trendingPeople:any[]=[];

  ngOnInit(): void {


    this._MoviesService.getTrendingMovies('movie').subscribe({
      next: (response) => {
        this.trendingMovies = response.results.slice(0,10);
        // console.log(response);
      }
    });
    this._MoviesService.getTrendingMovies('tv').subscribe({
      next: (response) => {
        this.trendingTv = response.results.slice(0,10);
        // console.log(response);
      }
    });
    this._MoviesService.getTrendingMovies('person').subscribe({
      next: (response) => {
        this.trendingPeople = response.results.filter((person:any ) => person.profile_path != null).slice(0,10);
        // console.log(response);
      }
    });
  }

}
