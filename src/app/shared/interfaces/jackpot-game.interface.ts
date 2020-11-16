import { Game } from './game.interface';
import { Jackpot } from './jackpot.interface';

export interface JackpotGame extends Game, Pick<Jackpot, 'amount'>{}
