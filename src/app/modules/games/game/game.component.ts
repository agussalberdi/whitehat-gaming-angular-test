import { Component, OnInit, Input } from '@angular/core';
import { JackpotGame } from '@shared/interfaces/index';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game: JackpotGame;
  @Input() categories: string[];
  ribbonUrl = '../../../../assets/ribbon.png';

  constructor() { }

  ngOnInit(): void {
  }


  newOrTopRibbon(game: JackpotGame) {
    if (this.categories.find(category => category !== 'new' && category !== 'top')) {
      return game.categories.some(category => category === 'new' || category === 'top');
    }
    return false;
  }

  displayNewOrTop(game: JackpotGame) {
    return game.categories.includes('new') ? 'NEW' : 'TOP';
  }

}
