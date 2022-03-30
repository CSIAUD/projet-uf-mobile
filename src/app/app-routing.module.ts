import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'folder/landing', pathMatch: 'full' },
  { path: 'folder/:id', loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule) },
  { path: "landing", redirectTo: 'folder/landing', pathMatch: 'full' },
  { path: "team", redirectTo: 'folder/team', pathMatch: 'full' },
  { path: "installations", redirectTo: 'folder/installations', pathMatch: 'full' }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
