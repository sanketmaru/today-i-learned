import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AModule } from "./a/a.module";
import { BModule } from './b/b.module';
import { AService } from "./services/a.service";
import { NgLibSankModule } from "ng-lib-sank";
import { SharedModule } from './c-lazy/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BModule,
    AModule,
    NgLibSankModule,
    SharedModule
  ],
  providers: [AService],
  bootstrap: [AppComponent]
})
export class AppModule { }
