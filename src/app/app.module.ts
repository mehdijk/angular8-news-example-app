import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './service/in-memory-db-service.service';
import { NewsAllComponent } from './news-all/news-all.component';
import { NewsServiceService } from './service/news-service.service';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { MatButtonModule, MatMenuModule, MatMenuItem, MatIconModule, MatDividerModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    NewsAllComponent,
    NewsDetailComponent,
    AddNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule

  ],
  providers: [NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
