// Angular
import { NgModule, Optional, SkipSelf } from '@angular/core';

// Modules
import { LayoutModule } from './layout';

const IMPORTED_EXPORTS = [LayoutModule];

@NgModule({
  imports: [...IMPORTED_EXPORTS],
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
