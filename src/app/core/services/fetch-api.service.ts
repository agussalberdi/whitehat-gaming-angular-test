import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Game, Jackpot } from 'src/app/shared/interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.api_url}/games.php`);
  }

  getJackpotFeed(): Observable<Jackpot[]> {
    return this.http.get<Jackpot[]>(`${environment.api_url}/jackpots.php`);
  }
}
