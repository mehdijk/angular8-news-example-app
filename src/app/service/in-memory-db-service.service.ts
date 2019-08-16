import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { News } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const newsArray=[
      { id:11,
        title:'Morgan "needs more time to think"',
        body:'Eoin Morgan wants to captain England in next year''s Twenty20 World Cup but says he "needs more time" to reflect after a back injury.',
        entryDate:new Date('2019-08-16')},
      { id:12,
        title:'Motorola One Action Goes Official For Around Rs. 20,500',
        body:' Motorola has just announced the One Action, which is the latest Android One smartphone from the company. With this launch, the company puts an end to the rumors and speculations that were making rounds on the internet.',
        entryDate:new Date('2019-08-15')},      
    ];
    return newsArray;
  }
  genId(newsArray: News[]): number {
    return newsArray.length > 0 ? 
    Math.max(...newsArray.map(news => news.id)) + 1 : 11;
  }

  constructor() { }
}
