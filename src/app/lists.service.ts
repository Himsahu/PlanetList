import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListsService {


  url  = " https://assignment-machstatz.herokuapp.com/planet"
  
  public favList:Array<any>;
  constructor(private http:HttpClient) {
    this.favList=[];
   }

  getPosts()
  {
    return this.http.get(this.url);
  }

  pushFavdata(obj: any)
  {
    this.favList.push(obj);
  }

  fetchFavData()
  {
    return this.favList;
  }
}
