import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    loadChildren: () => import('./modules/games/games.module').then(m => m.GamesModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'games'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
