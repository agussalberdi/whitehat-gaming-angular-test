import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Game, Jackpot } from '@shared/interfaces/index';

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
