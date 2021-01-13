// Angular
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Scullyio
import { TransferStateService } from '@scullyio/ng-lib';

// Rxjs
import { concat, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

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
   * @param transferStateService Scullyio transfer state service
   */
  constructor(
    private readonly charactersService: CharactersService,
    private readonly router: Router,
    private readonly transferStateService: TransferStateService) { }

  /**
   * Fired on component initialization
   */
  public ngOnInit(): void {
    const characters$ = this.charactersService.getCharacters();

    this.characters$ = concat(
      this.transferStateService.useScullyTransferState('characters', characters$).pipe(take(1)),
      characters$
    );
  }

  /**
   * Character click event handler
   *
   * @param characterId Character id
   */
  public characterClickHandler(characterId: number): void {
    this.router.navigate(['/', characterId]);
  }
}
