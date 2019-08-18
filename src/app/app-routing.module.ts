import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsAllComponent } from './news-all/news-all.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { AuthGuard } from './service/auth.guard';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path:'', component:NewsAllComponent},
  {path:'home', component:NewsAllComponent},
  {path:'news/:id',component:NewsDetailComponent},
  {path:'add',component:AddNewsComponent, canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'edit/:id',component:AddNewsComponent,canActivate:[AuthGuard]},
  {path:'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
