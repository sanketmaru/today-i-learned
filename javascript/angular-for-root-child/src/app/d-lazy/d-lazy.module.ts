import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DRoutingModule } from "./d-lazy-routing-module";
import { SharedModule } from "../c-lazy/shared.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DRoutingModule,
    SharedModule
  ]
})
export class DLazyModule { }
