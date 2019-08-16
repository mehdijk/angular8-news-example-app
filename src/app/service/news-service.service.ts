import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  private apiUrl="api/newsAll"

  constructor(private http:HttpClient) { }

  getAllNews():Observable<News[]>{
    return this.http.get<News[]>(this.apiUrl);
  }

  getNewsById(id:number):Observable<News>{
    return this.http.get<News>(this.apiUrl +'/'+id);
  }

  addNews(news:News):Observable<any>{
    return this.http.post<News>(this.apiUrl,news);
  }
}
