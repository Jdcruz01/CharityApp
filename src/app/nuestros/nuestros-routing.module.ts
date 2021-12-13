import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuestrosPage } from './nuestros.page';

const routes: Routes = [
  {
    path: '',
    component: NuestrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuestrosPageRoutingModule {}
