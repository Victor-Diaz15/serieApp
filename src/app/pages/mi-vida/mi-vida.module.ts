import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiVidaPageRoutingModule } from './mi-vida-routing.module';

import { MiVidaPage } from './mi-vida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiVidaPageRoutingModule
  ],
  declarations: [MiVidaPage]
})
export class MiVidaPageModule {}
