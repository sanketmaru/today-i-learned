import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DRoutingModule } from "./d-lazy-routing-module";
// import { SharedModule } from "../c-lazy/shared.module";
import { CComponent } from "../c/c.component";
@NgModule({
  declarations: [CComponent],
  imports: [
    CommonModule,
    DRoutingModule,
    // SharedModule
  ]
})
export class DLazyModule { }
