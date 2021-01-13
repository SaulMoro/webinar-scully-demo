// Angular
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Scullyio
import { TransferStateService } from '@scullyio/ng-lib';

// Rxjs
import { concat, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

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
   * @param transferStateService Scullyio transfer state service
   */
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly charactersService: CharactersService,
    private readonly transferStateService: TransferStateService) { }

  /**
   * Fired on component initialization
   */
  public ngOnInit(): void {
    const characterId = this.activatedRoute.snapshot.paramMap.get('id') as string;
    const character$ = this.charactersService.getCharacter(parseInt(characterId, 10));

    this.character$ = concat(
      this.transferStateService.useScullyTransferState('character', character$).pipe(take(1)),
      character$
    );
  }
}
