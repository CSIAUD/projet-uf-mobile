import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  // { path: 'prestas/:id', loadChildren: () => import('./routings/prestas/prestas.module').then( m => m.prestasPageModule) },
  { path: "landing", component: LandingComponent},
  { path: "team", component: TeamComponent},
  { path: '**', redirectTo: "landing", pathMatch: "full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
