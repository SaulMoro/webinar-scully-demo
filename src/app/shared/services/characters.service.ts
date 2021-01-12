// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Rxjs
import { Observable, of } from 'rxjs';
import { expand, reduce } from 'rxjs/operators';

// @wsd packages
import { environment } from '@wsd/environment';

// Interfaces
import { Character, CharactersResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private readonly apiPath = '/character';

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

    return this.getCharactersPage(`${environment.baseUrl}${this.apiPath}`).pipe(
      expand(response => response.info.next ? this.getCharactersPage(response.info.next) : of()),
      reduce((acc, response) => acc.concat(response.results), [] as Character[])
    );
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
