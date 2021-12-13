import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonacionesPage } from './donaciones.page';

const routes: Routes = [
  {
    path: '',
    component: DonacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonacionesPageRoutingModule {}
