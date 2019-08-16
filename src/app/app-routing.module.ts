import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsAllComponent } from './news-all/news-all.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AddNewsComponent } from './add-news/add-news.component';


const routes: Routes = [
  {path:'', component:NewsAllComponent},
  {path:'home', component:NewsAllComponent},
  {path:'news/:id',component:NewsDetailComponent},
  {path:'add',component:AddNewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
