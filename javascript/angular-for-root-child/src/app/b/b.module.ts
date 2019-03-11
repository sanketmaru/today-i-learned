import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BComponent } from './b.component';
import { AService } from "../services/a.service";

@NgModule({
  declarations: [BComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [BComponent]
})
export class BModule { }
