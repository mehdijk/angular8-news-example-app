import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { News } from '../model/news.model';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  private apiUrl="api/newsAll"
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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

  deleteNews(id:number):Observable<any>{
    return this.http.delete<News>(this.apiUrl +'/'+id,this.httpOptions);
  }

  updateNews(news:News):Observable<any>{
    return this.http.put<News>(this.apiUrl,news);
  }

 
}
