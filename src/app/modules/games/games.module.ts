import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [GamesComponent, GameComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    GamesRoutingModule 
  ]
})
export class GamesModule { }
