// Angular
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Rxjs
import { Observable } from 'rxjs';

// @wsd packages
import { Character, CharactersService } from '@wsd/shared';

@Component({
  selector: 'wsd-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent implements OnInit {
  public character$: Observable<Character> | undefined;

  /**
   * Component constructor
   *
   * @param activatedRoute Angular activated route service
   * @param charactersService Characters service
   */
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly charactersService: CharactersService) { }

  /**
   * Fired on component initialization
   */
  public ngOnInit(): void {
    const characterId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.character$ = this.charactersService.getCharacter(parseInt(characterId, 10));
  }
}
