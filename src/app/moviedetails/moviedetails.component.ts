import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  
  constructor( private _ActivatedRoute: ActivatedRoute , private _MoviesService: MoviesService) { }
  itemDetails:any;
  simlarMovies:any[]=[];
  mediaType:string='';
  ngOnInit(): void {
    // let id = this._ActivatedRoute.snapshot.paramMap.get('id');
    // let media_type = this._ActivatedRoute.snapshot.paramMap.get('media_type');
    let {id,media_type} = this._ActivatedRoute.snapshot.params;
    console.log(id,media_type);
    this.mediaType=media_type;
    this._MoviesService.getItemDetails(id,media_type).subscribe({
      next:(data)=>this.itemDetails = data});
        // console.log(data)

    this._MoviesService.getSimilarMovies(id,media_type).subscribe({
      next:(data)=>this.simlarMovies=data.results.filter((movie:any)=>movie.poster_path!=null).slice(0,10)});
    // console.log(data)
  }

  //function to get one of similar movies
  //make a request to the server again and get the data
  getOneOfSimilarMovies(id:string , media_type:string){
    this._MoviesService.getItemDetails(id,media_type).subscribe({
      next:(data)=>this.itemDetails = data});
        // console.log(data)

    this._MoviesService.getSimilarMovies(id,media_type).subscribe({
      next:(data)=>this.simlarMovies=data.results.filter((movie:any)=>movie.poster_path!=null).slice(0,10)});
    }

}
