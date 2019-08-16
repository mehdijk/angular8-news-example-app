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
}
