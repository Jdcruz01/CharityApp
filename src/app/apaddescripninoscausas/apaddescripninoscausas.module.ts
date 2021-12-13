import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApaddescripninoscausasPageRoutingModule } from './apaddescripninoscausas-routing.module';

import { ApaddescripninoscausasPage } from './apaddescripninoscausas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApaddescripninoscausasPageRoutingModule
  ],
  declarations: [ApaddescripninoscausasPage]
})
export class ApaddescripninoscausasPageModule {}
