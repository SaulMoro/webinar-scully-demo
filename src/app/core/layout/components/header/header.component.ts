// Angular
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Interfaces
import { MenuItem } from '../../interfaces';

@Component({
  selector: 'wsd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() public menu: MenuItem[] | undefined;
}
