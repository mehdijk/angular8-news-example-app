import { Component, OnInit } from '@angular/core';
import { News } from '../model/news.model';
import { NewsServiceService } from '../service/news-service.service';
import { runInThisContext } from 'vm';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  news:News;
  constructor(private newsService:NewsServiceService,
              private router:Router) { }

  ngOnInit() {
    this.news=new News();
  }

  onAddClick(){
    this.newsService.addNews(this.news).subscribe(
      x=>this.router.navigate(['/home'])
    )
  }

  onCancelClick(){
    this.router.navigate(['/home']);
  }
  
}
