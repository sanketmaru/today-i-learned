import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRoutingModule } from "./c-lazy-routing-module";
// import { SharedModule } from "./shared.module";
import { CComponent } from "../c/c.component";

@NgModule({
  declarations: [CComponent],
  imports: [
    CommonModule,
    CRoutingModule,
    // SharedModule
  ]
})
export class CLazyModule { }
