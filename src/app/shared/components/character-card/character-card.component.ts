// Angular
import { Component, Input } from '@angular/core';

// @wsd packages
import { Character } from '@wsd/shared';

@Component({
  selector: 'wsd-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
  @Input() public character: Character | undefined;
}
