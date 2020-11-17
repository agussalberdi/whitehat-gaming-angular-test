import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/modules/index';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [GamesComponent, GameComponent],
  imports: [
    CommonModule,
    MaterialModule,
    GamesRoutingModule 
  ]
})
export class GamesModule { }
