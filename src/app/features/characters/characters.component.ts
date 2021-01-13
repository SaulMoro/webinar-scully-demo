// Angular
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Rxjs
import { Observable } from 'rxjs';

// @wsd packages
import { Character, CharactersService } from '@wsd/shared';

@Component({
  selector: 'wsd-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent implements OnInit {
  public characters$: Observable<Character[]> | undefined;

  /**
   * Component constructor
   *
   * @param charactersService Characters service
   * @param router Angular router service
   */
  constructor(
    private readonly charactersService: CharactersService,
    private readonly router: Router) { }

  /**
   * Fired on component initialization
   */
  public ngOnInit(): void {
    this.characters$ = this.charactersService.getCharacters();
  }

  /**
   * Character click event handler
   *
   * @param characterId Character id
   */
  public characterClickHandler(characterId: number): void {
    this.router.navigate(['/characters', characterId]);
  }
}
