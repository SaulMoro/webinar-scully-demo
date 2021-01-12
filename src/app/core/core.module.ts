// Angular
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';

// Ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Modules
import { LayoutModule } from './layout';

const IMPORTED_EXPORTS = [LayoutModule];

/**
 * Create translate loader
 *
 * @param httpClient Angular http client service
 * @returns Ngx-translate loader
 */
export function createTranslateLoader(httpClient: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json');
}

@NgModule({
  imports: [
    ...IMPORTED_EXPORTS,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        deps: [HttpClient],
        useFactory: createTranslateLoader
      }
    })
  ],
  exports: [...IMPORTED_EXPORTS]
})
export class CoreModule {

  /**
   * Module constructor
   *
   * @param parentModule Core module
   */
  constructor(@Optional() @SkipSelf() readonly parentModule: CoreModule) {

    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
