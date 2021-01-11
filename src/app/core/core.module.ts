// Angular
import { NgModule, Optional, SkipSelf } from '@angular/core';

// Modules
import { LayoutModule } from './layout';

@NgModule({
  imports: [LayoutModule],
  exports: [LayoutModule]
})
export class CoreModule {

  /**
   * Module constructor
   *
   * @param parentModule Core module
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
