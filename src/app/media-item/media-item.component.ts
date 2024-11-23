import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit{

  constructor( private _ActivatedRoute: ActivatedRoute) { } 
  @Input() movie:any
  ngOnInit(): void {
    // let id = this._ActivatedRoute.snapshot.paramMap.get('id');
    // let media_type = this._ActivatedRoute.snapshot.paramMap.get('media_type');
    // let {id,media_type} = this._ActivatedRoute.snapshot.params;
    // console.log(id,media_type);
    
  }

}
