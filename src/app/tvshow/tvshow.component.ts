import { Component , OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit{
  constructor( private _MoviesService: MoviesService){}
  trendingTv:any[]=[];

  ngOnInit(): void {
    this._MoviesService.getTrendingMovies('tv').subscribe({
      next: (response) => {
        this.trendingTv = response.results.filter((movie:any ) => movie.poster_path != null).slice(0,16);
        // console.log(response);
      }
    })
  }
}
