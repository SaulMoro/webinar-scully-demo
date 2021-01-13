// Angular
import { ChangeDetectionStrategy, Component } from '@angular/core';

// Ngx-translate
import { TranslateService } from '@ngx-translate/core';

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
    { label: 'Personajes', url: '/characters' }
  ];

  /**
   * Component constructor
   *
   * @param translateService Ngx-translate service
   */
  constructor(private readonly translateService: TranslateService) {
    this.initializeTranslate();
  }

  /**
   * Initialize ngx-translate
   */
  private initializeTranslate(): void {
    this.translateService.setDefaultLang('es');
    this.translateService.use('es');
  }
}
