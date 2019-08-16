import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsAllComponent } from './news-all/news-all.component';


const routes: Routes = [
  {path:'', component:NewsAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
