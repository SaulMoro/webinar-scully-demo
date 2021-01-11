// Angular
import { ChangeDetectionStrategy, Component } from '@angular/core';

// @wsd packages
import { MenuItem } from '@wsd/core';

@Component({
  selector: 'wsd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public readonly menu: MenuItem[] = [
    { label: 'Inicio', url: '/home' },
    { label: 'Personajes', url: '/characters' },
    { label: 'Blog', url: '/blog' }
  ];
}
