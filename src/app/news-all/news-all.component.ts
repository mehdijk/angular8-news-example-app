import { Component, OnInit } from '@angular/core';
import { News } from '../model/news.model';
import { NewsServiceService } from '../service/news-service.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-all',
  templateUrl: './news-all.component.html',
  styleUrls: ['./news-all.component.css']
})
export class NewsAllComponent implements OnInit {

   newsAll:News[];

  constructor(private newsService:NewsServiceService,
              private loginService:LoginService) {
               }

  isLogin:Boolean;         

  ngOnInit() {
    this.loginService.isLogin().then(x=>this.isLogin=x);
    this.loginService.loginChanged.subscribe(x=>this.isLogin=x);
    this.getNewsAll();
  }

  getNewsAll(){
    this.newsService.getAllNews().subscribe(
      newsAll=>this.newsAll=newsAll
    );
  }

  delete(id:number){
    this.newsService.deleteNews(id)
    .subscribe(x=>this.getNewsAll());
  }

}
