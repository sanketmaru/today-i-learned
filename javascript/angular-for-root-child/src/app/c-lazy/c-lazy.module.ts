import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRoutingModule } from "./c-lazy-routing-module";
import { SharedModule } from "./shared.module";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CRoutingModule,
    SharedModule
  ]
})
export class CLazyModule { }
