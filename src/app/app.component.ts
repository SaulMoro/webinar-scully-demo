// Angular
import { ChangeDetectionStrategy, Component } from '@angular/core';

// @wsd packages
import { MenuItem } from '@wsd/core/layout';

@Component({
  selector: 'wsd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public readonly menu: MenuItem[] = [
    { label: 'Personajes', url: '/' }
  ];
}
