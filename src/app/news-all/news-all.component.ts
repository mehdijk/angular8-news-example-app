import { Component, OnInit } from '@angular/core';
import { News } from '../model/news.model';
import { NewsServiceService } from '../service/news-service.service';

@Component({
  selector: 'app-news-all',
  templateUrl: './news-all.component.html',
  styleUrls: ['./news-all.component.css']
})
export class NewsAllComponent implements OnInit {

  private newsAll:News[];

  constructor(private newsService:NewsServiceService) { }

  ngOnInit() {
    this.getNewsAll();
  }
  

  getNewsAll(){
    this.newsService.getAllNews().subscribe(
      newsAll=>this.newsAll=newsAll
    );
  }

}
