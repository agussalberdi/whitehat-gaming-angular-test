import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'top-games' },
  { path: 'top-games', component: GamesComponent, data: { categories: ['top'] } },
  { path: 'new-games', component: GamesComponent, data: { categories: ['new'] } },
  { path: 'slots', component: GamesComponent, data: { categories: ['slots'] } },
  { path: 'jackpots', component: GamesComponent, data: { categories: ['jackpot'] } },
  { path: 'live', component: GamesComponent, data: { categories: ['live'] } },
  { path: 'blackjack', component: GamesComponent, data: { categories: ['blackjack'] } },
  { path: 'roulette', component: GamesComponent, data: { categories: ['roulette'] } },
  { path: 'table', component: GamesComponent, data: { categories: ['table'] } },
  { path: 'poker', component: GamesComponent, data: { categories: ['poker'] } },
  { path: 'other', component: GamesComponent, data: { categories: ['ball', 'virtual', 'fun'] } },
  { path: '**', pathMatch: 'full', redirectTo: 'top-games' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
