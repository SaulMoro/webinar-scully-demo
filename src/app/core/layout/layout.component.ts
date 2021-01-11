// Angular
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Interfaces
import { MenuItem } from './interfaces';

@Component({
  selector: 'wsd-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  @Input() public menu: MenuItem[] | undefined;
}
