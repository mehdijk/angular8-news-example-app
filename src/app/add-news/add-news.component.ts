import { Component, OnInit } from '@angular/core';
import { News } from '../model/news.model';
import { NewsServiceService } from '../service/news-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  news:News;
  constructor(private newsService:NewsServiceService,
              private router:Router,
              private Route:ActivatedRoute,
              private snackBar: MatSnackBar) { }
  editId:number;

  ngOnInit() {
    this.editId=this.Route.snapshot.params.id;
    if (this.editId) {
      this.newsService.getNewsById(this.editId).subscribe(
        news=>this.news=news)
    } else {
      this.news=new News();
    }
  }

  onAddClick(){
    this.newsService.addNews(this.news).subscribe(
      x=>{
        this.snackBar.open("A news was added!",
        "OK", {duration: 2000, panelClass:['snackBar']});
        this.router.navigate(['/home']);}
    );
  }

  onCancelClick(){
    this.router.navigate(['/home']);
  }

  onEditClick(){
    this.newsService.updateNews(this.news).subscribe(
      x=>{
        this.snackBar.open("The news was edited!",
        "OK", {duration: 2000, panelClass:['snackBar']});
        this.router.navigate(['/home']);}
    );
  }
  
}
