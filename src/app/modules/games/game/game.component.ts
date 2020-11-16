import { Component, OnInit, Input } from '@angular/core';
import { JackpotGame } from '@shared/interfaces/index';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game: JackpotGame;

  constructor() { }

  ngOnInit(): void {
  }

}
