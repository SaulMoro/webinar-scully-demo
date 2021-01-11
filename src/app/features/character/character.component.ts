// Angular
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wsd-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent { }
