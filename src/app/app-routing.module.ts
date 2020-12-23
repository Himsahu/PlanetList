
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'favorite', component: FavoriteComponent },
  {path: "**", redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers:[],
  exports: [RouterModule]
})
export class AppRoutingModule { }
