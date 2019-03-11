import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CComponent } from '../c/c.component';

@NgModule({
  declarations: [CComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [CComponent]
})
export class SharedModule { }
