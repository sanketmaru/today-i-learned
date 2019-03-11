import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a.component';
import { AService } from "../services/a.service";

@NgModule({
  declarations: [AComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [AComponent]
})
export class AModule { }
