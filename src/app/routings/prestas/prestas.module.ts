import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrestasPageRoutingModule } from './prestas-routing.module';

import { PrestasPage } from './prestas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrestasPageRoutingModule
  ],
  declarations: [PrestasPage]
})
export class prestasPageModule {}
