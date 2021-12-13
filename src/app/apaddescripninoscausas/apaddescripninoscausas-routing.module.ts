import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApaddescripninoscausasPage } from './apaddescripninoscausas.page';

const routes: Routes = [
  {
    path: '',
    component: ApaddescripninoscausasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApaddescripninoscausasPageRoutingModule {}
