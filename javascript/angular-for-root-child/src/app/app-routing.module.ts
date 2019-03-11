import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'c', loadChildren: './c-lazy/c-lazy.module#CLazyModule' },
  {path: 'd', loadChildren: './d-lazy/d-lazy.module#DLazyModule' },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
