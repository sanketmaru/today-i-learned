import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DRoutingModule } from "./d-lazy-routing-module";
import { SharedModule } from "../c-lazy/shared.module";
import { BComponent } from "../b/b.component";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DRoutingModule,
    SharedModule
  ]
})
export class DLazyModule { }
