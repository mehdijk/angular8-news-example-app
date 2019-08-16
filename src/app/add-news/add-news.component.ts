import { Component, OnInit } from '@angular/core';
import { News } from '../model/news.model';
import { NewsServiceService } from '../service/news-service.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  news:News;
  title:string;
  constructor(private newsService:NewsServiceService) { }

  ngOnInit() {
    this.title="";
    this.news=new News();
  }
  
}
