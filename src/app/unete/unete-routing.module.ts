import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnetePage } from './unete.page';

const routes: Routes = [
  {
    path: '',
    component: UnetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnetePageRoutingModule {}
