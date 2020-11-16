import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FetchApiService } from './fetch-api.service';
import { Game, Jackpot, JackpotGame } from 'src/app/shared/interfaces';

@Injectable({
    providedIn: 'root'
})
export class JackpotManagerService {
    private gamesWithJackpotsSource = new BehaviorSubject<JackpotGame[]>([]);
    gamesWithJackpots$ = this.gamesWithJackpotsSource.asObservable();

    constructor(private fetchApiService: FetchApiService) {}

    private detectGamesWithJackpots(games: Game[], jackpots: Jackpot[]) {
        return games.map(game => {
            const hasJackpot = jackpots.find(jackpot => jackpot.gameId === game.id);
            const gameJackpot = {...game, amount: hasJackpot?.amount} as JackpotGame;
            return gameJackpot;
        });
    }

    getGamesWithJackpots() {
        return forkJoin([this.fetchApiService.getGames(), this.fetchApiService.getJackpotFeed()]).pipe(
            map(([games, jackpots]) => this.detectGamesWithJackpots(games, jackpots)),
            tap(jackpotsGames => this.gamesWithJackpotsSource.next(jackpotsGames))
        );
    }
}