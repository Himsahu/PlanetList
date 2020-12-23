import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor( private listData: ListsService) { }
  FavData: any[];

  ngOnInit(): void {
    this.FavData= this.listData.fetchFavData();
  }

}
