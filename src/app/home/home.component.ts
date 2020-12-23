import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private listData: ListsService) { }
  data:any;
  ngOnInit(): void {
    this.listData.getPosts().subscribe((result)=>{
      console.warn("result",result);
      this.data=result;
    })
  }

  addFav(obj: any)
  {
    if (obj.isFavourite == false) {
      obj.isFavourite = true;
      this.listData.pushFavdata(obj);
    } 
  }

}
