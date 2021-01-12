// Interfaces
import { Character } from './character.model';

export interface CharactersResponse {
  readonly info: {
    readonly count: number;
    readonly pages: number;
    readonly next: string;
    readonly prev: string;
  };
  readonly results: Character[];
}
