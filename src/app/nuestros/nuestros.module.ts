import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuestrosPageRoutingModule } from './nuestros-routing.module';

import { NuestrosPage } from './nuestros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuestrosPageRoutingModule
  ],
  declarations: [NuestrosPage]
})
export class NuestrosPageModule {}
