import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CombustivelComponent} from './combustivel.component';

const routes: Routes = [
  {
    path: '',
    component: CombustivelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombustivelRoutingModule { }
