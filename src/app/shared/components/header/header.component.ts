import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = [
    { path: '/games/top-games', name: 'Top Games'},
    { path: '/games/new-games', name: 'New Games'},
    { path: '/games/slots', name: 'Slots'},
    { path: '/games/jackpots', name: 'Jackpots'},
    { path: '/games/live', name: 'Live'},
    { path: '/games/blackjack', name: 'Blackjack'},
    { path: '/games/roulette', name: 'Roulette'},
    { path: '/games/table', name: 'Table'},
    { path: '/games/poker', name: 'Poker'},
    { path: '/games/other', name: 'Other'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
