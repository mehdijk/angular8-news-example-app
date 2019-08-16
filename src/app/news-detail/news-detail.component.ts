import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../service/news-service.service';
import { News } from '../model/news.model';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  news:News;
  id:number;

  constructor(private newsService:NewsServiceService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.id=+this.route.snapshot.params.id;
    this.getNewsById();
  }

  getNewsById(){
    this.newsService.getNewsById(this.id).subscribe(
      news=>this.news=news
    );
  }


}
