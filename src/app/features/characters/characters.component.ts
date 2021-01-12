// Angular
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class CharactersComponent {
  public characters$: Observable<Character[]> = this.charactersService.getCharacters();

  /**
   * Component constructor
   *
   * @param charactersService Characters service
   */
  constructor(private readonly charactersService: CharactersService) { }
}
