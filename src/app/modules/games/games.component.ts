import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { JackpotManagerService } from '@shared/services/index';
import { JackpotGame } from '@shared/interfaces/index';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit, OnDestroy {
  destroySubject$: Subject<void> = new Subject();
  games$: Observable<JackpotGame[]>;
  currentCategories: string[] = [];

  constructor(private readonly route: ActivatedRoute, private jackpotManagerService: JackpotManagerService) { }

  ngOnInit(): void {
    this.currentCategories = this.route.snapshot.data.categories;
    this.jackpotManagerService.getGamesWithJackpots().pipe(takeUntil(this.destroySubject$)).subscribe();
    this.jackpotManagerService.updateGamesWithJackpots().pipe(takeUntil(this.destroySubject$)).subscribe();
    this.fetchGames();
  }

  private fetchGames(): void {
    this.games$ = this.jackpotManagerService.gamesWithJackpots$.pipe(
      map((allGames: JackpotGame[]) => allGames.filter(game => game.categories.find(category => this.currentCategories.includes(category))))
    );
  }


  ngOnDestroy() {
    this.destroySubject$.next();
  }

}
