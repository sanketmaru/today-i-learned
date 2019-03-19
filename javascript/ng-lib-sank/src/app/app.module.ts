import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgLibSankCarouselModule } from 'ng-lib-sank';
import { SankCardComponent } from './sank-card/sank-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SankCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgLibSankCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
