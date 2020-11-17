import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JackpotManagerService } from '@core/services/index';
import { JackpotGame } from '@shared/interfaces/index';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  games$: Observable<JackpotGame[]>;
  currentCategories: string[] = [];

  constructor(private readonly route: ActivatedRoute, private jackpotManagerService: JackpotManagerService) { }

  ngOnInit(): void {
    this.currentCategories = this.route.snapshot.data.categories;
    this.fetchGames();
    this.jackpotManagerService.updateGamesWithJackpots();
  }

  private fetchGames(): void {
    this.games$ = this.jackpotManagerService.getGamesWithJackpots().pipe(
      map((allGames: JackpotGame[]) => allGames.filter(game => game.categories.some(category => this.currentCategories.includes(category))))
    );
  }

}
