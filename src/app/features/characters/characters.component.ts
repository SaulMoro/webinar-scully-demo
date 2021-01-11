// Angular
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'wsd-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent { }
