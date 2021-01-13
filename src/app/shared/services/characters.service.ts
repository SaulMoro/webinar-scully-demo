// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Rxjs
import { Observable, of } from 'rxjs';
import { expand, reduce, tap } from 'rxjs/operators';

// @wsd packages
import { environment } from '@wsd/environment';

// Interfaces
import { Character, CharactersResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private readonly apiPath = '/character';
  private cachedCharacters: Character[] = [];

  /**
   * Service constructor
   *
   * @param httpClient Angular http client service
   */
  constructor(private readonly httpClient: HttpClient) { }

  /**
   * Get characters
   *
   * @returns Observable with all characters
   */
  public getCharacters(): Observable<Character[]> {

    if (this.cachedCharacters && this.cachedCharacters.length) {
      return of(this.cachedCharacters);
    }

    return this.getCharactersPage(`${environment.baseUrl}${this.apiPath}`).pipe(
      expand(response => response.info.next ? this.getCharactersPage(response.info.next) : of()),
      reduce((acc, response) => acc.concat(response.results), [] as Character[]),
      tap(characters => this.cachedCharacters = characters)
    );
  }

  /**
   * Get character
   *
   * @param id Character id
   * @returns Observable with character
   */
  public getCharacter(id: number): Observable<Character> {
    const character = this.cachedCharacters.find(characterFind => characterFind.id === id) as Character;

    if (character) {
      return of(character);
    }

    return this.httpClient.get<Character>(`${environment.baseUrl}${this.apiPath}/${id}`);
  }

  /**
   * Get characters page
   *
   * @param url Page url
   * @returns Observable with characters response
   */
  private getCharactersPage(url: string): Observable<CharactersResponse> {
    return this.httpClient.get<CharactersResponse>(url);
  }
}
