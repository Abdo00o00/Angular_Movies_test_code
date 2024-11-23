import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) { }

  //api key
  // api_key:string='?api_key=dac547664a87a73be180a68834360494';
  //base url
  base_url:string='https://api.themoviedb.org/3/';
  
  //get trending movies function for home component
  getTrendingMovies(mediaType:string):Observable<any>
  {
    // return this._HttpClient.get(`${this.base_url}trending/${mediaType}/week${this.api_key}`);
    return this._HttpClient.get(`${this.base_url}trending/${mediaType}/week?api_key=`);
  }

  //get item details function for each movie component
  getItemDetails(movie_id:string , movie_type:string):Observable<any>
  {
    // return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=dac547664a87a73be180a68834360494`);
    // return this._HttpClient.get(`${this.base_url}${movie_type}/${movie_id}${this.api_key}`);
    return this._HttpClient.get(`${this.base_url}${movie_type}/${movie_id}?api_key=`);
  }

  //get similar movies function for each movie component
  getSimilarMovies(movie_id:string , movie_type:string):Observable<any>
  {
    // return this._HttpClient.get(`${this.base_url}${movie_type}/${movie_id}/similar${this.api_key}`);
    return this._HttpClient.get(`${this.base_url}${movie_type}/${movie_id}/similar?api_key=`);
  }
  
}
