import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, interval, Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { FetchApiService } from './fetch-api.service';
import { Game, Jackpot, JackpotGame } from '@shared/interfaces/index';

@Injectable({
    providedIn: 'root'
})
export class JackpotManagerService {
    private gamesWithJackpotsSource = new BehaviorSubject<JackpotGame[]>([]);
    gamesWithJackpots$ = this.gamesWithJackpotsSource.asObservable();

    constructor(private fetchApiService: FetchApiService) {}

    private detectGamesWithJackpots(games: Game[], jackpots: Jackpot[]): JackpotGame[] {
        return games.map(game => {
            const hasJackpot = jackpots.find(jackpot => jackpot.game === game.id);
            const gameJackpot = {...game} as JackpotGame;
            gameJackpot.amount = hasJackpot?.amount;
            return gameJackpot;
        });
    }

    getGamesWithJackpots(): Observable<JackpotGame[]> {
        return forkJoin([this.fetchApiService.getGames(), this.fetchApiService.getJackpotFeed()]).pipe(
            map(([games, jackpots]) => this.detectGamesWithJackpots(games, jackpots)),
            tap(jackpotsGames => this.gamesWithJackpotsSource.next(jackpotsGames))
        );
    }

    updateGamesWithJackpots(): Observable<JackpotGame[]> {
        return interval(2000).pipe(
            mergeMap(() => this.fetchApiService.getJackpotFeed()),
            map((jackpots) => this.detectGamesWithJackpots(this.gamesWithJackpotsSource.getValue(), jackpots)),
            tap(value => this.gamesWithJackpotsSource.next(value)),
            tap(value => console.log(value))
        );
    }
}