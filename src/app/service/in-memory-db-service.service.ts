import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { News } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const newsAll=[
      { id:11,
        title:'Needs more time to think',
        body:'Eoin Morgan wants to captain England in next year\s Twenty20 World Cup but says he "needs more time" to reflect after a back injury.',
        imgUrl:'https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/8180/production/_108325133_morgantwo_getty.jpg',
        entryDate:new Date('2019-08-16')},
      { id:12,
        title:'Motorola One Action Goes Official For Around Rs. 20,500',
        body:' Motorola has just announced the One Action, which is the latest Android One smartphone from the company. With this launch, the company puts an end to the rumors and speculations that were making rounds on the internet.',
        imgUrl:'https://cdn.images.express.co.uk/img/dynamic/59/590x/Motorola-Action-One-1166148.webp?r=1565932509775',
        entryDate:new Date('2019-08-15')}, 
      { id:13,
        title:'NASA shock: Jaw-dropping moment the Sun spews plasma in \sunexpected explosion\s - VIDEO',
        body: 'The Solar Heliospheric Observatory (SOHO), controlled by NASA and ESA, has captured the moment solar material hurtles away from the Sun and into space. The NASA satellite video shows the Sun spewing plasma from either side in what is known as a “coronal mass ejection”. The event refers to a large release of plasma and accompanying magnetic field from the outermost part of the Sun’s atmosphere.',
        imgUrl:'https://cdn.images.express.co.uk/img/dynamic/151/590x/nasa-news-latest-sun-coronal-mass-ejection-magnetic-field-mission-solar-system-1166098.webp?r=1565877544951',
        entryDate:new Date('2019-08-16')},       
    ];
    return {newsAll};
  }
  genId(newsAll: News[]): number {
    return newsAll.length > 0 ? 
    Math.max(...newsAll.map(news => news.id)) + 1 : 11;
  }

}
