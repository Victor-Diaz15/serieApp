import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiVidaPage } from './mi-vida.page';

const routes: Routes = [
  {
    path: '',
    component: MiVidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiVidaPageRoutingModule {}
