import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CComponent } from '../c/c.component';


const routes: Routes = [
  {
    path: '',
    component: CComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRoutingModule { }