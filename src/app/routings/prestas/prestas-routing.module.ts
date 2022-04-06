import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrestasPage } from './prestas.page';

const routes: Routes = [
  { path: '',component: PrestasPage },
  { path: '**', redirectTo: "/landing", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrestasPageRoutingModule {}
